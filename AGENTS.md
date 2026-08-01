# KC Property Solution Goa — Real Estate Website

## Quick Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build to dist/
git push          # Auto-deploys to Vercel (kcpropertysolutions.vercel.app)
```

## Tech Stack

- **Astro 7.1.6** — Static site, content collections v7 API
- **Tailwind CSS v4** — Via `@tailwindcss/vite`, CSS `@theme` tokens in `src/styles/global.css`
- **Fonts** — Manrope Variable (headings), Inter Variable (body), self-hosted via `@fontsource-variable`
- **CMS** — Decap CMS 3.x at `/admin`, GitHub backend
- **Forms** — Web3Forms (access key still placeholder)
- **Hosting** — Vercel with auto-deploy from GitHub

## Critical Astro 7 Patterns

```ts
// Content collections in src/content.config.ts — MUST use glob loader:
import { glob } from 'astro/loaders';
loader: glob({ base: './content/properties', pattern: '**/*.md' })

// Rendering content — use render() function, NOT entry.render():
import { render } from 'astro:content';
const { Content } = await render(post);
```

## Project Structure

```
content/
  properties/     # 21 .md files (3 per category)
  posts/          # 2 articles
  settings/       # site.json (global config)
public/images/properties/  # 64 SVG placeholder images
src/
  components/brand/Logo.astro    # Building icon + wordmark + tagline
  components/layout/             # Header, Footer, MobileBottomNav, WhatsAppButton
  components/home/               # HeroCarousel, FeaturedListings, StatsCounter, etc.
  components/properties/         # PropertyCard, EnquiryForm
  components/forms/ContactForm.astro
  layouts/BaseLayout.astro       # Shell with OG meta, header, footer, mobile nav
  pages/                         # 31 static routes
  lib/                           # site.ts, properties.ts, format.ts, seo.ts
  styles/global.css              # Brand tokens, fonts, utilities
```

## Brand Identity

- **Name:** KC Property Solution Goa
- **Tagline:** "elevate your living"
- **Colors:** palm-900 (#0B3D2E), sand-50 (#F7F4EE), brass-500 (#C9A227), laterite-500 (#C0563B), ink (#1A1D1C)
- **RERA:** AGGO10252013
- **Phone:** +91 9011436002 | **Email:** support@kcprsolution.com

## Categories & Properties

7 property categories (3 properties each = 21 total):
plots, villas, guest-houses, apartments, hotels, resorts, commercial

## Important Notes

- Project filter tabs on `/projects` use client-side JavaScript (`data-category` attributes + `<button>` elements, NOT server-side filtering)
- Decap CMS at `/admin` — `public/admin/config.yml` + `public/admin/index.html`
- Always `npm run build` before committing to verify no errors
- Push to main → Vercel auto-deploys
