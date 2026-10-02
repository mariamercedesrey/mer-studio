// The ONE map of EN ↔ ES routes: language switcher, hreflang, sitemap, nav, footer, anchors and the Project Detail URLs read it.
// English stays at the root; Spanish lives under /es/ with Spanish slugs on the key pages. Project slugs do not change.
// Import-free: the Astro config (sitemap) and the client scripts load it too.
export type Locale = 'en' | 'es';
export const LOCALES: readonly Locale[] = ['en', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

export type PageKey = 'home' | 'faq' | 'ecommerce' | 'aiVisibility' | 'startProject' | 'thanks' | 'notFound';
export const PAGES: Record<PageKey, Record<Locale, string>> = {
  home: { en: '/', es: '/es/' },
  faq: { en: '/faq/', es: '/es/preguntas-frecuentes/' },
  ecommerce: { en: '/ecommerce/', es: '/es/tiendas-online/' },
  aiVisibility: { en: '/ai-visibility/', es: '/es/visibilidad-ia/' },
  startProject: { en: '/start-a-project/', es: '/es/empezar-proyecto/' },
  thanks: { en: '/start-a-project/thanks/', es: '/es/empezar-proyecto/gracias/' },
  notFound: { en: '/404.html', es: '/es/404/' }, // Astro builds the EN one as dist/404.html and the ES one as dist/es/404/index.html
};
const WORK_PREFIX: Record<Locale, string> = { en: '/work/', es: '/es/proyectos/' };

// In-page anchors of the home. The ids in the DOM stay the English ones (#work…); Spanish links use the Spanish alias
// (/es/#servicios) and scripts/anchor-nav.ts resolves it back to the id.
export type AnchorKey = 'work' | 'services' | 'howItWorks' | 'about' | 'faq';
export const ANCHORS: Record<AnchorKey, Record<Locale, string>> = {
  work: { en: 'work', es: 'proyectos' },
  services: { en: 'services', es: 'servicios' },
  howItWorks: { en: 'how-it-works', es: 'como-trabajamos' },
  about: { en: 'about', es: 'nosotros' },
  faq: { en: 'faq', es: 'faq' }, // the "#faq" of /ai-visibility/ is an id inside that page (same in both languages)
};
/** Spanish alias → DOM id (English). */
export const ANCHOR_IDS: Record<string, string> = Object.fromEntries(Object.values(ANCHORS).map((a) => [a.es, a.en]));

export const pagePath = (page: PageKey, locale: Locale) => PAGES[page][locale];
export const workPath = (slug: string, locale: Locale) => `${WORK_PREFIX[locale]}${slug}/`;
export const anchorHash = (key: AnchorKey, locale: Locale) => `#${ANCHORS[key][locale]}`;

const norm = (pathname: string) => (pathname.endsWith('/') || pathname.endsWith('.html') ? pathname : `${pathname}/`);

export const localeOf = (pathname: string): Locale => (pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en');

/** Which page a pathname is: a named page, or a project detail (slug). null = unknown path. */
export function pageOf(pathname: string): { key: PageKey; locale: Locale } | { key: 'work'; slug: string; locale: Locale } | null {
  const p = norm(pathname);
  for (const key of Object.keys(PAGES) as PageKey[]) for (const l of LOCALES) if (PAGES[key][l] === p) return { key, locale: l };
  for (const l of LOCALES) if (p.startsWith(WORK_PREFIX[l]) && p.length > WORK_PREFIX[l].length) return { key: 'work', slug: p.slice(WORK_PREFIX[l].length).replace(/\/$/, ''), locale: l };
  return null;
}

/** The same page in `target`. Unknown paths go to that language's home. */
export function pathIn(pathname: string, target: Locale): string {
  const page = pageOf(pathname);
  if (!page) return PAGES.home[target];
  return page.key === 'work' ? workPath(page.slug, target) : PAGES[page.key][target];
}
