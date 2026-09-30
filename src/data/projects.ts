// Selected Work — copy and roles from Figma 149:5412 (D8: Figma wins over the ui_kit).
import { copy } from '../i18n';

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

// Copy (title, meta, roles, index label, alt) lives in src/i18n/en.ts → `work.projects[slug]`.
const card = (slug: keyof typeof copy.work.projects) => copy.work.projects[slug];

export const projects: Project[] = [
  { id: 'asociart', slug: 'asociart', ...card('asociart') },
  { id: 'orchardmile', slug: 'the-mile', ...card('the-mile') },
  { id: 'storefront', slug: 'orchard-mile', ...card('orchard-mile') },
  { id: 'coupon', slug: 'quilmes', ...card('quilmes') },
  { id: 'industrial', slug: 'carbon-optimum', ...card('carbon-optimum') },
  { id: 'safety', slug: 'agente-mama', ...card('agente-mama') },
  { id: 'aps', slug: 'american-padel-systems', ...card('american-padel-systems') },
  { id: 'units', slug: 'hifi-hub', ...card('hifi-hub') },
];

/** Project Detail slugs whose card is hidden: no overlay, noindex, not in the sitemap (still reachable by URL). */
export const hiddenSlugs = projects.filter((p) => p.hidden).map((p) => p.slug);
