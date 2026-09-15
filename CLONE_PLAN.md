# Privé Academy — Homepage Clone & Improvement Plan

Source analyzed: **https://prive-academy.com/** (live site, fetched and rendered 2026-08-06)

## 0. Key finding first

The live site is built in **WordPress + Elementor** (plus a GoHighLevel/LeadConnector funnel plugin), and visually it's generic page-builder output: white background, black text, default system fonts, no real color system, stock Elementor buttons/icons. It does **not** use the Navy / Alice Blue / Night Rider / Mustard + Bodoni Moda/Montserrat identity defined in `brand_assets/Prive_Academy_Brand_Guidelines.html`.

That means this isn't a "make it look the same" clone. The brand guidelines are the intended direction; the homepage already built (`index.html`) is the correct visual foundation. **This plan is about porting the old site's proven structure, real content, and real photography into that new design system** — not copying its look.

## 1. Current site map (from header nav)

`Home · Online Course · Live Trainings · Shop · Testimonials · Gallery · About us · Contact`

Only the homepage was analyzed in depth. The other nav destinations are noted in §5 as follow-up pages, not part of this homepage pass.

## 2. Current homepage, section by section

| # | Section | Content (verbatim where useful) | Notes |
|---|---|---|---|
| 1 | **Hero** | H1 "LEADING BEAUTY ACADEMY" · Sub "Where knowledge and beauty meet professional development." · Body: "Privé Academy led by Master Samo Sambol is an established brand name, well known in the world of beauty aesthetics. Our team of Privé experts got acclaimed for teaching and practicing the Plasma-Fibroblast method. The world of beauty today is developing quickly so therefore, new methods and techniques always come in handy." | Names the founder up front; leads with authority/credibility, not a course pitch. |
| 2 | **Training options** (2-up) | **Live Trainings** — "2-Day Live Training. Click to see current locations." → `/training-location/` · **Online Course** — "Self paced. 10+ hours with Lifetime access to all updates" → `/landing-page/` | Two custom icons (downloaded). This is the real primary conversion fork — the current build's single "Programs" grid should split this way. |
| 3 | **What is Fibroblast?** | "Plasma-Fibroblast Skin Tightening treatment has conquered the world among Anti-aging treatments and can be performed on almost any part of the body. It is a 100% natural & non-surgical revolutionary technique for perfect rejuvenation and tightening of excess skin." | An educational/explainer block — builds trust before the ask. Our current homepage has no equivalent; it assumes the visitor already knows what Fibroblast is. |
| 4 | **Before & After gallery** | Image carousel, 8 real result photos | High-value proof content, currently completely absent from our build. |
| 5 | **Shop** (repeated 4×) | "Visit Our Shop — Get the best Fibroblast products that promote better skin healing and consequently up to 150% better results" → `/shop/` | Product line exists (aftercare/skincare). Repeating it 4× down the page is a legacy artifact, not worth cloning — one well-placed shop teaser is enough. |
| 6 | **Founder profile** | "Master Samo Sambol — CEO & Founder of Privé Academy." Full bio (3 paragraphs) about developing the Plasma-Fibroblast method, training hundreds of specialists, and building a product line. Real headshot. | Our current founder section uses a placeholder name/photo/quote — replace with the real thing. |
| 7 | **Testimonials** | Embedded YouTube video testimonial → link to `/testimonials/` | Old site uses video, not quote cards. Worth offering as an option alongside written testimonials. |
| 8 | **Find a practitioner** | "Looking For A Plasma Fibroblast Treatment? [Find Your Therapist]" → specialist map | A directory feature for *clients* of graduates, not students — different audience than the rest of the page. Distinct from our "Apply to Enroll" CTA. |
| 9 | **Training photo gallery** | "Photos From Our 350+ Live Trainings" — carousel of 22 real event photos | Strong social proof; "350+ live trainings" is a stat worth stealing for the hero/stats row. |
| — | **Footer** | Two offices: Ljubljana, Slovenia (EU) and Newark, NJ (US) · Facebook/Instagram/YouTube (`@Prive_Academy`) | Real dual-office footprint — upgrade our single fictional NYC address to this (or confirm current addresses with the client). |

## 3. Gap analysis vs. the homepage already built (`index.html`)

**Already covered well**, just needs real assets swapped in:
- Hero, nav, program cards, method/features grid, CTA banner, contact form — structurally solid, on-brand.
- Founder spotlight section exists — needs the real name/photo/bio above.

