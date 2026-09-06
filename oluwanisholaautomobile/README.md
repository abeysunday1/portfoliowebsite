# Oluwanisholaautomobile — Blogger website

A complete Blogger (XML template) website for Oluwanisholaautomobile, an auto
repair and mobile mechanic workshop in Mushin/Matori, Lagos.

## What's in here

```
theme.xml               Blogger XML theme — upload this in Theme settings.
                         Contains the site-wide design system (navy/orange/
                         white brand, header, sticky mobile call/WhatsApp
                         bar, footer, LocalBusiness schema) AND the full
                         Home page content (baked in via the isHomepage
                         view condition).
pages/services.html      Content for the "Services" Page
pages/brands.html        Content for the "Brands We Service" Page
pages/about.html         Content for the "About" Page
pages/gallery.html       Content for the "Gallery" Page
pages/contact.html       Content for the "Contact" Page
blog/starter-posts.md    5 ready-to-paste starter blog posts
```

## 1. Install the theme

1. In Blogger, go to **Theme > Edit HTML** (or Customize > ... > Edit HTML).
2. Back up the current theme first (Theme > Backup/Restore) in case you
   need to revert.
3. Select all existing XML and replace it with the full contents of
   `theme.xml`, then **Save**.
4. Visit the blog's homepage — it should now show the full marketing
   homepage (hero, trust bar, services grid, brands preview, gallery
   preview, about snippet, CTA band).

## 2. Create the five static Pages

For each file in `pages/`, go to **Pages > New Page**, switch the editor to
**HTML view** (the `< >` icon, not Compose), paste the file's content, and
publish. **Use the exact page title shown below** — Blogger generates each
page's URL from its title, and the theme's navigation and cross-page links
(services grid, brand links, footer, etc.) are hardcoded to these exact
URLs:

| File | Exact Page title | Resulting URL |
|---|---|---|
| `pages/services.html` | `Services` | `/p/services.html` |
| `pages/brands.html` | `Brands We Service` | `/p/brands-we-service.html` |
| `pages/about.html` | `About` | `/p/about.html` |
| `pages/gallery.html` | `Gallery` | `/p/gallery.html` |
| `pages/contact.html` | `Contact` | `/p/contact.html` |

After pasting each page's HTML, open the **Search Description** field in
the right-hand sidebar and paste in the meta description noted in the
comment at the top of that page's file (this is what Google shows in
search results — it only appears if you fill it in).

Each page file's top comment also has a "swap out" note where relevant —
most importantly, **`pages/gallery.html` uses stock placeholder photos**;
replace those `<img src="...">` values with the business's own photos
(uploaded via Blogger's Insert Image button) before going live.

## 3. Set up site navigation

The nav bar and its mobile menu are driven entirely by Blogger's built-in
**Pages** widget (`PageList1`), so once your Pages exist you just need to
order them and add two link-only entries:

1. Go to **Pages** in the Blogger dashboard.
2. Click **Add external link** (or **+ Add a page > Add external link**,
   depending on your Blogger version) and create:
   - Link text `Home`, URL `/`
   - Link text `Blog`, URL `/search/label/Blog`
3. Drag all seven items into this order: **Home, Services, Brands We
   Service, About, Gallery, Blog, Contact**.
4. Under **Pages > Configure**, choose *Show pages as: Top tabs* — the
   theme reads this list directly for the header nav, so no further setup
   is needed.

## 4. Publish the starter blog posts

`blog/starter-posts.md` contains 5 posts, each with a title, an HTML block
to paste, a suggested label, and a meta description. For each one:

1. **Posts > New Post**, set the exact title given.
2. Switch to HTML view, paste the ```html``` block.
3. Set **Label** to `Blog` (this is what makes it show up at
   `/search/label/Blog`, which the nav's "Blog" link and footer both
   point to).
4. Paste the meta description into **Search Description**.
5. Publish.

Add a real photo to each post via Insert Image if you have one — the posts
are written to stand on their own without one, but a photo helps CTR from
search and social.

## 5. Business details already wired into the theme

- **Phone / WhatsApp:** +234 703 752 0976 (used in `tel:` links and
  `wa.me` deep links throughout — header, sticky mobile bar, every
  "Contact for Price" button, footer).
- **Emails:** oluwanisholaotomobiles@gmail.com, info@oluwanishola.com
  (footer, Contact page).
- **Address:** 43 Ojekunle, Papa Ajao, Mushin Way, Matori, Lagos (footer
  map embed, Contact page map embed, LocalBusiness schema).
- **Hours:** Monday–Saturday, 8am–6pm (topbar, footer, LocalBusiness
  schema `openingHoursSpecification`).
- **Schema.org markup:** `AutoRepair` LocalBusiness JSON-LD is emitted on
  the homepage only (`theme.xml`, in `<head>`), listing address, phone,
  hours and all 12 services. Update the placeholder `image` URL once a
  real logo/photo is uploaded to Blogger, so it's used for the business
  listing image.

If any of the above ever changes (new number, new hours), search `theme.xml`
and the `pages/*.html` files for the old value and replace every occurrence
— they're duplicated intentionally (rather than pulled from one variable)
because Blogger's templating can't share a value between the theme and
page content.

## 6. Recommended Blogger settings

- **Settings > Basic > Title/Description:** set the blog Title to
  something like `Oluwanisholaautomobile | Auto Repair & Mobile Mechanic, Mushin Lagos`
  — Blogger's automatic `<title>` composition (`data:blog.pageTitle`, used
  throughout `theme.xml`) appends this to every page and post title, so
  it's the main lever for consistent, keyword-rich `<title>` tags site-wide
  without hand-editing each page.
- **Settings > Search preferences > Custom robots.txt / meta tags:**
  leave enabled (default) so the per-page Search Description fields you
  set in steps 2 and 4 actually get output as `<meta name="description">`.
- **Settings > Basic > Privacy:** make sure the blog is set to visible to
  search engines.
- Consider a **custom domain** (Settings > Publishing) — the Page URL
  slugs above stay the same on a custom domain since they're root-relative
  paths (`/p/services.html`, etc.), so nothing in the theme needs to
  change if you move off `*.blogspot.com` later.

## 7. What was intentionally left simple

- **No JavaScript framework.** All interactivity (mobile nav toggle,
  sticky WhatsApp bar, contact form) is a few lines of vanilla JS in
  `theme.xml` and `pages/contact.html` — nothing to install, nothing that
  can break on Blogger's constrained scripting environment.
- **Contact form has no backend.** Blogger doesn't provide one. The form
  on the Contact page builds a pre-filled WhatsApp message and opens it in
  a new tab on submit — zero setup, and it matches how the business
  already takes enquiries. Swap it for a Google Forms embed or a
  Formspree endpoint later if you want submissions logged somewhere
  instead.
- **Pricing is never shown.** Every service and CTA routes to "Contact for
  Price" (WhatsApp or call), consistent with how the business already
  operates on Jiji.
