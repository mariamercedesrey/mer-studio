# MER.studio — Pre-implementation audit

Status: **decisions rounds 1 and 2 applied** (below). Open questions are in §7. No implementation code has been written.
Date: 2026-09-24 · Branch: `claude/sharp-ptolemy-jo36c2` · Base: `main` @ `7f854b0`

## Decisions (Mer, round 1)

These override anything that contradicts them further down this document.

| # | Topic | Decision |
|---|---|---|
| D1 | Hero dot | Play the Figma trajectory (149:5173, about 3.1 s) **once on load**. No loop. |
| D2 | Marquee direction | **Moves right**, as in Figma. |
| D3 | Contact | **No form in V1.** Email + a "book a call" link (see R2-A). |
| D4 | Mobile / tablet | Build with the `/brand` breakpoints and collapse rules (<768 / 768–1199 / ≥1200). No approval is needed before building. Mer reviews **screenshots afterwards**. |
| D5 | Project Detail | **All 8 projects are shown** in Selected Work. **Only Asociart opens** in V1. The other projects get no pointer cursor and no clickable hover state. Scroll activation (opacity) still applies to all 8, because it's editorial, not an affordance. |
| D6 | Testimonials | Out of V1. |
| D7 | Text colour token | Never use `--color-text-primary` (navy) for text; use `--text-primary`. This rule has been added to `CLAUDE.md` §12. |
| D8 | ui_kit drift | **Figma wins** (roles, copy, media). |
| D9 | Missing assets | Show each project with the assets that exist, without placeholders or substitutions. List any project that would look broken (§3). |
| D10 | Figma network access | Mer is adding `www.figma.com` to the environment's network access so I can export assets from Figma (see R2-I). |
| D11 | Marquee motion | A **seamless continuous loop** at the Figma speed, about **127 px/s** (3052 px / 24 s). The 8 s hold is a timeline artifact and is ignored. |

Sources read: `CLAUDE.md`, `brand/readme.md`, `brand/SKILL.md`, `brand/tokens/*`, `brand/components/**`, `brand/ui_kits/website/*`, `brand/guidelines/brand-motion.html`, `/brand/assets`, `/public`. Figma file `Ao0jR1GIkNvogoZrINbanb`, page `05 — Product Screens` (149:5102), read with the Figma MCP (`get_metadata`, `get_screenshot`, `get_motion_context`, and read-only `use_figma` Plugin API scripts).


## Decisions (Mer, round 2)

