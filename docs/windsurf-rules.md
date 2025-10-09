# Windsurf Cascade Rules — Rumah Inggris Frontend

These rules define the global configuration, coding standards, and design system enforcement for this project. They are intended for AI-assisted development and human contributors to keep output consistent, DRY, and production-ready.

## 1. Technology and Structure
- Framework: Next.js App Router (TypeScript) with `src/` directory.
- Styling: Tailwind CSS v4 with tokens defined in `src/app/globals.css`.
- Path alias: `@/*` -> `src/*`.
- Language: Indonesian by default (`<html lang="id">`).
- Mocking: MSW in development only via `src/providers/MockProvider.tsx`.
- SEO defaults: `src/lib/seo.ts` with `src/config/site.ts`.
- Reusable components live under `src/components/`.
- Page content follows 12-col max container 1140px via `.container-ri`.

## 2. Design Tokens (Do not hardcode hex in components)
Defined in `src/app/globals.css`:
- Colors
  - `--parchment: #F8F6F2` -> `bg-background`, `text-foreground` references map
  - `--charcoal: #3D4045`
  - `--padi: #A2B9A1` -> `text-padi`, `bg-padi`, `border-padi`
  - `--teak: #BE9A78` -> `text-teak`, `bg-teak`, `border-teak`
  - `--terracotta: #D97C5D` -> `text-terracotta`, `bg-terracotta`, `border-terracotta`
- Font
  - `--font-sans: var(--font-plus-jakarta)` from `next/font/google`

## 3. Typography Scale (Plus Jakarta Sans)
- H1: 64px, 700, line-height 1.2
- H2: 48px, 700, line-height 1.3
- H3: 24px, 600
- Body: 18px, 400, line-height 1.7
- Button/CTA: 16px, 700
Implementation guidance:
- Prefer utility classes with explicit pixel sizing (e.g., `text-[64px]`, `leading-[1.2]`).
- Use `font-bold` for 700, `font-semibold` for 600, `font-normal` for 400.

## 4. Layout and Spacing
- Grid: 12 columns, container width 1140px via `.container-ri`.
- Base spacing unit: 8px. Margins/paddings should be multiples of 8.
- Section separation: Use per-section padding, not global wrappers:
  - Mobile: `py-[64px]`
  - Desktop: `md:py-[120px]`
  - Do NOT use a page-level `space-y-*` wrapper for vertical rhythm, to avoid compounding margins.
- Navbar: sticky, parchment background, soft shadow on scroll.

## 5. Components Standards
- Button (`src/components/ui/Button.tsx`)
  - Primary: `bg-terracotta text-background` with hover shadow.
  - Secondary: Teak outline or `bg-padi text-background` when used in navbar for Login.
  - Sizes: `sm`, `md`, `lg` with paddings per spec; rounded `lg` (8px).
  - Font: bold 16px.
- Card (`src/components/ui/Card.tsx`)
  - Border `border-teak/30`, background `bg-background`, subtle shadow when needed.
- Navbar (`src/components/layout/Navbar.tsx`)
  - Left logo: 24px bold.
  - Center links: 16px regular; hover Teak.
  - Right CTA: Login with Padi background.
- RootShell wraps pages with `Navbar`, main `.container-ri`, and Teak border footer.

## 6. Accessibility and UX
- Color contrast: maintain accessible contrast for text/buttons (Charcoal on Parchment, Terracotta CTA on Parchment text).
- Hit targets: minimum 44px height for tappable controls; `Button` sizes already comply.
- Motion/overlays: keep subtle; avoid aggressive parallax or heavy animations.

## 7. Content and Language
- All user-facing copy in Indonesian.
- Headings should map to semantic tags (`h1` only once per page for the main headline).

## 8. SEO
- Page-level metadata via `export const metadata` where appropriate.
- Use descriptive `alt` attributes on images.
- Default metadata comes from `src/lib/seo.ts`; override sparingly per page.

## 9. Performance
- Prefer static generation (`export const dynamic = "force-static"`) where possible.
- Asset caching headers configured in `next.config.ts`.
- Use Next/Image with proper sizing; apply subtle overlays via CSS rather than heavy filters.

## 10. API and Data
- During development, use MSW handlers in `src/mocks/handlers.ts`.
- For real APIs, use `src/lib/api.ts::fetchJson` and environment variable `NEXT_PUBLIC_API_BASE_URL`.
- Keep view components presentational; create hooks or helpers for fetching when complexity grows.

## 11. Code Quality
- DRY first; extract UI primitives and layout patterns.
- Use TypeScript strict mode; avoid `any`.
- ESLint as configured; Tailwind utilities preferred over ad-hoc CSS.
- Commit messages: Conventional commits recommended (feat, fix, chore, docs).

## 12. How AI (Windsurf/Cascade) Should Behave
- Always use the tokens and typography scale above; never invent new color hexes in components.
- Prefer composable, reusable components over one-off styles.
- Write Indonesian copy and accessible alt/aria where applicable.
- When adding new sections/routes, maintain 120px vertical rhythm and the 1140px container.
- For new CTAs, use `Button` with primary (Terracotta) unless specifically secondary.
- Respect SSR/SSG strategy: default to static unless page requires dynamic data.

## 13. File Organization for New Work
- Pages: `src/app/<route>/page.tsx`
- Section-specific components: `src/components/sections/<SectionName>/`
- Icons/illustrations: `public/`
- Config: `src/config/`
- Utilities: `src/lib/`

## 14. Known Tooling Notes
- Tailwind v4 uses `@theme` at-rule; some linters may warn. This is acceptable.
- Fonts are managed via `next/font/google` and mapped to `--font-sans`.

---
These rules are the source of truth for visual language and code conventions. Any deviation should be intentional and documented.
