# MER.studio: backlog after V1

This is the pending work after PR [#4](https://github.com/mariamercedesrey/mer-studio/pull/4). The V1 state and every decision are in [`docs/audit.md`](./audit.md). Items are grouped by priority. The ones Mer asked for come first.

## 1. Requested by Mer

### 1.1 Motion and effects pass
Mer will send 21st.dev references and video examples.
- Take the **pattern, not the component**: adapt it to Astro, plain CSS and MER tokens. 21st.dev items usually assume Tailwind and `motion`; neither is used here (CLAUDE.md §5, §18).
- Candidates already noted in audit §4 and §6:
  - Section reveals and progressive assembly (M6). Prefer CSS scroll-driven animations with an IntersectionObserver fallback.
  - Choreography for the dots after section headings (M2). Add new drivers in `src/scripts/dot-motion.ts` (`data-motion="…"`) without touching the markup.
  - Project Detail open/close beyond the 280 ms fade (M5). The View Transitions API is the zero-dependency option.
  - Selected Work activation timing and easing (currently 500 ms `--ease-precise`, provisional).
- Every effect needs a `prefers-reduced-motion` fallback. Check the Lighthouse mobile score (≥ 90) after the pass.

### 1.2 Replace `selected-work-macbook.mp4` (Six business units)
- Swap in the version without the watermark, and regenerate `public/video/selected-work-macbook.webp` (the poster).
- Keep the Figma CROP mapping in `src/components/work/media/UnitsMedia.astro`. It assumes the current 2256×1268 aspect (1.779); re-check it if the new file differs.
- Optimise it like the others: H.264, `faststart`, no audio.

### 1.3 Coupon (#4): add back when the video exists
- The data is already in `src/data/projects.ts` with `hidden: true`. Remove the flag and add a `CouponMedia.astro` (Figma `2024:1429`: a 654×654 video, "Showcase _ Phone Grid").
- The Figma **video fill can't be exported**, so Mer has to supply the MP4.
- **The role chips in the data are unverified** (`Product Concept`, `UX/UI`, `Mobile`). Confirm them against Figma `2036:2290` with `get_design_context`.
- Alternation is computed over visible items, so adding Coupon back re-flows the left/right order automatically.

### 1.4 Sync `tokens.ext.css` into the Claude Design system (avoid drift)
Add these approved tokens (R4-F) to `/brand` and the Claude Design source, then import them from `/brand` and delete `src/styles/tokens.ext.css`:
- `--opacity-work-inactive: 0.3`
- `--opacity-marquee-logo: 0.55`
- `--blur-nav: 3.611px`
- `--radius-nav: 30.333px`
- `--shadow-mockup-sm`
- `--shadow-mockup-lg`
- `--dot-muted: rgb(126,126,126)`
- `--text-tagline` (alias of `--fg-3`)

Also record the **R7-A colour rule** in the DS guidelines: yellow text only on dark grounds; on light grounds, ink text with yellow as an accent.

## 2. Found during the build (open items)

### Launch blockers and verification
- **Netlify deploy preview is blocked.** The error is "Unrecognized Git contributor. This plan allows only verified account members to push to private repos." Approve the contributor or change contributor verification in the Netlify project settings. Previews also require a Netlify team (SSO) login.
- **Real-browser video check.** The test browser can't decode H.264, so hero/APS/Units playback was only checked with a WebM stand-in. Confirm on the deploy preview in Safari (iOS + macOS), Chrome and Firefox. The things to watch: the hero video fades in over the bricks poster, plays only while in view, and the white end card loops as agreed (R7-C).
- **Lighthouse on the deployed URL.** The scores so far come from a local build. Re-run on Netlify (mobile) after the "Always included" contrast fix.
- **`robots.txt` and `sitemap.xml` are missing.** Add `@astrojs/sitemap` (or a static sitemap) and a `robots.txt` that points to it.

### Design and system follow-ups
- **Update Figma to match the V1 deviations**, so Figma stays the source of truth:
  - EN chip removed
  - hero edge circle and the duplicate L'Oréal removed
  - Selected Work alternation
  - ASCII panel position
  - "Always included" in ink
  - Heading dots in `--accent-dark` on light grounds

  The full list is in audit.md, "Deviations from Figma in V1".
- **Media-only colours kept local** (not tokens):
  - Project grounds `#ebebeb` / `#efefef` / `#e5e5e5`
  - Industrial swatches
  - APS rope colour
  - Project Detail divider `rgb(141,141,141)`
  - 1px black rule under Selected Work

  Decide whether any of these belong in the DS.
- **Project Detail for the other projects** (D5: only Asociart opens in V1). Each needs copy and imagery in `src/data/project-details.ts` plus a media component.
- **Testimonials** (D6) and an **ES version** are post-V1, if wanted.

### Performance and repository hygiene
- **Responsive image `sizes` for Selected Work.** `WorkImage` uses desktop sizes, so mobile downloads more than needed (Lighthouse estimates ~180 KB). Pass the column scale so `sizes` can use `calc(… * 100vw)`.
- **Large originals in git.** `brand/assets/work/aps-mockup/*.png` (~11 MB, 4000×3000) and other originals are committed. Consider moving them to `media-source/` (git-ignored) or Git LFS. Keep `scripts/build-aps-layers.mjs` as the way to regenerate the WebP layers.
- **Marquee composites aren't reproducible.** The logos that use client fonts (The Mile Fashion, APS, HiFiHUB, Carbon Optimum, Agente Mamá AI) were pre-rendered from the Figma `149:5180` layers with a throwaway script. Commit a reproducible script if they need regenerating.
- **Duplicate asset.** `brand/components/work/assets/68110c5f5c18af20.png` is byte-identical to `brand/assets/work/aps-site.png`.
- **No CI and no type-check.** Add `@astrojs/check` and a GitHub Action (build + `astro check`), and optionally Lighthouse CI.
- **Security headers.** `netlify.toml` only sets cache headers. Consider CSP, `Referrer-Policy`, `X-Content-Type-Options` and `Permissions-Policy`.
- **404 page.** There is no Figma frame for it; it was built from DS rules. Mer should review it visually.
