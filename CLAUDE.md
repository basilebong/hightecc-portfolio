@AGENTS.md

# Code style

No comments unless the "why" is non-obvious. Class names, function names, and component structure should carry meaning on their own. Don't label sections, don't restate what a line does, don't leave task-log comments. Only keep a comment when it explains a hidden constraint, a workaround, or a decision that would otherwise surprise a reader.

No inline Tailwind overrides on shadcn primitives. If a primitive doesn't look right with its default variant and size, either pick a different variant or edit the CVA config once — don't bolt on a long className at the call site.

One blank line between every CSS rule block, including sibling rules inside a media query.

# Design system

shadcn/ui on top of Tailwind v4 and the Next.js 16 App Router. Dark, single-theme — no `.dark` class.

Design tokens live in `globals.css` as two parallel sets: shadcn tokens that drive the UI primitives, and landing-only tokens that drive the section styles. Both are exposed via `@theme inline`. Fonts come from `next/font/google` in the root layout and are wired in as CSS variables.

German copy is inlined in each section component. `src/lib/site.ts` holds only the shared identity (name, owner, nav, contact URLs).

# Modular structure

Every component lives in its own directory under `src/components/` as `index.tsx` plus its co-located CSS module. Imports use the directory name, not the file name. Shadcn primitives live under `src/components/ui/`.

`globals.css` holds only globals: token definitions, base elements, the `section` framing, the `.grid-overlay`, and the `.meta*` labels.

`<SectionHead>` is shared — every numbered section uses it.

# Layout grid

All content aligns to a 12-column grid via `Container`, `Row`, and `Col` from `@/components/ui/grid`. The `.grid-overlay` in the root layout draws the same 12 tracks so alignment is visible while iterating.

`Container` caps width at 1280px and centers it. `Row` is the 12-column CSS grid. `Col` accepts `span` (mobile, default 12), `md` (≥720px override), `start`, and `mdStart`. Sections compose layouts with whole-column spans; visual gutters come from internal padding on the Col content or from leaving an empty column via `mdStart`. Default column gap is 0 so column edges sit exactly on the overlay lines — use `rowGap` on `Row` for vertical spacing when columns wrap on mobile.

# Adding a section

Create the component directory, use `<SectionHead>` for the heading, lay the body out with `<Container><Row><Col span={…} md={…}>…`, reach for shadcn primitives with their default variants, wire the component into `src/app/page.tsx`, and run `pnpm check && pnpm typecheck && pnpm build`.
