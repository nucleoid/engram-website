# Engram - production website

Plain HTML / CSS / JS. Zero build step. Drop the contents of this folder onto any static host (S3, GitHub Pages, nginx, Cloudflare Pages).

## Files

```
site/
  index.html          ← landing page
  roadmap.html        ← product roadmap, grouped by readiness without dates
  roadmap.css         ← roadmap layout, sharing the site's design tokens
  demo.html           ← request-a-demo form (FormSubmit + direct-email fallback)
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

Verify these URLs before going live:

1. `index.html` - `<link rel="canonical">` and the `og:url` meta tag (currently `https://engram.pragmaticcoder.com/`)
2. `sitemap.xml` and `robots.txt` - same domain
3. `demo.html` form - FormSubmit recipient and direct-email fallback (update both if the recipient changes)
4. `roadmap.html` - canonical, Open Graph, and Twitter URLs

## Maintaining the roadmap

`roadmap.html` is static, so visitors need no JavaScript or GitHub access to read it. The homepage, primary navigation, demo page, and sitemap link to it.

Review the complete product issue backlog before updating the themes. Use issue state, labels, the latest scope decisions, and merged code together: an open issue may be partially implemented, and a closed proposal may have shipped a narrower capability. Keep implemented capabilities in the foundation, open improvements separate from dependency-gated extensions, and deferred ideas in Exploring. Do not infer active development or delivery commitments from an open issue.

Keep detailed source mappings in the maintainer's internal review records. Publish customer-facing summaries, not private issue URLs, operational incidents, or customer infrastructure details. The roadmap intentionally has no dates or release promises.

## What's in
- **Responsive** desktop, tablet, and mobile layouts; primary navigation collapses at 1000 px
- **Inline-SVG hero diagram** with subtle orbital-pulse + disc-glow animation, both disabled under `prefers-reduced-motion`
- **Reveal-on-scroll** via IntersectionObserver, also disabled under reduced-motion
- **AA accessibility:** semantic landmarks, skip link, visible focus rings, `aria-expanded` on the nav toggle, `role="img"` + `aria-label` on the diagram, alt text on real images, hidden decorative SVGs
- **SEO:** title, meta description, canonical, Open Graph + Twitter cards, JSON-LD `SoftwareApplication`, `sitemap.xml`, `robots.txt`, OG image
- **Performance:** ~16 KB CSS + ~1.4 KB JS + one font request, no framework, no analytics

## Caveats / open items
- Fonts load from Google Fonts CDN. For offline / on-prem deployments, vendor `Sora`, `Manrope`, and `JetBrains Mono` `.woff2` files locally and replace the `@font-face` block.
- The `og-image.png` was rendered using Sora/Manrope as substitutes - if Engram has a production font, regenerate it with the real face.
- The demo form posts to FormSubmit and retains a direct-email fallback. Verify recipient activation and delivery operationally before a campaign; document the form's data handling for visitors.
