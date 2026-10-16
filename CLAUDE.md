# CLAUDE.md

Personal portfolio website for Arnau Mora Coll. Static site, English only.

@SPEC.md

## Stack

- Astro 5 (static output) + TypeScript (strict)
- Tailwind CSS 4 via `@tailwindcss/vite`
- Content Collections for projects and experience
- Hosted on GitHub Pages; deployed by `.github/workflows/deploy.yml`

## Commands

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — production build to `dist/`
- `npm run check` — `astro check` (types and content schemas)
- `npm run lint` / `npm run format` — ESLint / Prettier

Before you say a task is done, run `npm run check` and `npm run build`. Both must pass.

## Structure

- `src/pages/` — one file per route; keep pages thin, they compose components.
- `src/components/` — reusable UI components (`PascalCase.astro`).
- `src/layouts/` — `BaseLayout.astro` (head, header, footer) used by every page.
- `src/content/` — site content; schemas in `src/content.config.ts`.
- `public/` — static files served as-is (`cv.pdf`, favicon).

## Rules

- Content (texts, projects, jobs) lives in `src/content/`, never hard-coded in components.
- Do not add dependencies without asking first.
- Do not add a backend, a database or paid services (see Non-goals in SPEC.md).
- Detailed conventions: `.claude/rules/`.
