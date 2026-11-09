# Third-party component provenance

Checked 2026-11-09. All four components are by Méschac Irung (Tailark), discovered on 21st.dev. The listing source links lead to Tailark. The 21st code viewer requires an account; no account was created. Code was retrieved from the openly accessible author repository instead, at revision 8139698115c1341bfd2e3e286c04bb4d8146f472.

| 21st listing | Vendored current upstream code | Adaptation |
|---|---|---|
| https://21st.dev/@meschacirung/components/hero-section-1 | vendor/tailark/hero.tsx | BakeryHero retains copy/actions/media structure; replaces SaaS copy and screenshot with the existing oven artwork, removes brand logos and second CTA. |
| https://21st.dev/@meschacirung/components/features-8 | vendor/tailark/features.tsx | BakeryFeatures retains responsive three-card row; existing hero owns full-width media, removes software feature card. |
| https://21st.dev/@meschacirung/components/pricing | vendor/tailark/pricing.tsx | BreadSubscription retains single-plan two-column layout, price, action, checked-benefit list; removes brands, replaces all content with explicit fiction. |
| https://21st.dev/@meschacirung/components/footer | vendor/tailark/footer.tsx | BakeryFooter retains linked brand, mapped wrapping navigation and copyright; removes placeholder socials and adds original making disclosure. |

All four source files are covered by upstream MIT License, Copyright (c) 2025 Irung, reproduced in vendor/tailark/license.txt and public/component-license.txt. Hero and Features listings also explicitly display MIT; Pricing and Footer omit the license field, so their linked upstream repository license was verified directly. Source: https://github.com/tailark/blocks/blob/8139698115c1341bfd2e3e286c04bb4d8146f472/LICENCE.md

These are adapted current Tailark implementations, not a claim that the source has stayed byte-identical to the 2025 21st previews. Original files are retained for audit. Adapted components live in src/bakery-blocks.jsx. Next Link/Image/Button/Card wrappers were changed to semantic React/HTML suitable for Vite; visual tokens follow .claude/skills/frontend-design/SKILL.md. Animation is Framer Motion.

Fonts: Bodoni Moda and Manrope, SIL OFL (source links on page). Icons: Lucide, ISC. Original oven art remains synthetic project artwork.
