# Nachtbakkerij

A fictional 24-hour canal-city bakery, built from guide 02 / 12: **Build a $10K Website in Claude Code – Free Setup**, attributed in the supplied library to **Chris Cordero**.

[Guide](https://noocap.notion.site/Build-a-10K-Website-in-Claude-Code-Free-Setup-Guide-356508e99dda816c9d15ea892d4139f9) · [Live site](https://raj-microsoft.github.io/night-bakery/)

## Four-step method
1. Local Node environment, React and Vite. OpenClaw's coding agent replaces Claude Code; no Anthropic installation/account is needed.
2. Framer Motion provides opening and state transitions with reduced-motion support.
3. DESIGN.md written before implementation and followed; PRODUCT.md and SURFACE.md record the brief and assumptions.
4. Radix UI accessible Tabs and Accordion, Lucide icons, Tailwind and authored tokens.

The extracted public guide stops partway into step 2; steps 3–4 are explicitly provided by the assignment rather than invented quotations from the inaccessible remainder.

## Develop
`npm ci` then `npm run dev`. `npm run build` writes the static GitHub Pages site to `docs/`, with `/night-bakery/` base.

## Content and assets
All business names, address, products, prices and stories are fictional. The schedule uses the real Europe/Amsterdam clock to highlight a synthetic repeating bake schedule; it is not stock or a real service.

`public/oven-still-life.webp` is original synthetic procedural artwork created by `make_art.py` (Python + Pillow, fixed seed 21); no external image sources. Self-hosted Manrope and Bodoni Moda are distributed by Fontsource under SIL OFL. Lucide is ISC. Software dependencies retain their respective licenses.

No purchasing, reservations, accounts, analytics or backend. Visit information intentionally does not lead to a real address.
