import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://michel-camarotta-org.github.io',
  integrations: [sitemap()],
});
