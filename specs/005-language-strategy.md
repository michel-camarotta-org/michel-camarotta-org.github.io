# 005 — English only, or English and Spanish

| Field   | Value                     |
| ------- | ------------------------- |
| Status  | Draft — decision required |
| Created | 2026-08-06                |
| Owner   | Michel Camarotta          |

## Problem

The site is written entirely in English and declares `lang="en"`. The brand is
based in Montevideo, and the footer says so. Whether that is the right choice
depends on a fact this spec cannot supply: who the site is for.

If the audience is international — remote engagements, an English-speaking
professional network, readers who find the work through GitHub — then
English-only is correct and adding Spanish would cost maintenance for no
return. If the audience is primarily Uruguayan or regional, a site in English
is asking local readers to meet it halfway while its competitors do not.

There is no defect here. There is an unexamined assumption, and it is cheap to
examine now and expensive to reverse after the roadmap in
[004](004-first-public-artifact.md) starts producing content that would also
need translating.

## Decision needed

Which audience the site is written for. Everything else follows.

## Requirements if Spanish is added

1. Astro's i18n routing serves both languages, with English remaining at the
   root so existing links and the canonical URL do not break.
2. Each route declares its own `lang` and carries `hreflang` alternates
   pointing at the other language and at `x-default`.
3. Metadata is translated, not duplicated: `title`, `description`, the
   Open Graph and Twitter fields, and the `og:image:alt` text.
4. The generated sitemap covers both language trees.
5. A language switch is reachable from the header on every route.
6. The JSON-LD `description` matches the language of the page carrying it.
7. Both trees stay in sync. A page that exists in one language and not the
   other is worse than not offering the choice, so translation is part of
   shipping a change, not a follow-up to it.

Requirement 7 is the real cost, and the reason this is a decision rather than a
task. It doubles the editorial work on every future change, including every
artefact that comes out of 004.

## Requirements if English only is confirmed

1. Record the decision and its reasoning in this spec and set the status to
   Superseded by nothing — the question is closed, not pending.
2. No code changes. `lang="en"` is already correct and the site is already
   consistent.

## Acceptance criteria

If Spanish is added:

1. Both language trees are reachable, each declaring its own `lang`, with
   reciprocal `hreflang` alternates that resolve.
2. The sitemap lists both trees.
3. No page exists in one language without its counterpart in the other.

If English only is confirmed: the decision is written down here, so the next
person to raise the question finds an answer instead of an open item.
