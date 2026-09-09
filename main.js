/* Engram - site behavior */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // ── Mobile nav toggle ────────────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    function closeMenu(returnFocus) {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (returnFocus) toggle.focus();
    }
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('is-open')) closeMenu(true);
    });
    document.addEventListener('click', function (e) {
      if (!links.contains(e.target) && !toggle.contains(e.target)) closeMenu(false);
    });
    window.matchMedia('(max-width: 1000px)').addEventListener('change', function () {
      closeMenu(false);
    });
  }

  // ── Hash links after font/layout settle ──────────────────────────
  function alignHashTarget() {
    if (!window.location.hash || window.location.hash.length < 2) return;
    var id = window.location.hash.slice(1);
    try { id = decodeURIComponent(id); } catch (err) { return; }
    var target = document.getElementById(id);
    if (target) target.scrollIntoView({ block: 'start' });
  }
  window.addEventListener('load', function () {
    window.setTimeout(alignHashTarget, 120);
  });
  window.addEventListener('hashchange', function () {
    window.setTimeout(alignHashTarget, 0);
  });

  // ── Reveal-on-scroll (no-op if reduced motion) ───────────────────
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    for (var i = 0; i < reveals.length; i++) reveals[i].classList.add('is-visible');
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(function (el) { io.observe(el); });
})();
