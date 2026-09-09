# Engram marketing website

Static HTML, CSS and JavaScript. No framework or build step. Production is hosted by the existing Cloudflare Pages project `engram-website`, connected to this repository. Pull requests receive preview deployments; changes merged to `main` trigger production deployment.

## Pages and assets

- `index.html`: concise landing page, source-linked evidence, pricing and pilot entry point.
- `platform.html`: capabilities, limits and integrations.
- `examples.html`: three workflows captured from Engram on the public example catalog.
- `deployment.html`: product data flow, access configuration, operations and language coverage.
- `case-study.html`: existing House of Travel deployment facts and a reproducible evaluation method.
- `roadmap.html` / `roadmap.css`: twelve themes grouped by readiness, without dates.
- `demo.html`: scheduling entry point, FormSubmit form and direct email.
- `thanks.html`: form return page; does not claim to verify inbox delivery.
- `data-handling.html`: website enquiry processing and external services.
- `404.html`: not-found page, using root-relative assets and navigation.
- `styles.css`: existing brand tokens and components; `refresh.css`: shared layouts for the refreshed pages.
- `main.js`: mobile navigation and hash alignment. Content and navigation remain usable without JavaScript.
- `assets/examples/catalog-evidence.json`: public, labelled MCP response snapshot and exact query arguments.
- `assets/examples/evaluation-worksheet.md`: downloadable comparison template.

## Preview and deploy

From the repository root:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. Validate desktop and mobile layouts, navigation, keyboard use, local links, metadata, source references and downloads before merging. Use the Cloudflare Pages preview check on the exact PR commit, then verify the production domain after merge. There is no separate application build to run.

Keep the existing Cloudflare project and production branch. Do not enable GitHub Pages or create a second hosting project for routine updates. `CNAME` is retained from the previous hosting arrangement; the live custom-domain mapping is managed in Cloudflare.

## Contact configuration

The booking page is managed in Google Calendar for the Pragmatic Coder account. The website uses a normal link rather than an embedded calendar, so scheduling resources load only when followed. Keep the destination consistent across website CTAs and sales material.

Booking URL: https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ03YZjoSkRzZ6Zj6q9sd8sf4mQ4YmHULVEeQg6vgVUbmmpikif88qI9nzSRRGoLaab0dH2Jpx8I

Schedule defaults: 30 minutes, Monday–Friday 09:00–17:00 in Pacific/Auckland, 24 hours minimum notice, 60 days maximum advance booking, 15-minute buffer, at most four bookings per day, Google Meet. The current Google plan checks the Pragmatic Coder primary calendar only; it does not check other accounts. Optional preparation fields ask for company, repository setup/count and AI tools/questions. No paid plan was added.

The alternative form posts to `https://formsubmit.co/mitch@pragmaticcoder.com`, requests CAPTCHA verification, and returns to `/thanks.html`. The return page is not a delivery receipt. FormSubmit recipient activation and mailbox delivery must be verified operationally before a campaign. Routine website QA should not create a real enquiry or appointment.

If the recipient or form service changes, update the form, email links, return URL and data-handling page together. Demo and confirmation pages have `noindex` metadata and are excluded from the sitemap.

## Evidence maintenance

The public sample is pinned to `nucleoid/engram-example-catalog` revision `c333c003e7b2b45dfdbf1f9ca7436de6ea47aa3f`. The snapshot records its index timestamp and capture date. Review and trace responses retain their original coverage flags; file context and onboarding are explicitly labelled excerpts. Do not replace recorded results with idealized output.

The displayed two-edge path was checked against source. The full trace also contains incorrect name-resolution matches, described on the examples page. Confidence is resolver evidence, not a probability of correctness. Counts describe this sample, not a production benchmark.

Retain only public sample data in this repository. Keep internal issue snapshots, customer operational details and cross-repository aggregates outside the public website. New customer quotes or measurements require an approved source. The House of Travel reference deliberately separates published repository scale from product language support and makes no measured savings claim.

## Roadmap maintenance

Review issue state, labels, latest scope decisions and merged code together. Open work may be partially implemented; a closed proposal may have shipped a narrower capability. Keep current capabilities in the foundation, open improvements distinct from dependency-gated extensions, and deferred ideas in Exploring. Do not infer active development or delivery commitments from an open issue.

Publish customer outcomes rather than private issue URLs. Keep the twelve-theme page free of dates and release promises. Internal issue-to-theme mappings live in the maintainer's review records outside this public repository.

## Shared page conventions

Keep primary and footer navigation consistent across pages. Each page has one H1, a distinct title and description, and a canonical URL. Open Graph and Twitter images use absolute production URLs. Update `sitemap.xml` for indexable pages. Enterprise pricing is open-ended, so structured data intentionally omits `highPrice`.

Fonts load from Google Fonts. The site uses existing brand assets and plain HTML/CSS diagrams; the example layout is a presentation of captured MCP evidence, not an Explore screenshot.
