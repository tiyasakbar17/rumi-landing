This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Project Guide (Rumah Inggris MVP)

## Stack

- Next.js App Router (TypeScript)
- Tailwind CSS v4
- MSW (Mock Service Worker) for API mocking in development
- Lightweight UI primitives in `src/components/ui/`

## Scripts (Yarn)

```bash
yarn dev     # start dev server with Turbopack
yarn build   # build for production
yarn start   # start production server (after build)
yarn lint    # run ESLint
```

## Development

- Source lives in `src/` for scalability.
- Reusable shell: `src/components/layout/RootShell.tsx`.
- UI components: `src/components/ui/`.
- Example mocked list: `src/components/demo/MockedList.tsx`.
- SEO defaults set via `src/lib/seo.ts` and `src/config/site.ts` and used in `src/app/layout.tsx`.

## Mocked APIs (MSW)

- Handlers: `src/mocks/handlers.ts`.
- Browser worker: `src/mocks/browser.ts` (auto-started in development by `src/providers/MockProvider.tsx`).
- Server mock (for Node tests or future SSR mocking): `src/mocks/server.ts`.
- Worker file generated at `public/mockServiceWorker.js`.

During development, `MockProvider` starts MSW and mocks endpoints like `/api/example` and `/api/submit`.

## API Integration (when backend is ready)

- Use `src/lib/api.ts`:
  - `fetchJson<T>(path, options)` with optional `NEXT_PUBLIC_API_BASE_URL` prefix.
  - Example: `fetchJson('/api/users')` or `fetchJson('https://api.example.com/users')`.
- Replace or extend handlers in `src/mocks/handlers.ts` as you implement real endpoints.
- To disable mocks in production, nothing to do — `MockProvider` runs only in `development`.

## SEO

- Edit site defaults in `src/config/site.ts` (name, description, url, keywords, ogImage).
- OG image: `public/og-image.svg`.
- Robots: `public/robots.txt`.

## Performance Defaults

- Static rendering for the home page (`export const dynamic = "force-static";`).
- `next.config.ts` sets asset caching headers and enables React strict mode.
- Use Next Image for optimized images if adding custom images.

## Conventions

- Use `@/*` path alias for imports from `src/`.
- Keep components reusable and DRY.
- Mobile-first styling with Tailwind.

## Next Steps

- Add routes/pages for your core MVP features.
- Replace mocks with real API calls as contracts are finalized.
- Optional: add Prettier, Husky, and CI workflow if desired.
