# Photoreal pass — 2026-11-09

## Assets and provenance
Four new ChatGPT image-generation outputs supplied fifteen distinct photographs: oven hero; a 3×3 contact sheet cropped into the nine menu items; a 2×2 sheet cropped into four baker's-night scenes; and a fictional canal exterior. Each source and each composed sheet was visually inspected; all four source SHA-256 hashes differ. No real shop signs, logos or identifiable faces. Images are explicitly labelled AI-generated in the page caption, alt text and How this was made.

Source SHA-256:
- Hero: F67A14AEC2B7D7B558867EF9ED0599EAACB010E96FA9FF2DD6F31C8FBA09E51D
- Menu: 696D7CE3ED8EA6FFD100061AE2D728CF16D3B29A6E5AA905403B818AA7505F59
- Scenes: FB2ECD03728F02C35E562EBDE26916B816776E9366B6F3469A0F0DE9407D7D0B
- Exterior: 8C599EC57D4AF56F4FA3917EA8E080ECC1FF4991F4547DDAC3E970F9A6283AD2

## Motion fallback (not Veo output)
Gemini's Create video interface was selected in a new private-to-this-task tab. Both JPEG and PNG start-frame uploads ended with `gem-attachment-loading-error` and the visible red error tile; video could not be submitted. No upgrade or purchase was made. Per the shared brief, `make-motion.py` renders a local Pillow/FFmpeg fallback: subtle periodic steam and masked oven-glow flicker, a completely locked camera, eight seconds. Muted H.264 MP4: mobile 60,906 bytes (768×432), desktop 171,437 bytes (1280×720). The page honestly identifies this fallback.

## Delivery
- Thirty responsive WebP files (q78) represent fifteen photos; total still payload 1,052,776 bytes across every variant, not initial transfer.
- Hero: 46,258-byte 960px mobile / 101,614-byte 1672px desktop. Nine thumbnails 7.8–16.7 KB at 240px; larger 418px variants. Scenes 480/768px; exterior 960/1672px.
- Hero eagerly preloaded via responsive srcset; other photos lazy. Fixed dimensions/aspect ratios. Video deferred until after window load; pause/resume, offscreen pause, reduced-motion and save-data still-only modes.
- Original 21st.dev/Tailark structures, all credits/source links, design tokens, Bodoni/Manrope, Framer Motion entrances and Radix interactions retained. The stylised aperture, seal and typography remain deliberately; only imagery changes realism.
- Original procedural art remains in the repository as historical source, but is no longer requested by the page.

## Verification
`npm run build`, `node verify.mjs`, `node verify-photos.mjs`: headless Edge at 390/1440, all nine menu photos and all four scenes decode, tabs/keyboard/accordion/FAQ/disclosure pass, no overflow or JavaScript errors, reduced-motion suppresses video, normal motion uses mobile MP4 and pause/resume works. Photo section screenshots inspected. Impeccable detector on rendered built HTML: zero findings. Live audit recorded in REVIEW.md after publication.

Final live Lighthouse (2026-11-09): mobile **99 / 100 / 100 / 100**, desktop **100 / 100 / 100 / 100** (performance / accessibility / best practices / SEO). CLS 0. All 13 external links HTTP 200 after transient-upstream retries. Exact-width live Edge screenshots inspected; final photo/motion and keyboard tests passed. See REVIEW.md for audit paths.
