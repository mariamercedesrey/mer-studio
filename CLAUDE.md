# MER.STUDIO — MASTER IMPLEMENTATION BRIEF

You are implementing the production website for MER Studio.

This is NOT a redesign task.

The visual design, brand system, content, interaction concepts and motion direction already exist. Your job is to translate them faithfully into a high-quality, responsive, production-ready website while preserving the character of the original design.

Think and work as a senior Design Engineer / Front-End Engineer with strong expertise in interaction design, motion systems, design systems and creative development.

## 1. SOURCES OF TRUTH

Use this hierarchy whenever there is ambiguity:

1. FIGMA PRODUCT SCREENS — Source of truth for visual composition, hierarchy, section order, imagery, proportions and intended experience.
2. MER STUDIO DESIGN SYSTEM (/brand, from Claude Design) — Source of truth for tokens, typography, colors, spacing, components, brand rules and documented interaction principles.
3. EXISTING FIGMA PROTOTYPES / MOTION — Source of truth for interactions and animations that have already been designed.
4. PROVIDED ASSETS — Source of truth for logos, images, videos, SVGs and media.
5. IMPLEMENTATION JUDGEMENT — Use only when the sources above do not define the behavior.

Do not redesign, simplify or reinterpret an existing design merely because another implementation would be easier.

## 2. PRIMARY OBJECTIVE

Reproduce the MER Studio website designed in Figma faithfully in code.

Preserve: content and copy, section order, layout and composition, typography hierarchy, mixed typography treatments, spacing and proportions, colors, imagery, project presentation, buttons and tags, brand elements, visual rhythm, editorial character, existing interaction concepts.

The final website should feel like the Figma design became alive in the browser, not like a new website inspired by it.

## 3. MOTION IS A CORE PART OF THE EXPERIENCE

MER is not intended to be a static portfolio. Motion is part of the brand language.

Inspect existing Figma prototypes, interactions and motion examples before implementing new animation behavior. When motion already exists in Figma, reproduce its intention as faithfully as possible in code.

This includes, where applicable: SignatureDot behavior, logo motion, marquee movement, scroll-driven reveals, progressive section assembly, project activation on scroll, opacity transitions, typography movement, image/video transitions, project transitions, ProjectDetail opening/closing behavior, hover and pointer interactions, subtle micro-interactions, section-to-section transitions.

Do not add movement merely because it is technically possible. Every animation should support hierarchy, navigation, storytelling, feedback, brand character or perceived quality.

## 4. MOTION SOURCE PRIORITY

1. Existing Figma prototype/motion
2. Explicit instructions from Mer
3. Existing MER motion principles in the Design System
4. Suitable external interaction references
5. Your own implementation judgement

Never replace an existing MER interaction with a generic animation simply because a library already provides one.

## 5. 21ST.DEV / EXTERNAL UI RESOURCES

21st.dev is an implementation resource — NOT the visual source of truth.

Do not allow external components to redefine MER typography, colors, spacing system, visual hierarchy, brand language, layout, component styling or interaction concept.

When using an external component:
1. Extract the useful interaction or implementation pattern.
2. Adapt it to MER tokens and components.
3. Remove unnecessary styling and dependencies.
4. Preserve accessibility and performance.
5. Make it visually indistinguishable from the MER system.

Prefer adapting a good interaction pattern over importing a visually opinionated component unchanged.

## 6. ANIMATION IMPLEMENTATION

Choose the simplest robust technology capable of reproducing the intended motion. CSS for simple transitions and micro-interactions. For sophisticated timeline, scroll-driven or physics-based behavior, use an appropriate solution when justified. Avoid introducing animation libraries unnecessarily.

Animations must: remain performant, avoid layout thrashing, use transform/opacity where appropriate, behave correctly across viewport sizes, preserve interaction usability, support prefers-reduced-motion, avoid blocking navigation or content, degrade gracefully.

## 7. SIGNATURE DOT

The yellow dot is a signature MER brand device, not generic decoration. It may bounce, translate, rotate, scale, deform, interact with typography, react to scroll, participate in transitions.

Preserve existing Figma behavior wherever defined. New behavior may be introduced later through explicit direction from Mer. Build it so its motion behavior can evolve without rewriting the surrounding UI.

## 8. SELECTED WORK

Selected Work is not a conventional static card grid. Preserve the editorial, scroll-driven character of the experience. Projects may initially appear subdued and progressively become visually active as the user reaches them. Active projects become the visual focus and remain interactive/clickable. Exact thresholds, opacity values, easing and timing may be refined iteratively. Do not flatten this into a generic portfolio grid.

