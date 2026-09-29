// Project Detail content — Figma page "05 — Product Screens": Asociart (2033:1913) and the
// "modal — <client>" frames (2099:43 … 2099:337). One entry per project; the slug is the URL (/work/<slug>/).
//
// A detail is a header (client, credit, link) + intro (title, meta, roles) + a list of sections. Sections
// are laid out from Figma coordinates:
//   flow  — columns side by side (`w` = Figma px width of the column, `cw` = width of the frame they sit in)
//   stage — free composition; every item has Figma x/y/w inside a `w`×`h` frame (overlaps, offsets)
// Images live in src/assets/work-detail/<slug>/<name>.webp (see scripts/optimize-detail-images.mjs).

export type DetailText = { t: 'text'; heading: string; body: string; panel?: boolean };
export type DetailImage = {
  t: 'img';
  src: string;      // '<slug>/<name>' under src/assets/work-detail
  w: number;        // Figma display width (px at 1440)
  alt: string;
  desc?: string;    // copy that is baked into the image, kept as real (visually hidden) text
  label?: string;   // heading for `desc` (JSON-LD / meta)
};
export type DetailItem = DetailText | DetailImage;
export type Placed = DetailItem & { x: number; y: number; tw?: number; back?: boolean }; // tw: width of a text block (Figma px)

export type FlowSection = {
  kind: 'flow';
  cw?: number; // container width in Figma (default 1312)
  align?: 'start' | 'center' | 'end';
  cols: { w: number; items: DetailItem[]; justify?: 'start' | 'center' | 'end' }[];
};
export type StageSection = { kind: 'stage'; w: number; h: number; items: Placed[] };
export type DetailSection = FlowSection | StageSection;

export type ProjectDetailData = {
  id: string; // slug
  client: string;
  credit: string;
  link?: { label: string; href: string };
  title: string;
  meta: string;
  roles: string[];
  sections: DetailSection[];
};

const text = (heading: string, body: string, panel = false): DetailText => ({ t: 'text', heading, body, panel });
const img = (src: string, w: number, alt: string, desc?: string, label?: string): DetailImage => ({ t: 'img', src, w, alt, desc, label });
const at = (x: number, y: number, item: DetailItem, tw?: number): Placed => ({ ...item, x, y, tw });

