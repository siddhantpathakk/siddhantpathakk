// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://siddhantpathakk.com',
  integrations: [sitemap()],
  // Skills and awards now live on the resume page; keep the old URLs working.
  redirects: {
    '/skills': '/resume/#skills',
    '/achievements': '/resume/#awards',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
