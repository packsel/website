// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: set to the production domain before launch (used for canonical + OG URLs).
  site: 'https://example.com',
  output: 'static',
  // ~8 KB of CSS total; inlining removes the only render-blocking request.
  build: { inlineStylesheets: 'always' },
});
