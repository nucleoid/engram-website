# Engram - production website

Plain HTML / CSS / JS. Zero build step. Drop the contents of this folder onto any static host (S3, GitHub Pages, nginx, Cloudflare Pages).

## Files

```
site/
  index.html          ← landing page
  demo.html           ← request-a-demo form (mailto:)
  404.html            ← not-found page
  styles.css          ← single stylesheet (tokens + components + responsive)
  main.js             ← mobile nav + scroll fade-ins (~1.4 KB)
  robots.txt
  sitemap.xml
  assets/
    logo-mark.png     ← favicon + nav mark
    logo-disc.png     ← reserved (not used in current pages)
    bg-tendrils.png   ← hero texture
    og-image.png      ← 1200×630 social preview
```

## Build / deploy

There is no build. Test locally with any static server:

```bash
cd site
python3 -m http.server 8000
# or
npx serve .
```

Then upload the folder to your host.

## Configure for your domain

Two URL strings to update before going live:

1. `index.html` - `<link rel="canonical">` and the `og:url` meta tag (currently `https://engram.pragmaticcoder.com/`)
2. `sitemap.xml` and `robots.txt` - same domain
3. `demo.html` form - `mailto:mitch@pragmaticcoder.com` (update the recipient if it changes)

## What's in
- **Responsive** desktop + mobile (breakpoints at 720 / 768 / 960 px)
- **Inline-SVG hero diagram** with subtle orbital-pulse + disc-glow animation, both disabled under `prefers-reduced-motion`
- **Reveal-on-scroll** via IntersectionObserver, also disabled under reduced-motion
- **AA accessibility:** semantic landmarks, skip link, visible focus rings, `aria-expanded` on the nav toggle, `role="img"` + `aria-label` on the diagram, alt text on real images, hidden decorative SVGs
- **SEO:** title, meta description, canonical, Open Graph + Twitter cards, JSON-LD `SoftwareApplication`, `sitemap.xml`, `robots.txt`, OG image
- **Performance:** ~16 KB CSS + ~1.4 KB JS + one font request, no framework, no analytics

## Caveats / open items
- Fonts load from Google Fonts CDN. For offline / on-prem deployments, vendor `Sora`, `Manrope`, and `JetBrains Mono` `.woff2` files locally and replace the `@font-face` block.
- The `og-image.png` was rendered using Sora/Manrope as substitutes - if Engram has a production font, regenerate it with the real face.
- Form posts via `mailto:` only. Swap in Formspree / a backend handler if you want a server-side flow.
