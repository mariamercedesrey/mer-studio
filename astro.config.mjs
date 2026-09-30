// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { hiddenSlugs } from './src/data/projects.ts';
import { pageOf, pathIn, LOCALES } from './src/i18n/routes.ts';

export default defineConfig({
  site: 'https://mer.studio',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' }, // no render-blocking CSS requests
  // sitemap-index.xml + sitemap-0.xml; 404 is excluded automatically; thanks pages and Project Details of hidden cards stay out.
  // Every URL lists its language alternates (xhtml:link hreflang), taken from the single EN ↔ ES route map (src/i18n/routes.ts):
  // the Spanish slugs differ from the English ones, so @astrojs/sitemap's own i18n option (same path after /es/) cannot be used.
  integrations: [sitemap({
    filter: (page) => {
      const { pathname } = new URL(page);
      const p = pageOf(pathname);
      return p?.key !== 'thanks' && p?.key !== 'notFound' && !(p?.key === 'work' && hiddenSlugs.includes(/** @type {any} */ (p.slug)));
    },
    serialize: (item) => {
      const { pathname } = new URL(item.url);
      if (!pageOf(pathname)) return item;
      const href = (/** @type {'en' | 'es'} */ l) => new URL(pathIn(pathname, l), item.url).href;
      item.links = [...LOCALES.map((lang) => ({ url: href(lang), lang })), { url: href('en'), lang: 'x-default' }];
      return item;
    },
  })],
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
