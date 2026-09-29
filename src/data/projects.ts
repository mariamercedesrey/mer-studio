// Selected Work — copy and roles from Figma 149:5412 (D8: Figma wins over the ui_kit).
export type Project = {
  id: string;
  slug: string;    // Project Detail: /work/<slug>/ (data/project-details.ts); the card title is that modal's title
  title: string;
  meta: string;
  roles: string[];
  align: 'start' | 'end'; // Figma alignment (reference); rendering alternates over visible items
  width: number;   // media width at 1440 (Figma)
  height: number;  // media height at 1440 (Figma)
  hidden?: boolean;   // kept in data, not rendered yet (no card media)
};

export const projects: Project[] = [
  { id: 'asociart', slug: 'asociart', title: 'Reengineering a 13-module legacy platform', meta: '[Insurance & Finance] AT NEORIS',
    roles: ['UX Research', 'Design System', 'PRODUCT DESIGN', 'Front-End'], align: 'start', width: 1049, height: 654 },
  { id: 'orchardmile', slug: 'the-mile', title: 'Turning creators into storefronts', meta: '[Ecommerce & Fashion] AT ORCHARDMILE',
    roles: ['UX/UI', 'Design System', 'PRODUCT DESIGN', 'Prototyping'], align: 'end', width: 922, height: 654 },
  { id: 'storefront', slug: 'orchard-mile', title: '250 brands, one storefront', meta: '[Ecommerce & Fashion]',
    roles: ['UX/UI', 'Front-End', 'Growth Design'], align: 'start', width: 1060, height: 654 },
  { id: 'coupon', slug: 'quilmes', title: 'A benefits app for 35,000 visitors a week', meta: '[Consumer Brands]',
    roles: ['Product Concept', 'UX/UI', 'Mobile'], align: 'end', width: 654, height: 654, hidden: true }, // R2-B: no MP4 yet — its modal (Quilmes) is live at /work/quilmes/
  { id: 'industrial', slug: 'carbon-optimum', title: 'Making an industrial process legible', meta: '[Agrobusiness] [Enterprise]',
    roles: ['Web design', 'branding', 'Brand System', 'Web Development'], align: 'start', width: 1049, height: 654 },
  { id: 'safety', slug: 'agente-mama', title: 'A safety net, not a productivity app', meta: '[Startups]',
    roles: ['Product Strategy', 'UX Research', 'Design System', 'AI-Assisted Build'], align: 'end', width: 831, height: 653 },
  { id: 'aps', slug: 'american-padel-systems', title: 'A site that answers "does it pay for itself?"', meta: '[Enterprise]',
    roles: ['branding', 'Web Design', 'Interactive Tool', 'Web Development'], align: 'start', width: 1154.3, height: 654 },
  { id: 'units', slug: 'hifi-hub', title: 'Six business units, one product', meta: '[Startups] [Ecommerce]',
    roles: ['branding', 'Product Design', 'Design System', 'Information Architecture'], align: 'end', width: 1081, height: 654 },
];

/** Project Detail slugs whose card is hidden: no overlay, noindex, not in the sitemap (still reachable by URL). */
export const hiddenSlugs = projects.filter((p) => p.hidden).map((p) => p.slug);
