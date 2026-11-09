# Nachtbakkerij design system

Written before implementation per the assigned guide; updated against the final render.

## World
After-hours canal-side window: an apricot light field inside an aubergine night. Physical scene: a pedestrian checking the bakery on a phone beneath dim streetlights. Display lettering is self-hosted **Bodoni Moda**, body is **Manrope**, not a generic dashboard face. Night, flour and oven warmth form the entire material palette.

## Tokens
- Night #241a24, deeper #1a131b; warm foreground #f7ead7; subdued #c9b8c2.
- Oven #edb16e; ink on warm surfaces #382322; rose #d6a49f.
- Fluid headline 3.1–5.4rem; tracking -0.035em; supporting copy 12–16px; primary reading 14–16px; readable measures 60ch. Functional text has a hard 12px minimum; display emphasis is roman, differentiated by warm color.
- Spacing follows an 8px grid: 8/16/24/32/40/48/64/80/96/112. Page gutters 24px mobile and 56px desktop. The authoritative design skill is `.claude/skills/frontend-design/SKILL.md`; primary/neutral/accent tokens are implemented in CSS.
- Hairline separators in warm translucent ink; no boxed card grids. Buttons generous square-soft shapes, 4px radius. Focus 3px oven outline with offset.

## Components
Actual 21st.dev/Tailark Hero Section 1, Features 8, Pricing and Footer by Méschac Irung are adapted in src/bakery-blocks.jsx; original code and MIT license retained in vendor/tailark. Three feature cards and a two-column fictional Bread Club plan extend the original page. Additional Radix Tabs power categories and Radix Accordion powers four scenes. Lucide icons only. Sticky navigation, native FAQ disclosures, clearly fictional neighbour quotation. Shared BakeryLink and Reveal components carry Framer hover/entrances.

## Composition
An oversized wordmark opens the page. A deep oven-like aperture carries an original synthetic bread still-life, warmth and the main promise. A full-width production strip follows, then a flat ruled menu, an accordion story and a generous visit close. No eyebrow labels above headings.

## Motion
Framer Motion owns all animation: visible-default scroll fades, staggered feature and schedule reveals, menu transitions and smooth hover states. Hero stays fully visible from first paint for LCP. Reduced motion removes spatial movement, opacity entrances and delays. No CSS transition/keyframe animation or smooth scrolling. No perpetual animation.

## Content and states
English storytelling with Dutch product names. All invented business details labeled. Schedule runs in Europe/Amsterdam time and explicitly says simulated. Live time is checked every 30 seconds, with next batch derived from six daily entries. Buttons and tabs have hover, active and keyboard-focus states. No fake purchasing flow.

## Browser and responsive
Custom selection, warm scrollbar and focus rings. At 390px navigation condenses, headline wraps intentionally, schedule becomes a vertical list and menu price stays aligned. Never hide overflow as a layout fix.
