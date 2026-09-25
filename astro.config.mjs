// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mer.studio',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' }, // no render-blocking CSS requests
  integrations: [sitemap()], // sitemap-index.xml + sitemap-0.xml; 404 is excluded automatically
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
