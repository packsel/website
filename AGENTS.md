# Instructions for coding agents

This is the marketing site for packsel™, live at https://packsel.co. The brand rules are in [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md). Read it before changing anything people will see.

## The font rule. This is the one that matters most.

- **Use only IBM Plex**, and only for its job:
  - **IBM Plex Sans** is for headlines, UI and all running text.
  - **IBM Plex Sans Condensed** is only for tracked, uppercase kickers.
  - **IBM Plex Mono** is for figures, telemetry, SKUs, unit IDs, labels and metadata. Never use it for a paragraph, and never set a spec-sheet figure in Sans.
- **No text smaller than 12px.** That's the guide's smallest size (`eyebrow`, `mono-label`).
- **Fonts are self-hosted** from `public/fonts/`, and `src/styles/global.css` declares them with `@font-face` and `font-display: swap`. Never load fonts from Google Fonts or any other CDN, and never add a fourth family.
- **In CSS, use the family tokens:** `var(--font-sans)`, `var(--font-condensed)` or `var(--font-mono)`. Don't type out family names.
- **Only these weights are installed:** Sans 400, 600 and 700, Condensed 600, Mono 400. Sans 700 is for the wordmark (and the guide's `display` style). The site sets `font-synthesis: none`, so an uninstalled weight falls back to the nearest installed one. The style guide also calls for Mono 500. To use it, first add the matching `*-Latin1.woff2` file from IBM's `@ibm/plex-*` npm package to `public/fonts/`, then add an `@font-face` block for it.

## Other rules

- `main` is live. Anything merged into `main` deploys to packsel.co within about a minute. Work on a branch and open a pull request. Run `npm run build` first.
- Never edit, merge or open a pull request from the `deploy` branch. It holds generated output.
- Don't hardcode colour values. Use the tokens in `src/styles/tokens.css`. The site prefixes colour tokens with `--color-` (`--color-surface`, `--color-accent-text`), where §9 of the style guide writes them without the prefix (`--surface`). Use the site's names.
- Use no gradients, no shadows and no second brand colour. Small accent-coloured text uses `--color-accent-text`. Text on an accent fill uses `--color-on-accent`, never white.
- Write the name in lowercase as `packsel`, with the ™ on the logo and on the first mention per page only. Use `<Brand tm />` for that mention and `<Brand />` after it.
- Never invent metrics, customer names, testimonials or case studies. Where real copy is missing, use `<p class="todo">TODO: …</p>`.
