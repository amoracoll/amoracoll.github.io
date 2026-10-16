# Personal Website — Specification

## Purpose
Personal portfolio for Arnau Mora Coll, AEC Developer.
It shows my professional experience, my projects and how to contact me.

## Audience
- Recruiters and hiring managers in AEC / BIM / software.
- Other developers who find my projects on GitHub.

## Goals
- A visitor understands who I am and what I do in under 10 seconds.
- A visitor can download my CV in one click.
- Each project explains the problem, my solution and the technologies used.

## Non-goals
- No blog (for now).
- No backend, no database, no user accounts.
- No paid services.

## Language
English only.

## Pages

### Home (`/`)
- Name, role and a one-sentence value proposition.
- Short intro (2–3 sentences).
- Featured projects (max 3, from projects marked `featured: true`).
- Links to Experience, Projects and Contact.

### Experience (`/experience`)
- Timeline of jobs, newest first: company, role, dates, location, 2–4 bullet achievements.
- Education section.
- Skills grouped by category (e.g. Languages, BIM tools, Frameworks).
- "Download CV" button (`/cv.pdf`).

### Projects (`/projects`)
- Grid of project cards: title, one-line summary, tags, cover image (optional).
- Sorted: featured first, then by date (newest first).

### Project detail (`/projects/[slug]`)
- Title, summary, date, tags, links (GitHub repo, demo, video).
- Body sections: Problem, Solution, Technical details, Result.

### Contact (`/contact`)
- Email (mailto link), LinkedIn, GitHub.
- No contact form.

### Global
- Header with navigation on every page; footer with social links and year.
- Light and dark mode, following the system preference, with a manual toggle.
- 404 page.

## Content model

### `projects` collection (`src/content/projects/*.md`)
| Field | Type | Required |
|---|---|---|
| title | string | yes |
| summary | string (max 160 chars) | yes |
| date | date | yes |
| tags | string[] | yes |
| featured | boolean | no (default false) |
| repo | URL | no |
| demo | URL | no |
| cover | image | no |

### `experience` collection (`src/content/experience.yaml`)
| Field | Type | Required |
|---|---|---|
| company | string | yes |
| role | string | yes |
| start | date (YYYY-MM) | yes |
| end | date (YYYY-MM) or null for current | yes |
| location | string | yes |
| highlights | string[] (2–4 items) | yes |

## Quality requirements
- Lighthouse score ≥ 95 in Performance, Accessibility, Best Practices and SEO.
- Responsive from 360 px to 1440 px.
- WCAG 2.1 AA colour contrast; full keyboard navigation.
- Each page has a unique `<title>` and meta description, plus Open Graph tags.
- Zero broken links (checked in CI).

## Hosting and deployment
- Repository: `github.com/amoracoll/amoracoll.github.io`.
- Hosted on GitHub Pages, deployed by GitHub Actions on every push to `main`.

## Definition of done (v1)
- [ ] All pages above exist and are linked from the navigation.
- [ ] At least 3 projects and the full experience list are filled in.
- [ ] CV PDF is downloadable.
- [ ] Quality requirements pass.
- [ ] Site is live at `https://amoracoll.github.io`.