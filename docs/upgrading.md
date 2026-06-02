# Upgrading an existing client clone

How to bring template improvements into a client repo that was created from
the template some time ago. Read this **before** you start cherry-picking
template commits into a clone.

> If you're just spinning up a *new* client, none of this applies — `git clone`
> always gives you the latest template. See [`how-to-new-site.md`](./how-to-new-site.md).

---

## Why upgrades aren't automatic

Each client is a **fork**, not a dependency. The template at
`HankPantier/CountingFiveTemplate` is the starting point; once you `git clone`
into a client repo, the two histories diverge.

There's no `package.json` pointer at the template, no `git submodule`, no
"upstream pull." Template improvements have to be **explicitly merged** into
each client clone — there is no other path.

This is by design. Per-client clones can diverge in ways that would break a
shared dependency model:

- Custom `content/design-overrides.css` per client
- Per-client tweaks to `site.config.ts` (forms, CSP, booking)
- Occasionally, custom blocks or page handlers that aren't in the template

The tradeoff: clones drift, and you only get improvements when you do the
work to pull them in. That work is what this doc is about.

---

## One-time setup per clone: add a `template` remote

For each existing client repo you want to keep upgradable:

```bash
cd <client-slug>-site
git remote add template https://github.com/HankPantier/CountingFiveTemplate.git
git remote -v   # confirm both `origin` (the client) and `template` are listed
git fetch template
```

`origin` stays the client's own remote (a fresh GitHub repo per client).
`template` is read-only — you never push to it from a client clone.

---

## The two upgrade strategies

Pick one per upgrade — they don't mix well.

### Strategy A: Merge `template/main` into client `main`

Best for **comprehensive** upgrades where you want to pull in everything new
since the last sync. Produces one merge commit; the client's history shows a
clear "synced with template at commit X" marker.

```bash
git checkout main
git fetch template
git merge template/main --no-ff -m "chore: sync template main (<short-sha>)"
```

You'll get conflicts in the files listed under [Conflict patterns](#conflict-patterns) below.
Resolve them per the guidance in that section. After resolution:

```bash
npm install                  # in case dependencies changed
npm run validate             # confirm content still parses
npm run build                # confirm nothing broke
git add -A && git commit     # finish the merge
```

### Strategy B: Cherry-pick specific commits

Best for **surgical** upgrades — you want one feature (say, the recent Booking
block) but want to skip a refactor you don't care about. Lower-risk, more
manual work.

```bash
git fetch template
git log --oneline template/main ^main   # commits in template not in this clone
# Pick the SHA(s) you want:
git cherry-pick <sha>
```

Each cherry-pick produces a fresh commit on `main`. Resolve conflicts per the
same guidance below.

---

## Conflict patterns

After running either strategy, certain files always or sometimes conflict.
Here's what to do with each.

### Almost always conflicts — **keep yours**

| File | Why | Resolution |
|---|---|---|
| `content/**` | Every client has different copy, brand, posts | Keep yours unless the template added a structural change (rare) |
| `site.config.ts` | Different siteUrl, forms, booking per client | Keep yours; cherry-pick only the *new fields* if the template added some |
| `content/design-overrides.css` | Per-client design treatment | Always keep yours |
| `src/styles/theme.css` | Generated from `brand.json` per client | Always keep yours; regenerate later with `npx tsx scripts/generate-theme.ts` if needed |
| `package-lock.json` | Both sides install at different times | Accept either, then `rm package-lock.json && npm install` to regenerate cleanly |

### Sometimes conflicts — **inspect before merging**

| File | What to look for |
|---|---|
| `package.json` | Template may add deps + scripts. Take both sides' adds; resolve any version pins toward the *newer* version, then `rm package-lock.json && npm install` |
| `next.config.ts` | Template adds headers/middleware/wrappers over time. Take template's additions unless they conflict with a client-specific config (e.g. a CSP `extraOrigins` value) |
| `.env.example` | Take template additions; preserve any client-specific entries |
| `.github/workflows/*.yml` | Take template's; client-specific workflow changes are rare and obvious |
| `README.md` and `docs/**` | Take template's. These reflect template behavior, not client behavior |

### Rarely conflicts — **take template's**

Everything in `src/`, `scripts/`, and `public/robots.txt` (the template default,
not the deliverable's) is template-driven. Take the template's version unless
you've made a documented per-client tweak.

---

## A sample upgrade session

A realistic walk-through of pulling in template improvements landing roughly
six months after the clone was made:

```bash
cd korbey-lague-site
git remote add template https://github.com/HankPantier/CountingFiveTemplate.git
git fetch template

git log --oneline template/main ^main | head -20
# scan: which commits look relevant?

# Strategy A (everything):
git checkout -b chore/template-sync-2027-Q1
git merge template/main --no-ff -m "chore: sync template main (<sha>)"

# Conflicts come back. Open each:
#   content/* → git checkout --ours
#   site.config.ts → manual merge; keep client-specific values, take new fields
#   package.json → manual merge; take both sides' deps, newer versions
#   src/* → take template's (git checkout --theirs) unless intentional client tweak
#   src/styles/theme.css → git checkout --ours

rm package-lock.json && npm install
npm run validate                  # frontmatter, image refs
npm run lint && npx tsc --noEmit  # type + lint regressions
npm test                          # 177+ vitest cases
npm run build                     # final gate

git add -A && git commit          # close the merge

# Open a PR against client main:
git push origin chore/template-sync-2027-Q1
gh pr create --title "Sync template main" --body "<list of upstream commits>"
```

Review the PR yourself (or with the client team). The PR description should
link the **template** commit range you pulled in, so future readers can see
exactly which template state landed.

---

## Cadence

A reasonable rhythm: **once a quarter** for routine improvements, **as-needed**
for security or hotfix commits.

Subscribe to the template repo's release notifications on GitHub so you see
when notable changes land. The `CHANGELOG.md` in this repo dates each
landed pass — that's the source of truth for "what's new since I last synced."

---

## What if the conflict is too big?

Sometimes a clone has drifted enough that a clean merge isn't practical
(deeply customized layout, custom blocks, etc.). In that case:

1. **Document the divergence** in the client repo's `README.md` so the next
   maintainer knows the clone has deliberate template-incompatible changes.
2. **Cherry-pick** instead of merging — pick only the commits you can take
   cleanly, accept that some template features won't apply.
3. **Consider a full re-clone** for major redesigns: spin up a new clone
   from latest template + run unpack against the client's current deliverable
   + manually port any custom code. Heavy but produces a clean baseline.

The "re-clone" path is rare but exists; the BTS work is roughly a half-day
per client and resets the divergence to zero.