export const projectDetails: Record<string, ProjectDetailData> = {
  asociart: {
    id: 'asociart',
    client: 'Asociart',
    credit: 'in collaboration with NEORIS',
    link: { label: 'asociart.com', href: 'https://asociart.com' },
    title: 'Reengineering a 13-module legacy platform',
    meta: '[Insurance & Finance]',
    roles: ['UX Research', 'Design System', 'PRODUCT DESIGN', 'Front-End'],
    sections: [
      { kind: 'flow', cw: 1349, align: 'center', cols: [
        { w: 737, items: [text('Starting point', "Asociart brought Neoris in to replace a monolithic legacy system running claims, legal, medical and financial operations across ten-plus departments. There was no UX practice on the product and no shared visual system. As part of Neoris' team, I was brought in to build that foundation while the platform was reengineered.", true)] },
        { w: 554, items: [img('asociart/legacy', 554, 'The legacy Asociart system: a dense, form-heavy screen from the provider interconnection platform')] },
      ] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [text('The work', 'I led research with internal users and stakeholders, mapped service blueprints for thirteen interconnected modules and built the Core Design System underneath all of them — 71+ components, token architecture for colour, type and spacing, documented in Storybook. I specified component states and interaction behaviour against WCAG contrast, and worked hands-on in Angular to keep the specs and the production UI aligned.')] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [text('Criticality first', 'The Recoveries module was the first one I reengineered, replacing a heavy legacy screen. A daily process pulls every claim eligible for recovery, scores its criticality and assigns it to a case manager. The tray opens sorted by that score, and a quick-view panel shows the key data without leaving the list — fewer screens between a manager and the next case that matters.')] }] },
      { kind: 'flow', cw: 1349, cols: [
        { w: 529, items: [img('asociart/recoveries-a', 529, 'Asociart Core Design System: colour and typography foundations')] },
        { w: 593, items: [img('asociart/recoveries-b', 593, 'Asociart Storybook documentation for the aso-button component')] },
      ] },
      { kind: 'flow', cw: 1349, align: 'center', cols: [
        { w: 620, items: [text('Outcome', 'One shared foundation across thirteen modules and multiple teams, serving 500+ internal users. Five years on the account, 130+ sprints, a 98% successful build rate across active modules.')] },
        { w: 698, items: [img('asociart/outcome', 698, 'The reengineered Asociart claims management screen on a laptop')] },
      ] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [img('asociart/workflow', 1349,
        'AI-Assisted Design System Workflow: a diagram from user story, few-shot examples and rules through Claude and the Figma MCP to an editable Figma interface built from the Design System',
        'From user stories to design-system-driven interfaces. I built a Proof of Concept to test whether an AI-assisted workflow could translate product requirements into editable Figma interfaces while preserving an existing enterprise Design System as the source of truth. I curated pairs of previous user stories and their approved Figma outcomes as few-shot / in-context examples, giving the model concrete references for how requirements had historically translated into UX patterns, components and layouts. The workflow combined that contextual guidance with explicit UX rules and structured Design System information — components, variants, variables, tokens and interaction patterns — reaching the system through an MCP-based context layer instead of inventing UI from scratch. What I tested: running a real user story through the pipeline, the agent produced editable Figma views built from existing Design System components — not generic UI. The translation held: component reuse and UX intent survived, and the output was reviewable and editable rather than a flat mockup. Status: validated POC. Not taken to production — the goal was to prove the translation layer worked, not to automate design decisions. The designer retains validation and final judgment. Domain: Design System Automation. Length: POC · 2026. Role: Design & Execution. Human-in-the-loop: AI accelerates translation and component mapping; the designer retains validation and final design decisions.', 'AI-Assisted Design System Workflow')] }] },
    ],
  },

  'the-mile': {
    id: 'the-mile',
    client: 'The Mile',
    credit: 'contract · in-house team',
    link: { label: 'orchardmile.com/the-mile', href: 'https://orchardmile.com/the-mile' },
    title: 'Turning creators into storefronts',
    meta: '[Ecommerce & Fashion] AT THE MILE',
    roles: ['Branding', 'Product Design', 'Design System', 'Prototyping'],
    sections: [
      { kind: 'flow', cols: [
        { w: 688, items: [
          text('Starting point', "Orchard Mile had built a strong luxury marketplace, but paid acquisition and catalogue competition were capping growth. The answer was to become The Mile: the site was adapted to the new model and a mobile app was built from scratch, turning creators into distributed storefronts that sell the marketplace's brands to their own audiences and earn commission on every sale."),
          img('the-mile/flow', 686, 'The Mile app user flow: onboarding, sign-up, verification and the creator storefront journey'),
        ] },
        { w: 614, items: [img('the-mile/brand', 614, 'The Mile brand system: colours, logotypes and brand fonts')] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [text('The work', "I started with the brand — logo, brand guide and brand system. Then the app, designed from zero with the CEO and the marketing team after a short round of research, covering consumer and creator journeys end to end: onboarding, live and pre-recorded shoppable shows, reels, creator storefronts, affiliate links, discovery and checkout. I also redesigned the Orchard Mile site to match, with a new Reels section, built navigable prototypes to pitch investors and recruit influencers before development, and supported the React Native developer on selected components.")] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [
        text('Checkout inside the app', 'Most creator-commerce apps send buyers somewhere else to pay. Here the whole purchase happened in the app: products came from Orchard Mile as the retailer, so discovery, trust in the creator and checkout stayed in one loop.'),
        img('the-mile/checkout', 1312, 'The Mile on desktop and mobile, above the connected onboarding and account screens of the navigable prototype', 'Navigable prototypes used with investors and creators to validate each journey before development.', 'Navigable prototypes'),
      ] }] },
      { kind: 'stage', w: 1312, h: 585, items: [
        at(0, 0, img('the-mile/outcome-hero', 844, 'The Mile app on a phone: a creator hosting a shoppable show')),
        at(687, 88, img('the-mile/outcome-phone', 220, 'The Mile app welcome screen on a phone')),
        at(932, 225, text('Outcome', 'First year after launch (Apr–Oct 2023): creator community +200%, show viewership 2×, orders +300%, items per order from 1.7 to 2.7.'), 380),
      ] },
      { kind: 'stage', w: 1312, h: 790, items: [
        at(0, 105, text('Academy', 'The business depended on how well creators could sell, so I built The Mile Academy: documentation and video lessons to help them plan, shoot and present products more professionally — turning creator skill into something the product supports, instead of something it hopes for.'), 315),
        at(379, 0, img('the-mile/academy-board', 933, 'The Mile Academy flow: lesson screens and their connections')),
        at(0, 409, img('the-mile/academy-logo', 823, 'The Mile Academy identity')),
      ] },
    ],
  },

  'orchard-mile': {
    id: 'orchard-mile',
    client: 'Orchard Mile',
    credit: 'contract · in-house team',
    link: { label: 'orchardmile.com', href: 'https://orchardmile.com' },
    title: '250 brands, one storefront',
    meta: '[Ecommerce & Fashion]',
    roles: ['UX/UI', 'Front-End', 'Editorial', 'Growth Design'],
    sections: [
      { kind: 'flow', cols: [
        { w: 227, items: [text('Starting point', "Launched in New York in 2015 by a former Bergdorf Goodman executive, Orchard Mile brought designer fashion, beauty and home from independent boutiques and major retailers into one shop-by-brand storefront. It grew from 30 brands at launch to 120 in under two years — and its founders named the risk themselves: choice paralysis. By the time I joined, the catalogue had scaled to 250+ brands and ~80,000 SKUs, sourced from stores with inconsistent data.")] },
        { w: 1035, items: [img('orchard-mile/start', 1035, 'Orchard Mile editorial: a model in a knit set beside a shoppable collection page')] },
      ] },
      { kind: 'flow', align: 'end', cols: [
        { w: 814, items: [img('orchard-mile/storefront', 814, 'The Orchard Mile storefront sign outside a boutique')] },
        { w: 458, items: [text('The work', "Five years designing and building the pages that sold the catalogue: landings, editorial stories, influencer pages and e-commerce pages, which I implemented in Angular alongside the front-end team. I took seasonal campaigns — Black Friday, Father's Day and every drop in between — from brief to live page, along with content for on-site modals, email campaigns in Klaviyo and marketing pieces, with A/B testing in AB Tasty. I also worked with the back-end team on the scrapers that pulled product data from each brand's store.")] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('orchard-mile/campaigns', 1312, 'Three Orchard Mile editorial pages shown side by side: influencer interviews with shoppable products')] }] },
      { kind: 'stage', w: 1312, h: 561, items: [
        at(0, 43, img('orchard-mile/site', 788, 'The Orchard Mile homepage on a laptop')),
        at(762, 202, text('Outcome', 'A steady pipeline of campaign and editorial pages that kept 250+ brands visible across a constantly changing catalogue, lifecycle campaigns across a 200K+ subscriber base — and the groundwork for what became The Mile.'), 524),
      ] },
    ],
  },

  quilmes: {
    id: 'quilmes',
    client: 'Quilmes',
    credit: 'studio client',
    title: 'A benefits app for 35,000 visitors a week',
    meta: '[Consumer Brands]',
    roles: ['Product Concept', 'UX/UI', 'Mobile'],
    sections: [
      { kind: 'flow', align: 'center', cols: [
        { w: 459, items: [img('quilmes/falls', 459, 'Iguazú Falls')] },
        { w: 310, items: [text('Starting point', 'Every visitor to Puerto Iguazú ends up at the Falls — around 35,000 tourists a week, 1.6 million a year — and Cabaña Quilmes is the only refuge inside the national park. But hotels, attractions and venues in town worked in isolation. Quilmes wanted a digital ecosystem that connected them and brought those visitors to its points of sale.')] },
        { w: 459, items: [img('quilmes/cheers', 459, 'Friends toasting with glasses of Quilmes beer')] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [text('The work', 'Pasaporte Quilmes, a benefits platform for visitors. Quilmes defined the need; I designed and developed the product — a web app, no download required. Visitors register, pick a venue and a deal, scan a QR and redeem it with the waiter. Discovery by category and proximity, venue pages and QR redemption were all designed around one constraint: the journey had to work fast, one-handed, in a noisy real-world setting.')] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('quilmes/screens', 1312, 'Pasaporte Quilmes: onboarding, language, login, dashboard, menu, map, coupons, venue page, QR scan, redemption and thank-you screens')] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [text('Outcome', 'Launched in 2022 as an MVP exclusively for visitors at Iguazú Falls. What venue owners said: “It would make the Cabaña known to every visitor to the park.” · “It would bring new customers and more table turnover.” · “The app is very simple and easy to use.”')] }] },
    ],
  },

  'carbon-optimum': {
    id: 'carbon-optimum',
    client: 'Carbon Optimum',
    credit: 'studio client',
    link: { label: 'carbonoptimum.com', href: 'https://carbonoptimum.com' },
    title: 'Making an industrial process legible',
    meta: '[Climate Tech] [Enterprise]',
    roles: ['Branding', 'Brand Architecture', 'Web Design', 'Web Development'],
    sections: [
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [img('carbon-optimum/hero', 1349, 'The Carbon Optimum process — raw material, microalgae, biomass, organic goods — over an ocean photograph, with the brand palette',
        'Carbon Optimum turns captured CO₂ into value: microalgae absorb it, the biomass is harvested in a single day, and it becomes raw material for organic goods. A Miami-based company with a genuinely complex process — and a brand that had to make it easy to understand for partners and buyers.', 'Starting point')] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [text('The work', 'I redesigned the Carbon Optimum logo and built a brand architecture around it: Optimarine, the marine-ingredients line powered by microalgae, and its three product brands — OptiCosmetics, OptiOmega3 and Biomass. Then I designed and developed the site: information architecture and a visual system that turn the process into a clear narrative, built as modular, responsive pages.')] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [img('carbon-optimum/logos', 1349, 'The redesigned Carbon Optimum logo, “Carbon dioxide is the problem. We are the solution.”, and the new Optimarine logo, “Sustainable Marine Ingredients, Powered by Microalgae”')] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [text('Outcome', 'Brand and site live; I handle ongoing maintenance.')] }] },
      { kind: 'flow', cw: 1349, cols: [{ w: 1349, items: [img('carbon-optimum/site', 1349, 'The Carbon Optimum website on a desktop computer and its modular pages, with the OptiCosmetics, OptiOmega3 and Biomass brands')] }] },
    ],
  },

  'agente-mama': {
    id: 'agente-mama',
    client: 'Agente Mamá',
    credit: 'own product',
    link: { label: 'Launch Project → landing', href: 'https://agentemama.ai' }, // label as in Figma; URL confirmed by Mer
    title: 'A safety net, not a productivity app',
    meta: '[Startups]',
    roles: ['Product Strategy', 'UX Research', 'Design System', 'AI-Assisted Build'],
    sections: [
      { kind: 'stage', w: 1312, h: 506, items: [
        at(0, 0, text('Starting point', "A child's school information lives in four systems that don't talk to each other: the parents' WhatsApp group, the school platform, email and the family calendar. Someone has to read it all, filter it and remember it — usually the mother."), 470),
        at(9, 239, img('agente-mama/kids', 452, 'Illustration of four children in cut-paper style')),
        at(528, 29, img('agente-mama/sources', 414, 'Messages from the WhatsApp group and the school platform flowing into one scheduled calendar event')),
        // sits behind the rest (its export has an opaque ground) but comes last in reading order
        { ...at(768, -130, img('agente-mama/landing', 611, 'The Agente Mamá landing page on a phone')), back: true },
      ] },
      { kind: 'flow', cols: [{ w: 691, items: [
        text('The work', "I ran ten discovery interviews that redefined the target from the child's age to the child's autonomy, and cut a planned module before it was built. Then product strategy, UX/UI and the Design System — 38 screens designed around one idea: take the mental load off without taking control away."),
        text('Trust is earned, not assumed', 'Clear events — a date, a child, an action — are scheduled automatically with an undo. Ambiguous or high-stakes ones, like payments or schedule changes, go to a review queue that shrinks as the agent proves it gets things right.'),
        text('Every event shows its source', "A badge on each event — school platform, WhatsApp or calendar. When an AI acts on a family's information, being able to trace every item back is what makes it adoptable."),
      ] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('agente-mama/matrix', 1312, 'What matters most to mothers? A map of needs by importance to mothers and impact on mental load',
        'An illustrative map of needs and product decisions for Agente Mamá. Core opportunity, high impact and high priority: Unified school agenda, Trust in AI decisions, Visible information source, Child reminders. Deprioritized or reconsidered: Recipes & shopping lists, Automated school messages, Approve every event. Conceptual synthesis of 10 exploratory conversations. Positions are illustrative, not measured scores.', 'What matters most to mothers?')] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [text('Outcome', 'Functional POC: 38 high-fidelity screens, a complete Design System and the key AI workflows defined and tested. Landing live for early market validation.')] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('agente-mama/brand', 1312, 'Agente Mamá AI brand: the house icon in light, dark and accent modes, and the logotype')] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('agente-mama/screens', 1312, 'Four Agente Mamá screens: welcome, child profile, daily dashboard and agenda')] }] },
    ],
  },

  'american-padel-systems': {
    id: 'american-padel-systems',
    client: 'American Padel Systems',
    credit: 'studio client',
    link: { label: 'americanpadelsystems.com', href: 'https://americanpadelsystems.com' },
    title: 'A site that answers "does it pay for itself?"',
    meta: '[Enterprise]',
    roles: ['branding', 'Web Design', 'Interactive Tool', 'Web Development'],
    sections: [
      { kind: 'flow', align: 'center', cols: [
        { w: 561, items: [
          text('Starting point', 'A Miami-based company that manufactures, installs and maintains padel courts for clubs, hotels and tennis-court conversions needed its brand and site built from the ground up.'),
          text('The work', 'I started with an analysis with the founder of what the business needed. Then the full brand system — logo, corporate identity and brand guide — followed by web design and development, including an earnings simulator: prospects enter court price, operating hours, occupancy, number of courts and operating days, and see what an installation could earn.'),
        ] },
        { w: 693, items: [img('american-padel-systems/brand', 693, 'American Padel Systems logo on navy')] },
      ] },
      { kind: 'flow', cols: [
        { w: 624, items: [img('american-padel-systems/courts', 624, 'Aerial view of four blue padel courts')] },
        { w: 624, items: [img('american-padel-systems/site', 624, 'The American Padel Systems website on a laptop')] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [text('Outcome', "Brand and site live, with the simulator answering the buyer's first question — does it pay for itself? — before the first call. I handle ongoing maintenance.")] }] },
      { kind: 'flow', cols: [
        { w: 651, items: [img('american-padel-systems/simulator', 651, 'The earnings simulator: court price, hours of operation, occupancy, number of courts and operating days')] },
        { w: 651, items: [img('american-padel-systems/materials', 651, 'A product carousel showing a padel court surface sample')] },
      ] },
    ],
  },

  'hifi-hub': {
    id: 'hifi-hub',
    client: 'HiFi Hub',
    credit: 'founding designer',
    link: { label: 'hifihub.ai', href: 'https://hifihub.ai' },
    title: 'Six business units, one product',
    meta: '[Startups] [Ecommerce]',
    roles: ['branding', 'Product Design', 'Design System', 'Information Architecture'],
    sections: [
      { kind: 'flow', cols: [{ w: 1312, items: [text('Starting point', 'High-end audio is a siloed industry: thousands of brands, dealers, distributors and record stores operate in isolation, so discovery happens by accident. HiFi Hub set out to aggregate them into one discovery layer — the model Zillow ran in real estate and Farfetch in luxury fashion, applied to audio — unifying six business units, each with its own data, rules and commercial goal.')] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('hifi-hub/hero', 1312, 'A laptop opened and shown from two angles')] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [text('The work', 'First and only designer on a ten-person team. I argued the taxonomy should follow the business model, not the data model, and designed one entity model — one card, one detail structure, one comparison grammar — with variable content slots per unit instead of variable layouts. A dealer surfaces its location where a product surfaces specs; the structure stays the same.')] }] },
      { kind: 'flow', cols: [
        { w: 651, items: [img('hifi-hub/listing-a', 651, 'HiFi Hub product page for the Bowers & Wilkins 801 Abbey Road Limited Edition')] },
        { w: 651, items: [img('hifi-hub/listing-b', 651, 'HiFi Hub brand page for Bowers & Wilkins')] },
      ] },
      { kind: 'flow', cols: [{ w: 1312, items: [text('Branding', 'A full rebrand from The Audiophile Directory to HiFi Hub. Design tokens for dimension, spacing and radius, 65 colour tokens and a type scale, and a complete component library with every interaction state and light/dark themes — consumed directly by the React front end.')] }] },
      { kind: 'flow', cols: [{ w: 312, items: [img('hifi-hub/logo', 312, 'HiFi Hub logo')] }] },
      { kind: 'flow', cols: [{ w: 1312, items: [img('hifi-hub/brand-system', 1312, 'HiFi Hub colour palette, colour-token matrix and design-token documentation')] }] },
      { kind: 'flow', align: 'center', cols: [
        { w: 636, items: [text('Outcome', 'Live at hifihub.ai: 634 brands, 17,923 products, 1,384 dealers, 7,034 record stores and 124,308 used listings. Used gear, promoted to a first-order unit after usage analysis, is now the largest catalogue.')] },
        { w: 612, items: [img('hifi-hub/outcome', 612, 'The HiFi Hub wishlist on a laptop')] },
      ] },
    ],
  },
};

/** Every text block of a project (headings + bodies, incl. copy baked into images), for JSON-LD and meta. */
export function detailBlocks(p: ProjectDetailData): { heading: string; body: string }[] {
  const out: { heading: string; body: string }[] = [];
  const visit = (i: DetailItem) => {
    if (i.t === 'text') out.push({ heading: i.heading, body: i.body });
    else if (i.desc) out.push({ heading: i.label ?? i.alt, body: i.desc });
  };
  for (const s of p.sections) {
    if (s.kind === 'flow') s.cols.forEach((c) => c.items.forEach(visit));
    else s.items.forEach(visit);
  }
  return out;
}
