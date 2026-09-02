# Adisa Abiodun Sunday — Digital Marketing Portfolio
### Design System & WordPress/Elementor Build Guide

This document accompanies the coded prototype in this repository (`index.html`, `about.html`, `services.html`, `portfolio.html`, `experience.html`, `contact.html`, `cv.html`, `privacy.html`, `assets/`). The prototype is a fully responsive, static HTML/CSS/JS build of the site — use it as the visual and structural reference when rebuilding the same design in WordPress + Elementor.

**Important:** No client names, revenue figures, traffic numbers, conversion rates, testimonials, certifications, awards, or employment history have been invented anywhere in this build. Every such field is a clearly marked placeholder (`[Add ...]`, "Client testimonial will be added here," "Project details will be added here once published," etc.). Replace placeholders only with verified information before publishing.

---

## 1. Complete Sitemap

```
Home (/)
├── About (/about.html)
├── Services (/services.html)
│    ├── Digital Marketing Strategy
│    ├── SEO
│    ├── Lead Generation
│    ├── Social Media Marketing
│    ├── Content Marketing
│    ├── AI-Powered Marketing
│    ├── WordPress & Website Management
│    └── Email Marketing & Automation
├── Portfolio / Case Studies (/portfolio.html)
│    └── Individual case study detail pages (one per project, same template)
├── Experience (/experience.html)
├── Contact (/contact.html)
├── CV / Resume (/cv.html)
└── Privacy Policy (/privacy.html) — footer utility page, not in main nav
```

Primary navigation stays to six items (Home, About, Services, Portfolio, Experience, Contact) plus a standout "CV / Resume" and "Let's Talk" action — matching the brief's requirement to keep navigation simple.

---

## 2. Homepage Wireframe (section stack)

1. Sticky header / nav
2. Hero — headline, subtext, 2 CTAs, expertise strip, photo panel
3. Trust & Expertise — 4 cards (Digital Marketing, SEO & SEM, Lead Generation, AI & Automation)
4. About teaser — photo + intro copy + skill checklist + "More About Me"
5. Services — 8-card grid + link to full Services page
6. My Process — 5-step numbered/connected track
7. Selected Work — 3 featured case-study cards + "View All Work"
8. Tools & Technologies — badge grid
9. Why Work With Me — 6-item grid on dark navy background
10. Testimonials — 3 placeholder cards
11. Final CTA — full-width dark banner, 2 buttons
12. Footer — brand, nav, contact, social, legal

Interior pages (About, Services, Portfolio, Experience, Contact, CV) reuse the same header/footer and a consistent `.page-hero` band, so the system feels like one site rather than disconnected templates.

---

## 3. Color Palette (HEX)

| Token | Hex | Use |
|---|---|---|
| Navy (primary dark) | `#0B1220` | Headings, dark sections, footer, buttons |
| Navy 2 | `#131B2E` | Gradient partner for navy, dark surfaces |
| Navy Soft | `#1E2A45` | Gradient highlight, hover states |
| White | `#FFFFFF` | Base background |
| Off-White | `#F7F9FC` | Section alternation background |
| Surface | `#F1F4F9` | Subtle fills |
| Gray 900 | `#101828` | Body text on light backgrounds (dark) |
| Gray 700 | `#344054` | Default body text |
| Gray 500 | `#667085` | Secondary / supporting text |
| Gray 300 | `#D0D5DD` | Borders |
| Gray 200 | `#E4E7EC` | Card borders, dividers |
| Gray 100 | `#F0F2F6` | Light fills, dashed placeholder boxes |
| **Accent (tech teal)** | `#00C2A8` | Buttons, links, icons, highlights |
| Accent Dark | `#009D89` | Hover states, eyebrow text |
| Accent Soft | `#E3FBF6` | Icon backgrounds, tag chips |
| Accent Ink | `#05473F` | Text on accent-soft backgrounds |

Rationale: navy communicates trust and technology; the single teal accent reads as modern/AI-adjacent without becoming a "gradient-heavy startup" cliché. Gray scale (Untitled-UI-style ramp) keeps text hierarchy clean and accessible (all body text passes WCAG AA against white/off-white).

---

