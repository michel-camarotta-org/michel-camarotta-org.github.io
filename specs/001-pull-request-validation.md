# 001 — Validate pull requests before merge

| Field   | Value            |
| ------- | ---------------- |
| Status  | Ready            |
| Created | 2026-08-06       |
| Owner   | Michel Camarotta |

## Problem

`.github/workflows/deploy.yml` is triggered by `push` to `main` and by
`workflow_dispatch`. No workflow is triggered by `pull_request`, so a pull
request runs no checks at all.

The consequence is that validation happens strictly after the decision it is
supposed to inform. A branch that breaks `astro check` or the build merges with
a green, empty status area, and the failure surfaces only when the deploy job
runs on `main`. At that point the site silently stays on the previous version:
the published page is stale, nothing on the pull request records why, and the
person who merged has already moved on.

The project already has the commands. `npm run check` and `npm run build` run
in the deploy workflow, and `npm run format:check` exists but is not wired into
CI at all, so formatting is currently enforced by nothing.

## Requirements

1. Every pull request targeting `main` runs a validation job.
2. The job installs from the lockfile (`npm ci`), then runs `npm run check`,
   `npm run format:check` and `npm run build`.
3. The job never deploys and never requires the `pages` or `id-token`
   permissions. `contents: read` is sufficient.
4. Deployment stays exactly as it is: `push` to `main` and manual dispatch.
5. The same Node version is used for validation and for deployment, so a build
   cannot pass in one and fail in the other.

## Approach

Add a separate `.github/workflows/ci.yml` rather than adding a `pull_request`
trigger to `deploy.yml` and guarding the deploy job with a conditional. Two
workflows with one purpose each stay readable, and the deploy workflow keeps
its narrow permission set instead of carrying `pages: write` on every pull
request run.

Node version is pinned at `24` in `deploy.yml`; the new workflow must match it.
Consider extracting it to a single place if a third workflow ever appears.

## Acceptance criteria

1. Opening a pull request against `main` shows a check run that executes the
   three commands above.
2. A pull request containing a deliberate type error — for example, passing an
   unknown prop to `SectionHeading` — reports a failing check, and reverting
   that change turns it green.
3. A pull request containing a formatting violation — an unformatted `.astro`
   or `.css` file — reports a failing check.
4. Merging to `main` still deploys, and the deploy workflow is unchanged.
5. The validation workflow requests no write permissions.

## Out of scope

- Branch protection rules requiring the check to pass. That is a repository
  setting, not a file in this repo, and it is the owner's call whether to
  enforce it.
- Link checking, Lighthouse budgets, or visual regression. Worth considering
  later; not needed to close the gap this spec describes.
