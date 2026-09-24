// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mer.studio',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' }, // no render-blocking CSS requests
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