| # | Topic | Decision |
|---|---|---|
| R2-A | Contact | "book a call" opens `mailto:` with the subject "Book a call" for now. **The email address and whether to keep the phone number are still unfilled** in the reply (the placeholders "[hello@mer.studio / otro]" and "[keep / remove]" came through as-is): see §7, Q-A. |
| R2-B | Coupon (#4) | **Hidden from Selected Work in V1**, so 7 projects are shown. It comes back when the MP4 arrives. |
| R2-C | APS (#7) | Keeps the current court video (852 px). |
| R2-D | Project Detail transition | **280 ms opacity fade** in and out (`--dur-base`), no morph. Instant under reduced motion. |
| R2-E | Deep link | **`/work/asociart`**: a prerendered static page, and the overlay updates the URL. |
| R2-F | Language | **English only.** The "EN" chip is **removed** from the header; there's no fake selector. This is a deliberate change from Figma (149:5104 › 2003:126). |
| R2-G | OG image, apple-touch-icon, Aspekta | Approved as proposed. **I send the OG image to Mer for approval before shipping it** (implementation step 1). |
| R2-H | Headline dots, tokens / fluid type / fonts, services modal name, macbook video | Approved as proposed (Q-G, Q-H, Q-I, Q-J). Mer reviews the fluid-type minimums in the mobile screenshots. |
| R2-I | Figma network access | Mer added `www.figma.com` to network access. **In this session it is still blocked**; see §0 and §3. |

---

## 0. Access check

| Tool | Status | Notes |
|---|---|---|
| **Figma MCP** | ✅ Works | Authenticated as Mercedes Rey (Pro, "M.M RDC's team"). I could read metadata, screenshots (returned inline), motion timelines and node trees through the Plugin API. |
| Figma asset downloads (`www.figma.com/api/mcp/asset/*`) | ❌ **Still blocked** (re-tested after R2-I) | `curl https://www.figma.com/` → the egress proxy refuses the CONNECT with **403** (policy denial). Either the allow-list change didn't reach this container, or it needs a fresh session. The download URLs may also redirect to an asset CDN host that needs allowing too (not verified). **Workaround tried:** returning original image bytes as base64 through `use_figma`. It works, but tool output is **cut off at about 20 KB**, so it can't move real files (Morning Salad is 171 KB; the APS layers are up to 4.5 MB each). |
| `get_design_context` on 149:5103 | ⚠️ Too large | Returns sparse output. It needs to be called per section (Hero 149:5104, Marquee 149:5176, Selected Work 149:5412, Services 149:5756, How It Works 149:5990, About 149:6015, Final CTA 149:6074, Contact 149:6087, Footer 149:6099). I'll do that in Phase 1, one section at a time. |
| **21st.dev MCP** | ✅ Works | Free tier: search is unlimited, **2 code retrievals a day**, AI generation is **disabled**. I didn't retrieve any code during the audit, so the dependency lists in §6 come from registry metadata and still need checking. |

### Figma prototype interactions I could NOT read, or that don't exist

1. **No prototype flows** on page 05 (`flowStartingPoints = []`).
2. **Only 2 reactions in the whole page.** Both are `ON_CLICK → NAVIGATE` on two logo groups inside the client marquee (149:5210 and 149:5327), and both have **`destinationId: null`**. They're broken or unfinished and define no behaviour.
3. **Selected Work → Project Detail isn't prototyped.** No reaction links an item to `2033:1913`, so the opening and closing transition, the overlay animation, image reveals and scroll behaviour inside the detail are **not defined in Figma**. The DS says so too: "transitions not yet specified; don't invent them".
4. **Scroll-driven behaviour can't be expressed in Figma.** The only evidence is static: item 1 is at opacity 1 and items 2–8 at 0.3. Thresholds, easing and timing aren't defined.
5. **No hover, pressed or focus states** are drawn anywhere. The DS lists code-side additions instead.
6. **Video-fill playback settings** (autoplay, loop, mute, start point) aren't exposed through the Plugin API, so I couldn't read them.
7. **Pages 01–04** (Getting Started, Foundations, Components, Utilities) were **not scanned** for reactions or motion. I relied on `/brand/readme.md`, which summarises them.
8. `example-fullscreen-modal-services` **is the same node as Project Detail** (2033:1913), not a separate services modal. See the question in §7.

What Figma *does* define is one **32 s looping timeline** on the root frame, covering 5 animated nodes. See §4.

---

## Findings to resolve before building ("agujeros negros")

These are places where the sources disagree. The hierarchy in CLAUDE.md §1 says Figma wins, but some of these still need Mer's call.

| # | Topic | Figma says | `/brand` (DS / ui_kit) says | Proposal |
|---|---|---|---|---|
| A | **Signature dot motion** | Hero dot (149:5173): a real keyframed path on a 32 s timeline. It enters from about −306 px x, arcs up to about −206 px y, rotates up to −40°, squashes (h 40.5→35→45→40.6) and lands on the "m" at about **3.1 s**, then stays still for about 29 s. | `--motion-loop: 2s` with *placeholder* bounce keyframes (`mer-dot-bounce`), looping forever. | ✅ **Resolved (D1):** the Figma path plays once on load. |
| B | **Marquee direction and speed** | Two copies move **x: 0 → +3052 px (to the right)** over 24 s, then hold for 8 s (32 s total). | Moves **to the left**, 40 s, continuous. | ✅ **Resolved (D2, D11):** moves right, seamless continuous loop, about 127 px/s, hold ignored. |
| C | Selected Work roles | Item 1: `UX Research · Design System · PRODUCT DESIGN · Front-End`. Industrial: adds `Web design`. APS and Units: add `branding`. Orchardmile and Storefront: add `UX/UI`. Coupon: adds `Product Concept`. Safety: adds `Product Strategy`. | The ui_kit drops these. | ✅ **Resolved (D8):** Figma wins. All copy will be pulled from Figma per section. |
| D | Selected Work tag strip | Items 1 and 5 contain `Project [Design] [Development] / [Custom Project]` text (TagComponent). | Not rendered in the kit. | Figma wins (D8). I'll check in Phase 1 whether it's visible, and render it if it is. |
| E | Media in Selected Work | 4 **video fills**: Hero, Coupon (4), APS (7), Units (8). | Kit shows Coupon and Units as "Imagery not in Figma source", and APS as a static `MockupScreen`. | ✅ **Resolved (D8, D9):** use the real MP4s where they exist. Projects whose assets are missing are listed in §3. |
| F | Testimonials ("What Clients Say") | Frame 2048:2630 is **hidden**. It has a second 32 s carousel and **placeholder copy** ("It's like Klaviyo for direct mail…" ×8). | Not in the kit. | ✅ **Resolved (D6):** out of V1. |
| G | Token naming trap | `--color-text-primary` = **navy** `secondary-700`. `--text-primary` = ink `neutral-900`. | Readme says to use `--text-*`. | ✅ **Resolved (D7):** the rule is now in `CLAUDE.md` §12. Use only `--text-*`, `--surface-*` and `--action-*`, and lint against `--color-text-*`. |
| H | Responsive | **Only a desktop frame exists** (1440). No tablet or mobile frames. | Breakpoints are <768 / 768–1199 / ≥1200: "collapse intentionally, don't scale". | ✅ **Resolved (D4):** build to the `/brand` rules, then send screenshots afterwards. |

---

## 1. Proposed component architecture

The stack is Astro, with React islands only where interaction needs them, and plain CSS on MER tokens.

```
src/
  layouts/
    BaseLayout.astro          # <head>: SEO/OG, favicon, fonts, global.css; skip-link
  pages/
    index.astro               # section composition in Figma order
    work/[slug].astro         # prerendered ProjectDetail per project (deep link, SEO, no-JS fallback)
    404.astro
  content/
    config.ts                 # typed "projects" collection
    projects/*.json|md        # one file per case: card composition + detail content
  components/
    primitives/               # zero-JS .astro, 1:1 with DS components
      Button.astro            # primary | secondary | ghost; link/button; states
      SignatureDot.astro      # size/tone + data-motion="none|bounce|hero-path" (motion attached by CSS/JS, not baked in)
      RoleChip.astro          # square rgb(63,63,63) chip
      Tag.astro               # TagComponent (bracket strokes)
      Eyebrow.astro           # mono uppercase label
      Media.astro             # <picture>/<video> wrapper: poster, lazy, preload, reduced-motion pause
      ExternalLinkPill.astro  # outlined pill + arrow (Project Detail)
    sections/
      SiteHeader.astro        # logo + tagline + nav capsule (blur) + EN
      Hero.astro              # headline, hero video, industries, "m" + hero dot
      ClientMarquee.astro     # CSS marquee, duplicated track (aria-hidden copy)
      SelectedWork.astro      # editorial list; renders WorkItem × n from content
      WorkItem.astro          # alternating align/width; media composition slot
      PixelBanner.astro
      Services.astro
      HowItWorks.astro
      About.astro
      FinalCTA.astro
      Contact.astro           # email + "book a call" link; no form in V1 (D3)
      SiteFooter.astro
    islands/
      ProjectDetail.tsx       # React island (client:idle): overlay, focus trap, Esc, scroll lock,
                              # history.pushState(/work/slug), data-state hooks for future motion
  scripts/
    work-activation.ts        # IntersectionObserver → [data-active] on WorkItem (vanilla, ~1 KB)
    dot-motion.ts             # WAAPI driver for Figma dot path; no-op under reduced motion
  styles/
    global.css                # @imports /brand tokens (single source), resets, base type
    tokens.ext.css            # PROPOSED extensions only (§2), each flagged for approval
    sections/*.css            # one file per section, token-only values
```

Principles:
- **ProjectDetail** gets one reusable island, fed by the `projects` collection. It opens as a full-screen overlay from Selected Work. In V1 it is **only enabled for Asociart** (D5), controlled by an `openable` flag per project. Items that can't open render as plain, non-interactive markup: no `<a>`/`<button>`, no pointer cursor, no hover state. The deep link `/work/<slug>` + prerender is still an open question (§7, Q-D).
- **Selected Work activation** runs in a small vanilla script, not React. It sets state only (`data-active`), and CSS owns the visuals, so thresholds and easing stay in CSS and are easy to tune.
- **Signature dot**: one component, with motion attached by `data-motion`. New behaviours can be added as new drivers without touching surrounding markup (CLAUDE.md §7).
- **No React outside ProjectDetail** for V1. This protects the Lighthouse mobile target of 90 or more.

## 2. Token and style strategy

1. **Single source.** `global.css` imports `/brand/tokens/fig-tokens.css`, `base.css` and `motion.css` directly from `/brand`, with no copies. Figma variables win over any hardcoded value.
2. **Units.** `fig-tokens.css` floats have no units. Components use the px aliases in `base.css` (`--sp-*`, `--r-*`, `--fs-*`), or `calc(var(--space-48) * 1px)` when only the raw variable exists.
3. **Semantic only in components.** Components use `--surface-*`, `--text-*`, `--action-*`, `--accent-*` and `--fills-primary`. Raw `--color-*` is never used (finding G).
4. **No new values without flagging them.** The ui_kit uses many values that aren't tokens: gaps of 22, 54, 83 and 116; tagline `rgb(119,119,119)`; divider `rgb(141,141,141)`; dashed `rgb(155,155,155)`; inactive opacity .3; marquee opacity .55; pill radius 55; nav blur 7.222px; the two mockup shadows. Some are already partial aliases in `base.css`. The rest go into `tokens.ext.css` as **proposed tokens** (`--opacity-work-inactive`, `--blur-nav`, `--shadow-mockup-*` and so on), listed in the PR for approval. Anything that doesn't belong in the system (one-off Figma positions) stays local to its section.
5. **Fluid type (proposal).** Display sizes (95 / 80 / 62 / 45 / 34) become `clamp(min, vw, max)`, with the desktop value as the max. **The mobile minimums need Mer's input.**
6. **Fonts (proposal).** `fonts.css` pulls 6 Google families through `@import`. That blocks rendering and is the biggest risk to Lighthouse. The proposal is to self-host subset WOFF2 (for example `@fontsource-variable/*`), preload Outfit, and drop Plus Jakarta Sans, which is only used on the cover page. **Aspekta isn't available**, so Outfit is the fallback until the file is supplied.
7. **Hover, press and focus** follow the DS code-side rules (primary → `--accent-bright`, press scale .97, focus outline 2px `--accent-primary` offset 3). These aren't drawn in Figma. They're listed as *DS-defined*, not invented.
8. The kit's `fitZoom()` / fixed 1440 layout is **not** carried over. Layout uses the 12-column grid and 48 px gutters, with real breakpoints.

## 3. Asset map

### Brand identity (official, yellow dot)
| File | Use | Notes |
|---|---|---|
| `brand/assets/logo.svg` (182×29) | Header | Identical to `brand/uploads/`. Contains about 15 KB of C2PA metadata, so propose stripping it with SVGO (metadata only; paths stay untouched). |
| `brand/assets/logo-negative.svg` | Contact block on ink | Same as above. |
| `brand/assets/favicon.svg` (84×84) | Favicon | `public/favicon.svg` is byte-identical. Still missing: PNG/ICO fallbacks, apple-touch-icon, OG image (§7). |

### Section imagery
| Figma slot | Source file | Status |
|---|---|---|
| Hero visual 149:5141 (929×507, video) | `public/video/hero.mp4` (1218×684, H.264, 22 s, no audio, faststart) + `hero.webp` poster | ✅ The ratio is 1.78 against a 1.83 slot, so `object-fit: cover` crops about 3%. |
| Client marquee (12 logos) | `brand/assets/clients/client-01…12` + Agente Mamá `Icon`/`Logotypo` | ✅ Needs resizing: `client-06.png` is 4096 px wide and `client-07` is 1774 px, both shown at about 75–120 px. |
| Scroll arrow | `brand/assets/icons/scroll-arrow.svg` | ✅ |
| Pixel banner 2045:2485 | `brand/assets/img/pixel-banner.png` (3022×898, 824 KB) | ✅ Convert to AVIF/WebP. |
| How it works | `img/how-it-works.png`, `img/process-line.svg` | ✅ |
| About portrait | `img/mer-portrait.png` (1435×1096, **3.7 MB**) | ✅ Must be converted to AVIF/WebP (display is 334×297). |

### Selected Work (Figma → files)
| # | Project | Figma media | Files available | Status |
|---|---|---|---|---|
| 1 | Asociart | system 748×711 · desktop 585×348 · "165 Morning Salad" 461×288 · mobile 211×490 | `asociart-system`, `asociart-desktop`, `asociart-mobile`, `asociart-detail` | ⚠️ **"165 Morning Salad" is missing.** It's also used in Project Detail (2033:1931), probably the laptop frame. |
| 2 | Orchardmile | `#008 2` 886×651 · phone 328×618 | `orchardmile-bg`, `orchardmile-phone` | ✅ |
| 3 | 250 brands | `0920_SWF_KK 1/2/3` + desktop | `storefront-bg.jpg`, `asociart-desktop.png` | ✅ **Correction:** KK 1, 2 and 3 are the **same image** (hash `b4608f…`, 810×4096 JPEG). It matches `storefront-bg.jpg` (810×4096, same size to within 0.4%), used 3 times with **different crops**. Crops per column, from Figma `imageTransform` (scale x, scale y, offset x, offset y): KK1 (411×778) 0.716 / 0.268 / 0.142 / 0; KK2 (383×933) 0.667 / 0.321 / 0.155 / 0.328; KK3 (383×935) 0.667 / 0.322 / 0.198 / 0.679. Nothing is missing. |
| 4 | Coupon | **Video** 654×654 "Showcase _ Phone Grid" | — | ❌ **No MP4.** **Hidden in V1 (R2-B).** |
| 5 | Industrial | ocean 1064×729 + screen 626×513 | `industrial-ocean.jpg`, `industrial-screen.png` | ✅ |
| 6 | Safety net | logo, long, group, phone | `safety-*` (4) | ✅ |
| 7 | APS | **Video** background 1154×705 + "Rubber Laptop Mockup" 2024:1682 | `public/video/selected-work-court-bg.mp4` (852×480, 15 s, kept per R2-C) · screens `49ceebe…png` (1728×1117) and `68110c5f…png` = `aps-site.png` (842×521) | ⚠️ **The mockup layers are missing.** They are 9 × 4000×3000 PNGs: base image, rope mask, shadow (**multiply**), highlight (**screen**, 15%), 3 reflection masks, a layer mask, plus a hidden highlight. The 4 screen instances use **linear-dodge** (`plus-lighter`). Several layers **blend against the video**, so a flattened transparent PNG would lose the multiply/screen/dodge effect. The faithful approach is to export each layer and composite it in CSS (`mask-image` + `mix-blend-mode`) over the `<video>`. |
| 8 | Six business units | **Video** 1081×654 (scaleMode CROP) | `public/video/selected-work-macbook.mp4` (2256×1268, 4.2 s) + poster | ✅ The watermark is temporary and ignored as agreed. The CROP transform values still need reading in Phase 1. |

**Projects that would look broken with only the existing assets (D9).** I don't substitute or repeat assets, so these gaps would show:

| # | Project | Result with existing assets | Severity |
|---|---|---|---|
| 4 | Coupon | Hidden in V1 (R2-B). | — |
| 7 | **APS** | The court video plays, but the laptop mockup (the focal point) is missing, so it looks like an empty dark-blue field. | 🔴 **Broken until the mockup layers arrive** |
| 3 | 250 brands | **Complete**: one source image, 3 crops (see above). | ✅ |
| 1 | Asociart | Missing only the 461×288 "Morning Salad" layer (original 1920×1325 PNG, 171 KB) on the card, and the laptop frame in the Project Detail gallery. | 🟡 Minor |
| 8 | Six business units | Complete (temporary watermark, noted). | ✅ |
| 2, 5, 6 | Orchardmile, Industrial, Safety | Complete. | ✅ |

**Export status (R2-I):** not done, because `www.figma.com` is still blocked (see §0). Still needed: **#1** Morning Salad (1 image) and **#7** APS mockup (9 layer images + the positions and blend data I've already read). #3 needs nothing. When access works, I'll get the originals by image hash (`download_assets` / `getBytesAsync`). The alternative is for Mer to export them from Figma by hand: select the layer → Export → PNG 1×, original. Video fills can't be exported either way.

Duplicates to clean up: `brand/components/work/assets/68110c5f….png` is byte-identical to `brand/assets/work/aps-site.png`.

**Pipeline:** raster images go through `astro:assets` (`<Picture>` with AVIF + WebP, responsive `srcset`, exact aspect ratios kept). Videos are `muted playsinline loop` with a poster, and `preload="none"` below the fold. They play only while in view (IntersectionObserver) and are paused under reduced motion. Originals aren't touched (`media-source/` is already in `.gitignore`).

## 4. Motion and interaction map

| # | Element | Source | Defined? | V1 implementation |
|---|---|---|---|---|
| M1 | **Hero dot** 149:5173 (46 px, on the "m") | Figma timeline | ✅ Full keyframes (x, y, rotate, scale, height) over about 3.1 s | WAAPI (`element.animate`) with Figma's keyframes and `times`, rescaled to the first 3.1 s. **Plays once on load, no loop (D1).** Transform only; height becomes `scaleY`. The dot rests at its landed position under reduced motion, or if the page loads scrolled past the hero. |
| M2 | Other dots (section headlines, 24 px) | DS (`mer-dot-bounce`, 2 s placeholder) | ⚠️ Placeholder | V1: static, or the placeholder bounce if Mer approves. The API is ready for later choreography. |
| M3 | **Client marquee** 149:5180 / 149:5297 | Figma timeline + D2/D11 | ✅ Rightward, about 127 px/s | CSS `@keyframes` on a duplicated track, `translateX(-50%) → 0` (moves right), seamless and continuous. The duration is computed from the track width so it stays at about 127 px/s at every breakpoint. The 8 s hold is dropped. Pauses on hover and focus (a11y), static under reduced motion. |
| M4 | **Selected Work activation** | DS + Figma static states | ⚠️ Values only (1 vs 0.3; provisional 500 ms, `--ease-precise`) | IntersectionObserver picks the item nearest the viewport centre and sets `data-active`, which drives the opacity transition for all 8 items. **Only Asociart is interactive (D5).** It gets a pointer cursor and hover only while active, and stays keyboard-focusable (focus activates it). The other 7 have no interactive affordance. |
| M5 | **Project Detail open and close** (Asociart only in V1) | DS: "don't invent" | ❌ | Still open (§7, Q-C). The `data-state` hooks and the View Transitions API are ready for a later morph. Focus trap, Esc and scroll lock are included. |
| M6 | Hero / section reveals, progressive assembly | CLAUDE.md mentions them, not in Figma | ❌ | **Post-launch**, once motion references exist. |
| M7 | Button hover and press, link hover, focus ring | DS code-side | ✅ | CSS. |
| M8 | Nav capsule backdrop blur | Figma | ✅ | CSS `backdrop-filter`. |
| M9 | Videos (hero, APS, units, coupon) | Figma video fills | ⚠️ Playback settings unreadable | Autoplay muted loop while in view. Paused under reduced motion, showing the poster. |
| M10 | Testimonials carousel 2049:38 | Figma, **hidden** | — | Out of V1. |
| M11 | Marquee logo clicks 149:5210 / 149:5327 | Figma reactions, dest `null` | ❌ Broken | Ignore. The logos are not links. |
| M12 | Nav anchor scroll | Kit | ✅ | Native anchors + `scroll-behavior: smooth` (turned off under reduced motion), `scroll-margin-top`. |

## 5. Figma interactions I can reproduce directly

- **M1 Hero dot path.** `get_motion_context` returns exact keyframes, `times` and cubic-bezier easings (`[0.5,0,0.5,1]`), which convert directly to WAAPI keyframes.
- **M3 Marquee.** Exact travel distance and duration.
- **M4 static states** (1 / 0.3), the nav blur, and every layout, typography and colour value, once `get_design_context` is run per section.
- **Project Detail layout** (2033:1913), already mirrored in `brand/components/work/ProjectDetail.jsx`: sticky header, 0.5 px divider, 200-weight title, 561 px narrative column beside a 725×688 visual, and the gallery strip.

Not reproducible from the sources (they need direction): M5, M6, the M4 timing curve, M2 choreography, and M9 playback details.

## 6. Where 21st.dev is useful

Account: free tier, 2 code retrievals a day, AI generation off. 21st.dev components are **shadcn registry items**, which normally assume **Tailwind + `cn()` (clsx + tailwind-merge)** and often **`motion` (Framer Motion)**. Tailwind isn't allowed here (CLAUDE.md §18), so the rule is: **take the pattern, not the component.** I'll check exact dependencies when I retrieve code.

| Need | Candidate | Likely dependencies | Recommendation |
|---|---|---|---|
| Marquee a11y (pause on hover/focus, reduced motion) | "Logo Marquee" (ddoemonn, id 23537) | React, likely `motion`, Tailwind | **Pattern only.** MER's marquee is already CSS. Borrow the pause and focus behaviour. Adds **0** dependencies. |
| Project Detail morph (card → full screen) | "Morphing Dialog" (patrick-xin, id 25363) | `motion` (about 30–40 KB gz), Tailwind, likely `lucide-react` | Useful **only if** Mer picks a shared-element morph. A zero-dependency alternative is the **View Transitions API** (`document.startViewTransition` / Astro `<ClientRouter/>`). That's preferred for performance. |
| Accessible full-screen dialog (focus trap, scroll lock) | "Center Morph Modal" (starc007, id 29357), "Reshaped Modal" (id 17822) | React, Tailwind, possibly `motion` / Reshaped | **Pattern only**, for the focus-management reference. Native `<dialog>` + `inert` covers it with 0 dependencies. |
| Scroll-driven reveals (post-launch) | "Scroll Fade Area" (reuno-ui skiper87, id 28464): pure-CSS scroll-driven animations | None (CSS `animation-timeline`) | A good match for MER reveals as progressive enhancement. Browser support needs checking. The fallback is IntersectionObserver. |
| Services list hover preview (only if Mer wants it) | "Interactive List Preview" (hyperiux, id 26256) | Unknown | Not defined in Figma, so **don't use it** unless Mer asks. |

Libraries: **GSAP isn't needed for V1.** WAAPI and CSS cover M1–M4. Revisit it for post-launch scroll choreography if scroll-driven CSS isn't enough.

## 7. Open questions (after decisions round 2)

Resolved in round 2: Q-B (Coupon hidden, APS keeps its video), Q-C (280 ms fade), Q-D (`/work/asociart`), Q-E (EN only, chip removed), Q-F (the OG image comes for approval), Q-G, Q-H, Q-I and Q-J (approved).

| ID | Question | Recommended default |
|---|---|---|
| **Q-A** | **Contact email and phone.** The reply still had placeholders: "[hello@mer.studio / otro]" and "[keep / remove]". | Email `hello@mer.studio` (as in Figma), used for both the contact link and the "book a call" `mailto:`. **Keep** the phone number `+54 9 11 41742309`, since it's in Figma. |
| **Q-K** | Figma asset access: `www.figma.com` is still refused by the proxy in this session (403). | Check the environment's allowed domains include `www.figma.com`, then start a **new session** so the container picks up the policy. If that still fails, export the Morning Salad image and the 9 APS mockup layers by hand and commit them to `brand/assets/work/`. |
| Q-L | APS in V1 if the mockup layers aren't available by launch. | **Hide APS as well**, the same way as Coupon (R2-B). A court video with no laptop reads as broken, and substituting the kit's `MockupScreen` would contradict Figma. |

---

## Implementation sequence (mapped to V1 launch scope)

Each step is one small PR or commit series on a branch. Nothing merges to `main` without Mer's OK.

| Step | Deliverable | V1 scope item |
|---|---|---|
| 0 | This audit + answers to §7 | — |
| 1 | Astro scaffold, `netlify.toml`, `global.css` wired to `/brand/tokens`, self-hosted fonts, `BaseLayout` with SEO/OG/favicon, empty 404. **OG image sent to Mer for approval** (R2-G) | SEO/meta/favicon/OG · 404 |
| 2 | Primitives: Button, SignatureDot (static + `data-motion` API), RoleChip, Tag, Eyebrow, Media, ExternalLinkPill | Phase 1 |
| 3 | Header (no "EN" chip, R2-F) + Hero (video, "m" + dot static) | Phase 1 |
| 4 | Client marquee (CSS loop, reduced-motion static) | Phase 1 + reduced motion |
| 5 | Selected Work: `projects` collection, **7 items** (Coupon hidden, R2-B) at Figma fidelity, activation script | Phase 1 (structural interaction kept from the start, CLAUDE.md §14) |
| 6 | **ProjectDetail island**: overlay, focus trap, Esc, scroll lock, 280 ms fade (R2-D); **Asociart only** (D5); `/work/asociart` prerender (R2-E) | ProjectDetail working |
| 7 | Pixel banner + Services | Phase 1 |
| 8 | How it works + About | Phase 1 |
| 9 | Final CTA + Contact (email + "book a call" link, **no form**, D3) + Footer | Contact |
| 10 | Visual QA against Figma, section by section (screenshots side by side) | Phase 1 done |
| 11 | Responsive pass (tablet, mobile) with `/brand` rules (D4), then screenshots to Mer | Basic responsive |
| 12 | Hero dot Figma path, once on load (D1) + marquee rightward at about 127 px/s (D2, D11) + reduced-motion audit | Motion that's already defined |
| 13 | Perf and a11y: AVIF/WebP, video lazy-play, font subsetting, focus states, contrast, Lighthouse mobile ≥ 90 | Launch QA |
| 14 | Mer's review → merge to `main` → Netlify deploy | Launch |

Post-launch: dot choreography across sections, scroll reveals and progressive assembly, the Project Detail morph transition, testimonials, and an ES version if wanted.
