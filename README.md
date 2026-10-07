# packsel™ marketing site

Static marketing site built with [Astro](https://astro.build). It outputs plain HTML and inlined CSS. No client-side framework, no CMS, and no JavaScript is shipped.

Live at **https://packsel.co**, hosted on Porkbun Static Hosting.

## Read this before changing anything

**`main` is live.** Anything merged into `main` is built and published to packsel.co within about a minute, with no review step in between. See [How publishing works](#how-publishing-works).

1. **Never push directly to `main`.** Work on a branch, run `npm run build` locally, and open a pull request.
2. **Never edit, merge or open a pull request from the `deploy` branch.** It holds generated output and is overwritten on every deploy. GitHub will sometimes show a "deploy had recent pushes" banner offering a pull request. Ignore it.
3. **Every value comes from `src/styles/tokens.css`.** No new colours, no gradients, no shadows. See [Design tokens](#design-tokens).
4. **Don't make up facts.** No invented metrics, customer names, logos, testimonials or case studies. Where real copy is missing, use a visible `<p class="todo">TODO: …</p>`.
5. **The site ships no JavaScript and depends only on Astro.** Ask the site owner before adding either.
6. **™ on the first mention per page only.** Use `<Brand tm />` there and `<Brand />` everywhere after. See [The ™](#the-).

## Run it

Requires Node 22.12 or newer.

```sh
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # writes the static site to dist/
npm run preview   # serves dist/ locally to check the production build
```

## Where things live

```
src/
  layouts/Base.astro      <head>, skip link, header, footer, <slot />
  components/Header.astro wordmark and primary nav (nav items are an array at the top)
  components/Footer.astro contact, address, copyright
  components/Brand.astro  the "packsel" name, with an optional ™
  styles/tokens.css       every design token, light and dark
  styles/global.css       @font-face, reset, base type, layout primitives, utilities
  pages/                  one .astro file per route
public/                   copied to the site root unchanged: favicon, robots.txt, fonts
```

### Design tokens

All colors, spacing, radii, type families and the type scale are custom properties in `src/styles/tokens.css`. Dark mode is a single `@media (prefers-color-scheme: dark)` block that redefines the color tokens on `:root`. Component CSS never branches on color scheme. If you need a new value, add a token rather than hard-coding it.

Brand rules the CSS assumes:

- `--color-accent` is the only brand hue. No other colors, gradients or shadows. Depth comes from surface steps and 1px borders.
- Use accent as a text color only at 24px+ (`--text-lg`) or bold 19px+ (`--text-md`). Links and small accent text use `--color-accent-text`.
- On an accent fill, label text is `--color-on-accent` (dark ink), never white.
- `accent-text` is 4.32:1 on light `surface-sunken`, below AA for small text. Inside `.surface-sunken`, links and kickers automatically fall back to ink tones. Keep it that way.

### The ™

Write the name with `<Brand />`. Pass `tm` on the logo, which the header already does, and on the **first** mention in body copy on each page. Leave it off every later mention. This can't be automated reliably, so check it when you edit copy.

```astro
<p><Brand tm /> leases robots…</p>   <!-- first mention on the page -->
<p>…talk to <Brand /> about…</p>     <!-- every later mention -->
```

### Fonts

The site self-hosts Latin-1 subsets of IBM Plex Sans (400, 600), Plex Sans Condensed (600) and Plex Mono (400) in `public/fonts`, taken from IBM's official `@ibm/plex-*` npm packages. They're licensed under SIL OFL 1.1 (`public/fonts/OFL.txt`). To add a weight, copy the matching `*-Latin1.woff2` from the package's `fonts/split/woff2/` folder and add an `@font-face` block in `global.css`.

### Layout primitives and utilities

| Class | What it does |
|---|---|
| `.container` | Max-width wrapper with responsive side padding |
| `.stack` | Vertical rhythm between children. Set `--stack-space` to change the gap, or use `.stack-sm` / `.stack-lg` |
| `.section` | Vertical padding for a page band |
| `.grid` | Responsive auto-fit columns, one column at 320px |
| `.cluster` | Wrapping horizontal row, for buttons |
| `.panel` | Raised surface with a 1px border and `--radius-lg` corners |
| `.surface-sunken` / `.surface-raised` | Background steps |
| `.kicker` / `.mono` / `.lead` | Type roles |
| `.button` / `.button-primary` | Secondary (outlined) and primary (accent fill) buttons |
| `.todo` | Visible placeholder for missing copy. Start its text with `TODO:` |

## Add a page

1. Create `src/pages/your-page.astro`. The file name becomes the URL (`/your-page/`).
2. Wrap the content in the base layout. Give the page exactly one `<h1>`:

   ```astro
   ---
   import Base from '../layouts/Base.astro';
   import Brand from '../components/Brand.astro';
   ---

   <Base title="Your page" description="One sentence for search results and link previews.">
     <section class="section" aria-labelledby="page-title">
       <div class="container stack">
         <h1 id="page-title">Your page</h1>
         <p><Brand tm /> …</p>
         <p class="todo">TODO: body copy.</p>
       </div>
     </section>
   </Base>
   ```

3. If it belongs in the nav, add it to the `nav` array in `src/components/Header.astro`. Use the trailing-slash URL (`/your-page/`) so the current-page highlight matches.

## Find unfinished copy

```sh
grep -rn "TODO" src
```

## Still to do

- Replace every `TODO` (see above).
- Add an `og:image` (1200×630) in `src/layouts/Base.astro` so shared links show a preview image.

## How publishing works

```
your branch ──PR──▶ main ──GitHub Action──▶ deploy ──Porkbun──▶ packsel.co
```

- Porkbun's GitHub Connect publishes the **`deploy`** branch exactly as it is. It doesn't run a build.
- `.github/workflows/deploy.yml` runs on every push to `main`. It runs `npm ci && npm run build`, then commits the contents of `dist/` to `deploy`, one commit per deploy. If the output hasn't changed, it commits nothing.
- If the build fails, nothing is published and the live site stays as it was. Check the **Actions** tab on GitHub for the error.
- To redeploy without a code change, go to **Actions → Build and publish to deploy branch → Run workflow**.
- To roll back, revert the bad commit on `main` with a pull request. The workflow then publishes the earlier version.

The Porkbun setting is in Domain Management → packsel.co → Static Hosting → GitHub Connect: repository `packselco/upgraded-train`, branch **`deploy`**. If it's ever switched back to `main`, the site will serve source files instead of the built pages.

The site uses folder-style URLs (`/how-it-works/` is served from `how-it-works/index.html`).

### Moving to another host

The build output in `dist/` is plain static files, so any static host works. Netlify and Vercel both build from the repository themselves, so `deploy.yml` and the `deploy` branch aren't needed with either.

- **Netlify:** build command `npm run build`, publish directory `dist`, environment variable `NODE_VERSION=22`.
- **Vercel:** import the repository. It detects Astro automatically. Set Node.js to 22.x under Project Settings → General.
