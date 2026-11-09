---
name: frontend-design
description: Design and refine Nachtbakkerij's fictional night-bakery landing page.
---
# Night-bakery frontend design skill

## Preserve the world
Keep the original bakery copy, photoreal AI-generated bakery imagery, aubergine night, warm apricot light and canal-city concept. This is a refinement, not a generic SaaS redesign. All business details, testimonials and subscriptions must be explicitly fictional. No checkout or personal-data collection.

## Typography
Self-host Latin WOFF2 with font-display: swap. Bodoni Moda 400 for display; Manrope 400/500/600 for body. Scale: 12px captions, 14px secondary, 16px body, 24px subhead, 32px component heading, 48px section heading, fluid 48–86px hero. Display tracking -0.035em minimum; body 1.6 line height; copy max 65ch. No text below 12px.

## 8px spacing grid
Use --space-1 through --space-14: 8,16,24,32,40,48,64,80,96,112px. Layout padding, margins and gaps use multiples of 8. Hairline borders, 4px button radius, image crop and optical letter adjustments are exceptions, not spacing tokens. Mobile gutters 24px; desktop 56px. Section rhythm 64px mobile / 96px desktop.

## Colour tokens
Primary --primary: #edb16e (oven); hover --primary-hover: #f9c88d; ink --on-primary: #382322.
Neutral --neutral: #241a24 (night); --neutral-deep: #1a131b; --surface: #382737; --foreground: #f7ead7; --muted: #c9b8c2; --rule: #6a5260.
Accent --accent: #d6a49f (rose). All new components consume these tokens, never imported component brand colours. Minimum contrast 4.5:1 body / 3:1 large text.

## Component patterns
- Buttons: descriptive verb, minimum 48px touch target, default oven/ink, Framer Motion colour hover and tap; 3px oven focus outline with offset. Disabled opacity .55 and no pointer action; loading keeps label and aria-busy; never fake a successful order. Links use visible focus and underline on hover.
- Cards: semantic article, heading then copy; 24px interior spacing; hairline separator, no shadows or nested cards. Three feature cards are specifically required by the original guide. Pricing uses a two-column benefit list, not three subscription tiers.
- Forms: no form is required here. If added, visible labels above controls, 8px label/control gap, 24px field gap, single-column mobile; text error linked with aria-describedby, preserve input, no placeholder-only labels. Do not collect information for the fictional business.
- Navigation: sticky solid night surface, clear anchors, no hidden mobile core paths. Accordion and tabs retain Radix keyboard semantics. FAQ answers explain the fiction plainly.

## Motion
Framer Motion owns all animation: scroll-triggered fades, staggered feature reveals, smooth button/link hover and menu transitions. Start scroll reveals at visible opacity .9 (not invisible). Use 0.35s exponential ease-out, single-run viewport entrances. Reduced motion uses opacity 1, no spatial movement, no delays. Do not add CSS transitions, CSS keyframes or animated smooth scrolling. The explicitly requested muted hero loop (Veo where available, honestly labelled local fallback otherwise) is the exception: defer loading, provide pause and reduced-motion still. Hero/LCP stays fully visible from first paint.

## Avoid generic AI aesthetics
No purple-blue SaaS gradient, gradient lettering, generic dashboard mockup, glowing pill, invented metrics, fake logo wall, star rating, emoji icons, over-rounded nested cards, or eyebrow label above a heading. Use Lucide icons sparingly. Preserve the oven aperture with its commissioned ChatGPT photography rather than generic stock imagery. Separate material sections, expressive typography and purposeful whitespace carry the page.

## Implementation and verification
Adapt actual MIT Tailark components discovered on 21st.dev; retain source/license/provenance in vendor/tailark and THIRD_PARTY.md. Cite each component and author in How this was made. Keep Vite static export as the explicitly disclosed substitute for the starter prompt's Next.js App Router. Hero image eager/high-priority; only below-fold images lazy. Check at 390 and 1440, keyboard and reduced motion, every link, Impeccable and live Lighthouse before reporting completion.
