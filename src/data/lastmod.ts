// Sitemap <lastmod> per page: route → ISO date (YYYY-MM-DD) of the last change to that page's REAL content. One entry per sitemap URL, EN and ES.
// Read by astro.config.mjs (serialize) and checked by scripts/check-site.mjs (every sitemap URL needs an entry, no future dates, not all equal).
//
// RULE FOR FUTURE PRs: bump the date ONLY of the pages whose content changed in that PR (copy, images, structure, that page's JSON-LD).
// Do NOT bump it for global changes that do not alter the page (shared tokens/CSS, header/footer, en.ts keys of other pages, build tooling).
// A change to src/i18n/en.ts or es.ts counts only for the pages that read the changed block; a case study is its caseStudies[slug] block,
// its block in src/data/project-details.ts and its images. Use the PR's date. Initial values: git log of each page, its i18n block, its layout block and its images.
// Do not use the build date: Google ignores lastmod when it is always today.
export const LASTMOD: Record<string, string> = {
  '/': '2026-11-23',
  '/es/': '2026-11-23',
  '/faq/': '2026-11-21',
  '/es/preguntas-frecuentes/': '2026-11-21',
  '/ecommerce/': '2026-11-01',
  '/es/tiendas-online/': '2026-11-01',
  '/web-design/': '2026-11-21',
  '/es/diseno-web/': '2026-11-21',
  '/ai-visibility/': '2026-11-21',
  '/es/visibilidad-ia/': '2026-11-01',
  '/start-a-project/': '2026-11-01',
  '/es/empezar-proyecto/': '2026-11-01',
  '/work/asociart/': '2026-11-01',
  '/es/proyectos/asociart/': '2026-11-01',
  '/work/the-mile/': '2026-11-01',
  '/es/proyectos/the-mile/': '2026-11-01',
  '/work/orchard-mile/': '2026-11-01',
  '/es/proyectos/orchard-mile/': '2026-11-21',
  '/work/quilmes/': '2026-11-07',
  '/es/proyectos/quilmes/': '2026-11-07',
  '/work/carbon-optimum/': '2026-11-21',
  '/es/proyectos/carbon-optimum/': '2026-11-21',
  '/work/agente-mama/': '2026-11-07',
  '/es/proyectos/agente-mama/': '2026-11-07',
  '/work/american-padel-systems/': '2026-11-21',
  '/es/proyectos/american-padel-systems/': '2026-11-21',
  '/work/hifi-hub/': '2026-11-07',
  '/es/proyectos/hifi-hub/': '2026-11-07',
  '/work/black-duck/': '2026-11-07',
  '/es/proyectos/black-duck/': '2026-11-21',
};