## 9. PROJECT DETAIL

Preserve the ProjectDetail interaction defined by the MER Design System and existing design/prototype. A selected project opens into an immersive full-screen project experience. The interaction model is reusable across projects while each project retains its own imagery, content and case-study material. Do not replace it with a conventional card → separate generic detail page pattern unless explicitly requested.

## 10. MEDIA

Use the real provided assets. Do not replace missing videos with generic placeholders when actual MP4 assets are available. Preserve image/video aspect ratios and intended crops. Optimize media loading without visibly degrading the design. Video behavior should follow the intended Figma experience and explicit instructions.

## 11. RESPONSIVE BEHAVIOR

Desktop Figma is the primary visual reference. Translate the system intelligently to tablet and mobile rather than merely scaling the desktop layout down. Preserve hierarchy, reading order, brand character, visual rhythm and interaction intent. Use the documented MER breakpoints and layout rules. Large display typography should scale responsively.

## 12. DESIGN SYSTEM INTEGRITY

Before creating a new value or pattern, check whether an existing token, variable, text style, component, layout primitive or interaction pattern already solves the problem. Do not introduce arbitrary colors, spacing, typography or radii. If something genuinely missing is required, treat it as a proposed extension of the system rather than silently creating a competing rule.

## 13. ACCESSIBILITY

Maintain semantic HTML, keyboard accessibility, visible focus states, appropriate target sizes, sufficient contrast, reduced-motion behavior and meaningful image alternatives. Motion must never be required to understand or navigate the site.

## 14. IMPLEMENTATION STRATEGY

Work incrementally.
PHASE 1 — Reproduce the complete desktop website faithfully (structure, typography, layout, components, assets, visual fidelity).
PHASE 2 — Validate responsive behavior.
PHASE 3 — Implement and refine motion and interactions.
PHASE 4 — Performance, accessibility and final visual QA.

If an interaction already exists and is necessary for the structure of a component (such as ProjectDetail), preserve it from the beginning rather than removing it and rebuilding it later.

## 15. ITERATION RULE

Do not make large speculative changes. Implement → run → visually inspect → compare with Figma → correct. When uncertain about an important visual or interaction decision, do not invent a new design direction. Identify the ambiguity so it can be resolved against the source material.

## 16. FINAL QUALITY BAR

The goal is NOT "technically correct code that roughly resembles the design." The goal is a production-quality creative website whose implementation preserves the precision, personality and motion language of the original MER design.

Figma defines the experience. The MER Design System defines the rules. Code makes it real.

## 17. PROJECT CONTEXT
- Figma file: [https://www.figma.com/design/Ao0jR1GIkNvogoZrINbanb/mer-studio-v.0.0.1?node-id=149-5103&t=sLF5T9wesPtZRUg1-1] — page "05 — Product Screens", frame "Website / Desktop" (149:5103), Project Detail (2033:1913), example-fullscreen-modal-services.
- Design System: /brand (exported from Claude Design). Read /brand/readme.md and /brand/SKILL.md first. /brand/tokens are the exact Figma variables and win over any hardcoded value.
- /brand/ui_kits/website is a reference recreation, not production code.
- Logos: /brand/assets is the official identity (yellow dot). Use only /brand/assets logos (logo.svg, logo-negative.svg, favicon.svg). The orange "Mer. STUDIO" logos are the old identity — never use them.
- "Existing website" in this brief means the site designed in Figma, NOT the site currently live on mer.studio.
- Repo: GitHub mer-studio → Netlify auto-deploy from main (mer.studio).

## 18. STACK
- Astro + React islands only where interaction needs it.
- Styling: plain CSS with the MER CSS variables from /brand/tokens. No Tailwind.
- Motion: CSS first; GSAP only when justified.
- 21st.dev components must be adapted to this stack and MER tokens.

## 19. CREATIVE OWNERSHIP
Mer owns creative direction. If a visual or motion decision isn't defined in the sources, stop and ask.

## 20. V1 LAUNCH SCOPE
Done = Phase 1 + basic responsive + prefers-reduced-motion + ProjectDetail working + SEO/meta/favicon/OG + 404 + contact via [Netlify Forms / email].
Advanced motion ships after launch. Lighthouse mobile ≥ 90.

## 21. GIT
Small commits per section/component. Work on a branch and open a PR; never merge to main without Mer's OK.
