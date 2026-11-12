---
name: portfolio-design
description: Visual design system for Tolulope Joshua Akinniyi's engineering portfolio — a technical, minimal, dark-green-accented design language inspired by insideout.sh's restraint and the information architecture of rileythomp.com, timidan.xyz, and sonofuri.dev. Load before building or modifying any page, component, or style in this portfolio.
---

# Portfolio Design System

## 1. Design Philosophy

This portfolio is the professional home of a backend-first, full-stack engineer. The design must read as **deliberate and technical**, not decorative. Three principles govern every decision:

1. **Restraint over ornamentation.** No gradients-as-decoration, no floating shapes, no glassmorphism. The one exception is the signature accent glow (see §2) — used sparingly, never as a background wash.
2. **Typography and whitespace do the work.** Hierarchy comes from type scale, weight, and spacing — not boxes, not color-coding every element.
3. **Monospace signals engineering.** Use a mono typeface for metadata, labels, code, and technical values (stack tags, dates, numbers) to reinforce technical credibility, the way insideout.sh uses code/data as decoration.

Reference synthesis (do not clone any of these):
- **rileythomp.com** → minimal intro, confident short copy, generous whitespace, simple nav.
- **timidan.xyz** → multi-faceted identity (work, lab, writing, activity) organized as distinct, well-labeled sections rather than one long scroll.
- **sonofuri.dev** → clean timeline for experience, theme switching, structured expertise groupings.
- **insideout.sh** → dark, technical, card/grid modularity, monospace accents, restrained motion, data-as-decoration.

## 2. Color Palette — Signature: Glowing Dark Green

The accent is a **dark, saturated green with a soft glow**, used for the primary CTA, active states, focus rings, links, and small highlight accents (never as a full-section background).

### Dark theme tokens (default theme)

```css
:root {
  --bg: #07100d;            /* near-black with a green undertone */
  --bg-elevated: #0c1713;   /* card/surface background */
  --bg-overlay: #11201a;    /* hover surface / popover */
  --border: #1c2f27;        /* default hairline border */
  --border-strong: #2a4438; /* emphasized border / divider */

  --text-primary: #eaf2ee;  /* headings, primary copy */
  --text-secondary: #a9bdb4;/* body copy */
  --text-muted: #6b8177;    /* captions, meta, placeholders */

  --accent: #22c55e;        /* primary dark green accent */
  --accent-strong: #16a34a; /* pressed / high-emphasis */
  --accent-dim: #14532d;    /* subtle fills, badges */
  --accent-glow: rgba(34, 197, 94, 0.35); /* glow/shadow color only */

  --danger: #ef4444;
  --warning: #f59e0b;
}
```

### Light theme tokens

Light mode is NOT an inversion — it is designed intentionally with a cooler, paper-like neutral base and the same green identity dialed down for contrast.

```css
:root[data-theme="light"] {
  --bg: #f7faf8;
  --bg-elevated: #ffffff;
  --bg-overlay: #eef3f0;
  --border: #dde7e1;
  --border-strong: #c3d3cb;

  --text-primary: #0d1a14;
  --text-secondary: #39493f;
  --text-muted: #70867a;

  --accent: #15803d;        /* deeper green for AA contrast on white */
  --accent-strong: #166534;
  --accent-dim: #dcf2e3;
  --accent-glow: rgba(21, 128, 61, 0.18);

  --danger: #dc2626;
  --warning: #b45309;
}
```

**Rules:**
- Never introduce a color outside this palette without updating this file first.
- The glow (`--accent-glow`) is applied only via `box-shadow`/`filter: drop-shadow`, at low opacity, on: the primary button, the active nav indicator, the hero name/initial mark, and hover state of project cards. It must never animate continuously (no pulsing loops) — a glow that moves on every frame reads as a template effect. A one-time transition on hover/focus is correct.
- Body backgrounds are always flat `--bg`. Glow sits on small elements, not sections.

## 3. Typography

- **Headings (h1–h4):** `Fraunces` (via `next/font/google`, weights 400/500/600, normal + italic, fallback `Georgia, "Times New Roman", serif`) — an editorial serif applied globally to every heading tag via a CSS selector (`h1,h2,h3,h4 { font-family: var(--font-serif-heading); }`), not per-component. Gives the site a more stylistic, less purely-technical identity than an all-sans system. Use `<em>` for a single emphasized word within a heading where it adds character (e.g. a name, a key phrase) — styled italic, often in `--accent`. Don't overuse the italic emphasis; one per heading at most, and not on every heading.
- **Body/UI sans:** `Space Grotesk` (via `next/font/google`, fallback `Inter`) — body copy, nav, buttons, non-heading UI text.
- **Monospace:** `JetBrains Mono` (via `next/font/google`, fallback `ui-monospace`) — labels, tags, dates, stack chips, code, the hero kicker line, section numbers (`01 /`, `02 /`).
- Fallback stack: `font-family: var(--font-sans), -apple-system, "Segoe UI", sans-serif;` and `var(--font-mono), ui-monospace, "SFMono-Regular", monospace;`

