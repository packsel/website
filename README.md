# packsel™ website

This is the marketing site for packsel. We lease autonomous mobile robots (AMRs) to warehouses.

The live site is **https://packsel.co**.

## Making changes

Edit on a branch and open a pull request into `main`. Once the pull request is merged, the site rebuilds and goes live within about a minute.

Leave the `deploy` branch alone. It's generated automatically, and Porkbun publishes from it.

To preview changes on your own computer, you need Node 22.12 or newer:

```sh
npm install
npm run dev      # opens at http://localhost:4321
```

## Where things are

- **Page text:** `src/pages/`. There's one file per page: `index.astro` (home), `how-it-works.astro` and `contact.astro`.
- **Interactive demo:** `public/warehouse-demo/` is a self-contained static 3D simulation served at `/warehouse-demo/`. JavaScript and the vendored Three.js library load only on this route. Its orders and metrics are illustrative, not customer data or performance claims.
- **Header and footer:** `src/components/`.
- **Colours, spacing and fonts:** `src/styles/tokens.css`. Change a value there and it updates across the whole site, in both light and dark mode.
- **Unfinished copy:** shows on the site as a dashed box starting with `TODO:`. Search the code for `TODO` to find them all.

## A few house rules

- Orange is the only brand colour. Don't add other colours, gradients or shadows.
- Write the name as lowercase **packsel**. The ™ goes on the logo and on the first mention on each page, not after that.
- Only publish real numbers, customers and quotes. If you don't have the real thing yet, leave a `TODO`.

## How it's built

The site is built with [Astro](https://astro.build) and plain CSS. The marketing pages are static HTML without JavaScript or a CMS; the warehouse demo uses browser-side JavaScript, and the fonts are IBM Plex, self-hosted. When a change is merged into `main`, a GitHub Action builds the site into the `deploy` branch, and Porkbun serves that branch at packsel.co.
