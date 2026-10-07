// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Used for canonical and og:url tags.
  site: 'https://packsel.co',
  output: 'static',
  // ~8 KB of CSS total; inlining removes the only render-blocking request.
  build: { inlineStylesheets: 'always' },
});