**Missing and worth adding:**
1. Live vs. Online training fork (currently one generic "Programs" grid)
2. "What is Fibroblast?" explainer block
3. Before/after results gallery
4. Live-training photo gallery ("350+ trainings" proof)
5. Dual EU/US office footer
6. A single, well-placed shop/product teaser

**Deliberately not cloning:**
- The Shop section repeated 4×
- Plain black-and-white Elementor visual style
- Generic stock social icons — keep our custom line-icon system

## 4. Downloaded assets

Saved to `brand_assets/reference-site/` (all first-party — this is the client's own site, so these are safe to reuse; treat as working assets and swap for fresh/higher-res photography where the client can provide it):

- **`logo/`** — `logo-original.png`, `logo-header-color.png` (black sunburst mark, same mark as our navy/white lockup but in Night Rider — useful for a light-background variant we don't currently have), `logo-footer-white.png`
- **`founder/samo-sambol-founder-portrait.png`** — real headshot of Master Samo Sambol, isolated on white, high-res (3712×3710)
- **`before-after/`** — 8 real treatment result photos (`BA_11.jpg`, `BA_13.jpg`, `BA_19.jpg`, `BA-ig-post.jpg`, `BA-koleno.jpg`, `BA-stana-scar-nov-size.jpg`, `BA-template.jpg`, `Web_renewal_grafike.jpg`)
- **`training-photos/`** — 22 real live-training event photos (`LC-1.jpg` – `LC-22.jpg`)
- **`icons/`** — `icon-live-training.png`, `icon-online-course.png` (current custom icon set — style reference only; our hand-drawn line icons are more on-brand and should probably stay)
- **`misc/`** — `product-shot.jpg` (product photography), `specialist-map.png` (practitioner-locator map graphic)

Not downloaded: `Agent-Sandra.jpg` (a third-party chat-widget avatar, not brand content).

## 5. Proposed homepage structure (v2)

1. Nav — unchanged (already on-brand)
2. Hero — keep current copy/design; consider folding in "350+ live trainings since 2019" as a 5th stat
3. **NEW:** Training path fork — "Live Training" vs. "Online Course" as two large cards (replaces/precedes the current 3-card Programs grid, or the 3 programs nest under whichever path the visitor picks)
4. About (existing, keep)
5. **NEW:** "What is Fibroblast?" explainer — short, credibility-building, precedes the hard sell
6. Programs grid (existing 3 cards, keep)
7. **NEW:** Before/After results gallery — carousel or grid using the 8 downloaded photos
8. Method/Why Privé (existing, keep)
9. Founder spotlight — **swap in real photo + real bio**, keep the "Those that know, do." pull-quote treatment
10. **NEW:** Live-training photo strip — a filmstrip/marquee using a curated subset of the 22 LC photos, captioned "350+ live trainings and counting"
11. Testimonials (existing quote cards; optionally add the video testimonial as an alternate/additional card)
12. **NEW (optional, lower priority):** Shop teaser — one card, not four, linking out to a future `/shop` page
13. CTA banner (existing, keep)
14. Contact form (existing, keep) — update footer address block to the real EU + US offices, and correct social links to the real handles found above

## 6. Decisions (confirmed 2026-08-06)

- **Offices:** Ljubljana (EU) + Newark, NJ (US) confirmed current — use both in the footer.
- **Founder:** Samo Sambol confirmed still the founder — use his real name/photo/bio.
- **Locator ("Find Your Therapist"):** Skip. It serves clients of graduates, not prospective students — out of scope for this homepage.
- **Photography:** Use higher-resolution originals where they exist on the live site (checked and swapped in, see §4).
- **Shop:** Teaser only for now (one card, not the old 4× repeat) — full shop build is a separate future project.

## 7. Real facts to use instead of invented placeholders

The homepage currently built (`index.html`) has some placeholder stats/names/testimonials that should be swapped for the real thing now that it's available:

- **Stats:** 1,000+ trained specialists worldwide (About Us) · 350+ live trainings hosted (homepage) · 2 locations, EU + US · founded **December 2010** (About Us — started as a Microblading academy; Plasma-Fibroblast was introduced later by Samo Sambol). Drop the invented "98% Practical Pass Rate" and "Est. 2019" — no real source for either.
- **Founder bio (About Us page, condensed):** Samo Sambol founded the academy in Dec 2010, originally built its reputation on Microblading, then personally developed and introduced the Plasma-Fibroblast method — including designing specialized needles to minimize tissue damage. Has trained 1,000+ specialists worldwide and produces EU-certified, CE-marked, lab-tested proprietary products (pigments + Fibroblast aftercare line).
- **Real testimonials** — ⚠️ **CORRECTED 2026-09-06.** This section previously listed 3 quotes with two of them attributed to the wrong people, and that error propagated into `testimonials.html` (12 of 15 cards misattributed), `index.html`, and the homepage redesign draft. All now fixed against the live-site snapshot (`reference/site-snapshots/Testimonials – PRIVÉ Academy.pdf`). Two further corrections to the original note: they are **video** testimonials, not written, and there are roughly **30**, not 35.
  - Lenny Pay, TX: "I like the most that master Samo was very informative and any questions we had was explained very good." ✅ (this one was correct)
  - **Vizela Meier, Switzerland**: "I flew to Slovenia for private training with CEO Samo, the training was amazing and I got to practice on a model." *(was wrongly credited to Melissa Fletcher — she is UK, and said "I find the training very easy but also very informative and easy to understand.")*
  - **Carla Rose, California**: "I highly recommend this training, and Samo will make sure that you understand everything you need to know to perform this treatment in the best possible." *(was wrongly credited to Ana Pascasio — she is Mexico, and said "I'm thrilled with the training, Samo is an amazing teacher and explained everything really good.")*
  - **Rule going forward:** never re-pair a name and a quote from memory or from this file alone. Verify against the site snapshot. These are real people.
- **Real contact info:** office@prive-academy.com (HQ) · Mr. Jake, Online Specialist — +1 (424) 291-9830 / info@prive-academy.com · Ms. Sandra, Head of Support — +1 (424) 360-1492 / support@prive-academy.com.

## 8. Other pages — content gathered for future cloning

Not building these now, but each was fetched and rendered so the groundwork exists when we're ready.

| Page | URL | Key content found |
|---|---|---|
| **Online Course** | `/landing-page/` | Full sales page. H1 "Become A Fibroblast Skin-Tightening Specialist." Real per-treatment earning potential ($350–$700+ per session, examples for eyelids/forehead/neck/jaw/lips/belly/nose). **12-module curriculum** (Intro → Skin anatomy → Treatment → Steps → 4 Techniques → Treated Areas → Healing → Aftercare → FAQ → Exam → 2 bonus modules). 6+ hrs core video + 4+ hrs bonus demo footage, lifetime access. 3 course-specific testimonials (Lea K. NY, Lydia C. NYC, Rachel M. London). Full FAQ (session length 60–90 min, minimal pain, results in 6–8 weeks, 2–4 year longevity, typically 2 sessions). Real aftercare protocol (no picking crusts, no sauna/pool/sun for 2–3 weeks, no alcohol-based products). |
| **Live Trainings** | `/training-location/` | Two schedules (US + EU) listing specific cities and dates (e.g. Fresno, LA, Miami, NYC, San Diego / Istanbul, Sofia, Madrid, Paris) each linking to an individual event page. No pricing/curriculum on this page itself — it's a pure schedule/index. A future version needs a live, maintainable event-date data source, not hardcoded HTML (dates go stale fast — several already showed as past on the live site). |
| **Shop** | `/shop/` | Not a product page — it's a region-picker ("Choose Your Region") splitting to separate `us.prive-shop.com` / `eu.prive-shop.com` storefronts. Confirms our "single teaser card" decision is right; a full shop is really two external storefronts, not a page to clone directly. |
| **Testimonials** | `/testimonials/` | 35 written testimonials (name + location, no photos), organized by specialist, plus links out to Google/Facebook/Instagram reviews. Good source pool — see §7. |
| **Gallery** | `/gallery/` | Full before/after gallery, far bigger than the homepage carousel — ~12 categories (Eye Area, Forehead, Lower Face, Acne Scar, Full Face, Neck, Hands, Belly, Knee, Skin Tag Removal, Scar Rejuvenation, Combinations), each with 3–10 image pairs. Only a curated sample (8 photos) was pulled for the homepage; a dedicated Gallery page later should pull the full categorized set. |
| **About Us** | `/about-us/` | Real company history (Dec 2010 founding, started on Microblading, later added Plasma-Fibroblast), founder bio, and the credibility stats used in §7. This page's content should anchor a future full About page — homepage only needs the condensed version. |
| **Contact Us** | `/contact-us/` | H1 "Feel Free To Contact Us At Any Time, We Are Here For You." Three real contact channels (general office, support/Ms. Sandra, online specialist/Mr. Jake) plus both addresses. No live contact form or map detected in the rendered content — worth building a proper one (we already have a form on the homepage that can double as this). |

## 9. Status: Implemented (2026-08-06)

Homepage v2 is live in `index.html`. Built as planned, with one judgment call beyond the original §5 outline:

- **Programs section was repurposed, not just reskinned.** The original `index.html` had 3 invented certification tiers ("Plasma Fibroblast Certification," "Advanced Aesthetics Diploma," "Skin Rejuvenation & Micro-Needling") that don't exist on the real site — the real business teaches one method (Plasma-Fibroblast) via two real paths (Live or Online), which the new Path Fork section now covers. Rather than dress up fictional programs with real photos, the Programs grid was rebuilt around real treatment areas and real earning-potential figures from the Online Course sales page ($350–$500 Face & Eyes, $600–$700 Neck/Body/Hands, from $80 Scars & Skin Renewal). More accurate and more compelling than what it replaced.
- Final section order: Hero → Path Fork (Live/Online) → About (01) → What Is Fibroblast (02) → Programs/treatment areas (03) → Before &amp; After gallery (04) → Method (05) → Founder (real photo/bio) → Live-training photo strip → Testimonials (06, real quotes) → Shop teaser (single card, "Coming Soon") → CTA → Contact → Footer (real dual offices + real socials).
- Locator feature skipped per decision. Higher-resolution originals swapped in where found (`BA-template.jpg`, `PriveSF-141.jpg`/product shot, uncropped master logo).

Subpages in §8 (Online Course, Live Trainings, Shop, Testimonials, Gallery, About Us, Contact) remain a separate future pass — not started.

## 10. Status update (2026-08-06, later same day): site is now multi-page

Nav rebuilt to match the real site's structure exactly: **Home · Online Course · Live Trainings · Shop · Testimonials · Gallery · About Us · Contact** (8 items — this required moving the nav breakpoint from `lg` to `xl` (1280px) since 8 items no longer fit at 1024px; below that it now correctly falls back to the mobile hamburger).

New pages built, all sharing the same header/footer chrome as `index.html`:
- **`live-trainings.html`** — one real event card (Zagreb, Croatia, Oct 15–16, 2026) with a "Reserve Your Spot" CTA
- **`online-course.html`** — literal placeholder ("Coming Soon") per instruction, not a full build
- **`shop.html`** — dedicated coming-soon page (expanded version of the homepage teaser)
- **`testimonials.html`** — 15 real testimonials (of the 35 gathered) in a grid
- **`gallery.html`** — full before/after set (all 8 downloaded images) grouped into the same 3 categories used on the homepage Programs section (Face & Eyes / Neck, Body & Hands / Scars & Skin Renewal) for cross-page consistency
- **`about-us.html`** — full company history (Dec 2010 founding, Microblading → Plasma-Fibroblast), founder bio, credentials grid

Homepage's own internal sections (`#about`, `#programs`, `#results`, `#method`, `#testimonials`) are unchanged and still exist — the dedicated pages are additive, not a replacement of the single-page flow. `#contact` remains the one shared destination every page's "Apply Now" / CTA buttons point to (no dedicated Contact page was requested).

## 11. Status update (2026-09-08): fibroblast funnel — 6 page states, US/EU fork

Built against `outputs/2026-09-08-fibroblast-page-copy.md` (authoritative copy, §1–§22) and `outputs/2026-09-08-fibroblast-funnel-architecture.md` (Parts A–D). Existing pages were edited, not rebuilt — same chrome, CSS approach, `.reveal` IntersectionObserver pattern, palette and type.

| File | State |
|---|---|
| `online-course.html` | US sales page — restructured to the §1–§22 map |
| `online-course-eu.html` | EU sales page — copy of the US build with the `[EU]` fork applied |
| `checkout.html` | US checkout |
| `checkout-eu.html` | EU checkout |
| `thank-you.html` | Buyer thank-you — rebuilt to the 6-block order in Part D.2 |
| `thank-you-lead.html` | **NEW** — lead thank-you state for the opt-in |

**The US/EU fork.** Everything unmarked in the copy doc is byte-identical between the two sales pages; a normalised diff confirms only the intended forks differ: currency throughout, §12 practice-standards band, FAQ 1 (EU only), §14 earning potential (USD table vs. qualitative), the struck anchor price (US only), opt-in consent (US line vs. two unticked GDPR checkboxes), footer office order, phone placeholder, and the `BUILD`/`CURRENCY`/`PRICE` script constants. Fork points are marked in-source with `<!-- FORK: ... -->` comments so the next editor can find them.

**Pricing changed.** US $3,000 (anchor $3,997) or 3 × $1,000; EU €2,790, **no anchor** (none exists — not converted), or 3 × €930. Device ships after the final instalment, stated on the sales page, on the checkout control itself, and again on the buyer thank-you.

**Compliance corrections applied to live copy** (all were on the previous page): Samo's "a technique he developed himself" and "the person who brought it to the market in the first place" cut — he is the Master Trainer who introduced and popularized the treatment across the European market; "made in the EU" cut (manufacturer on file is GCS Co., Ltd); "CE-certified under ResAP(2008)1" and "independently tested by the National Laboratory of Health, Environment, and Food" cut as unsourced (plain "CE-certified" only); the euro per-treatment table cut (it was an unauthorised conversion of a USD-only list); "$500 to $1,200" / "€1,200+ full face" cut; "Single payment · No installments" and "Single payment · Lifetime access · Device ships after enrollment" cut; the checkout "Preview Mode" banner removed; all review counts and the "More testimonials coming soon" line cut. The Sandra Bijader card (§8) was removed — restore only when bio, credentials and a real photo exist. **No US state is named anywhere on the US build** except the three testimonial attributions, which are attributions and not practice claims.

**Images.** Hero is now the real still `misc/product-shot.jpg` (Samo at the "TECHNIQUES" whiteboard) — the `placehold.co` video block and play overlay are gone, no hero video exists. Trainer section uses `founder/samo-sambol-founder-portrait.png`. **The device section (§6) runs text-only against Alice Blue on purpose** — no real Plamere product photo exists, and a grey placeholder on the one section arguing the device is genuine undercuts the argument; an HTML comment marks where a real photo goes.

**Standing image ban.** `training-photos/LC-9.jpg` and `LC-15.jpg` must never be used anywhere on this site — both show trainees practising on oranges, which collides with the category's worst horror-story quote ("practiced on fruit!!", from an FDA adverse-event report naming Privé's own device). `LC-9` was live on `index.html` and has been replaced with `LC-14` (a real Plamere Premium treatment close-up). An in-source comment at that spot records the rule.

**New functionality.**
- Opt-in form (name / email / phone, all required, plus an optional "where are you now?" segment select) at two placements — after §11 and inside the closing block — with distinct form IDs (`optin-1` / `optin-2`) and a `src` param carried to `thank-you-lead.html` so the two can be measured separately. Outline styling, never filled navy: it must stay visually secondary to the buy button.
- Checkout payment-plan selector: two large selectable cards, not a fine-print radio. The instalment condition ("your device ships after your third and final payment") is printed **on the control itself**, with a confirmation line beneath the selector when it is chosen. Order total, "due today" line and submit-button text update live. Phone is now required; the 6-country dropdown is replaced with a full 198-country list.
- Analytics stubs throughout: a `<!-- FB PIXEL: insert ID -->` block in each head plus commented `PageView`, `ViewContent` (fires once when §15 scrolls into view), `Lead` (lead thank-you, carrying opt-in placement and segment), `InitiateCheckout` (checkout load, value + currency) and `Purchase` (buyer thank-you, value + currency + payment type). Buy-button clicks carry a `data-cta` position for click-position tracking. No pixel ID exists yet.
- `hreflang` alternates cross-link the US and EU sales pages.

**Still placeholder / blocked on Josip** — each marked with an `[UNSOURCED — needs Josip: …]` HTML comment at the exact spot:
1. USD device-portion refund figure and USD certification/device line-item split — the US checkout order summary omits the split rows rather than inventing them (the EU split €1,630 / €1,160 is shown).
2. EUR anchor price — no €3,997 equivalent; the EU offer stack has no anchor.
3. EUR per-treatment price list — the EU §14 carries the payback argument qualitatively and says why.
4. **Trainer-call booking link — `thank-you.html` cannot ship without it.** The button is rendered disabled and inert.
5. EU contact phone number — the US number is left in the EU footer with a comment.
6. Customs/VAT on EU destinations — no line shown on `checkout-eu.html` until confirmed.
7. The exact Kartra member-login URL — "Open My Course" points at the documented domain root, not a verified deep link.
8. A real Plamere Premium product photo for §6.

**Tooling note.** `screenshot.mjs` now forces `.reveal` blocks into their settled state immediately before capture. The scroll pass alone was not enough on a 20,000px page — IntersectionObserver only reports the state it sees at each delivery tick, so sections scrolled past between ticks captured blank or mid-fade, which made full-page shots of the new sales page unreadable. Capture-time only; it does not touch page source.
