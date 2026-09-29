// Selected Work — copy and roles from Figma 149:5412 (D8: Figma wins over the ui_kit).
export type Project = {
  id: string;
  slug: string;    // Project Detail: /work/<slug>/ (data/project-details.ts)
  title: string;
  meta: string;
  roles: string[];
  index: string;   // label in the Selected Work index (Figma 2220:3997)
  hidden?: boolean;   // kept in data, not rendered yet (no card media)
};

export const projects: Project[] = [
  { id: 'asociart', slug: 'asociart', title: 'Reengineering a 13-module legacy platform', meta: '[Insurance & Finance] AT NEORIS',
    roles: ['UX Research', 'Design System', 'Product Designer', 'Front-End'], index: 'Reengineering Core' },
  { id: 'orchardmile', slug: 'the-mile', title: 'Turning creators into storefronts', meta: '[Ecommerce & Fashion] AT ORCHARDMILE',
    roles: ['UX/UI', 'Design System', 'PRODUCT DESIGN', 'Prototyping'], index: 'Live Shoppable App' },
  { id: 'storefront', slug: 'orchard-mile', title: '250 brands, one storefront', meta: '[Ecommerce & Fashion]',
    roles: ['UX/UI', 'Front-End', 'Growth Design'], index: 'Luxury Website' },
  { id: 'coupon', slug: 'quilmes', title: 'A coupon that works one-handed, in a crowd', meta: '[Consumer Brands]',
    roles: ['Product Concept', 'UX/UI', 'Mobile'], index: 'Special Promotion App' },
  { id: 'industrial', slug: 'carbon-optimum', title: 'Making an industrial process legible', meta: '[Agrobusiness] [Enterprise]',
    roles: ['Web design', 'branding', 'Brand System', 'Web Development'], index: 'Climate Tech Brand' },
  { id: 'safety', slug: 'agente-mama', title: 'A safety net, not a productivity app', meta: '[Startups]',
    roles: ['Product Strategy', 'UX Research', 'Design System', 'AI-Assisted Build'], index: 'AI Family Assistant' },
  { id: 'aps', slug: 'american-padel-systems', title: 'A site that answers "does it pay for itself?"', meta: '[Enterprise]',
    roles: ['branding', 'Web Design', 'Interactive Tool', 'Web Development'], index: 'Empowering Padel' },
  { id: 'units', slug: 'hifi-hub', title: 'Six business units, one product', meta: '[Startups] [Ecommerce]',
    roles: ['branding', 'Product Design', 'Design System', 'Information Architecture'], index: 'Audiophile Directory' },
];

/** Project Detail slugs whose card is hidden: no overlay, noindex, not in the sitemap (still reachable by URL). */
export const hiddenSlugs = projects.filter((p) => p.hidden).map((p) => p.slug);
