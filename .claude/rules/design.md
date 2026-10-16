# Design

## Style

Minimal and technical: lots of whitespace, one accent colour, no decorative elements.
Reference feel: developer documentation sites.

## Tokens

- Font: system sans-serif stack for text; monospace for tags, dates and code.
- Accent colour: Tailwind `blue` (`blue-600` in light mode, `blue-400` in dark mode). Use it only for links, focus rings and primary buttons.
- Neutral palette from Tailwind `zinc`.
- Max content width: `max-w-3xl` for text pages, `max-w-5xl` for grids.

## Rules

- Mobile first: write base styles for mobile, then `md:` and `lg:`.
- Every colour pair must pass WCAG AA contrast, in light and dark mode.
- Dark mode with Tailwind's `dark:` variant; never hard-code colours that break in dark mode.
- Visible focus state on every interactive element.
- No animations except subtle transitions (≤ 200 ms); respect `prefers-reduced-motion`.
