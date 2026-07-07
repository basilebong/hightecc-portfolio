# Writing for the Hightecc blog

This folder holds the blog. Every article is a case study or a lesson aimed at people who
run products and businesses, not at engineers. Read this before you write or edit a post.

## Who we are writing for

One reader: a **non-technical founder or business person** who is smart, busy, and skeptical.
They can spend money and make decisions. They cannot read code and do not want to. They have
been burned by vague tech talk before.

Everything below serves that reader, and serves search, because that is how they find us.

## The three rules that never bend

1. **Tell it as a story.** Never a listicle, never a lecture. Every article has a scene, a
   tension, a turn, and a lesson. Open on a concrete moment (a meeting, a decision, a mistake),
   raise the stakes, then pay it off with something the reader can use on Monday. If a paragraph
   is not moving the story forward, cut it.
2. **No jargon without a plain-language handoff.** If a term is unavoidable (A/B test, MVP,
   conversion), explain it in one plain sentence the first time, in the flow of the story. Better
   still, describe the idea and skip the term. The reader should never feel dumb, and never need
   a dictionary. When in doubt, write it the way you would say it out loud to a friend.
3. **No em dashes.** Brand rule, repo-wide. Use a period, a comma, a colon, or parentheses.
   This applies to every language.

## Voice

Basile's voice, the same one on the landing page. Direct, warm, a little contrarian. Short
sentences. Concrete over abstract. Push the reader instead of flattering them. No "great
question", no "in today's fast-paced world", no filler. Confidence without hype.

German uses the informal **Du**, capitalized (Du, Dir, Dein), matching the rest of the site.
Write German natively. Do not translate the English word for word. The story should read as if
it was born in the language it is in.

## Structure of a post

- **Title.** Carries the phrase a founder would actually search, plus a hook. "How to add AI to
  your product without setting money on fire" beats "Our AI journey".
- **Lede.** One or two sentences under the title that promise the payoff. This is the standfirst,
  not a summary.
- **TL;DR aside.** Near the top, an `<aside>` with a short label line and a list of the takeaways.
  Skimmers should get the whole argument in ten seconds and still want to read on.
- **H2 sections.** Each one is a beat in the story and a descriptive, search-friendly heading.
  Aim for four to six. Use an occasional `<h3>` only if a section genuinely splits.
- **A pull quote.** One `<blockquote>` with the line you want people to remember or share.
- **A takeaways section near the end.** The reusable pattern, spelled out as a list so it travels
  to the reader's own situation.
- **Close on the insight, not a hard sell.** The call to action lives in the page chrome, not in
  your prose. End on the thought that makes them want to talk to us.

Target length is a 5 to 8 minute read (roughly 1,000 to 1,600 words). Long enough to earn trust,
short enough to finish.

## SEO, without writing for robots

Write for the human first, then make sure the machine can read it.

- One `<h2>`-led structure with a single page `<h1>` (the title is rendered as the `<h1>` for you).
- Put the searchable phrase in the title, the lede, and at least one heading, naturally.
- Descriptive headings beat clever ones. "Decide the scoreboard before you build" tells Google
  and the reader the same true thing.
- Write the `description` by hand. It is the meta description and the list excerpt. Make it a real
  promise in about 150 characters, not a truncated first sentence.
- Choose a slug that reads like the search: `how-to-add-ai-to-your-product`. Lower case, hyphens,
  no dates, no stop-word soup. The slug is shared across languages, so keep it in English.
- Link out to real sources and internally where it genuinely helps the reader. Do not stuff links.

## Trust and confidentiality

- **Never publish a client's private numbers.** Revenue, conversion rates, weekly volumes, costs.
  You may describe them qualitatively ("bookings were rare, only a handful a week") if that is
  clearly public-safe, but no figures pulled from an internal doc.
- Name a client only when it is genuinely fine to do so. When unsure, anonymize ("a travel
  marketplace we worked with"). The lesson is the asset, not the logo.
- Every claim should be one you would defend to the client's face. No inflating results.

## The mechanics (how a post is actually built)

Each article is a directory named after its slug:

```
how-to-add-ai-to-your-product/
  index.ts   // meta (slug, date, readingMinutes) + assembles de + en
  en.tsx     // export const en: BlogArticleContent
  de.tsx     // export const de: BlogArticleContent
```

`BlogArticleContent` is `{ title, description, kicker, tags, lede, body }`. `body` is plain JSX
using only these tags, which the prose styles cover: `p`, `h2`, `h3`, `ul`/`ol`/`li`,
`blockquote`, `aside` (rendered as a callout; its first `<p>` becomes the label line), `strong`,
`em`, and `a`. Do not put class names or inline styles in the body, and do not import components
into it. Keep it pure content.

Every article ships in **both** `de` and `en`. The type enforces it, so the language switcher can
never land on a missing translation. Set `readingMinutes` honestly for the longer of the two.

To add a post: create the directory, write `de.tsx` and `en.tsx` and `index.ts`, then register it
in `../index.ts` by importing its `article` and adding it to `registry`. Ordering by date is
automatic. The list page, the article page, the sitemap, and the OG image all pick it up from
there.

Before you call it done, run from the repo root:

```
pnpm check && pnpm typecheck && pnpm build
```
