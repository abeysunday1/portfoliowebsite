---
name: "Navy Signal"
description: "A navy-and-electric-blue, technology-forward system for a digital marketing, SEO, lead-generation and AI marketing professional's personal brand site."
colors:
  bg: "#F8FAFC"
  surface: "#FFFFFF"
  ink: "#0B1020"
  ink-muted: "#667085"
  accent: "#3B82F6"
  accent-dark: "#2563EB"
  accent-soft: "#EAF2FF"
  border: "#E4E7EC"
  navy-soft: "#1E2A45"
typography:
  heading:
    fontFamily: "Space Grotesk, sans-serif"
    fontWeight: "600"
  body:
    fontFamily: "Inter, sans-serif"
    fontWeight: "400"
spacing:
  xs: "8px"
  sm: "16px"
  md: "28px"
  lg: "48px"
  xl: "72px"
  section-desktop: "64px"
  section-mobile: "40px"
rounded:
  sm: "10px"
  md: "14px"
  lg: "20px"
components:
  buttons: "Pill radius. Primary: solid electric-blue fill (#3B82F6), off-white text (#F8FAFC) - the only solid-fill button style on the site. Secondary/tertiary: outline variant (transparent fill, border + text in navy or white depending on ground) - never a second solid fill color. 2px lift plus soft shadow on hover."
  cards: "20px radius, 1px hairline border, white surface, no shadow at rest, soft shadow plus 4px lift on hover. Used for genuinely grouped content, never stamped on every block."
dials:
  variance: 0.5
  density: 0.3
  motion: 0.65
---

## Overview

Adisa Abiodun Sunday is a digital marketing specialist, SEO strategist, lead-generation specialist, content strategist, website manager and AI-powered marketing professional based in Nigeria, serving clients globally. The site's job is to convince businesses he understands strategy, SEO, lead generation, content and AI as one connected system, not a list of separate freelance tasks. The direction reads premium, technology-driven and trustworthy: a deep navy anchor, one confident electric-blue accent, disciplined air, and real motion since the client explicitly wants a moving, not static, site — but discipline matters as much as motion: every section earns its space, nothing sits empty by accident, and dense content (tool lists, icon sets) is organized into labeled clusters rather than left as one long undifferentiated list.

## Colors