## 4. Typography

- **Headings:** Space Grotesk (500/600/700) — geometric, confident, technology-forward.
- **Body:** Inter (400/500/600/700) — highly legible at small sizes, excellent multilingual/number support for stats and data.
- **Loaded via Google Fonts** in `<head>` of every page (`fonts.googleapis.com`).

Scale (fluid via `clamp()`):
- H1: `clamp(2.4rem, 5vw, 3.6rem)` / 700
- H2: `clamp(1.9rem, 3.4vw, 2.6rem)` / 600
- H3: `1.3rem` / 600
- Body: `1rem`, line-height `1.6`
- Eyebrow labels: `0.78rem`, uppercase, letter-spacing `0.14em`, 700 weight

Only one H1 per page (page title / hero headline); services, case studies and timeline entries use H3 within H2-headed sections — satisfying the SEO heading-hierarchy requirement.

---

## 5. Section-by-Section Layout Notes

| Section | Layout | Elementor widget mapping |
|---|---|---|
| Header/Nav | Sticky flex row, logo left, links center, CTAs+hamburger right | Elementor **Nav Menu** widget in a sticky **Container** (Motion Effects → Sticky) |
| Hero | 2-column container (55/45), text left / photo right, stacks on mobile | **Container** (flex, 2 columns) with **Heading**, **Text Editor**, **Button** ×2, **Image** |
| Trust/Expertise | 4-col grid | **Container** grid (4 cols → 2 → 1) of repeated **Icon Box** widgets |
| About | 2-col container, photo + copy | **Container** + **Image** + **Icon List** (skills) + **Button** |
| Services | 4×2 grid of cards | **Container** grid of **Icon Box** widgets (or **Loop Grid** bound to a "Services" CPT) |
| Process | 5-col connected track | **Container** (flex) of 5 **Icon Box**/**Number Counter**-style boxes; use a thin **Divider** as the connector line |
| Portfolio | Filterable 3-col grid | **Loop Grid** widget bound to a "Case Studies" CPT, with Elementor's built-in **Taxonomy Filter** for category buttons |
| Tools | 6-col badge grid | **Container** grid of simple **Text** or **Icon Box** widgets (no external logo assets needed) |
| Why Work With Me | Dark-background 3-col grid | **Container** (background: navy) of **Icon Box** widgets, text color overridden to white |
| Testimonials | 3-col cards | **Container** grid of **Testimonial** widget (Elementor Pro) or custom **Icon Box** cards |
| Final CTA | Full-width dark banner, centered | **Container** with background gradient, **Heading**, **Text**, 2 **Buttons** |
| Contact | 2-col: form + info card | **Form** widget (Elementor Pro) left, **Container** info card right |
| Footer | 3-col + bottom bar | Elementor **Theme Builder → Footer** template, **Container** grid + **Nav Menu** + **Social Icons** |

---

## 6. Recommended Images & Icons

- **Hero/About photo:** Replace the monogram placeholder (`AAS` on navy gradient) with a real, professionally shot or well-lit portrait — vertical orientation, simple background, natural expression, business-casual attire. Export at minimum 1200px on the long edge, WebP format.
- **Case study thumbnails:** Use real screenshots (dashboards, published content, website screens) once each case study is documented — never stock photography standing in for real work.
- **Icons:** The prototype uses inline, hand-drawn SVG line icons (24×24, 1.8px stroke, no external icon font) to avoid license/version bloat. In Elementor, replace with **Font Awesome 6 Free** (already bundled) or **IcoFont**, matched to the same line-icon style (avoid mixing filled and outline icon sets).
- **Tool badges:** Text-based cards are used by default (safe, license-free). If official partner/press permission exists, swap in real SVG logos at consistent height (~28px) on a neutral card background.

---

## 7. Complete Homepage Copy

**Eyebrow:** Digital Marketing · SEO · Lead Generation · AI

**H1:** I Help Businesses Turn Digital Marketing Into Growth.

**Subtext:** Digital marketing, SEO, lead generation and AI-powered strategies designed to attract the right audience, generate opportunities and build stronger digital systems.

**Buttons:** View My Work · Let's Work Together

**Expertise strip:** Digital Marketing • SEO • Lead Generation • AI Marketing • Content Strategy • WordPress

**Trust section eyebrow/H2:** How I Work / A connected approach to digital growth
*(full card copy for all 8 services, 5 process steps, why-work-with-me items, and CTA copy is implemented verbatim in `index.html` — this file is the single source of truth for that copy.)*

**Final CTA:** Ready to Grow Your Digital Presence? / Let's discuss your goals and build a digital marketing strategy designed around your business. — Start a Project · Contact Me

---

## 8. Mobile Layout Recommendations

- Header collapses to logo + hamburger at ≤860px; nav links and secondary CTA move into a slide-in drawer (`.nav-drawer`) — already implemented and functional in the prototype (`assets/js/main.js`).
- Hero stacks to a single column with the photo panel **above** the copy (`.hero-visual{order:-1}`) so the personal photo still lands first on mobile.
- All 4/3-column grids collapse: 4→2→1 and 3→2→1 at 1024px/640px breakpoints.
- Buttons expand to comfortable 48px+ tap targets; forms stack to one column at ≤640px.
- Process track and tools grid drop their side connectors/columns and stack vertically for readability.
- Type scale shrinks fluidly via `clamp()` rather than a hard mobile breakpoint jump, avoiding awkward reflow.
- Test at 375px (small phone), 768px (tablet) and 1024px (small laptop) minimum.

---

## 9. Elementor Implementation Instructions

1. **Global Settings** (Elementor → Site Settings):
   - **Colors:** add the palette in Section 3 as Global Colors (Primary = Accent `#00C2A8`, Secondary = Navy `#0B1220`, Text = Gray 700 `#344054`, Accent = Accent Dark `#009D89`).
   - **Typography:** add Space Grotesk (headings) and Inter (body) as Global Fonts; set default H1–H4 and body styles to match Section 4.
   - **Buttons:** create a Global Button style (pill radius `999px`, 15px/28px padding, hover lift + shadow) matching `.btn-primary`/`.btn-dark`/`.btn-outline`.
   - **Layout:** set container width to 1200px, default section padding to the fluid values in Section 4.
2. Build each page as an Elementor **Container** (not the legacy Section/Column), nesting inner containers for grids — this maps directly to the flex/grid CSS already used in the prototype.
3. Save repeating elements (service card, process step, testimonial card, footer, header) as **Elementor Global Widgets/Templates** so edits propagate site-wide.
4. Use the **Theme Builder** for Header and Footer templates applied site-wide, rather than rebuilding them per page.
5. For Portfolio, create a **Case Study** Custom Post Type (via a plugin such as JetEngine, Pods, or ACF + CPT UI) with fields for Challenge / Strategy / Execution / Tools / Results, then render the archive with a **Loop Grid** and single template with a **Loop Item**.
6. Recreate the mobile drawer nav using Elementor's native **Nav Menu** widget mobile "Dropdown" behavior, or a lightweight menu plugin — no custom JS required in Elementor unless replicating the exact slide-in drawer look, in which case use Elementor's Custom CSS/JS panel (Pro) with the logic in `assets/js/main.js` as reference.
7. Compress and serve images as WebP (Elementor's built-in Image Optimizer or a plugin like ShortPixel).

---

## 10. SEO Recommendations

- One H1 per page (already enforced across all templates).
- Logical H2 → H3 hierarchy within every section (no skipped levels).
- Unique, descriptive `<title>` and meta description per page (already written into every HTML file — replace `example.com` canonical URLs with the live domain).
- SEO-friendly URLs: keep the flat structure (`/about`, `/services`, `/portfolio`, `/experience`, `/contact`) once migrated into WordPress permalinks.
- Add descriptive `alt` text to every real image once photos/screenshots are added (currently no `<img>` raster assets exist — only inline SVG/CSS placeholders).
- Internal linking: every section already cross-links to Services, Portfolio, Contact and CV — preserve this in the WP build.
- Install **Rank Math** or **Yoast SEO** for meta control, XML sitemap generation, and schema.
- Add `Person` and `ProfessionalService`/`Organization` structured data (a starter `Person` JSON-LD block is already included in `index.html`'s `<head>` — expand it with real sameAs social profile URLs).
- Connect **Google Search Console** and **Google Analytics 4** post-launch; submit the XML sitemap.
- Optimize Core Web Vitals: lazy-load below-the-fold images, use a caching plugin (WP Rocket / LiteSpeed Cache), and a lightweight Elementor-compatible theme (Hello Elementor or Astra).
- Mobile-first indexing is already covered by the fully responsive layout.

---

## 11. Recommended Animations

Keep animation minimal and purposeful, per the brief:
- Card hover: subtle `translateY(-4px)` lift + soft shadow (already in CSS) — in Elementor, use **Hover Animations → Grow/Float** at low intensity, no rotation/flip effects.
- On-scroll entrance: simple fade-up (Elementor **Motion Effects → Entrance Animation: Fade In Up**), staggered slightly across grid items — avoid bounce/elastic easing.
- Sticky header on scroll (Motion Effects → Sticky), no shrink/color-flash gimmicks.
- Button hover: color shift + 2px lift (already implemented) — no pulsing or looping animations anywhere on the site.
- Avoid: auto-playing carousels, parallax on text-heavy sections, animated gradients, and any animation that delays reading the hero headline.

---

## 12. Recommended Plugins

- **Elementor Pro** — Theme Builder, Forms, Loop Grid, Popups (used sparingly, if at all)
- **Rank Math SEO** (or Yoast SEO) — meta, sitemap, schema
- **WP Rocket** or **LiteSpeed Cache** — performance/caching
- **ShortPixel** or **Imagify** — image compression/WebP conversion
- **JetEngine / Pods / ACF + Custom Post Type UI** — Case Study custom post type for Portfolio
- **WPForms** or Elementor Pro Forms + **WP Mail SMTP** — reliable contact form delivery
- **UpdraftPlus** — backups
- **Wordfence** or **Sucuri** — security
- **Site Kit by Google** — Analytics + Search Console integration in one dashboard

---

## 13. Suggested Portfolio / Case-Study Structure

Each case study (Loop Item template) should include:

1. Title + category tag(s) (SEO & Content, Lead Generation, Social Media, Website Management, Real Estate, Technology, Email Marketing, AI Marketing)
2. Featured image/screenshot
3. **Challenge** — the business problem or goal
4. **Strategy** — the approach taken
5. **Execution** — what was actually built/published/launched
6. **Tools** — platforms and tools used
7. **Results** — reported only when verifiable; otherwise a plain description of work completed, per the brief's explicit instruction never to invent metrics
8. Optional real client quote (only if supplied and approved by the client)

The prototype's `portfolio.html` implements this exact structure with eight placeholder category slots and a working client-side filter — populate each with real project data as it becomes available.

---

## 14. Suggested Navigation Structure

**Primary nav:** Home · About · Services · Portfolio · Experience · Contact
**Secondary/utility:** CV / Resume (outline button) · Let's Talk (filled accent button) — both in header and mobile drawer
**Footer nav:** mirrors primary nav + Privacy Policy + social icons (LinkedIn, Email, WhatsApp) + copyright

---

## Outstanding items before launch

- [ ] Replace all `[bracketed]` placeholders in `experience.html` (roles, companies, dates, certifications) with verified data.
- [ ] Replace testimonial placeholders in `index.html` with real, approved client quotes, or remove the section until available.
- [ ] Replace portfolio placeholder notes with real Challenge/Strategy/Execution/Tools/Results content per project.
- [ ] Add a real professional photo (hero + about sections) in place of the monogram placeholder.
- [ ] Replace `hello@example.com`, WhatsApp number, and LinkedIn URL with real contact details in every page footer + `contact.html`.
- [ ] Add the real CV PDF at `assets/docs/Adisa-Abiodun-Sunday-CV.pdf`.
- [ ] Wire `contact.html`'s form to a real email/CRM endpoint (currently a front-end-only placeholder — see `assets/js/main.js`).
- [ ] Replace `https://www.example.com/` canonical URLs with the live domain once deployed.
- [ ] Write a real, jurisdiction-appropriate privacy policy to replace the placeholder in `privacy.html`.
