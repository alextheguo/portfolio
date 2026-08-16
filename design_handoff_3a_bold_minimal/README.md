# Handoff: Home page — "3a Bold Minimal" direction

## Overview
New visual direction for alexguofilm.com's Home page (and About/Contact section): massive type, one accent color, no gradients/glow/UI chrome. Bold through scale and negative space rather than decoration.

## About the Design Files
`3a-reference.html` is a **design reference built in plain HTML/inline CSS** — it shows exact layout, type, color, and spacing. It is not production code to paste in. Recreate it inside the existing `claude/portfolio` project using whatever stack that project already uses (React components, plain HTML/CSS, etc.), following its existing file structure and conventions.

## Fidelity
**High-fidelity.** Colors, type sizes, weights, spacing, and letter-spacing below are final — implement pixel-close using the codebase's own components/CSS approach.

## Screens / Views

### 1. Home (hero)
- Full-bleed section, background `#222121`, height ~900px at 1440px viewport width (scale proportionally responsive).
- Header row: flex, `justify-content: space-between`, padding `40px 56px`.
  - Wordmark "AG": Inter, weight 900, 15px, letter-spacing 1px, white.
  - Nav: flex row, gap 36px. Each link: Inter weight 700, 12px, letter-spacing 1.5px, color `rgba(255,255,255,.6)`; **hover → `#ffd964`**.
  - Nav items, in order: REEL, NARRATIVE, COMMERCIAL, ACTING, ABOUT, CONTACT.
- Hero body: centered vertically, padding `0 56px`, gap 24px.
  - Name "ALEXANDER GUO" (line break between words): Inter weight 900, 190px, line-height .82, letter-spacing -8px, white.
  - Below it: a 64×4px `#ffd964` rule, then label text "DIRECTOR — SCI-FI / ACTION / COMEDY / DRAMA": Inter weight 700, 15px, letter-spacing 3px, color `rgba(255,255,255,.55)`.

### 2. Work (list)
- Background `#222121`, padding `0 56px 64px`.
- One row per project, repeated: CSS grid `220px 1fr 90px` columns, gap 32px, vertical padding 26px, `border-top: 1px solid rgba(255,255,255,.12)`.
  - Hover state on row: background `rgba(255,255,255,.03)`.
  - Col 1: 16:9 thumbnail/still (real footage/photo — replace placeholder).
  - Col 2: project title, Inter weight 800, 44px, letter-spacing -1.5px, white.
  - Col 3: year, ui-monospace, weight 700, 12px, color `#ffd964`, right-aligned.
- Content is data-driven — map over a projects array (title, category, year, thumbnail).

### 3. About / Contact
- Background `#222121`, color white, height ~700px, `border-top: 1px solid rgba(255,255,255,.12)`, padding `64px 56px`, content vertically centered, gap 44px.
  - Headline: Inter weight 800, 46px, line-height 1.2, letter-spacing -1px, max-width 820px.
  - Below: two-column flex (gap 64px) — contact block (email: Inter 700/14px white; rep + Instagram: Inter 600/12px, `rgba(255,255,255,.5)`) and a 220×275px (4:5) portrait image.

## Interactions & Behavior
- Nav links: color transition to `#ffd964` on hover (recommend `transition: color .15s ease`).
- Work rows: background tint on hover, `transition: background .15s ease`.
- No other motion/animation in this direction — deliberately restrained.
- Responsive: at narrower viewports, scale the 190px/168px display type down (e.g. clamp() or breakpoints) before it wraps awkwardly; stack the About two-column block on mobile.

## Design Tokens
- Background: `#222121` (dark gray)
- Accent: `#ffd964` (yellow)
- Text on dark: `#ffffff`, secondary `rgba(255,255,255,.6)` / `.55` / `.5`, tertiary `rgba(255,255,255,.4)`
- Divider: `rgba(255,255,255,.12)`
- Font: Inter (weights 600–900), plus `ui-monospace` for year/meta labels
- Type scale used: 190px (hero name), 46px (about headline), 44px (work title), 15px (label), 12–14px (nav/meta)

## Assets
- Thumbnails/stills and portrait photo are placeholders in the reference file — swap in real footage stills / headshot.
- No icons or SVGs used in this direction.

## Files
- `3a-reference.html` — static HTML/CSS reference for this direction (Home, Work, About/Contact).
