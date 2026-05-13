@AGENTS.md

# Working style

Never guess. If a fact about the codebase, environment, tooling, or the user's intent is missing, ask, or read/run something to find out. Confident-sounding inference is the failure mode; "I don't know, let me check" is the recovery.

Don't be ingratiating. Skip "great question", "happy to", "please". Push back when you disagree, when a request will cause downstream pain, or when a quicker path exists. The user wants a collaborator who challenges them, not one who placates them.

# Typography

**Never use em dashes (`—`, U+2014)** in copy, code, comments, commit messages, PR descriptions, or any markdown in this repo. Brand decision. When you reach for one, split into two sentences with a period instead, or use a comma, colon, or parentheses depending on rhythm. Middle dots (`·`), en dashes used in numeric ranges, and arrows (`→`, `↓`) are still fine.

# Code style

No comments unless the "why" is non-obvious. Class names, function names, and component structure should carry meaning on their own. Don't label sections, don't restate what a line does, don't leave task-log comments. Only keep a comment when it explains a hidden constraint, a workaround, or a decision that would otherwise surprise a reader.

No inline Tailwind overrides on shadcn primitives. If a primitive doesn't look right with its default variant and size, either pick a different variant or edit the CVA config once. Don't bolt on a long className at the call site.

One blank line between every CSS rule block, including sibling rules inside a media query.

# Design system

shadcn/ui on top of Tailwind v4 and the Next.js 16 App Router. Dark, single-theme. No `.dark` class.

Design tokens live in `globals.css` as two parallel sets: shadcn tokens that drive the UI primitives, and landing-only tokens that drive the section styles. Both are exposed via `@theme inline`. Fonts come from `next/font/google` in the root layout and are wired in as CSS variables.

German copy is inlined in each section component. `src/lib/site.ts` holds only the shared identity (name, owner, nav, contact URLs).

# Modular structure

Every component lives in its own directory under `src/components/` as `index.tsx` plus its co-located CSS module. Imports use the directory name, not the file name. Shadcn primitives live under `src/components/ui/`.

`globals.css` holds only globals: token definitions, base elements, the `section` framing, the `.grid-overlay`, and the `.meta*` labels.

`<SectionHead>` is shared. Every numbered section uses it.

# Layout grid

All content aligns to a 12-column grid via `Container`, `Row`, and `Col` from `@/components/ui/grid`. The `.grid-overlay` in the root layout draws the same 12 tracks so alignment is visible while iterating.

`Container` caps width at 1280px and centers it. `Row` is the 12-column CSS grid. `Col` accepts `span` (mobile, default 12), `md` (≥720px override), `start`, and `mdStart`. Sections compose layouts with whole-column spans; visual gutters come from internal padding on the Col content or from leaving an empty column via `mdStart`. Default column gap is 0 so column edges sit exactly on the overlay lines. Use `rowGap` on `Row` for vertical spacing when columns wrap on mobile.

# Adding a section

Create the component directory, use `<SectionHead>` for the heading, lay the body out with `<Container><Row><Col span={…} md={…}>…`, reach for shadcn primitives with their default variants, wire the component into `src/app/page.tsx`, and run `pnpm check && pnpm typecheck && pnpm build`.

# Commit messages

Conventional Commits are enforced by commitlint via a Lefthook `commit-msg` hook (see `commitlint.config.ts`). Pick the type that actually matches the change. `feat:` is not the default.

- `feat:` new user-facing functionality
- `fix:` bug fix
- `refactor:` code restructure with no behavior change
- `style:` formatting, whitespace, CSS-only tweaks with no logic change
- `perf:` performance improvement
- `docs:` documentation only (README, CLAUDE.md, AGENTS.md, comments)
- `test:` adding or updating tests
- `build:` build system, dependencies, tooling configs that ship in the build
- `ci:` CI config and scripts
- `chore:` repo housekeeping that doesn't fit above (e.g. lint config, editor config)
- `revert:` reverts a previous commit

Subject is lower-case, no trailing period. Body lines wrap at 100 characters.
