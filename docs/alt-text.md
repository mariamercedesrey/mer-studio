# Alt text inventory

Generated from the built site (`dist/**/*.html`, all 13 pages): every <img>, unique file + alt.

**Rules, enforced by `scripts/check-site.mjs` (runs after `astro build`):** an <img> without `alt` fails the build; an empty alt (`alt=""`) is only allowed together with `data-decorative`; `data-decorative` on an image with alt text fails; every page <title> must be ≤ 70 characters.

- **Decorative images:** none left as <img>. The pixel-banner mosaic is now a CSS background (`.pixel-banner__art`), not an <img>.
- **Logos:** `alt="MER Studio"` on every logo. Links no longer carry a duplicate `aria-label`; the stacked negative logo in the header is `aria-hidden` so it is not read twice.
- **Inline SVG:** all decorative (icons next to text, hamburger/close, HowItWorks path, Services diagram), all `aria-hidden="true"`.
- **Wording to confirm:** `how-it-works-ascii` ("ASCII-style illustration of the four-step process", from the Bing report, not checked against the image).

| File | Type | Alt | Uses |
|---|---|---|---|
| aca.webp | content | Asociación de Cooperativas Argentinas logo | 2 |
| academy-board.webp | content | The Mile Academy flow: lesson screens and their connections | 2 |
| academy-logo.webp | content | The Mile Academy identity | 2 |
| agente-mama-ai.webp | content | Agente Mamá AI logo | 2 |
| agente-mama.webp | content | Agente Mamá AI on phones: the daily dashboard and agenda, fed by WhatsApp group and school platform messages | 2 |
| american-padel-systems.webp | content | American Padel Systems logo | 2 |
| american-padel-systems.webp | content | The American Padel Systems website on a tilted laptop, on a navy background crossed by orange lines | 2 |
| asociart.webp | content | Asociart claims-management screen on a laptop, over sheets of the Asociart design-system colours and type | 2 |
| black-duck.svg | content | Black Duck logo | 2 |
| brand-system.webp | content | HiFi Hub colour palette, colour-token matrix and design-token documentation | 2 |
| brand.webp | content | The Mile brand system: colours, logotypes and brand fonts | 2 |
| brand.webp | content | Agente Mamá AI brand: the house icon in light, dark and accent modes, and the logotype | 2 |
| brand.webp | content | American Padel Systems logo on navy | 2 |
| campaigns.webp | content | Three Orchard Mile editorial pages shown side by side: influencer interviews with shoppable products | 2 |
| carbon-optimum.webp | content | Carbon Optimum logo | 2 |
| carbon-optimum.webp | content | The Carbon Optimum website on a desktop monitor over an ocean photograph, next to the brand colour palette | 2 |
| checkout.webp | content | The Mile on desktop and mobile, above the connected onboarding and account screens of the navigable prototype | 2 |
| cheers.webp | content | Friends toasting with glasses of Quilmes beer | 2 |
| cicsa.webp | content | CICSA Worldwide logo | 2 |
| courts.webp | content | Aerial view of four blue padel courts | 2 |
| dasa.webp | content | DASA Digital logo | 2 |
| falls.webp | content | Iguazú Falls | 2 |
| flow.webp | content | The Mile app user flow: onboarding, sign-up, verification and the creator storefront journey | 2 |
| hero-poster.webp | content | Smartphone tied with a red cord to raw concrete blocks | 1 |
| hero.webp | content | The Carbon Optimum process — raw material, microalgae, biomass, organic goods — over an ocean photograph, with the brand palette | 2 |
| hero.webp | content | A laptop opened and shown from two angles | 2 |
| black-duck.webp (work cover) | content | The Black Duck store on a desktop monitor and a phone, on a dark grey background | 2 |
| hifi-hub.webp | content | HiFi Hub — project preview | 2 |
| black-duck/store.webp | content | The Black Duck store on a desktop monitor and a phone | 2 |
| black-duck automation (SVG scene, role=img) | content | An n8n workflow connecting AI image models and Google Drive to the product-photo pipeline | 2 |
| hifihub.webp | content | HiFiHUB logo | 2 |
| how-it-works-ascii.webp | content | ASCII-style illustration of the four-step process | 1 |
| kcde.webp | content | Kuwait Concours d'Elegance logo | 2 |
| kids.webp | content | Illustration of four children in cut-paper style | 2 |
| landing.webp | content | The Agente Mamá landing page on a phone | 2 |
| legacy.webp | content | The legacy Asociart system: a dense, form-heavy screen from the provider interconnection platform | 2 |
| listing-a.webp | content | HiFi Hub product page for the Bowers & Wilkins 801 Abbey Road Limited Edition | 2 |
| listing-b.webp | content | HiFi Hub brand page for Bowers & Wilkins | 2 |
| logo-negative.svg | content | MER Studio | 26 |
| logo.svg | content | MER Studio | 13 |
| logo.webp | content | HiFi Hub logo | 2 |
| logos.webp | content | The redesigned Carbon Optimum logo, “Carbon dioxide is the problem. We are the solution.”, and the new Optimarine logo, “Sustainable Marine Ingredients, Powered by Microalgae” | 2 |
| loreal.svg | content | L'Oréal logo | 2 |
| materials.webp | content | A product carousel showing a padel court surface sample | 2 |
| matrix.webp | content | What matters most to mothers? A map of needs by importance to mothers and impact on mental load | 2 |
| mer-card.webp | content | Mer Rey, founder of MER Studio | 1 |
| optimarine.svg | content | Optimarine logo | 2 |
| orchard-mile.svg | content | Orchard Mile logo | 2 |
| orchard-mile.webp | content | The Orchard Mile homepage on a laptop, surrounded by tilted editorial fashion pages | 2 |
| outcome-hero.webp | content | The Mile app on a phone: a creator hosting a shoppable show | 2 |
| outcome-phone.webp | content | The Mile app welcome screen on a phone | 2 |
| outcome.webp | content | The reengineered Asociart claims management screen on a laptop | 2 |
| outcome.webp | content | The HiFi Hub wishlist on a laptop | 2 |
| quilmes.svg | content | Quilmes logo | 2 |
| quilmes.webp | content | Pasaporte Quilmes app screens on phones: venue map, venue pages and a discount coupon with a QR code | 2 |
| recoveries-a.webp | content | Asociart Core Design System: colour and typography foundations | 2 |
| recoveries-b.webp | content | Asociart Storybook documentation for the aso-button component | 2 |
| screens.webp | content | Pasaporte Quilmes: onboarding, language, login, dashboard, menu, map, coupons, venue page, QR scan, redemption and thank-you screens | 2 |
| screens.webp | content | Four Agente Mamá screens: welcome, child profile, daily dashboard and agenda | 2 |
| simulator.webp | content | The earnings simulator: court price, hours of operation, occupancy, number of courts and operating days | 2 |
| site.webp | content | The Orchard Mile homepage on a laptop | 2 |
| site.webp | content | The Carbon Optimum website on a desktop computer and its modular pages, with the OptiCosmetics, OptiOmega3 and Biomass brands | 2 |
| site.webp | content | The American Padel Systems website on a laptop | 2 |
| sni.webp | content | SNI logo | 2 |
| sources.webp | content | Messages from the WhatsApp group and the school platform flowing into one scheduled calendar event | 2 |
| start.webp | content | Orchard Mile editorial: a model in a knit set beside a shoppable collection page | 2 |
| storefront.webp | content | The Orchard Mile storefront sign outside a boutique | 2 |
| the-mile-fashion.webp | content | The Mile Fashion logo | 2 |
| the-mile.webp | content | The Mile Fashion app on phones: the welcome screen with a model in black, surrounded by other app screens | 2 |
| umsa.webp | content | UMSA logo | 2 |
| valor-ganadero.webp | content | Valor Ganadero logo | 2 |
| work-index-mosaic.C3-Dc_gh.svg | content | Mosaic of MER Studio project thumbnails | 1 |
| workflow.webp | content | AI-Assisted Design System Workflow: a diagram from user story, few-shot examples and rules through Claude and the Figma MCP to an editable Figma interface built from the Design System | 2 |

Totals: 70 unique file/alt pairs, 171 <img> in the build, 0 decorative <img>.
