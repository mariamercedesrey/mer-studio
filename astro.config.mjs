// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { hiddenSlugs } from './src/data/projects.ts';

export default defineConfig({
  site: 'https://mer.studio',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' }, // no render-blocking CSS requests
  // sitemap-index.xml + sitemap-0.xml; 404 is excluded automatically; Project Details of hidden cards stay out.
  integrations: [sitemap({ filter: (page) => !hiddenSlugs.some((s) => page.includes(`/work/${s}/`)) })],
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