### Scale (rem, 1rem = 16px)

| Token | Size | Weight | Use |
|---|---|---|---|
| `--text-display` | 3.5rem / 4.5rem (lg) | 600 | Hero name/headline |
| `--text-h1` | 2.25rem | 600 | Page titles |
| `--text-h2` | 1.5rem | 600 | Section titles |
| `--text-h3` | 1.125rem | 600 | Card titles |
| `--text-body` | 1rem | 400 | Paragraph copy |
| `--text-small` | 0.875rem | 400 | Secondary copy |
| `--text-mono` | 0.8125rem | 500 | Labels/tags, uppercase, `letter-spacing: 0.04em` |

Line height: 1.15 for display/headings, 1.6 for body copy, 1.4 for small/mono labels.

Letter-spacing: headings `-0.01em` (slightly tight), mono labels `+0.04em` to `+0.08em` (tracked out), body `0`.

## 4. Iconography

- **Library: Lucide (`lucide-react`)** exclusively. Do not mix in Heroicons, Font Awesome, or emoji as functional icons.
  - Exception: brand marks (GitHub, LinkedIn logos) aren't in `lucide-react` — use the inline SVGs in `src/components/brand-icons.tsx`, sized and weighted to match Lucide's visual footprint. This is the only sanctioned exception.
- Stroke width: `1.5` (Lucide default) everywhere — never mix stroke weights.
- Size: `16px` inline with text/labels, `20px` in nav/buttons, `24px` for standalone section markers.
- Icons are always paired with a text label in navigation and buttons — never icon-only except the theme toggle and social links (which get `aria-label` + tooltip).
- Icon color follows text color (`currentColor`), except the one or two "active/primary" icons that may use `--accent`.
- Icon containers (e.g. skill category headers): a `36px` square, `1px solid var(--border)`, `border-radius: 8px`, icon centered, background `--bg-elevated`.

## 5. Spacing Scale

4px base unit, used via Tailwind's default scale (already 4px-based) — do not invent custom spacing values.

| Token | px | Tailwind |
|---|---|---|
| xs | 4 | `1` |
| sm | 8 | `2` |
| md | 16 | `4` |
| lg | 24 | `6` |
| xl | 32 | `8` |
| 2xl | 48 | `12` |
| 3xl | 64 | `16` |
| 4xl | 96 | `24` |

Section vertical padding: `py-24` (desktop) / `py-16` (mobile). Card internal padding: `p-6`. Gap between grid cards: `gap-6`.

## 6. Layout & Containers

- Max content width: `1120px` (`max-w-[1120px] mx-auto px-6`).
- Reading width for long-form (case studies, writing): `720px`.
- Grid: 12-column implicit via Tailwind `grid-cols-12` only where genuinely needed; most sections use simple `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- Section anatomy: mono eyebrow label (`"02 / Experience"`) → h2 → one-line description → content.

## 7. Borders & Radius

- Radius scale: `6px` (small controls, chips), `10px` (cards, inputs), `14px` (large surfaces/modals). No fully-rounded (`9999px`) elements except pills/badges and the theme toggle switch.
- Borders are `1px solid var(--border)` by default; `var(--border-strong)` for emphasis or on hover.
- Avoid "excessive rounded cards" — 10px is the ceiling for primary cards, do not go softer.

## 8. Shadows & Elevation

- Default cards: no shadow, border only (flat, technical look).
- Elevated surfaces (dropdowns, modals): `box-shadow: 0 8px 24px rgba(0,0,0,0.35)` (dark) / `0 8px 24px rgba(16,24,20,0.08)` (light).
- Glow shadow (accent elements only): `box-shadow: 0 0 0 1px var(--accent), 0 0 24px var(--accent-glow);`

## 9. Buttons

- **Primary:** `bg: var(--accent)`, text `#05130a` (dark text on green for contrast), `radius: 8px`, `px-5 py-2.5`, mono label optional. Hover: `bg: var(--accent-strong)` + glow shadow. Focus-visible: 2px accent outline, 2px offset.
- **Secondary:** transparent bg, `1px solid var(--border-strong)`, text `--text-primary`. Hover: border → `--accent`, text → `--accent`.
- **Ghost/text link:** no border, `--text-secondary`, hover → `--accent` with underline (text-decoration, not border-bottom, for proper baseline alignment).
- All buttons: `transition: background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease`. No bounce/elastic easing.

## 10. Cards

- Project card: border `1px solid var(--border)`, `radius 10px`, `bg: var(--bg-elevated)`, `p-6`. Hover: border → `var(--accent)`, subtle `translateY(-2px)`, glow shadow at low opacity. No shadow on idle state.
- Avoid repetitive identical card grids for different content types — vary layout (e.g., featured project = large card with image, secondary projects = compact list rows) per timidan.xyz's "selected work" pattern.

