# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS 3** for all styling
- **Google Fonts**: DM Sans (body/UI) and Lora (headings) via `next/font/google`

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

> Node.js must be installed first. Install via https://nodejs.org or `nvm install --lts`.

## Project Structure

```
app/
  layout.tsx        # root layout, font setup, metadata
  page.tsx          # main product page (assembles all sections)
  globals.css       # Tailwind directives + base styles
components/
  Navbar.tsx        # sticky top nav with logo, review badge, CTA
  HeroSection.tsx   # split layout: product image left, headline right
  BenefitSection.tsx # reusable alternating image/text section (imageLeft prop)
  ClinicalStats.tsx  # 3 stat cards (7 days / 56% / 70%)
  MITCertification.tsx # white card with MIT logo, banner, stats
  ProductSection.tsx # 'use client' — image gallery + 3 purchase options
  PurchaseOption.tsx # individual purchase card with save badge
  FAQSection.tsx     # 'use client' — accordion FAQ
  Footer.tsx        # blue footer with newsletter, nav, social, location
  Stars.tsx         # star icons + ReviewBadge component
lib/
  assets.ts         # all Figma image URL constants (expire 7 days)
```

## Design Tokens (Tailwind)

| Token | Value |
|---|---|
| `primary-500` | `#1b61bb` (main blue) |
| `beige-500` | `#f4f4ed` (light background) |
| `beige-50` | `#fdfdfc` (page background) |
| `brand-green` | `#39ae5e` |
| `grey-900` | `#323334` (body text) |
| `rounded-card` | `18px` |
| `rounded-pill` | `37.5px` (buttons) |
| `blue-light` | `#ebf4ff` (FAQ section bg) |

## Key Conventions

- `app/page.tsx` is a **server component**; interactive sections use `'use client'` in their own files
- All Figma asset URLs are in `lib/assets.ts` — they **expire 7 days** from initial generation and need to be replaced with self-hosted assets for production
- `BenefitSection` accepts `imageLeft` boolean to flip layout; `image` accepts a single URL or `[urlA, urlB]` for two-column images
- Page sections are spaced with `gap-[100px]` in the main flex column
- Fonts: `font-sans` = DM Sans, `font-serif` = Lora (mapped via CSS variables in layout)
