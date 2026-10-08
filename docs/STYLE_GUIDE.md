# packsel™ — Brand & Code Style Guide

Mobile robots for small and mid-size warehouses. Leased, not bought.

This is the working reference for anyone — person or agent — building a packsel surface:
site, deck, interface or document. Values here are normative. Copy them exactly; don't
re-derive, re-tint or "improve" them without a commit that says why.

**Status:** v0.1. The colour values are taken from the existing email signature. Type,
spacing, radii and the presentation system are a first proposal and have not been through
a design review. See [Open questions](#open-questions).

---

## 1. Voice

Write to the warehouse operator in second person — "you," never "our valued customer."

- State the number, the unit, the outcome, and let that carry the sentence.
- No exclamation points. No hype adjectives: *revolutionary*, *game-changing*, *seamless*.
  Throughput and uptime figures persuade; adjectives don't.
- Spell a unit out on first use, then abbreviate: square feet → sq ft; autonomous mobile
  robot → AMR.
- Talk about racks, aisles, dock doors and shift counts. Not "the workforce of the future."
- Never illustrate or describe a smiling robot.

### The name

`packsel` is lowercase in every position, including the start of a sentence.

The trademark sign appears **once per page**: on the first mention in running text, and on
every wordmark lockup regardless. Later mentions on the same page drop it. A "page" is one
web page, one slide, one screen, or one printed page.

Never write `(TM)` or `®`. Use the `™` character (U+2122).

Full capitals are reserved for the `AUTOMATION` kicker and true acronyms (AMR, ROI, SKU).

### The wordmark

There is **no vector logo yet**. The only existing lockup is a raster crop from the
founder's email signature — a record of current usage, not a file to trace or scale.

Until a logotype is drawn, set the name in plain type:

```
packsel™        ← IBM Plex Sans 700, lowercase, ™ at 40% size, regular weight,
AUTOMATION         raised to cap height, tight against the l (no space)
                ← kicker: Plex Sans Condensed 600, 0.12em tracking, ink-secondary
```

The ™ belongs to the name line, never to the kicker. Never letter-space the name line —
tracking belongs to the kicker only.

---

## 2. Colour

One signal colour. `accent` is the rust-orange of a warehouse safety marking, an AMR
beacon, and the `packsel.co` link the brand grew from.

### Tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| `surface` | `#F7F5F2` | `#15171A` | Page and app background |
| `surface-raised` | `#FFFFFF` | `#1D2024` | Cards, panels, anything above the page |
| `surface-sunken` | `#EFEAE1` | `#1A1D21` | Wells, inset fields, table row stripes |
| `border` | `#E1DACB` | `#262B31` | Hairline dividers, card edges — decorative only |
| `border-control` | `#83765F` | `#727982` | Input, button and toggle outlines |
| `ink` | `#14161A` | `#F2EFE9` | Primary text and headings |
| `ink-secondary` | `#5B5F66` | `#9BA0A8` | Secondary text, captions, metadata, labels |
| `accent` | `#E8622A` | `#E8622A` | Icons, active states, chart marks, focus rings, large text |
| `accent-text` | `#B94A1E` | `#E8622A` | Links and small accent-coloured body text |
| `on-accent` | `#14161A` | `#14161A` | Text and icons on a solid accent fill |

### Rules

- **Never introduce a second brand hue.** No blue, no green. `accent` is spent, not
  decorated. The only orange gradient is the face of a primary key (`accent-lit` →
  `accent`), described in §4.
- `accent` as text is only legal at **24px+, or bold 19px+**. On a light surface it reads
  3.1:1 — below the 4.5:1 small-text floor. For a link or a small line of accent copy, use
  `accent-text`.
- On a solid `accent` fill, label in `on-accent` (dark ink), **not white**. White on accent
  is 3.4:1 and fails.
- `border` is decorative. Never let it alone signal an interactive boundary — use
  `border-control`, which holds 3:1 against both surfaces in both themes.
- Dark mode is implemented by redefining these tokens on `:root` under
  `prefers-color-scheme: dark`. Do not duplicate component CSS per theme.

### Verified contrast

Measured, WCAG 2 ratios. Re-run these if any value changes.

| Pair | Light | Dark | Floor | Pass |
|---|---|---|---|---|
| `ink` on `surface` | 16.6:1 | 15.7:1 | 4.5 | ✅ |
| `ink-secondary` on `surface` | 5.9:1 | 6.8:1 | 4.5 | ✅ |
| `accent-text` on `surface` | 4.8:1 | 5.3:1 | 4.5 | ✅ |
| `on-accent` on `accent` | 5.4:1 | 5.4:1 | 4.5 | ✅ |
| `accent` on `surface` | 3.1:1 | 5.3:1 | 3.0 (non-text / 24px+) | ✅ |
| `border-control` on `surface` | 4.1:1 | 4.1:1 | 3.0 (control border) | ✅ |
| ~~white on `accent`~~ | 3.4:1 | — | 4.5 | ❌ **don't** |

---

## 3. Type

Three faces, each carrying a meaning. `sans` is packsel talking to a person; `mono` is a
number the fleet reported.

| Family | Face | Use |
|---|---|---|
| `sans` | IBM Plex Sans | Headlines, UI, all running text |
| `sans-condensed` | IBM Plex Sans Condensed | Tracked uppercase kickers only |
| `mono` | IBM Plex Mono | Telemetry, uptime, SKUs, unit IDs, labels, metadata |

**Never** set a spec-sheet figure in `sans`, or a paragraph in `mono`.

### Scale

| Style | Size / line-height | Weight | Notes |
|---|---|---|---|
| `display` | 56 / 60 | 700 | Hero headline only, one per view. −0.01em |
| `h1` | 36 / 42 | 600 | Page title, one per page. −0.005em |
| `h2` | 26 / 32 | 600 | Section and card headers |
| `h3` | 20 / 26 | 600 | Group labels inside a panel |
| `body` | 16 / 24 | 400 | Default |
| `body-small` | 14 / 20 | 400 | Table cells, form hints, secondary copy |
| `eyebrow` | 12 / 16 | 600 | Condensed, 0.12em, uppercase via CSS — the `AUTOMATION` treatment |
| `data` | 14 / 20 | 500 | Mono. Figures that read as measured |
| `mono-label` | 12 / 16 | 500 | Mono, 0.04em, uppercase. Field label beside a `data` value |

Set `eyebrow` and `mono-label` to uppercase in CSS (`text-transform`), never by typing
capitals into the copy.

Fonts are self-hosted as `woff2` with `font-display: swap`. Don't add a fourth family.

---

## 4. Spacing, radius, depth

**Spacing** runs on a 4px scale: `space-1` 4px through `space-8` 64px
(4 · 8 · 12 · 16 · 24 · 32 · 48 · 64). Control padding is `space-2`–`space-4`; field gaps
`space-3`–`space-5`; card and section gaps `space-6`–`space-8`. Never eyeball a gap between
two steps.

**Radius** is soft. As of October 2026 the website uses pill buttons and generously rounded
cards and media; this replaces the earlier near-square rule. Use the scale, not one-off values:

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 2px | Tags, chips, checkboxes |
| `radius-md` | 4px | Inputs, table cells, small inline elements |
| `radius-lg` | 8px | Thumbnails, small cards |
| `radius-xl` | 16px | Images and media placed inside a card |
| `radius-2xl` | 24px | Cards, panels, modals, hero media |
| `radius-full` | 999px | Buttons and other controls, status dots, avatars |

When a rounded element sits inside another, step down one size (a 16px image inside a 24px
card) so the corners stay concentric.

**Surfaces have no shadows. Controls do.** Separate cards, panels and sections with a
surface step (`surface` → `surface-raised`) or a `border`, never a drop shadow.
Buttons are the exception: they are drawn as physical keys on a control panel.

### Tactile keys

| Part | Primary (orange) | Secondary (cap) |
|---|---|---|
| Face | Gradient `accent-lit` → `accent` | Gradient `key-cap-top` → `key-cap-bottom` |
| Edge | 1px `accent-deep` | 1px `key-skirt` |
| Skirt | Solid 3px (`key-travel`) of `accent-deep` below the face | Solid 3px of `key-skirt` |
| Lit edge | 1px inner highlight on the top edge | `key-highlight` |
| Cast | One soft shadow under the skirt, `key-cast` | Same |
| Hover | Rises 1px, skirt grows 1px | Same |
| Press | Moves down the full `key-travel`; skirt disappears; inner shadow | Same |

Labels on the orange key are `on-accent` (dark ink), as everywhere. Keys are pill-shaped
(`radius-full`). Text links are not keys: they are `accent-text` with a tape underline
and an arrow that moves on hover. Segmented controls (the demo's view and speed
switches) sit in an inset well, and the active segment is a small orange key.

### Texture and character

packsel should feel like a warehouse floor, not a showroom. Five motifs, used sparingly:

- **Grain.** A faint paper grain over the whole page (`grain-opacity`, ~3.5%). Never
  stronger, never on top of photography alone.
- **Hazard tape.** Diagonal `accent` / `on-accent` stripes, 10px each. Only as a thin edge
  (5–8px): the top of the header, the top of the contact band, the head of a datasheet.
  Never a fill, never behind text.
- **Floor lines.** Dashed `accent` rules (2px, about 55% strength) between rows on a
  "job board", like taped lanes on a floor.
- **Asset tags.** Section labels set as equipment tags: `mono`, 12px, uppercase, a
  `border-control` outline, `radius-sm`, and a small punched hole on the left.
- **Drawing-board dot grid.** 1px dots on a 16px grid (`dot-grid`) behind product
  cut-outs, route diagrams and spec plates.

A dark "lights down" band (`ink-band`) is allowed once per page, for video or a single
hero moment.

### States

| State | Treatment |
|---|---|
| Hover | Step to the next surface (`surface` → `surface-sunken`), or add a `border-control` outline |
| Active / selected | Fill `accent`, label `on-accent` |
| Disabled | `ink-secondary` on `surface-sunken`, no `border-control` outline |
| Focus | **2px solid `accent`, 2px offset.** One rule, every element, both themes |

### Website surfaces and motion

The marketing pages use cool neutral panels (`--color-home-panel`, `--color-home-hover`, in the
token file for both themes) and spacious product imagery, with IBM Plex and the orange accent
unchanged. Interactive cards lift slightly on pointer hover, change surface colour, and show a
matching keyboard focus state. Motion is short transitions and one-time entrance reveals;
reduced-motion users get the surface change without movement. Every page must stay readable
and navigable without JavaScript.

---

## 5. Layout

Compose in flush, sharp-edged blocks — a wide slab over a narrower row of detail — rather
than a grid of equal cards. Let a hero panel bleed to the edge of its container instead of
sitting padded inside a frame. Everything else stays inside a `space-6`–`space-8` page
margin.

Mobile-first. No horizontal scroll at 320px.

---

## 6. Presentations

Decks use fixed furniture. It's what makes a stack of slides read as one document.

**Header:** section marker top-left in `eyebrow` with the sub-topic in `accent-text`;
document status top-right in `mono` ("Draft — for discussion"). A 2px `ink` rule under
both. Every other rule on a slide is a `border` hairline.

**Title:** a claim, not a label. *"A 14-robot lease reaches cost parity in month four"* —
not *"Lease economics."* One clause may sit in `accent-text` where the slide turns on a
number. Two lines maximum; if it needs three, the slide holds two ideas and should be split.

**Setup line:** the assumptions the claim depends on. Never a restatement of the title.

**Exhibits:** numbered by section and position (Exhibit 3.1), captioned with what is
measured and its unit. Series in `accent`, comparison in a `border-control` dash, legend in
`mono` beneath the plot — never a floating label on the line.

**Footer rail, on every slide including the title:** CONFIDENTIAL in `accent-text` · the
wordmark with its ™ · the date · page number hard right in `ink`. All in `mono`, quiet.

**Note and source line** above the rail. Where figures are illustrative, say so there
rather than leaving the source blank.

---

## 7. Imagery and icons

**Imagery:** real product and warehouse-floor photography — an AMR on a rack aisle, a dock
door, a pallet in motion. Where a diagram is unavoidable, draw it flat in `ink`, `accent`
and `border-control`, no gradient, no shadow. No stock "innovation" hallways, no smiling
headsets.

**Icons:** no set exists yet. Until one is commissioned, use a single neutral outline family
at 1.5px stroke — [Lucide](https://lucide.dev) is the closest match. Flat, unfilled, no
duotone. `ink-secondary` at rest, `accent` on hover or selection. Flag any icon from outside
that family at review; packsel does not mix icon styles.

---

## 8. Things not to do

- Blue-to-purple gradients, or any gradient outside a key face.
- Emoji as decoration.
- Rounded cards with a coloured left border.
- Drop shadows on cards, panels or images. Shadows belong to keys only.
- A second accent colour, including a "success green" or "danger red," until status colours
  are designed properly (see below).
- Fabricated metrics, customer names, testimonials or case studies in any artefact —
  including demos. Mark placeholders visibly as TODO.

---

## 9. Implementation

Tokens live in one file and nothing hardcodes a hex.

```css
:root {
  --surface: #F7F5F2;
  --surface-raised: #FFFFFF;
  --surface-sunken: #EFEAE1;
  --border: #E1DACB;
  --border-control: #83765F;
  --ink: #14161A;
  --ink-secondary: #5B5F66;
  --accent: #E8622A;
  --accent-text: #B94A1E;
  --on-accent: #14161A;

  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;

  --radius-sm: 2px; --radius-md: 4px; --radius-lg: 8px;
  --radius-xl: 16px; --radius-2xl: 24px; --radius-full: 999px;

  --font-sans: "IBM Plex Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-sans-condensed: "IBM Plex Sans Condensed", "IBM Plex Sans", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface: #15171A;
    --surface-raised: #1D2024;
    --surface-sunken: #1A1D21;
    --border: #262B31;
    --border-control: #727982;
    --ink: #F2EFE9;
    --ink-secondary: #9BA0A8;
    --accent-text: #E8622A;
  }
}
```

### Review checklist

- [ ] No hardcoded hex outside the token file
- [ ] Every text/background pair meets its floor in **both** themes
- [ ] Focus ring present and visible on every interactive element
- [ ] `accent` used as small text? → should be `accent-text`
- [ ] White on an accent fill? → should be `on-accent`
- [ ] Any drop shadow on something that isn't a button? → should be a surface step or a border
- [ ] ™ on the first mention and on the lockup, nowhere else on the page
- [ ] No invented figures or unmarked placeholder content

---

## Open questions

Things this guide asserts but hasn't settled. Resolve and amend.

1. **No vector wordmark.** Everything above is a typographic stand-in. A drawn logotype
   would change the lockup rules and the favicon.
2. **Type is unlicensed-by-default.** IBM Plex is open-source (SIL OFL 1.1) and safe to
   self-host, but it's a widely used face. If packsel wants a distinct voice, this is where
   to spend.
3. **No status colours.** Success, warning and danger are undefined. They need designing as
   a set, with colour-blind safety checked, not picked one at a time.
4. **No component library.** The system has tokens and a slide template; there are no
   buttons, inputs or cards defined in code yet.
5. **Voice is proposed, not tested.** It was written from the brand direction, not from
   customer conversations.

---

*Questions: zach@packsel.co*
