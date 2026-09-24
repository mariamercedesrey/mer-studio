# MER Studio — Design System

**MER Studio (mer.studio)** is an independent design-and-build studio working worldwide from Argentina, led by Mer (Mercedes Rey), 25+ years across enterprise products, US startups and direct clients. Strategy, design and code by the same hands — branding, websites & online stores, digital products, AI Visibility (GEO/AEO), plus design systems and maintenance. Transparent scope and price; full ownership of files and accounts at handover.

The one product surface is the **mer.studio website** — an interactive, scroll-driven editorial portfolio (hero → client marquee → Selected Work → services → how it works → about → CTA/contact) with an immersive full-screen **Project Detail** for each case study.

## Sources
- Figma: `MER-Studio-Design-System-v1.fig` (mounted read-only). Pages: 00 Cover, 01 Getting Started, 02 Foundations, 03 Components, 04 Utilities, 05 Product Screens (`Website / Desktop` 149:5103, `Frame 1984078285` = Project Detail 2033:1913).
- Uploaded logos: `uploads/logo.svg`, `uploads/logo-negative.svg`, `uploads/favicon.svg` → copied to `assets/`.
- Brief notes on motion & interaction (sections 12–13) — summarised under Visual Foundations → Motion.

## Index
- `styles.css` — global entry (imports only). → `tokens/fonts.css` (Google Fonts), `tokens/fig-tokens.css` (all 101 Figma variables, 5 collections, exact), `tokens/fig-typography.css` (empty — the file defines no text styles), `tokens/base.css` (px aliases, font stacks, semantic names, motion), `tokens/motion.css` (dot + marquee keyframes, reduced-motion), `components/work/fig-assets.css`.
- `guidelines/` — 18 foundation cards (Colors, Type, Spacing, Brand).
- `components/actions/` Button · `components/brand/` SignatureDot, Icon, Logotypo · `components/work/` ProjectDetail, TagComponent, MockupScreen — each with `.jsx`, `.d.ts`, `.prompt.md` and one card.
- `ui_kits/website/` — interactive home page recreation + Project Detail overlay (`index.html`, `Hero.jsx`, `ClientMarquee.jsx`, `SelectedWork.jsx`, `Services.jsx`, `Process.jsx`, `Closing.jsx`).
- `assets/` — `logo.svg`, `logo-negative.svg`, `favicon.svg`; `img/` (pixel banner, process line, how-it-works image, Mer portrait); `work/` (case-study imagery); `clients/` (marquee logos); `icons/scroll-arrow.svg`.
- `SKILL.md` — Agent Skill entry. `thumbnail.html` — project tile.

## Components
Figma component families (5): **Button** (Style: Primary/Secondary/Ghost × State: Default/Disabled), **icon** → `Icon`, **logotypo** → `Logotypo`, **Mockup Screen** → `MockupScreen`, **tag_component** → `TagComponent`.

## Intentional additions
- **SignatureDot** — the yellow dot recurs ~15× as raw ellipses and is specified as an animated brand character; one component keeps size/tone/motion consistent.
- **ProjectDetail** — the brief asks for "Frame 1984078285" to be a reusable interaction pattern for every project, not a one-off page.

Note: `Icon` and `Logotypo` are a *client's* mark (Agente Mamá AI) used in the marquee, not MER's UI icons.

---

## CONTENT FUNDAMENTALS
- **Voice:** plain, confident, senior. Short declarative sentences; claims backed by specifics ("Within 48 hours you get scope, final price, delivery date and what is out of scope."). No hype, no superlatives.
- **Person:** "we" for the studio, "you" for the client; the About section switches to first person — "I'm Mer. I've been designing digital products for more than 25 years."
- **Promise of transparency:** fixed scope, final price, delivery date, "You own it", "Files and accounts handed over in your name." Say what's *out* of scope, and that you can stop.
- **Casing:** headlines in sentence case ("What we've built", "Four steps, no surprises"); some headings title-case key nouns ("Strategy, Design & Build, end to end"). **CTA labels are all lowercase**: "book a call", "start a project", "lets talk". Eyebrows/meta are UPPERCASE mono ("SELECTED WORK", "DESIGN AND BUILD, END TO END").
- **Brackets as taxonomy:** industries and tags in square brackets — `[Insurance & Finance] AT NEORIS`, `[Fashion]`, `[1]`…`[4]` for service numbers.
- **Case-study titles** state the outcome as a tension: "A safety net, not a productivity app", "250 brands, one storefront", "A coupon that works one-handed, in a crowd", "A site that answers "does it pay for itself?"".
- **Numbers over adjectives:** 25+, 35+, 1:1, 7; "13 modules", "71+ components", "130+ sprints", "98% successful build rate".
- **Signature line:** "Strategy, design and build, end to end." / "From the first decision to the last detail."
- **Emoji:** never. Unicode used: `·` separators, `—` em dashes, `™` on the wordmark, `©`.

