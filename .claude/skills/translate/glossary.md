# Translation glossary

Authoritative list of terms that must not be translated, terms that must be translated in a specific way, and terms with mandated capitalisation. The DE source is the canonical wording; EN deviates from a literal translation only when this list says so.

## Do not translate (DNT)

These appear unchanged in every locale.

### Brand and identity
- `Hightecc`
- `Basile Bong`
- `hello@hightecc.com`
- `/in/basilebong`
- `Spechtstr. 3`, `50735 Köln`, `Deutschland` (postal address in impressum)
- `Sophienstraße 26, 80333 München` (insurance address in impressum)
- `Markel Insurance SE`, `Markel Pro IT v2`

### Tech tokens (live in `src/lib/tech.ts`, never in messages)
- `Python`, `Django`, `TypeScript`, `React`, `Postgres`
- `React Native`, `Expo`, `Flutter`
- `Claude`, `OpenAI`, `RAG`, `Eval`, `Tracing`
- `Tooling-Audit`, `Automation`, `Workflows`, `Integrations`

### Legal references
- `§ 5 DDG`, `§ 7 Abs. 1 DDG`, `§§ 8 bis 10 DDG`, `§ 18 Abs. 2 MStV`, `§ 19 UStG`
- `Kleinunternehmerregelung`
- `Diensteanbieter`
- The full body of the German legal text in `src/components/impressum/index.tsx` (the `<dl><dt>…</dt><dd>…</dd></dl>` blocks) — it stays in German on both `/de/impressum` and `/en/impressum`.

### Languages list (always in this exact form)
- `Deutsch · Français · English`

## Mandated translations

When the DE source contains the term on the left, the EN translation uses the term on the right. Capitalisation and punctuation as shown.

| German                        | English                                |
| ----------------------------- | -------------------------------------- |
| `KI`                          | `AI`                                   |
| `KI-Features`                 | `AI features`                          |
| `KI-Integration`              | `AI integration`                       |
| `Köln`                        | `Cologne` (in body copy and meta)      |
| `Köln, DE`                    | `Cologne, DE` (in body copy and meta)  |
| `Softwareentwicklung`         | `software engineering`                 |
| `Softwareentwickler`          | `software engineer`                    |
| `Impressum` (page title)      | `Legal notice`                         |
| `Impressum` (footer link)     | `Legal notice`                         |
| `Anbieterkennzeichnung`       | `provider information`                 |
| `Unternehmer·innen`           | `founders`                             |
| `Kund·innen-Projekten`        | `client projects`                      |
| `Nutzer·innen`                | `users`                                |
| `Big-Bang`                    | `Big Bang`                             |
| `MVP`                         | `MVP` (unchanged, common term)         |
| `Backlog`                     | `backlog`                              |
| `Release-Pläne`               | `release plans`                        |
| `Release-fähige Stücke`       | `release-ready slices`                 |
| `Meilenstein`                 | `milestone`                            |
| `Hypothesen`                  | `hypotheses`                           |
| `Tech-Stack`                  | `tech stack`                           |
| `Buzzwords`                   | `buzzwords`                            |
| `Pitch-Deck-Sprache`          | `pitch-deck speak`                     |

### Address note

In the impressum legal block (which stays German), the city is `Köln`. In ordinary body copy and metadata it becomes `Cologne` on the English locale. The hero meta block, the About credo, the footer brand suffix, and the metadata description all switch to `Cologne, DE` on `/en`.

## Rich-text tags

These tags must appear in the EN output at the same positions as in DE. Tag names are case-sensitive.

- `<em>...</em>` — emphasis, renders as `<em>` in the DOM.
- `<strong>...</strong>` — strong emphasis, renders as `<strong>`.
- `<amp>...</amp>` — accent span used in the hero headline, renders as `<span class={styles.amp}>`. Only used in `hero.headline.line2`.
- `<muted>...</muted>` — secondary tone used in the About lede, renders as `<span class={styles.ledeMuted}>`. Only used in `about.lede`.

If a translation needs to move the emphasis to a different word for it to sound natural in English, that is allowed *as long as the same tag is used and the surrounding meaning is preserved*. Do not invent new tags. Do not drop tags. Do not change the tag name.

## Voice and register

- Address the reader as informal "you" in English (matches `du` in DE).
- Use straightforward, declarative sentences. Match the DE rhythm of short clauses.
- Avoid corporate "we" — the site is a single freelancer (Basile).
- Avoid marketing buzzwords: "synergy", "leverage", "best-in-class", "cutting-edge", "world-class", "next-gen", "AI-powered". These don't appear in the DE source and must not appear in the EN translation.
- Preserve typographic flourishes: en-dashes (`—`), middle dots (`·`), arrows (`→`, `↓`). Do not substitute hyphens for em-dashes.

## Punctuation

- The DE source uses German double-low-9 quotation marks (`„…"`). In EN, switch to straight `"…"` or English curly `"…"`. Pick one style per string and be consistent.
- Apostrophes: prefer the typewriter `'` to keep CSS modules happy. Curly `'` is acceptable if the surrounding string also uses curly quotes.
- Don't add or remove final periods compared to the DE source unless the English sentence structure genuinely demands it.

## When this glossary is silent

If a term isn't covered here and isn't obviously a brand term, translate it naturally. If you find yourself making a judgement call that future translations should also follow, **add it to this glossary** as part of the same change.
