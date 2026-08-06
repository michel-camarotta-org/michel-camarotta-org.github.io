# 004 — Making the roadmap true

| Field   | Value                     |
| ------- | ------------------------- |
| Status  | Draft — decision required |
| Created | 2026-08-06                |
| Owner   | Michel Camarotta          |

## Problem

The site's argument is that AI work becomes valuable when it is turned into
systems people can understand, govern and improve. It makes that argument
entirely through assertion. There is no artefact, no case, no measurement and
no published writing anywhere on the page — the strongest concrete fact it
holds is the founder's experience, which `b87ce7e` moved into the hero because
it was the only evidence available.

The roadmap section now states honestly that nothing is published yet and that
each item will be linked as it is released. That reframing bought credibility
by being accurate, but it did not create a track record; it made a commitment.
A roadmap that stays unchanged for a year is worse than no roadmap, because it
demonstrates the opposite of the discipline the site argues for.

This spec is therefore the most consequential of the five, and the only one
whose completion changes what the site is able to claim.

## What ships first

One category, not five. The point is to convert the roadmap from a promise into
a record with a first entry, and the cheapest credible entry does that as well
as an ambitious one.

Of the five roadmap categories, two are plausible starting points:

- **Engineering Guides.** A single guide on one narrow practice the site
  already describes — for example, what a quality gate around an agent-assisted
  change actually contains. Costs writing time and no engineering.
- **Open-Source Tools.** A small, focused utility that makes one governed
  workflow easier to apply. Higher cost, but a repository with real code is
  stronger evidence than prose for the audience this site addresses.

**Reference Architectures** is the highest-value category and the one the brand
leads with, but it is also the largest to do well, and a thin one would damage
more than it proves.

## A source worth checking

The organisation holds a private repository,
`bau-ai-assisted-operating-system`, described as an AI-assisted organisational
operating system and transformation implementation. If any pattern in it can be
generalised and sanitised, extracting it would produce a first artefact grounded
in real work rather than written for the occasion.

This must be checked against the constraint the project has already set for
itself. The repository README states that private client engagements and
non-public organisational initiatives are intentionally excluded. Extraction is
only viable if what is published is a generalised pattern that carries no
client-identifying content and the engagement permits it. If there is any
doubt, write something new instead — the doubt itself is the answer.

## Decision needed

1. Which category ships first.
2. Whether it is written fresh or generalised from existing work, subject to
   the constraint above.
3. A date the owner is willing to be held to. A roadmap without one is a wish.

## Requirements

1. The artefact lives in its own public repository under
   `michel-camarotta-org`, with a README that stands on its own for a reader
   who has never seen this site.
2. The artefact is genuinely usable by someone who is not its author. A
   repository whose README only restates the site's positioning does not
   satisfy this.
3. The corresponding roadmap row on the site becomes a link to it.
4. The `roadmap-note` paragraph in `src/pages/index.astro` — currently
   "Nothing in this list is published yet" — is corrected the moment that stops
   being true. Shipping the artefact and leaving that sentence in place would
   reintroduce exactly the inaccuracy this work removed.
5. Spec [003](003-hero-secondary-cta.md) is revisited, since a populated
   organisation may resolve it without any change to the hero.

## Acceptance criteria

1. The roadmap row for the shipped category links to a public URL that returns
   200 to a signed-out visitor.
2. The site contains no sentence claiming nothing is published.
3. A reader arriving at the artefact from the site can tell within its first
   screen what it is for and how to use it.
4. Nothing published contains client-identifying material.

## Out of scope

- Publishing the remaining four categories. Each will be its own decision, and
  the roadmap is explicitly a statement of direction, not a delivery schedule.
- Changing the roadmap's five categories. They are the declared direction and
  this spec does not reopen them.
