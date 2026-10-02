// Selected Work — copy and roles from Figma 149:5412 (D8: Figma wins over the ui_kit).
import { getCopy, type Copy, type Locale } from '../i18n';

export type Project = {
  id: string;
  slug: string;    // Project Detail: /work/<slug>/ (data/project-details.ts)
  title: string;
  meta: string;
  roles: readonly string[];
  index: string;   // label in the Selected Work index (Figma 2220:3997)
  alt: string;     // alt text of the Selected Work cover (what it shows; required)
  hidden?: boolean;   // kept in data, not rendered yet (no card media)
};

// Copy (title, meta, roles, index label, alt) lives in src/i18n/{en,es}.ts → `work.projects[slug]`.
const defs: { id: string; slug: keyof Copy['work']['projects']; hidden?: boolean }[] = [
  { id: 'asociart', slug: 'asociart' },
  { id: 'orchardmile', slug: 'the-mile' },
  { id: 'storefront', slug: 'orchard-mile' },
  { id: 'coupon', slug: 'quilmes' },
  { id: 'industrial', slug: 'carbon-optimum' },
  { id: 'safety', slug: 'agente-mama' },
  { id: 'aps', slug: 'american-padel-systems' },
  { id: 'units', slug: 'hifi-hub' },
  { id: 'tee', slug: 'black-duck' },
];

export const getProjects = (locale: Locale): Project[] => defs.map((d) => ({ ...d, ...getCopy(locale).work.projects[d.slug] }));

/** Project Detail slugs whose card is hidden: no overlay, noindex, not in the sitemap (still reachable by URL). */
export const hiddenSlugs = defs.filter((p) => p.hidden).map((p) => p.slug);
