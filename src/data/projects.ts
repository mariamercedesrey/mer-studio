// Selected Work — copy and roles from Figma 149:5412 (D8: Figma wins over the ui_kit).
export type Project = {
  id: string;
  slug: string;    // Project Detail: /work/<slug>/ (data/project-details.ts)
  title: string;
  meta: string;
  roles: string[];
  index: string;   // label in the Selected Work index (Figma 2220:3997)
  alt: string;     // alt text of the Selected Work cover (what it shows; required)
  hidden?: boolean;   // kept in data, not rendered yet (no card media)
};

export const projects: Project[] = [
  { id: 'asociart', slug: 'asociart', title: 'Reengineering a 13-module legacy platform', meta: '[Insurance & Finance] AT NEORIS',
    roles: ['UX Research', 'Design System', 'Product Designer', 'Front-End'], index: 'Reengineering Core',
    alt: 'Asociart claims-management screen on a laptop, over sheets of the Asociart design-system colours and type' },
  { id: 'orchardmile', slug: 'the-mile', title: 'Turning creators into storefronts', meta: '[Ecommerce & Fashion] AT ORCHARDMILE',
    roles: ['UX/UI', 'Design System', 'PRODUCT DESIGN', 'Prototyping'], index: 'Live Shoppable App',
    alt: 'The Mile Fashion app on phones: the welcome screen with a model in black, surrounded by other app screens' },
  { id: 'storefront', slug: 'orchard-mile', title: '250 brands, one storefront', meta: '[Ecommerce & Fashion]',
    roles: ['UX/UI', 'Front-End', 'Growth Design'], index: 'Luxury Website',
    alt: 'The Orchard Mile homepage on a laptop, surrounded by tilted editorial fashion pages' },
  { id: 'coupon', slug: 'quilmes', title: 'A coupon that works one-handed, in a crowd', meta: '[Consumer Brands]',
    roles: ['Product Concept', 'UX/UI', 'Mobile'], index: 'Special Promotion App',
    alt: 'Pasaporte Quilmes app screens on phones: venue map, venue pages and a discount coupon with a QR code' },
  { id: 'industrial', slug: 'carbon-optimum', title: 'Making an industrial process legible', meta: '[Agrobusiness] [Enterprise]',
    roles: ['Web design', 'branding', 'Brand System', 'Web Development'], index: 'Climate Tech Brand',
    alt: 'The Carbon Optimum website on a desktop monitor over an ocean photograph, next to the brand colour palette' },
  { id: 'safety', slug: 'agente-mama', title: 'A safety net, not a productivity app', meta: '[Startups]',
    roles: ['Product Strategy', 'UX Research', 'Design System', 'AI-Assisted Build'], index: 'AI Family Assistant',
    alt: 'Agente Mamá AI on phones: the daily dashboard and agenda, fed by WhatsApp group and school platform messages' },
  { id: 'aps', slug: 'american-padel-systems', title: 'A site that answers "does it pay for itself?"', meta: '[Enterprise]',
    roles: ['branding', 'Web Design', 'Interactive Tool', 'Web Development'], index: 'Empowering Padel',
    alt: 'The American Padel Systems website on a tilted laptop, on a navy background crossed by orange lines' },
  { id: 'units', slug: 'hifi-hub', title: 'Six business units, one product', meta: '[Startups] [Ecommerce]',
    roles: ['branding', 'Product Design', 'Design System', 'Information Architecture'], index: 'Audiophile Directory',
    alt: 'The HiFi Hub product on two laptops shown from different angles, on a white background' },
];

/** Project Detail slugs whose card is hidden: no overlay, noindex, not in the sitemap (still reachable by URL). */
export const hiddenSlugs = projects.filter((p) => p.hidden).map((p) => p.slug);