## VISUAL FOUNDATIONS
- **Palette:** restrained neutrals + one signature yellow. Ink `rgb(20,20,20)`, soft `rgb(245,243,243)`, canvas `rgb(246,246,246)`, white; charcoal `rgb(52,52,52)` and raised-dark `rgb(63,63,63)` for dark depth. Accent `rgb(238,187,10)` (bright `252,200,20`, dark `214,169,12` for yellow on light grounds). Secondary navy `11,52,84` / `7,32,51` exists as tokens (feedback/info) but the website doesn't use it. Components consume semantic variables (`--surface-*`, `--text-*`, `--action-*`), never raw hex.
- **Rhythm of grounds:** light soft hero → ink marquee + Selected Work → soft services → charcoal process → ink about/CTA/contact → white footer. Big alternating bands, full-bleed, no cards floating on gradients.
- **Type roles (4):** Bricolage Grotesque 800 — brand mark only. Outfit — all structure (hero 95/400 −3.332px; section heads ~45/500; CTA 80/500; case titles 34/400; detail title 62/**200**; labels 13–25 uppercase with +0.02–0.07em). Instrument Serif Italic — expressive asides ("Always included", service descriptors, "You own it."). JetBrains Mono — eyebrows, meta, brackets, footer. Instrument Sans 16/21.6 for long paragraphs on dark. Line-heights are often 100% — tight and editorial.
- **Signature dot:** the yellow dot is punctuation at the end of a headline, the dot in "mer.", a focus cue and a moving character. One per section; 24px at headline scale.
- **Backgrounds & imagery:** flat colour fields. Imagery = real product screenshots and device captures, often layered (desktop + phone overlapping, side fades via linear-gradient to the ground colour). One pixel-mosaic banner (`assets/img/pixel-banner.png`) — blue/yellow/red/black pixel texture. Portrait of Mer is warm, mirrored. No illustrations, no gradients as decoration, no textures/grain.
- **Lines, not boxes:** 1px `rgba(120,120,120,.2)` list dividers; 1px dashed `rgb(155,155,155)` article borders; 0.4–0.75px dashed white outlines on ink (About); 0.3px hairlines between dark bands; 0.5px `rgb(141,141,141)` under the Project Detail header. Outlined pills (1px inset ink) for secondary links.
- **Radii:** mostly 0 — images, chips, cards and sections are square. Pill (999 / 55) is reserved for CTAs, links, tags and the nav capsule; circles for the dot. Card on dark = 2.25px.
- **Shadows:** almost none. Only on screenshots inside mockups: `0 3.78px 3.78px rgba(0,0,0,.25)` and `22.431px 44.863px 12.462px rgba(0,0,0,.12)`.
- **Transparency & blur:** nav capsule `rgba(120,120,120,.2)` + `blur(7.222px)`; marquee logos at 55%; inactive Selected Work items at 30%.
- **Chips:** role chips are square `rgb(63,63,63)` blocks, white Outfit 500 13 uppercase, 7/9 padding, 4px gaps.
- **Layout:** 1440 desktop frame, 48px gutters, ~100px section padding, 12-col grid. Breakpoints: mobile <768, tablet 768–1199, desktop ≥1200 — collapse intentionally, don't scale. Asymmetric editorial placement: work items alternate left/right with different widths (1049 / 922 / 1060 / 654 / 831 / 1154 / 1081).
- **Hover / press (code-side):** Figma draws no hover states. Kit uses: primary → `--accent-bright`, secondary → neutral-800, ghost → fills-primary, links → accent-dark, service `[n]` → accent-dark; press scale 0.97; focus = 2px accent outline, offset 3. Targets ≥44px, preferably 48.
- **Motion:** core, not decoration. Signature dot: 2s loop — bounce, translation, subtle rotation, squash/deformation (`.mer-dot-anim`, placeholder keyframes). Marquee: continuous loop. Selected Work: items subdued at 30% become active as they reach the viewport centre (provisional 500ms opacity). Project Detail opens as a full-screen overlay — **transitions not yet specified; don't invent them**. Priority: section-specific instructions → motion prototypes → Figma motion examples → these principles. Always honour `prefers-reduced-motion` (dot + marquee go static).

## ICONOGRAPHY
- MER has **no icon system** in the Figma file. The few glyphs are drawn inline at 1.25px stroke, ink: close ✕ (12px cross in 24 box) and an up-right arrow in the live-site pill (Project Detail), plus the circled scroll arrow under the marquee (`assets/icons/scroll-arrow.svg`, painted yellow via CSS mask).
- Text does iconographic work: brackets `[ ]`, `·`, `—`, `™`, numbered `[1]`–`[4]`, and the yellow dot.
- No emoji, no icon font. If more UI icons are needed, use a thin (1.25–1.5px) outline set such as Lucide at 24px and flag it — that would be a substitution.
- `Icon` / `Logotypo` components are a client logo, not UI icons. Client marquee logos live in `assets/clients/` (PNGs + SVGs; SVGs are `currentColor`, render via mask).

## Brand marks
- `assets/logo.svg` (ink, yellow-dark dot), `assets/logo-negative.svg` (light), `assets/favicon.svg` (84px square). Figma also shows round ink / round yellow "m" marks. Use the wordmark for primary presence, the m for compact contexts, the favicon only at small sizes. Preserve proportions; never redraw.

## Fonts
All loaded from Google Fonts (no binaries in the Figma file): Bricolage Grotesque (incl. the "24pt" / "24pt Condensed" cuts via opsz/wdth axes), Outfit, Instrument Serif, JetBrains Mono, Instrument Sans, Plus Jakarta Sans (cover page only). **Aspekta** (used in project tag strips) isn't on Google Fonts — falls back to Outfit. Client-logo fonts (Open Sans, Bai Jamjuree, Abel, Inter Display) only appear inside third-party logos.
