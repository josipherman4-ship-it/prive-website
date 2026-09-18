# CLAUDE.md — Privé website build

Project-specific rules for this folder. **Design philosophy, the screenshot-compare loop, the anti-generic guardrails and the hard rules live in the `web-design` agent** (`prive-os/.claude/agents/web-design.md`) — invoke it for any frontend work here. This file holds only what is true of *this* build and would be wrong to put in a portable agent.

## Always do first

- **Invoke the `web-design` agent.** It carries the design guardrails and the screenshot workflow, and it invokes the `frontend-design` skill in turn.

## Variants

- Each build variant is a self-contained folder under `website-build/` (`v1-baseline/`, and any later ones). `v1-baseline/` is the fork point — copy it to start a variation, don't edit it in place.
- Shared at this root across all variants: `serve.mjs`, `screenshot.mjs`, `package.json`, `node_modules/`, `README.md`, `CLONE_PLAN.md`, and this file.
- Each variant owns its `brand-assets/` — a curated selection, not the master library.

## Local server

- `node serve.mjs` from `website-build/` serves **this root**, not the variant.
- So pages are one level down: `http://localhost:3000/v1-baseline/index.html`, **not** `/index.html`.

## Screenshots

- `puppeteer-core` is already installed here and drives the Chrome in `~/.cache/puppeteer/`. Nothing needs downloading — don't `npm install puppeteer`. *(Fixed 2026-09-08: the previous note pointed at `C:/Users/nateh/...`, a path from a different machine that never existed here, and `screenshot.mjs` was missing entirely.)*
- URL form: `node screenshot.mjs http://localhost:3000/<variant>/page.html label`
- **`index.html` is 19330px tall at `@2x`, past Chrome's 16384px capture limit,** so its full-page screenshot repeats earlier sections from ~85% down. Verified 2026-09-18 — the page has exactly one hero and one nav. That repetition is a capture artifact, not a page defect. Use `--viewport` or `--mobile` to inspect the bottom of it.

## Brand assets

- **Canonical source is `prive-os/brand-assets/`**, not the variant folder. `brand-kit/` holds guidelines, tokens, fonts, logos and icons; `site-photos/` holds the full photo library. A variant's `brand-assets/` is a working selection pulled from there — when you need something it lacks, take it from the master library rather than inventing it or dropping in a placeholder.
- **Type:** headings are **Libre Bodoni Medium (500)**, body is **Montserrat**. Both open (SIL OFL), settled 2026-09-18. Libre Bodoni is a variable font with a continuous `400..700` axis — load the range (`family=Libre+Bodoni:wght@400..700`), not discrete weights, so 500 renders as a real instance. Stack is `'Libre Bodoni', Didot, serif`. The retired Bodoni BT was commercial and never loaded — don't reintroduce it. See `prive-os/brand-assets/brand-kit/FONTS.md`.
