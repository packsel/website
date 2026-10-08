// The warehouse demo is a static page in public/, so it can't import Astro's CSS.
// Copy the site's design tokens next to it before every dev/build run so the two never drift.
import { copyFileSync } from 'node:fs';

copyFileSync(new URL('../src/styles/tokens.css', import.meta.url), new URL('../public/warehouse-demo/tokens.css', import.meta.url));
console.log('Synced design tokens to public/warehouse-demo/tokens.css');
