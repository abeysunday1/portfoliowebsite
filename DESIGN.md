---
name: "Navy Signal"
description: "A navy-and-teal, technology-forward system for a digital marketing, SEO, lead-generation and AI marketing professional's personal brand site."
colors:
  bg: "#F7F9FC"
  surface: "#FFFFFF"
  ink: "#0B1220"
  ink-muted: "#667085"
  accent: "#00C2A8"
  accent-dark: "#009D89"
  accent-soft: "#E3FBF6"
  border: "#E4E7EC"
  navy-soft: "#1E2A45"
typography:
  heading:
    fontFamily: "Space Grotesk, sans-serif"
    fontWeight: "600"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
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
  buttons: "Pill radius. Primary: solid teal fill, navy text. Secondary: solid navy fill, white text. Outline variant on light or dark grounds. 2px lift plus soft shadow on hover."
  cards: "20px radius, 1px hairline border, white surface, no shadow at rest, soft shadow plus 4px lift on hover. Used for genuinely grouped content, never stamped on every block."
dials:
  variance: 0.5
  density: 0.3
  motion: 0.65
---

## Overview

Adisa Abiodun Sunday is a digital marketing specialist, SEO strategist, lead-generation specialist, content strategist, website manager and AI-powered marketing professional based in Nigeria, serving clients globally. The site's job is to convince businesses he understands strategy, SEO, lead generation, content and AI as one connected system, not a list of separate freelance tasks. The direction reads premium, technology-driven and trustworthy: a deep navy anchor, one confident teal accent, disciplined air, and real motion since the client explicitly wants a moving, not static, site — but discipline matters as much as motion: every section earns its space, nothing sits empty by accident, and dense content (tool lists, icon sets) is organized into labeled clusters rather than left as one long undifferentiated list.

## Colors

