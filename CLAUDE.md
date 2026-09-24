[PEGÁ ACÁ EL MASTER BRIEF COMPLETO]

## 17. PROJECT CONTEXT
- Figma file: [https://www.figma.com/design/Ao0jR1GIkNvogoZrINbanb/mer-studio-v.0.0.1?node-id=149-5103&t=sLF5T9wesPtZRUg1-1] — page "05 — Product Screens", frame "Website / Desktop" (149:5103), Project Detail (2033:1913), example-fullscreen-modal-services.
- Design System: /brand (exported from Claude Design). Read /brand/readme.md and /brand/SKILL.md first. /brand/tokens are the exact Figma variables and win over any hardcoded value.
- /brand/ui_kits/website is a reference recreation, not production code.
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
