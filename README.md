# Privé website build

The redesigned Privé Academy site. Static HTML + Tailwind (CDN), no build step — open a page, edit it, reload.

Imported into the OS on 2026-09-18 from `docs/prive_filtered_data/prive_best website version/`.

## Variants

| Variant | What it is |
| --- | --- |
| `v1-baseline/` | The imported build. 12 pages, self-contained. The fork point for everything after it. |

Each variant is a self-contained folder holding its own pages and its own `brand-assets/` selection. To start a variation, **copy** `v1-baseline/` to a new folder and work there — don't edit the baseline in place.

Shared across all variants, at this root: `serve.mjs`, `screenshot.mjs`, `package.json`, `node_modules/`, `CLAUDE.md`, `CLONE_PLAN.md`.

## Pages in `v1-baseline/`

`index` · `about-us` · `gallery` · `shop` · `testimonials` · `live-trainings` · `online-course` (+ `-eu`) · `checkout` (+ `-eu`) · `thank-you` · `thank-you-lead`

The `-eu` pages are genuine regional variants, not stale copies.

## Running it

```bash
npm install                  # once — pulls puppeteer-core for screenshots
node serve.mjs               # serves THIS folder at http://localhost:3000
```

The server root is `website-build/`, so pages sit one level down:

```
http://localhost:3000/v1-baseline/index.html
```

Screenshots:

```bash
node screenshot.mjs http://localhost:3000/v1-baseline/index.html home
node screenshot.mjs http://localhost:3000/v1-baseline/index.html home-m --mobile
```

Output lands in `temporary screenshots/` (gitignored, auto-incremented, never overwritten). `--viewport` captures above-the-fold only.

## Brand assets

Each variant's `brand-assets/` is a **working selection**, not the source of truth. The master library is `prive-os/brand-assets/`:

- `brand-kit/` — guidelines, design spec, tokens, fonts, logos, icons
- `site-photos/` — full photo library (before/after, training photos, founder, course graphics, pricing charts)

Need an asset the variant doesn't have? Pull it from there.

## Type

Headings are **Libre Bodoni Medium (500)**, body is **Montserrat**. Both open (SIL OFL) via Google Fonts, settled 2026-09-18.

Libre Bodoni is a variable font with a continuous `400..700` weight axis, so the pages load the range rather than discrete weights:

```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400..700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
h1, h2, h3, .font-display { font-family: 'Libre Bodoni', Didot, serif; font-weight: 500; }
```

It replaced Bodoni BT, a Bitstream commercial face that was never licensed and therefore never actually loaded — headings had been silently falling back to a system serif. Don't reintroduce it. Details in `prive-os/brand-assets/brand-kit/FONTS.md`.

## Also here

- `CLAUDE.md` — the frontend rules that apply to every variant: design guardrails, the screenshot-compare loop, brand-asset lookup.
- `CLONE_PLAN.md` — section-by-section gap analysis of the old live site vs. this build. What's already covered, what's still missing, what was deliberately not cloned.