Deep navy (#0B1220) is the anchor for dark sections, headings and primary buttons; off-white (#F7F9FC) and white (#FFFFFF) alternate as section grounds for rhythm. One accent only: teal (#00C2A8), used for CTAs, links, icon fills and the one active navigation state. Accent-soft (#E3FBF6) backs small tags and icon chips; ink-muted (#667085) is the only secondary text color. No purple, no gradients beyond a single soft radial glow behind the hero.

## Typography

Space Grotesk carries headings: geometric, confident, technology-forward, set tight (line-height ~1.15), weights 500/600/700 only — no lighter weights are ever loaded, since headings never need them. Plus Jakarta Sans carries body copy: warmer and more distinctive than the generic Inter default, while holding the same excellent legibility at small sizes this data-and-credibility-led professional-services site needs across a lot of technical copy. Weights loaded: 400 (body), 500/600 (emphasis, labels), 700 (rare, strong emphasis only) — four weights per family, not the full 18-variant range a naive Google Fonts request pulls. Running text stays near 60-70 characters wide. Both families load through one combined, weight-scoped Google Fonts request with `display=swap` and a `preconnect`, not per-family default requests.

## Layout

Hero splits content left / photo right (desktop), never centered-mega-hero; stacks with photo above copy on mobile. Sections alternate white and off-white grounds for rhythm without borders. Content sections use asymmetric or split layouts where the content allows (About, case studies); grids of cards are reserved for genuinely parallel items (services, process, tools) and never repeat more than twice in a row without a different layout family between them.

**Section rhythm (the vertical spacing system):** every top-level section on a page — except the hero/page-hero band and any section deliberately butted against zero top padding to compose a tight CTA-under-content moment — uses exactly `64px` top/bottom padding on desktop and `40px` on mobile, with `40px`/`24px` left/right. This is enforced site-wide, not per-page-improvised: a page that improvises its own one-off section gap (56px here, 96px there) reads as unfinished, even if each individual value looks reasonable in isolation. The hero/page-hero band itself uses `64px` top / `72px` bottom desktop, `40px`/`48px` mobile — slightly asymmetric since it sits right under the header and should lead into the next section without a dead gap. The site header itself holds a single fixed row height (108px) rather than an oversized custom value — a tall header stacked on top of a full hero padding is exactly the kind of compounding gap that reads as "unnecessarily spaced out," so header height and hero padding are tuned together, not independently. A section that intentionally has zero top padding (a final-CTA panel floating up against the section above it) is a deliberate exception, not a missed normalization pass.

**Dense content clustering:** any list of more than ~8 similar small items (tool logos, badges, platform names) is grouped into labeled category clusters (a small uppercase category label followed by a wrapping row of compact chips) rather than rendered as one long undifferentiated list or grid. Categories stack or sit in a responsive multi-column arrangement so the section reads as an organized system, not a spreadsheet — and so it doesn't balloon the page's scroll length with repeated full-section padding around what is really one logical block of content.

**Card grids use real CSS Grid, not per-child flex width:** any row of 3+ parallel cards (services, process steps, why-work-with-me, selected work, testimonials) is laid out with an explicit `grid-Nup` utility class (`grid-3up`/`grid-4up`/`grid-5up`, etc. — `display:grid; grid-template-columns: repeat(N,1fr)`, collapsing to 2 columns at tablet/mobile) rather than relying on each card's own responsive width percentage. The per-child width control does not reliably generate any CSS in this Elementor build, so cards depending on it silently stack into one column at every breakpoint — a bug that went undetected for a long time because it doesn't show up in any content or settings check, only in an actual rendered screenshot.

## Elevation & Depth

Cards sit flat at rest (hairline border only) and lift with a soft, navy-tinted shadow on hover/interaction — elevation signals interactivity, not decoration. The dark sections (Why Work With Me, footer, final CTA) use flat navy fills with a single soft teal radial glow for depth, never a hard drop shadow on a dark ground.

## Shapes

One radius scale, held everywhere: buttons are full pill, cards and panels use 20px (14px for compact cards like process steps and tool badges), small chips/tags use a full pill at small scale. No mixing of sharp and soft corners within the same component family.

## Components

Buttons: pill-shaped, teal-fill primary with navy text, navy-fill secondary with white text, outline variant for tertiary actions on either light or dark grounds; every button lifts 2px with a soft shadow on hover. Cards: 20px radius, hairline border, white surface, flat at rest, lift plus shadow on hover; used for services, process steps, portfolio items and testimonials — not for every content block. Icon chips: small rounded-square teal-tinted fills behind line icons, consistent across trust, services and why-work-with-me sections. Tool/category chips: compact (~150px) rounded cards, grouped under a small uppercase category label rather than left loose in one undifferentiated grid.

## Do's and Don'ts

### Do's
- Do use the teal accent for exactly one action per view (primary CTA, active nav link, or a single highlighted stat).
- Do keep sections alternating white/off-white grounds for rhythm.
- Do hold every section to the 64px desktop / 40px mobile rhythm unless it is the hero band or a deliberate zero-top CTA composition.
- Do load fonts as one combined, weight-scoped Google Fonts request (only the weights actually used) rather than per-family default requests that pull the full 18-variant range.
- Do group any dense flat list (8+ similar items) into labeled category clusters instead of one long list or grid.
- Do lay out any 3+ card grid with a `grid-Nup` CSS Grid utility class rather than trusting each card's own responsive width setting to render correctly.
- Do match an icon's `library` field to its actual class prefix (fas→fa-solid, fab→fa-brands, far→fa-regular) — a mismatch silently blanks the glyph with no visible error, so this needs an explicit audit pass, not just a visual skim.
- Do use real, verified content and mark anything unverified as a placeholder rather than inventing it.
- Do animate with transform/opacity only, and keep motion honoring prefers-reduced-motion.

### Don'ts
- Don't introduce a second accent color anywhere on the site.
- Don't use a centered mega-hero; keep the hero split or asymmetric.
- Don't stack more than two card-grid sections in a row without a different layout family between them.
- Don't improvise a one-off section padding value; use the 64px/40px rhythm.
- Don't stack many single-category full-width sections back to back when they could be one section with internal clusters — each extra full-bleed section adds its own top/bottom padding overhead and makes the page feel longer than the content warrants.
- Don't load a font weight the type scale doesn't actually use.
- Don't leave a demo-template asset (logo, placeholder name, sample image) live after real content replaces it — audit for template remnants specifically, since they often don't show up in a text/content search (e.g. a name baked into an SVG logo's vector paths, or a legacy option a newer control silently defers to).
- Don't trust a card's own width/width_tablet/width_mobile setting to produce a multi-column grid — verify with an actual rendered screenshot, not just a settings/data check, since a non-functional control here fails completely silently.
- Don't fabricate client results, testimonials, or statistics not supplied by the client.
