# Hightecc

Personal site for [Basile Bong](https://linkedin.com/in/basilebong): freelance software development, based in Cologne. German copy, single dark theme, built as a hand-tuned design system on top of shadcn/ui.

Live: [hightecc.com](https://hightecc.com)

## Stack

- **Next.js 16** (App Router) on **React 19**
- **Tailwind CSS v4** with tokens exposed via `@theme inline`
- **shadcn/ui** primitives over Radix
- **TypeScript**, **Biome** for lint + format, **Lefthook** + **commitlint** on the commit hook
- **pnpm** for installs, **Docker** multi-stage build for deploys

## Architecture

**Design tokens in two layers.** `src/app/globals.css` defines two parallel token sets: one drives shadcn primitives (button, input, card), the other drives the landing sections. Both are exposed through `@theme inline` so Tailwind utilities resolve to the same values the components use. Fonts (`DM Sans`, `Merriweather`, `JetBrains Mono`) are loaded via `next/font/google` and wired in as CSS variables on `<html>`.

**12-column grid, visible while iterating.** Every section composes its layout with `Container`, `Row`, and `Col` from `@/components/ui/grid`. A `.grid-overlay` element in the root layout draws the same 12 tracks behind the page so alignment is checkable at a glance during development. Default column gap is `0`. Column edges sit exactly on the overlay lines, and gutters come from internal padding or empty columns via `mdStart`.

**One directory per component.** Each component lives at `src/components/<name>/index.tsx` with a co-located CSS module. Imports reference the directory, never the file. shadcn primitives sit under `src/components/ui/`. Numbered sections (`01 · Über`, `02 · Arbeit`, …) share a single `<SectionHead>` for consistent typography and meta labels.

**No inline overrides on primitives.** If a shadcn primitive doesn't look right with its default variant, the CVA config gets edited once, not patched with long `className` strings at every call site. Conventions are documented in [`CLAUDE.md`](./CLAUDE.md) and [`AGENTS.md`](./AGENTS.md).

## Project layout

```
src/
  app/
    globals.css      tokens, base elements, section frame, grid overlay
    layout.tsx       fonts, <html lang="de">, grid overlay mount
    page.tsx         section composition
    impressum/       legal page (German requirement)
  components/
    ui/              shadcn primitives + grid (Container/Row/Col)
    hero/ about/ pillars/ capabilities/ products/ contact/
    section-head/    shared numbered-section heading
    site-header/ site-footer/ logo-wordmark/
  lib/
    site.ts          shared identity (name, nav, contact URLs)
deploy/
  compose.yaml       production docker compose
Dockerfile           multi-stage, non-root runtime, healthcheck
```

## Development

```bash
pnpm install
pnpm dev          # next dev on :3000
pnpm check        # biome lint + format check
pnpm typecheck    # tsc --noEmit
pnpm build        # production build
```

Commits go through Lefthook: Biome runs on staged files, and commitlint enforces [Conventional Commits](https://www.conventionalcommits.org/) on the message. See `commitlint.config.ts` for the allowed types.

## Deploy

The production image is a multi-stage Next.js standalone build running as a non-root user with a built-in healthcheck. CI runs `biome check`, `typecheck`, and `build` before pushing the image; the server pulls and recreates via `deploy/compose.yaml`. All deploy credentials live in GitHub Actions secrets. None are committed.

## License

Proprietary, all rights reserved. The source is published for portfolio and transparency purposes only; reuse requires written permission. See [`LICENSE`](./LICENSE).