## 11. Navigation

- Desktop: fixed top bar, `h-16`, `backdrop-filter: blur(8px)` over `rgba(bg, 0.7)` on scroll only (not glassmorphism everywhere — just the nav bar for legibility while scrolling).
- Active route indicator: small `2px` underline or dot in `--accent`, not a filled pill.
- Mobile: hamburger → full-screen overlay menu, large touch targets (`min-h-12`), same mono-label style.
- Keyboard: full tab order, visible focus rings (`outline: 2px solid var(--accent); outline-offset: 2px`), skip-to-content link.

## 12. Interactive States & Motion

- Respect `prefers-reduced-motion: reduce` — disable all transform/opacity transitions beyond instant state changes when set.
- Standard transition duration: 150–200ms, `ease-out`. Section reveal-on-scroll (if used): single fade+8px translate, once, not repeated on every scroll direction.
- No parallax, no auto-playing background animation, no infinite marquees except an optional slow (40s+ loop) logo/stack strip, and only if it doesn't distract.
- Theme toggle: animate the icon swap (sun/moon) with a simple 200ms cross-fade/rotate — not a jarring hard cut.

## 13. Responsive Rules

Breakpoints follow Tailwind defaults (`sm 640`, `md 768`, `lg 1024`, `xl 1280`).
- Mobile nav collapses at `md`.
- Hero display text steps down: `text-4xl` (mobile) → `text-6xl` (lg).
- Grids collapse to single column below `md`; experience timeline becomes a single vertical line (no side-by-side date column) below `md`.
- Never just scale down the desktop layout 1:1 — recompose stacking order so the most important info (name, current role, primary CTA) is always first on mobile.

## 14. Accessibility Requirements

- Color contrast: body text ≥ 4.5:1, large text/headings ≥ 3:1 against `--bg` in both themes (verify `--accent` on `--bg` meets this — the dark-theme accent `#22c55e` on `#07100d` passes; do not use `--accent` as text-on-text with `--text-muted`).
- All interactive elements reachable via keyboard, visible focus state, no `outline: none` without a replacement.
- Icon-only buttons require `aria-label`.
- Respect `prefers-reduced-motion`.
- Semantic HTML: `<nav>`, `<main>`, `<header>`, `<section aria-labelledby>`, heading levels in order (one `h1` per page).
- Theme preference persisted (e.g. `localStorage` + `data-theme` attribute), and respects `prefers-color-scheme` on first visit.

## 15. Component Conventions

- **Badges/tags** (stack chips, category labels): mono font, `text-xs`, `px-2.5 py-1`, `radius: 999px` (pill — the one allowed full-round case), `border: 1px solid var(--border)`, `bg: var(--bg-overlay)`. An "active/current" badge may use `bg: var(--accent-dim)`, `color: var(--accent)`, `border-color: var(--accent)`.
- **Dividers:** `1px solid var(--border)`, full-bleed within container, generous margin (`my-16`+) between major sections — never a decorative gradient rule.
- **Section eyebrow:** mono, uppercase or sentence-case with a numeric prefix (`"02 /"`), `--text-muted`, tracked out.
- **Timeline (experience):** left-aligned vertical line (`1px solid var(--border)`), node dot in `--accent` per entry, date in mono, role/company in sans bold, bullets below.

## 16. Do's and Don'ts

**Do:**
- Use the dark-green glow as the single signature visual motif — consistently, sparingly, intentionally.
- Keep every page's information density readable — one clear idea per section.
- Use mono type for anything "data-like" (dates, stack, numbers, labels).
- Design light and dark themes as equally first-class.

**Don't:**
- Don't add a second accent color "for variety." Use `--accent-dim`/opacity variants of the same green instead.
- Don't use drop shadows or glow on body text, large backgrounds, or more than ~2 elements per viewport at once.
- Don't mix icon libraries or stroke weights.
- Don't invent spacing/radius values outside the scales above.
- Don't animate on every scroll tick — animate once per element, respect reduced motion.
- Don't use skill-percentage bars or fabricated proficiency ratings.

## 17. Example Application — Hero Section

```
[mono eyebrow]  "BACKEND ENGINEER / NODE.JS · TYPESCRIPT · APIS"   (--text-muted)
[display h1]    "Tolulope Joshua Akinniyi"                         (--text-primary, glow on a small accent underline/mark only)
[body]          2–3 line positioning statement                      (--text-secondary)
[mono row]      "Lagos, Nigeria · Open to remote & relocation"
[buttons]       [View work] (primary, glow on hover)  [Resume ↓] (secondary)
```

This skill file is the design authority for this project. Any implementation (Tailwind config, CSS variables, component code) must trace back to a token or rule defined here.
