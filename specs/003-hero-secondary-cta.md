# 003 — Where the hero's second button leads

| Field   | Value                     |
| ------- | ------------------------- |
| Status  | Draft — decision required |
| Created | 2026-08-06                |
| Owner   | Michel Camarotta          |

## Problem

The hero offers two actions. The first, "Explore the approach", scrolls into
the page. The second, "View GitHub", leaves for
`github.com/michel-camarotta-org`, an organisation whose only public repository
is this website. A visitor who takes the site's second most prominent action
arrives at a listing containing the page they just left.

This is the same problem that spec-driven work already removed from the roadmap
section. In `b87ce7e` that section stopped presenting five unbuilt artefact
categories as things to go and explore, and its link to the organisation was
dropped. The hero still makes the promise, in a more prominent position, with a
label — "View GitHub" — that reads as an invitation to go and see the work.

It was left alone deliberately. Removing GitHub from the hero of a brand whose
argument is engineering discipline is a positioning decision, not a defect fix,
and the owner chose to keep the roadmap's declared ambition rather than delete
it. That choice is consistent with keeping a GitHub link. It is not consistent
with the current label and destination.

## Options

**A. Point it at LinkedIn.** "Connect on LinkedIn" leads somewhere with real
content today. Costs the site its only outbound engineering signal above the
fold, which for this brand is a real loss.

**B. Point it into the page.** "Get in touch" scrolls to the contact section,
which already lists LinkedIn, both GitHub profiles and email. Keeps both hero
actions on-site, which is coherent but makes the hero less of a gateway.

**C. Keep GitHub and close [004](004-first-public-artifact.md) instead.** The
destination stops being empty rather than the link changing. Best outcome, and
the only one that requires work elsewhere before it is true.

**D. Keep GitHub, change only the label.** Something that does not promise a
body of work — the organisation as identity rather than as portfolio. Cheapest,
but it is a wording patch over a destination problem.

## Recommendation

C, if the first artefact is close. Otherwise A as an interim, reverting to
GitHub once 004 lands. D is acceptable if neither is near-term; B is the
weakest, because it removes the hero's only outbound link for no gain.

## Decision

_Not yet taken. Record the choice and the reasoning here, then set the status
to Ready._

## Requirements

Once the decision is recorded:

1. The hero's secondary action leads to a destination whose content matches its
   label.
2. The label states what the visitor will find, not merely which platform it is
   hosted on.
3. If the destination is external, it follows whatever rule
   [002](002-site-shell-completeness.md) settles for external links.

## Acceptance criteria

1. Following the hero's second action lands on a page that contains what the
   label led the visitor to expect.
2. No remaining call to action anywhere on the site presents the organisation
   as a body of work while its only public repository is this site.

## Note on the other GitHub links

The header, footer and contact section also link to the organisation. Those are
identity links in conventional positions, where a visitor expects a profile
rather than a portfolio, and they are not in scope here. If 004 lands they stop
being a question at all.
