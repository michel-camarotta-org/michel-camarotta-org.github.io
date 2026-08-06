# 002 — 404 page, icons, link behaviour, target sizes

| Field   | Value            |
| ------- | ---------------- |
| Status  | Ready            |
| Created | 2026-08-06       |
| Owner   | Michel Camarotta |

## Problem

Four small gaps in the site shell, each independently minor, all found during
the August 2026 review and left unfixed because they fell outside the scope
agreed at the time. They are grouped here because they share a shape: none
changes what the site says, each is a self-contained edit, and none is worth a
spec of its own.

### 1. No 404 page

The site has a single route. Any other path — a mistyped URL, a stale link, a
path someone guesses — is served GitHub Pages' own unbranded 404, which drops
the visitor out of the site with no way back into it.

### 2. Incomplete icon set

`public/` contains `favicon.svg` and nothing else. There is no
`apple-touch-icon.png`, so adding the site to an iOS home screen produces a
screenshot of the page instead of the mark, and no raster fallback for contexts
that do not resolve SVG favicons.

### 3. External links behave inconsistently

`ArrowLink` with `external` opens a new tab with `rel="noreferrer"`. The GitHub
and LinkedIn links in the header and the footer are plain anchors that navigate
in the same tab. The same destination therefore behaves differently depending
on which part of the page the visitor clicked.

### 4. Navigation targets are below the WCAG 2.2 minimum

Measured in the deployed site: the desktop navigation links render 22px tall,
as do the GitHub and LinkedIn links in the footer. WCAG 2.2 SC 2.5.8 Target
Size (Minimum), level AA, asks for at least 24 by 24 CSS pixels. The links are
wide enough; only the vertical hit area falls short.

## Requirements

1. A 404 route exists at `src/pages/404.astro`, uses `BaseLayout`, carries the
   site header, states plainly that the page does not exist, and offers a link
   back to the home page. Astro emits it as `dist/404.html`, which is what
   GitHub Pages serves.
2. The 404 page sets `noindex` so error pages do not enter search results.
3. `public/apple-touch-icon.png` exists at 180 by 180 pixels, drawn from the
   same mark as `favicon.svg`, and is referenced from `BaseLayout`.
4. External links behave identically everywhere on the site. Pick one rule and
   apply it to the header, the footer, the hero and the contact section alike.
   Any link that opens a new tab carries `rel="noreferrer"`.
5. Every navigation and footer link presents a hit area of at least 24 by 24
   CSS pixels, achieved with padding rather than by enlarging the type.

## Decision needed on requirement 4

Same-tab and new-tab are both defensible. Same-tab respects the visitor's own
navigation and is the more conventional modern choice; new-tab keeps the site
open behind an outbound click, which suits a page whose purpose is to send
people to LinkedIn and GitHub. Either is fine. Inconsistency is not.

Recommendation: open external links in a new tab everywhere, since that is what
the most prominent links in the contact section already do, making it the
smaller change.

## Related but deliberately excluded

`mailto:mcamarotta@gmail.com` appears in the contact section as plain markup
and is therefore harvestable by address scrapers. The alternatives all cost
something: obfuscating it with JavaScript breaks the link for anyone without
JS, and a contact form needs a backend this static site does not have. Leaving
it exposed and absorbing the spam is a legitimate choice, and no change is
proposed here — it is recorded so the trade-off is a decision rather than an
oversight.

## Acceptance criteria

1. Requesting a path that does not exist on the deployed site returns the
   site's own 404 page, styled consistently, with a working link home.
2. The 404 response carries a `noindex` robots directive.
3. Adding the site to an iOS home screen shows the Mich Think AI mark.
4. Every link to an external destination — header, footer, hero, contact —
   behaves the same way, and each new-tab link carries `rel="noreferrer"`.
5. Every navigation and footer link measures at least 24 CSS pixels tall,
   verifiable in browser dev tools by inspecting the rendered box.

## Out of scope

- A web app manifest and installability. The site is a single page; there is
  nothing to install.
- Reworking the navigation itself. This spec only changes hit areas.