Strictly three colors, no more: deep navy/charcoal (#0B1020) for dark sections, headings and primary buttons; off-white (#F8FAFC) and white (#FFFFFF) alternate as section grounds for rhythm; electric blue (#3B82F6) is the one accent, used for CTAs, links, icon fills, hover states, active navigation, and highlighted numbers/data. Accent-soft (#EAF2FF) backs small tags and icon chips; accent-dark (#2563EB) is for pressed/darker states of the same blue; ink-muted (#667085) is the only secondary text color. No purple, no gradients beyond a single soft radial glow behind the hero, no per-section color variation — every section uses this same three-color system, never its own palette.

## Typography

Space Grotesk carries headings: geometric, confident, technology-forward, set tight (line-height ~1.15), weights 500/600/700 only — no lighter weights are ever loaded, since headings never need them. Inter carries body copy: the industry-standard, highly legible UI typeface, holding up well at small sizes across a lot of technical copy (services, process, case studies). Weights loaded: 400 (body), 500/600 (emphasis, labels), 700 (rare, strong emphasis only) — four weights per family, not the full 18-variant range a naive Google Fonts request pulls. Running text stays near 60-70 characters wide. Both families load through one combined, weight-scoped Google Fonts request with `display=swap` and a `preconnect`, not per-family default requests. Only Space Grotesk + Inter are used anywhere on the site — no third typeface.

## Proof / Metrics

Real, verified numbers already present in the site's own content (CV, About, Experience copy) are pulled out of paragraph text and surfaced as a prominent, animated stat strip (`.site-counter`, count-up on scroll-into-view) rather than left buried in a bullet list — e.g. leads managed, social following scaled, domain-authority growth, conversion lift. Never invent a number to fill this pattern; if a metric isn't already verified somewhere in the real content, the pattern is not used for it.

## Layout

Hero splits content left / photo right (desktop), never centered-mega-hero; stacks with photo above copy on mobile. Sections alternate white and off-white grounds for rhythm without borders. Content sections use asymmetric or split layouts where the content allows (About, case studies); grids of cards are reserved for genuinely parallel items (services, process, tools) and never repeat more than twice in a row without a different layout family between them.

**Section rhythm (the vertical spacing system):** every top-level section on a page — except the hero/page-hero band and any section deliberately butted against zero top padding to compose a tight CTA-under-content moment — uses exactly `64px` top/bottom padding on desktop and `40px` on mobile, with `40px`/`24px` left/right. This is enforced site-wide, not per-page-improvised: a page that improvises its own one-off section gap (56px here, 96px there) reads as unfinished, even if each individual value looks reasonable in isolation. The hero/page-hero band itself uses `64px` top / `72px` bottom desktop, `40px`/`48px` mobile — slightly asymmetric since it sits right under the header and should lead into the next section without a dead gap. The site header itself holds a single fixed row height (108px) rather than an oversized custom value. A section that intentionally has zero top padding (a final-CTA panel floating up against the section above it) is a deliberate exception, not a missed normalization pass.

**Dense content clustering:** any list of more than ~8 similar small items (tool logos, badges, platform names) is grouped into labeled category clusters (a small uppercase category label followed by a wrapping row of compact chips) rather than rendered as one long undifferentiated list or grid. Categories stack or sit in a responsive multi-column arrangement so the section reads as an organized system, not a spreadsheet.

**Card grids:** any row of 3+ parallel cards (services, process steps, why-work-with-me, selected work, testimonials, tool chips) is laid out as a real CSS Grid — collapsing to 2 columns at tablet/mobile — never as a stacked list. See Implementation Notes below for the specific technical reason this has to be enforced deliberately on this build.

## Elevation & Depth

Cards sit flat at rest (hairline border only) and lift with a soft, navy-tinted shadow on hover/interaction — elevation signals interactivity, not decoration. The dark sections (Why Work With Me, footer, final CTA) use flat navy fills with a single soft electric-blue radial glow for depth, never a hard drop shadow on a dark ground.

## Shapes

One radius scale, held everywhere: buttons are full pill, cards and panels use 20px (14px for compact cards like process steps and tool badges), small chips/tags use a full pill at small scale. No mixing of sharp and soft corners within the same component family.

## Motion accents

A single-row desktop process grid (`.cine-process-flow`, paired with `grid-Nup`) carries a subtle electric-blue arrow between step cards to read as a left-to-right sequence rather than a card wall. Desktop-only: once the grid wraps to 2 columns at tablet/mobile, adjacent cards are no longer a left-to-right sequence, so the connector hides rather than misleading.

## Components

Buttons: pill-shaped, electric-blue fill (#3B82F6) with off-white text (#F8FAFC) is the one and only solid-fill button style on the site — every primary CTA everywhere uses exactly this, never a navy or any other solid fill. Secondary/tertiary actions use the outline variant only (transparent fill, border + text in navy or white depending on the ground) — there is no second solid color tier. Every button lifts 2px with a soft shadow on hover. Cards: 20px radius, hairline border, white surface, flat at rest, lift plus shadow on hover; used for services, process steps, portfolio items, testimonials and stat metrics — not for every content block. Icon chips: small rounded-square electric-blue-tinted fills behind line icons, consistent across trust, services and why-work-with-me sections. Tool/category chips: compact (~150px) rounded cards, grouped under a small uppercase category label rather than left loose in one undifferentiated grid.

## Do's and Don'ts

### Do's
- Do use the electric-blue accent for exactly one action per view (primary CTA, active nav link, or a single highlighted stat).
- Do keep sections alternating white/off-white grounds for rhythm.
- Do hold every section to the 64px desktop / 40px mobile rhythm unless it is the hero band or a deliberate zero-top CTA composition.
- Do load fonts as one combined, weight-scoped Google Fonts request (only the weights actually used) rather than per-family default requests that pull the full 18-variant range.
- Do group any dense flat list (8+ similar items) into labeled category clusters instead of one long list or grid.
- Do lay out any 3+ card grid as real CSS Grid rather than a stacked list.
- Do surface real, already-verified numbers from existing copy as a prominent animated stat strip rather than leaving them buried in body text — never invent one to fill a gap.
- Do fold adjacent/emerging capabilities (e.g. AEO, GEO, LLMO alongside SEO) into the existing service's copy as one supporting sentence, not as their own cards or sections — the site's job is to read as a small number of coherent capabilities, not an ever-growing list of services.
- Do use real, verified content and mark anything unverified as a placeholder rather than inventing it.
- Do animate with transform/opacity only, and keep motion honoring prefers-reduced-motion.

### Don'ts
- Don't introduce a second accent color anywhere on the site.
- Don't use a centered mega-hero; keep the hero split or asymmetric.
- Don't stack more than two card-grid sections in a row without a different layout family between them.
- Don't improvise a one-off section padding value; use the 64px/40px rhythm.
- Don't stack many single-category full-width sections back to back when they could be one section with internal clusters — each extra full-bleed section adds its own top/bottom padding overhead and makes the page feel longer than the content warrants.
- Don't load a font weight the type scale doesn't actually use.
- Don't let two different "primary" button colors coexist anywhere on the site — one button system, one solid color, everywhere.
- Don't leave a demo-template asset (old logo, placeholder name, sample image) live after real content replaces it.
- Don't fabricate client results, testimonials, or statistics not supplied by the client.

## Implementation Notes — Elementor/WordPress Guardrails

Operational lessons from building this site on this specific Elementor/WordPress setup — not design principles, but recurring technical traps worth checking for every time this bug class comes up again.

- **The per-card width control is silently non-functional.** A card's own `width`/`width_tablet`/`width_mobile` setting does not reliably generate any CSS in this Elementor build — cards depending on it silently collapse to a single column at every breakpoint, with no error anywhere in the editor or in a settings/data check. It only shows up in an actual rendered screenshot. This applies whether the width was set to a value in the wrong range *or* never set at all (chip-style rows with no per-item width control hit the same failure). The fix is always to add a `grid-Nup` (`grid-2up` through `grid-8up`) CSS Grid utility class to the *parent* container instead of trusting the child's width setting. Because this bug is baked into the page template, finding it once on one page means it is almost certainly present identically on every other page built from the same pattern — re-scan the whole site, not just the page being edited.
- **Elementor's whole-page Element Cache can hide real fixes.** Settings → Performance → Element Cache (stored as `_elementor_element_cache` post meta) can serve a stale, fully-rendered copy of a page for up to 24 hours, independent of the normal CSS-file cache. A report of "the data is right but the live page still shows the old version" should be diagnosed as this first, before assuming the fix itself failed. This site keeps Element Cache disabled.
- **Audit button colors by resolved value, not by eye.** Color drift (some CTAs solid-navy, others solid-blue) accumulates silently across pages built at different times and isn't reliably caught by a visual sample — check every button widget's actual resolved background color sitewide.
- **Icon library/prefix mismatches blank the glyph with zero visible error.** An icon's `library` field must match its value's class prefix (`fas`→`fa-solid`, `fab`→`fa-brands`, `far`→`fa-regular`). A mismatch renders nothing, silently — this needs an explicit audit pass across all icon widgets, not a visual skim.
- **Demo-template remnants can hide from a normal content search.** A leftover name or asset from the original template (e.g. text baked into an SVG logo's vector paths, or a legacy WordPress option a newer control silently defers to) won't show up in a plain text/content search — treat old-identity removal as its own explicit audit, not just a find-and-replace.
- **PHP reference-chain footgun in recursive tree-walkers.** Don't write `foreach ($el['elements'] ?? [] as &$c)` — the `??` fallback silently breaks the reference chain, so a recursive edit can report success while never actually persisting on nested (non-top-level) elements. Guard with `if (isset($el['elements']) && is_array($el['elements'])) { foreach ($el['elements'] as &$c) ... }` instead, and always re-read the saved data afterward to confirm a fix actually landed rather than trusting the script's own success message.
- **An odd item count in a grid dangles alone at the left once the grid collapses to 2 columns.** CSS Grid does not center an incomplete last row by default — a 5th item (or any odd total) sits in column 1 with empty space beside it, which reads as the exact "left-heavy" problem the grid system was built to fix in the first place. This bites any `grid-Nup` section with an odd child count once it collapses to 2 columns at tablet/mobile (or on `grid-2up` at any width). Fixed sitewide, once, in `site-motion.css`: a `:last-child:nth-child(odd)` selector spans that lone item across the row and centers it (`grid-column:1/-1; justify-self:center; max-width:calc(50% - gap)`), scoped inside the existing tablet/mobile breakpoints so it never touches a row that's actually full. Check for this specifically whenever a new grid section has an odd number of items.
- **A deliberately short trailing row (e.g. 5 categories as "3 + 2") needs its own utility, not the dangling-item fix above.** The dangling-item rule only centers a single leftover item; a genuine short row of 2+ items (a "3+2" or similar balanced split) needs the parent restructured into two sibling row containers — one `grid-Nup` per row — rather than one auto-flowing grid. `.grid-2up-centered` (in `site-motion.css`) is that second row's utility: fixed, comfortable column tracks (`minmax(0,384px)`) centered as a group via `justify-content:center`, matching the column width of a `grid-3up` row above it, and reverting to a normal stretching 2-col grid at tablet/mobile like everything else. Used for the Tools & Technology category matrix (3 categories on row one, 2 centered on row two) — reuse it anywhere else a short trailing row needs to look intentional rather than stranded.
