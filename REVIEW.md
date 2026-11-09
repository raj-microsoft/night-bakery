# Rework review — 2026-11-09

## Scope and method
Preserved the live concept, existing bakery copy, original synthetic artwork and URL. Followed all four steps of Chris Cordero's full original Notion guide rather than the truncated library card. Assumptions taken from the explicit execution brief in this subagent workflow, not an interview. No further delegation.

Added the actual `.claude/skills/frontend-design/SKILL.md`, token/spacing alignment, sticky navigation, three feature cards, explicit fictional social proof, fictional Bread Club plan, FAQ and the four credited MIT 21st.dev/Tailark adaptations. No sign-up or paid service used. Vite retained instead of Next.js; documented on page and in README. See THIRD_PARTY.md for exact upstream revision, source and license verification.

## Design detector
Initial rendered built HTML plus CSS scan found typography/spacing advisories from Tailwind vendor-source scanning and static CSS interpretation, plus repeated short-sentence copy. Removed vendor files from Tailwind scanning, made section spacing explicit, adjusted added copy, and checked computed layout.

Final rendered/computed-style scan: **0 errors, 1 warning** (`aphoristic-cadence`). It matches retained original fictional-address copy: “An imaginary address, not a real destination. No reservations.” This is an intentional exception to preserve the user-requested copy and essential non-business disclosure; do not remove the honesty label to satisfy a heuristic. No remaining spacing or typography findings. Detector input includes built CSS and the browser's computed styles so custom properties, logical padding and inner shells are not misread. Raw results and spacing measurements are in local ignored verification/.

## Local verification
Build passed. Headless Edge at 1440 and 390: full-page and hero screenshots inspected; no overflow or JS exceptions; artwork loaded, exactly one next bake; sticky header at top 0. Menu pointer and keyboard tabs, story accordion, FAQ and making disclosure passed. Anchor IDs all resolve. Three feature cards present. Reduced motion uses auto scrolling and immediate content; normal-motion reveal ends at opacity 1 with no transform. Hero image preload and font preloads added; unused Bodoni weight removed. No below-fold images exist, so the sole LCP image is eager/high-priority rather than lazily delayed.

Initial local mobile Lighthouse: 97 performance / 96 accessibility / 96 best practices / 100 SEO. Fixed its transient-opacity contrast warning (visible start .9 instead of .65), added favicon and initial-document hero discovery. Final live scores are recorded after deployment below.

## Publication verification
Published code revision `dcceb55f9649016b428f2fea28780b0e632ad3a2`; GitHub Pages workflow 42539354491 succeeded. Live HTML returned 200 with the expected `index-CchSv--F.js` fingerprint. Re-ran the complete interactive verification on the public URL at 1440 and 390: all checks passed, no overflow or page exceptions, original art loaded, keyboard controls and anchor destinations valid. Inspected full-page captures and detailed mobile crops.

Ran the requested headless Edge `--screenshot` captures. Edge's native 390px window flag produced a minimum-width/clipped capture, so the authoritative 390px verification uses headless Edge through Playwright's explicit viewport override (`innerWidth=scrollWidth=390`), saved as `verification/live-edge-390-corrected.png`. This is a capture-tool limitation, not site overflow.

All 13 unique external page links returned HTTP 200 after publication, including original Notion guide, each component, source skill and provenance. All internal anchor IDs resolve. Sources checked 2026-11-09.

### Live Lighthouse 13.6.0 — 2026-11-09
| Mode | Performance | Accessibility | Best practices | SEO |
|---|---:|---:|---:|---:|
| Mobile (simulated throttling) | 96 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Mobile FCP 0.8s, LCP 2.5s, TBT 120ms, CLS 0; desktop FCP 0.3s, LCP 0.6s, TBT 0ms, CLS 0. Reports: `verification/lighthouse-live-mobile.{json,html}` and `verification/lighthouse-live-desktop.{json,html}`. Lighthouse target exceeded. Remaining non-blocking opportunities: GitHub Pages' platform-controlled ten-minute asset cache lifetime; original artwork could be compressed/resized further; some library JavaScript is unused in the initial viewport. No known functional issue. Reports are lab measurements, not field performance guarantees.

## Photoreal live verification � 2026-11-09
Published application revision: `1240083`; live asset `index-Cn3hjuoT.js` verified on GitHub Pages.

| Live Lighthouse | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Mobile | 99 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Final live Lighthouse mobile LCP 2.0s, desktop LCP 0.6s, CLS 0 on both. Audit files: `verification/lighthouse-photoreal-final-{mobile,desktop}.{json,html}`. The first audit exposed a motion-control visible-label mismatch; fixed and confirmed passing in the final run. An earlier desktop SEO run timed out fetching the domain robots.txt; final live rerun passed 100.

Headless Edge verified exact 390px and 1440px viewports (no horizontal overflow), and screenshots were visually inspected. `verify.mjs` and `verify-photos.mjs` passed on the live page: all nine menu photographs, all four scenes and exterior decode, no JavaScript errors, keyboard/menu/accordion/FAQ/disclosure interactions pass. Muted loop playback, pause/resume and reduced-motion still confirmed. The baseline image test was updated to await lazy image decoding rather than incorrectly declaring still-pending images broken. Edge CLI minimum-width clipping was replaced with exact Playwright viewport control using the real Edge executable.

Impeccable detector: zero findings on rendered built HTML. All 13 external source/credit links returned HTTP 200; transient GitHub 504s were rechecked via cache-busting fetch and headless Edge navigation. Existing sources and credits retained. Full provenance, the honest Gemini upload-failure fallback and payload sizes: `PHOTOREAL.md`.
