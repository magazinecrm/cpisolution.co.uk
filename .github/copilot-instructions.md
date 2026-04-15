## Quick orientation for AI coding agents

This project is a Next.js (v12) site with React 18, Prisma for database access, and a component-driven UI under `src/components`. Use these notes to be productive quickly and avoid breaking conventions.

- Architecture highlights
  - Next.js pages live in `pages/` (server + client code). API routes are under `pages/api/*`.
  - UI components and page-specific component variants are in `src/components/` (many folders use numeric suffixes, e.g. `BlogDetails100`, `BlogDetails200`, `BlogDetails300` — keep that pattern when adding variants).
  - Static assets (images, fonts, vendor CSS) live under `src/assets/*` and are imported via aliases (see `jsconfig.json`).
  - Prisma ORM is used. Schema: `prisma/schema.prisma`. Client helper: `lib/prisma.js` (singleton pattern to avoid multiple PrismaClient instances in dev).

- Important files to reference
  - `package.json` — dev/build/start scripts (`dev`, `build`, `start`, `lint`).
  - `jsconfig.json` — path aliases (e.g. `@/components/*`, `@/context/*`). Use these aliases in imports to match project conventions.
  - `src/pages/_app.js` — global CSS imports, `ContextProvider` usage, and Google Analytics pageview hook (uses `gtab.js`).
  - `gtab.js` (root) — GA helpers and `NEXT_PUBLIC_GA_ID` usage. `_app.js` imports `GA_TRACKING_ID` and calls `gtag.pageview` on route change.
  - `lib/prisma.js` — exports Prisma client. Example pattern to import: `import prisma from '@/lib/prisma'` or `import prisma from '../../lib/prisma'` depending on file location.

- Project-specific conventions and patterns
  - Import alias: use `@/` prefixes (configured in `jsconfig.json`). E.g. `import ContextProvider from '@/context/ContextProvider'`.
  - Component variants: many UI components have numbered variants (e.g. `BannerOne`, `BannerOnez`, `BlogDetails100`, `BlogDetails200`). Preserve naming and folder structure when adding variants.
  - Data driving pages: `src/data/` contains page data modules (e.g. `blogDetailsPage.js`, `bannerOne.js`) that are paired with components; modify both data and matching component when changing content.
  - Global state: `src/context/ContextProvider.js` provides a small context (menu status, active anchor). Use it rather than adding separate global variables.

- Database and environment
  - Prisma schema: `prisma/schema.prisma` (models: `User`, `Test100` in current schema). The datasource uses `env("DATABASE_URL")` — ensure `DATABASE_URL` is set for DB work.
  - `lib/prisma.js` implements the dev-safe singleton pattern (uses `global.prisma`) — do not replace this with multiple PrismaClient instantiations.
  - Typical Prisma workflow (if making schema changes): update `prisma/schema.prisma`, then run migrations with the Prisma CLI (e.g. `npx prisma migrate dev`), then regenerate client (`npx prisma generate`). These commands are not in `package.json`, so call via `npx` if necessary.

- Analytics & globals
  - Analytics helper: `gtab.js` exports `pageview` and `event`. `_app.js` wires route changes to `gtag.pageview(url)`; `NEXT_PUBLIC_GA_ID` (env var) must be present for tracking.

- Build / dev / debugging
  - Run locally: `npm run dev` (starts Next dev server on :3000).
  - Build for production: `npm run build` then `npm run start`.
  - Lint: `npm run lint` (uses Next's ESLint config).
  - No test scripts are present in `package.json` (no test harness discovered).

- Safety and low-risk edits guidance for agents
  - When editing UI, update both `src/components/...` and the corresponding `src/data/...` file when present.
  - Avoid renaming numeric component folders unless you refactor all imports across the repo (they are referenced directly by pages and data modules).
  - For DB changes, prefer small schema updates and run migrations locally. Respect `lib/prisma.js` singleton pattern.
  - When adding third-party CSS, prefer adding under `src/assets/vendors/` and importing in `_app.js` or the component that needs it.

- Examples (concrete pointers)
  - Global provider: `src/context/ContextProvider.js` — use `<ContextProvider>` wrapper already present in `pages/_app.js`.
  - GA: `gtab.js` + usage in `src/pages/_app.js` (imports `GA_TRACKING_ID` from `/gtab.js`).
  - Prisma client: `lib/prisma.js` (import where needed in API routes under `pages/api/`).

If anything here is unclear or you'd like more detail (for example, a mapping of which `src/data/*` file controls which page), tell me which area to expand and I'll iterate.
