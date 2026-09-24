// Selected Work — copy and roles from Figma 149:5412 (D8: Figma wins over the ui_kit).
export type Project = {
  id: string;
  title: string;
  meta: string;
  roles: string[];
  align: 'start' | 'end';
  width: number;   // media width at 1440 (Figma)
  height: number;  // media height at 1440 (Figma)
  hidden?: boolean;   // kept in data, not rendered in V1
  openable?: boolean; // opens Project Detail (D5: Asociart only in V1)
};

export const projects: Project[] = [
  { id: 'asociart', title: 'Reengineering a 13-module legacy platform', meta: '[Insurance & Finance] AT NEORIS',
    roles: ['UX Research', 'Design System', 'PRODUCT DESIGN', 'Front-End'], align: 'start', width: 1049, height: 654, openable: true },
  { id: 'orchardmile', title: 'Turning creators into storefronts', meta: '[Ecommerce & Fashion] AT ORCHARDMILE',
    roles: ['UX/UI', 'Design System', 'PRODUCT DESIGN', 'Prototyping'], align: 'end', width: 922, height: 654 },
  { id: 'storefront', title: '250 brands, one storefront', meta: '[Ecommerce & Fashion]',
    roles: ['UX/UI', 'Front-End', 'Growth Design'], align: 'start', width: 1060, height: 654 },
  { id: 'coupon', title: 'A coupon that works one-handed, in a crowd', meta: '[Consumer Brands]',
    roles: ['Product Concept', 'UX/UI', 'Mobile'], align: 'end', width: 654, height: 654, hidden: true }, // R2-B: no MP4 yet
  { id: 'industrial', title: 'Making an industrial process legible', meta: '[Agrobusiness] [Enterprise]',
    roles: ['Web design', 'branding', 'Brand System', 'Web Development'], align: 'start', width: 1049, height: 654 },
  { id: 'safety', title: 'A safety net, not a productivity app', meta: '[Startups]',
    roles: ['Product Strategy', 'UX Research', 'Design System', 'AI-Assisted Build'], align: 'end', width: 831, height: 653 },
  { id: 'aps', title: 'A site that answers "does it pay for itself?"', meta: '[Enterprise]',
    roles: ['branding', 'Web Design', 'Interactive Tool', 'Web Development'], align: 'start', width: 1154.3, height: 654 },
  { id: 'units', title: 'Six business units, one product', meta: '[Startups] [Ecommerce]',
    roles: ['branding', 'Product Design', 'Design System', 'Information Architecture'], align: 'end', width: 1081, height: 654 },
];
