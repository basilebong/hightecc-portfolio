---
name: translate
description: Detect missing or stale English translations in src/i18n/messages/en.ts, draft them from the German source, run three parallel reviews (linguist, technical, brand-voice), reconcile, and write the result.
---

# Translate skill

## What this skill does

Keeps `src/i18n/messages/en.ts` in sync with `src/i18n/messages/de.ts`. The DE file is the source of truth. EN is type-checked against DE via the `MessageShape` helper and validated by `pnpm i18n:check` against undefined keys, missing keys, invalid keys, and orphans.

This skill is for translating *content*. It does not invent new keys, rename keys, or restructure the message tree. If a key needs to move or be renamed, the engineer does that in DE first, then runs this skill to update EN.

## Inputs

- `src/i18n/messages/de.ts` — source of truth, mostly inlined human-written German copy
- `src/i18n/messages/en.ts` — current English; may have stale, missing, or out-of-shape entries
- `.claude/skills/translate/glossary.md` — DNT (do-not-translate) and brand-mandated terms
- `.claude/skills/translate/review-prompts/{linguist,technical,brand-voice}.md` — review rubrics

## Workflow

1. **Detect the gap.** Run `pnpm i18n:check` and `pnpm typecheck`. Parse:
   - missingKeys / invalidKeys / undefined / unused output from i18n-check
   - TypeScript errors against `MessageShape` from `pnpm typecheck`
   - If both pass and the diff is empty, stop — nothing to do.

2. **Read the glossary.** Load `.claude/skills/translate/glossary.md` into context. Treat DNT terms as literals — they must appear in the EN output exactly as written.

3. **Draft translations.** For each stale or missing EN key:
   - Read the DE value.
   - Preserve all rich-text tags (`<em>`, `<strong>`, `<amp>`, `<muted>`, etc.) in the same positions.
   - Preserve ICU placeholders (`{name}`, `{count, plural, …}`) verbatim.
   - Apply the glossary: DNT terms unchanged, mandated translations used (e.g. `KI` → `AI`, `Köln` → `Cologne`).
   - Keep brand voice: direct, outcome-driven, plain, no buzzwords (see brand-voice prompt for details).
   - Render `du`-form German as informal English "you" (never "thou"; never the corporate "we").

4. **Parallel review.** Spawn three sub-agents in a *single message with multiple Agent tool calls* (this is required — the reviews must be independent and run concurrently). Each receives:
   - The original DE source for each changed key
   - The EN draft for each changed key
   - The path to `glossary.md`
   - The path to its specific review prompt under `review-prompts/`

   Roles:
   - **linguist** (`review-prompts/linguist.md`) — fluency, register, idiom, capitalisation, punctuation.
   - **technical** (`review-prompts/technical.md`) — DNT compliance, rich-tag preservation, placeholder preservation, legal-text handling.
   - **brand-voice** (`review-prompts/brand-voice.md`) — directness, no buzzwords, outcome-over-output.

5. **Reconcile.** Collect the three reviews. For each suggested change:
   - If two or more reviewers agree, accept.
   - If reviewers conflict, prefer **brand-voice** for tone, **technical** for structure/DNT, **linguist** for grammar.
   - If a reviewer flags something that is intentional (e.g. a glossary term), explain why and keep the draft.

6. **Apply.** Edit `src/i18n/messages/en.ts` in place. Do not touch the structure of the object — only the values.

7. **Re-validate.** Run, in order:
   - `pnpm typecheck` (catches shape drift via `MessageShape`)
   - `pnpm i18n:check` (catches dotted-key drift, orphans, undefined refs)
   - `pnpm check` (biome — formatting, lints)

   If any fail, fix and re-run. Do not consider the task done until all three are green.

## Hard rules

- **Never** translate the German legal block inside `src/components/impressum/index.tsx`. That JSX is verbatim statutory wording and is the same on `/de/impressum` and `/en/impressum`. Only `impressum.preface`, `impressum.section.*` are translatable.
- **Never** translate values in `src/lib/tech.ts` (`capabilityTags`, `capabilityIndex`) — those are DNT tech tokens and brand-mandated index letters.
- **Never** rename keys, reorder keys, or restructure nesting in `en.ts`. The shape must match `de.ts` exactly — that is enforced by TypeScript.
- **Never** add `as const` to `en.ts`. It uses `MessageShape` (widened strings) so that EN literals don't need to equal DE literals.
- **Never** introduce a locale-preference cookie or `localStorage` write. The site footer claim "Keine Cookies. Kein Tracking. Keine Banner." is load-bearing brand copy.

## Glossary reference

See `.claude/skills/translate/glossary.md`. Reload it on every run — it changes when the brand vocabulary grows.

## When to invoke

- After the engineer adds/edits a key in `de.ts`.
- When `pnpm i18n:check` flags missing/undefined keys.
- When `pnpm typecheck` reports `MessageShape` violations in `en.ts`.
- Periodically as a freshness check, even when CI is green.
