# Code style

## TypeScript
- `strict` mode; no `any`. Use `unknown` and narrow it.
- Type component props with an `interface Props` in the frontmatter.
- Prefer `const`; no `var`.

## Astro components
- One component per file, `PascalCase.astro`.
- Order inside a component: frontmatter (imports → `Props` → logic), markup, then `<style>` only if Tailwind cannot do it.
- No client-side JavaScript unless it is necessary. If it is, use the smallest `client:*` directive that works.
- Images: use `<Image />` from `astro:assets`, always with `alt`.

## Naming
- Files: components `PascalCase.astro`; pages and content `kebab-case`.
- Variables and functions: `camelCase`. Constants: `UPPER_SNAKE_CASE`.

## Formatting
- Prettier is the source of truth; do not format by hand against it.