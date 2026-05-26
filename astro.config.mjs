import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hijabthrone.al',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'sq',
    locales: ['sq', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  build: {
    format: 'file',
    // Inline every stylesheet — eliminates render-blocking CSS requests
    // and improves FCP/LCP on slow connections.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  prefetch: {
    // Prefetch links on hover so navigations feel instant on weak networks
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      filter: (page) => !page.includes('/spinner'),
    }),
  ],
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
    },
  },
});
