# Privé Academy website (V6 preview)

Static preview of the V6 polish build of the "Plasma Technology Academy" redesign, the variant being taken live. Open `index.html`.

This repo is a deploy copy. The source, build tooling and GHL bundles live in Speedster at
`prive-os/projects/website-build/v6-polish/` (`node tools/build.mjs` -> `dist/preview/`).
Edit there, rebuild, then re-sync here. Don't edit these HTML files directly.

- `treatments.html` is the Privé Studio Zagreb treatments page in English (the nav's Treatments link).
- `treatments-hr.html` is the Croatian version, a separate page for local use, not linked from the nav.
- `studio-privacy.html` and `studio-privacy-hr.html` are Privé Studio's privacy policy (EN and HR), linked from the consultation forms.
- `checkout.html` is a stub: the real checkout is a native GoHighLevel page.
- Forms on contact, fibroblast and treatments are static mocks until their GHL forms exist.
- `[needs: …]` markers are values still waiting on an answer (the Studio's company name and contact email).
- Internal build notes are stripped from this public copy.
