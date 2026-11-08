# Nachtbakkerij design system

Written before implementation per the assigned guide; updated against the final render.

## World
After-hours canal-side window: an apricot light field inside an aubergine night. Physical scene: a pedestrian checking the bakery on a phone beneath dim streetlights. Display lettering is self-hosted **Bodoni Moda**, body is **Manrope**, not a generic dashboard face. Night, flour and oven warmth form the entire material palette.

## Tokens
- Night #241a24, deeper #1a131b; warm foreground #f7ead7; subdued #c9b8c2.
- Oven #edb16e; ink on warm surfaces #382322; rose #d6a49f.
- Fluid headline 3.1–5.4rem; tracking -0.035em; supporting copy 12–16px; primary reading 14–16px; readable measures 60ch. Functional text has a hard 12px minimum (11px only for the short next-state label); display emphasis is roman, differentiated by warm color.
- Spacing 8/12/20/32/48/80/112. Broad page margins clamp 24–80px.
- Hairline separators in warm translucent ink; no boxed card grids. Buttons generous square-soft shapes, 4px radius. Focus 3px oven outline with offset.

## Components
Radix Tabs power bread/pastry/drinks categories and Radix Accordion powers four night scenes. Components retain library keyboard behavior but receive this project's typography and materials. Lucide icons only. Reusable SectionHeading and MenuRow. Native anchor navigation.

## Composition
An oversized wordmark opens the page. A deep oven-like aperture carries an original synthetic bread still-life, warmth and the main promise. A full-width production strip follows, then a flat ruled menu, an accordion story and a generous visit close. No eyebrow labels above headings.

## Motion
Framer Motion controls a single opening warmth reveal and menu-state transitions, 350ms exponential ease-out. Accordion moves use Motion. Everything is present without entrances. Reduced motion removes spatial and opacity transitions. No perpetual animation.

## Content and states
English storytelling with Dutch product names. All invented business details labeled. Schedule runs in Europe/Amsterdam time and explicitly says simulated. Live time is checked every 30 seconds, with next batch derived from six daily entries. Buttons and tabs have hover, active and keyboard-focus states. No fake purchasing flow.

## Browser and responsive
Custom selection, warm scrollbar and focus rings. At 390px navigation condenses, headline wraps intentionally, schedule becomes a vertical list and menu price stays aligned. Never hide overflow as a layout fix.
