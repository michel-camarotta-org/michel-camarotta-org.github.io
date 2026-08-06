# Specifications

Pending work on this site is written down before it is built. A spec states the
problem with the evidence behind it, what the result has to satisfy, and how
anyone can check that it was satisfied. Implementation follows the spec rather
than the other way round.

## When a spec is warranted

Write one when a change alters **what the site claims**, **how it behaves for a
visitor**, or **how it is validated and deployed**. Everything else — typos,
copy edits within an existing claim, dependency bumps, refactors that leave
behaviour identical — goes straight to a pull request.

## Lifecycle

| Status          | Meaning                                                 |
| --------------- | ------------------------------------------------------- |
| **Draft**       | Open question inside. Nobody should implement it yet.   |
| **Ready**       | Decided and unambiguous. Can be picked up as-is.        |
| **Implemented** | Shipped. The spec records the commit that closed it.    |
| **Superseded**  | Replaced by another spec, which is named in the header. |

A `Draft` becomes `Ready` by recording the decision in the spec's own
**Decision** section — not in a chat, an issue comment, or a commit message.
That record is the point: the reasoning survives the person who had it.

## Writing acceptance criteria

Criteria have to be checkable by someone who was not part of the discussion.
Prefer a number and a method over an adjective:

- Not "the diagram should not look cramped" but "at 1024px wide, no label
  extends past its box".
- Not "the preview should work" but "the URL passes LinkedIn's Post Inspector
  with an image rendered".

## Verifying visual and responsive criteria

The criteria in these specs that reference specific widths were established by
loading the built site in a headless browser and measuring the DOM — element
overflow (`scrollWidth` against `clientWidth`), position against the viewport,
computed colour contrast, and whether a target is above the fold at a given
viewport height. The sweep used was 320, 360, 390, 500, 600, 700, 820, 900,
981, 1000, 1024, 1100, 1180, 1200, 1280, 1340, 1440, 1600 and 1920px.

That harness is deliberately not committed: it would add a browser dependency
to a site that otherwise builds with no runtime JavaScript. Every criterion
below is therefore also checkable by hand in a resized browser window. If the
harness is ever committed, it belongs in a dev-only script, not in the build.

## Index

| Spec                                  | Status | Subject                                  |
| ------------------------------------- | ------ | ---------------------------------------- |
| [001](001-pull-request-validation.md) | Ready  | Validate pull requests before merge      |
| [002](002-site-shell-completeness.md) | Ready  | 404 page, icons, link behaviour, targets |
| [003](003-hero-secondary-cta.md)      | Draft  | Where the hero's second button leads     |
| [004](004-first-public-artifact.md)   | Draft  | Making the roadmap true                  |
| [005](005-language-strategy.md)       | Draft  | English only, or English and Spanish     |

## Origin

Specs 001 to 005 came out of a full review of the deployed site in August 2026,
which also produced two commits of fixes: `2f45f8e` (social preview, responsive
flow diagrams, self-hosted type, contrast, mobile navigation) and `b87ce7e`
(roadmap reframing, principle consolidation, background surfaced in the hero).
What is written here is what that review found and did **not** fix, either
because it needed a decision that was not mine to make or because it was out of
the scope agreed at the time.
