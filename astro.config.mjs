// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://mer.studio',
  integrations: [react()],
  build: { inlineStylesheets: 'auto' },
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
