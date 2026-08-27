# Handoff: alexguofilm.com rebuild — "Bold Minimal, yellow" direction

Implement this in the existing project at `claude/portfolio`, using whatever stack that project already uses (React/Next, plain HTML/CSS, etc.) and its existing file conventions.

## Files in this package
- `reference.html` — full static design reference for all five views. Open it in a browser: it renders exactly what to build, with the real videos, copy, and headshot embedded. **It is a reference, not production code** — recreate it in the project's own components/CSS approach.
- `Alexander_Guo_Headshot_1.jpg` — About page portrait.
- `3a-reference.html` — earlier dark-palette version of this direction (superseded; keep for reference only).

## Fidelity
**High-fidelity.** The colors, type sizes, weights, spacing, and letter-spacing in `reference.html` are final. Match them closely.

## Design tokens
- Background: `#ffd964` (yellow) — used site-wide
- Ink / accent: `#222121` (dark gray) — all type, rules, buttons, active states
- Secondary text: `rgba(34,33,33,.7)` / `.6` / `.55`; tertiary `rgba(34,33,33,.4)`
- Dividers: `1px solid rgba(34,33,33,.12)`; media borders `1px solid rgba(34,33,33,.2)`
- Font: Inter (600/700/800/900); `ui-monospace` for small meta labels (LATEST, PLAY →, tags)
- Type scale: 190px hero name · 120px page titles · 44px row titles · 34px section heads · 30px reel titles · 20/17px card titles · 15px body · 12–10px labels
- Video/thumb frames are always 16:9; portrait is 4:5

## Site structure
Five views. Nav order is fixed: **REEL · COMMERCIAL · NARRATIVE · ACTING · ABOUT**. Active tab = full-ink color + 2px bottom border; inactive = `rgba(34,33,33,.6)`, hover to full ink.

### 1. Home (`/`) — reel-first
- Full-viewport (900px at 1440w) hero with the **directing reel playing full-bleed behind the type**: YouTube `vpCQx8PgZYM`, `autoplay=1&mute=1&loop=1&playlist=vpCQx8PgZYM&controls=0&modestbranding=1&rel=0&playsinline=1`, `pointer-events:none`.
  - **Cover-crop math matters:** wrap the iframe in an absolutely centered box sized `height:100%; width:auto; aspect-ratio:16/9; min-width:100%; min-height:100%` inside an `overflow:hidden` parent. Do NOT use `vh`/`vw` sizing — it letterboxes and shifts per window size.
  - Yellow scrim over the video for legibility: `linear-gradient(180deg, rgba(255,217,100,.55) 0%, rgba(255,217,100,.15) 45%, rgba(255,217,100,.94) 100%)`.
  - Hero type: "ALEXANDER / GUO" at 190px/900/-8px tracking; below it a 64×4px ink rule + "DIRECTOR & ACTOR" (700/15px/3px tracking).
  - Bottom bar: 52px ink circle with ▶ + "PLAY REEL WITH SOUND" (unmutes/opens the reel with controls) and "SCROLL FOR SELECTED WORK ↓".
- Below the fold, selected work: **Commercial** (3 newest) → **Narrative** (3 newest) → **Acting** (both reel thumbnails, side by side). Each section head has a "VIEW ALL" link to its page.

### 2. Commercial (`/commercial`) — newest first
- Page title COMMERCIAL + blurb (right-aligned, max 420px): "I treat every commercial like a short film. Even in thirty seconds there's room for a character, a turn, and a reason to keep watching, so I build each spot around a story people actually want to follow, not just a product on screen."
- Newest spot embedded large (16:9), its title at 44px with a "LATEST" meta label, then the remaining 8 as a **4-column thumbnail grid** (title under each, 17px/800).
- Order (newest → oldest), YouTube IDs:
  1. `MNLG_Ar2ujQ` — “TARS’ First Day” | Hypercard Expense
  2. `NQYnhVdDC2I` — BOTsession | LEMMA
  3. `aIQLkbTeDBg` — “A Little Nudge” | Blinkko
  4. `Opp97cZHprc` — Maruchan Instant Lunch, Flamin’ Hot® | Spot
  5. `_Sr9eyDxCcM` — “All the Time in the World” | Truffle Pig
  6. `QVqXPH-w6Zk` — “Hot Nerd” | Ditto AI
  7. `QQAs6t2i9LM` — Onitsuka Tiger — “Find Your Pair” | Sublimity
  8. `FzzhmVvXbpA` — Onitsuka Tiger — “Find Your Pair” | Raincheck
  9. `f2MCBnZUSPc` — Onitsuka Tiger — “Find Your Pair” | Records

### 3. Narrative (`/narrative`)
- Page title NARRATIVE + blurb "Short films and clips from short films."
- **List rows**, grid `340px 1fr 120px`, 26px vertical padding, top rule per row, row hover tint `rgba(34,33,33,.03)`. Title 44px/800. Right column: "LATEST" on row 1, "PLAY →" after.
- Row 1 has the video embedded; the rest are thumbnails that swap to an inline player on click.
- Order: `R-of3WR9EVg` Veins · `7AV_8Ull09g` USB · `XAHEjHXXmYo` Criterion · `UratXCFXYGw` OCFF · `tQun-GQBrXk` Best of Three · `aw1uku7Yz9c` Free Ice Cream

### 4. Acting (`/acting`) — two reels, no blurb
- Page title ACTING, then **two 16:9 players side by side**: Dramatic Reel `RT6Xv8AAvLk` (meta "DRAMA") and Comedic Reel `6DOFRy-SYH0` (meta "COMEDY"). Titles 30px/800.
- Meta row below: REELS "Dramatic + Comedic" · UPDATED 2026 · UNION "SAG-AFTRA eligible" · BASED "Los Angeles". (Confirm the union line with Alexander before publishing.)
- Representation block: Daniel Hoff Agency, 5455 Wilshire Blvd, Ste 1100, Los Angeles, CA 90036, (323) 932-2500, danielhoffagency.com.

### 5. About (`/about`)
- Page title ABOUT; two columns `420px 1fr`, gap 64.
- Left: headshot, 4:5, `object-fit:cover; object-position:50% 25%`.
- Right: 34px headline "Alexander Guo is a Chinese American filmmaker and actor based in Los Angeles." + three body paragraphs (verbatim in `reference.html`).
- Contact grid (2 columns): EMAIL `alextheguo@gmail.com` (mailto), INSTAGRAM `@alextheguo` (https://www.instagram.com/alextheguo/, new tab), BASED "Los Angeles, CA", REPRESENTATION Daniel Hoff Agency + LA address/phone.
- Links: ink color, no underline, 2px bottom border `rgba(34,33,33,.35)`, `width:fit-content` (otherwise the border spans the column).

## Interactions
- Nav + link hovers: color/opacity transition ~150ms.
- Narrative row hover: subtle background tint; thumbnail click swaps to inline player.
- Commercial/Narrative thumbnails: click plays in place (or route to a detail view — implementer's call, keep it one click).
- No other motion. The reel is the only autoplaying element, always muted.

## Responsive notes
- Clamp the display type: hero 190px and page titles 120px must scale down (e.g. `clamp()`) before they wrap.
- Mobile: single-column stacks — nav collapses to a menu, commercial grid 4→2→1, narrative rows stack thumbnail over title, About stacks portrait above bio.
- Keep tap targets ≥44px.

## Assets & content still needed
- Real thumbnails: currently using YouTube's `hqdefault.jpg` per video. Swap for custom stills if Alexander has them.
- Confirm SAG-AFTRA line and whether Acting should also list credits.
