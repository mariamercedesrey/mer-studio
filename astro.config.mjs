// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mer.studio',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'auto' },
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
