# Nachtbakkerij

A fictional 24-hour canal-city bakery. Existing concept, copy, original synthetic oven artwork and [live URL](https://raj-microsoft.github.io/night-bakery/) preserved in the 2026-11-09 rework.

## Full original guide
[Build a $10K Website in Claude Code — Free Setup Guide](https://noocap.notion.site/Build-a-10K-Website-in-Claude-Code-Free-Setup-Guide-356508e99dda816c9d15ea892d4139f9), Chris Cordero (noocap).

1. Agent setup: OpenClaw's coding agent stands in for Claude Code; no account or paid service.
2. Framer Motion: scroll-triggered fades, staggered feature reveals, smooth link/button hover and menu transitions. Reduced motion removes movement/delay.
3. Actual project skill: `.claude/skills/frontend-design/SKILL.md`, with typography, 8px spacing, semantic colours, button/card/form patterns and anti-generic rules. `DESIGN.md` is supporting context, not a substitute.
4. Real 21st.dev components by Méschac Irung: Hero Section 1, Features 8, Pricing, Footer, adapted from the author's public MIT Tailark source. See [THIRD_PARTY.md](THIRD_PARTY.md), retained upstream sources and licence in `vendor/tailark/`, and on-page credits. The source viewer at 21st requires an account; used the linked open-source repository without signup.

## Starter requirements
Sticky navbar; original headline/CTA hero; three feature cards; explicitly fictional social proof; fictional Bread Club pricing; FAQ; footer. Mobile-first new components, responsive incumbent layout, self-hosted Latin fonts with swap, and reduced motion. The only image is the above-fold hero, so it remains eager/high-priority; there are no below-fold images to lazy-load.

Substitution: retain the existing React/Vite static build instead of migrating to Next.js 14 App Router. Tailwind remains in use. No server, personal-data collection, checkout, claims of real customer reviews or real destination. Local section-by-section inspection replaces the starter prompt's interactive Claude Code review.

## Develop and verify
`npm ci`, `npm run dev`, `npm run build` (writes Pages output to `docs/`, base `/night-bakery/`).

`npm run preview -- --port 4173`, then `node verify.mjs` for headless Edge 1440/390 screenshots, interactions, overflow, images, sticky navigation, anchors, reduced and normal motion. `node verify.mjs https://raj-microsoft.github.io/night-bakery/` tests deployment.

`node audit.mjs https://raj-microsoft.github.io/night-bakery/ live` runs Lighthouse mobile and desktop through Puppeteer pipe transport; produces JSON and HTML in ignored `verification/`. No change to network/proxy configuration required.

`REVIEW.md` records latest audit results. No secrets, `node_modules`, Edge profiles or temporary verification media are published.
