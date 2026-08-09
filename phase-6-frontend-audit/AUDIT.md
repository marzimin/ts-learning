# AUDIT — `ds-template/frontend/src/`

## What this file is for

`ds-template`'s frontend was largely AI-generated and never passed this repo's Mandatory
Review Gate. This file is the working checklist that closes that gap, one file at a time.

**A file is only "done" when two things are true:**

1. You can explain it without assistance — no re-reading the docs, no asking Claude.
2. You have recorded an opinion about it in the `My opinion` column.

"Looks fine" is not an opinion. An opinion names something: a choice you'd have made
differently, a line you had to read three times, a piece of cleverness you think isn't
worth it, or a decision you initially disagreed with and now defend. Disagreeing with the
code is a valid — often the best — outcome. A reviewer who agrees with everything is not
reviewing.

Work top to bottom. The order is deliberate: pure TypeScript before React, primitives
before the pages that compose them. Skipping ahead to the pages means auditing code whose
vocabulary you haven't read yet.

---

## The Review Gate, per file

Answer all four. Write the answers down somewhere — in `NOTES.md`, in this file, in a
comment. Answers you only thought about do not count.

1. **Explain this file in plain English. What is its one job?**
   If it takes more than three sentences, either you don't understand it yet or the file
   is doing too much. Decide which — that judgment is the skill.

2. **What must I understand before trusting this in production?**
   The thing that, if you got it wrong, would produce a bug you couldn't diagnose.

3. **What would break if requirements changed?**
   Pick a concrete change: a new metric, a regression model instead of a classifier, a
   slow endpoint, a 500 instead of a 503. Trace what fails.

4. **Does it honour the four dataset-agnostic rules?**
   From `ds-template/docs/frontend.md`:
   1. No feature name appears in frontend code.
   2. Table columns are derived, not declared.
   3. Types are generated, never hand-written.
   4. "No model yet" is a first-class state — guidance, not an error, and not retried.

   Not every file is in a position to break every rule. Say which ones apply and why.

---

## The files

`Gate status`: blank = not started, ⏳ = in progress, ✅ = passed all four questions.

| # | File | Why it's here / what it teaches | Gate status | My opinion |
|---|---|---|---|---|
| 1 | `lib/format.ts` | Pure functions, no React. Formatting decided by **magnitude**, never by metric name — a bounded score and an error term need different precision. This is rule 1 in its purest form. Start here: it is the only file you can fully understand with Phase 1 knowledge alone. | | |
| 2 | `api/client.ts` | The `fetch` wrapper. `ApiError` carrying a status, `readErrorDetail`, `isNoModelError` for the 503 case, and why every request URL is relative. Compare against your Week 6 exercise. | | |
| 3 | `api/schema.d.ts` | **Generated — read it, never edit it.** Practice navigating `components['schemas']`. Large; skim for shape, then look up two or three types you saw in `client.ts`. | | |
| 4 | `api/hooks.ts` | One TanStack Query hook per endpoint, plus the `queryKeys` map. The organising principle behind every page. Note which hooks are queries and which are mutations, and why the 503 is not retried. | | |
| 5 | `components/States.tsx` | `Loading` / `EmptyState` / `ErrorState` — the three states every fetch has. Small file, load-bearing idea: forgetting one gives a blank screen. | | |
| 6 | `components/Section.tsx` | `PageHeader` and `Section` — layout primitives. What makes three separately-written screens feel like one system. | | |
| 7 | `components/DataTable.tsx` | Columns described **as data** (`Column<Row>`), which is what makes rule 2 possible. Generic over `Row`. Also exports `KeyValueTable`. Your first real encounter with generics doing work. | | |
| 8 | `components/MetricGrid.tsx` | Metric tiles and `ProbabilityBars`. Note `ProbabilityBars` is absent for regressors — how does the component handle a shape that may not exist? | | |
| 9 | `components/FeatureForm.tsx` | Inputs **generated from the model signature** returned by `GET /api/predict/schema`, with the widget chosen from the declared `kind`. Rule 1's hardest case. Compare against your Week 5 form. | | |
| 10 | `components/ArtifactGallery.tsx` | Images from one artifact folder. Fetching that depends on a prop, and what happens when the prop changes. | | |
| 11 | `components/Layout.tsx` | The page shell: nav, `<Outlet />`, and a persistent model-status indicator driven by `useHealth`. The one component that renders on every route — read it alongside `App.tsx` (#15). | | |
| 12 | `pages/RunsPage.tsx` | **Compare directly to your Week 7–8 mini project.** `metricColumns()` takes the union of metric keys across runs and sorts — derived columns, rule 2, and a Week 4 array transform doing production work. | | |
| 13 | `pages/RunDetailPage.tsx` | `useParams` to read `:runId` from the URL, tab state, nested fetches. Where routing and data fetching meet. | | |
| 14 | `pages/PredictPage.tsx` | The schema → form → predict flow. Note the `key` on the form, built from the model name and version: it forces a remount when the model changes, discarding stale input. Work out why nothing else would achieve that. | | |
| 15 | `App.tsx` | The routing table. Which URL shows which page, and why `Layout` is the parent route rather than something each page imports. | | |
| 16 | `main.tsx` | Startup: mounts React into `index.html` and installs the providers. Short. The answer to "where does any of this actually begin?" | | |
| 17 | `../vite.config.ts` | The proxy seam. **Note: this lives at `frontend/vite.config.ts`, one level above `src/`** — see the correction note below. Why `/api`, `/docs`, `/redoc`, `/openapi.json` are proxied, and why the app never carries a base URL. | | |
| 18 | `lib/format.test.ts` | Rule 1 enforced by test: magnitude-based formatting checked against values this template never ships. | | |
| 19 | `pages/RunsPage.test.tsx` | Rule 2 enforced by test: feeds `test_rmse` and `test_r2` — metrics the template never ships — and asserts they render. | | |
| 20 | `pages/PredictPage.test.tsx` | Rule 1 enforced by test: renders two completely different schemas and asserts the first's fields are absent from the second. | | |
| 21 | `pages/RunDetailPage.test.tsx` | Nested fetches and tab behaviour under test. | | |
| 22 | `components/ArtifactGallery.test.tsx` | The only component with its own test file. Ask why this one and not the others — that is a review finding either way. | | |
| 23 | `test/utils.tsx` | `renderWithProviders` and the `fetch` stub. Read it before the tests above or they won't parse. Note `retry: false` — and why a test suite must disable it. | | |
| 24 | `test/setup.ts` | One line. Included for completeness; understand what it registers. | | |
| 25 | `styles.css` | ⚡ VIBE track. Read-and-tweak only — the CSS variables at the top are the intended restyling surface. Do not spend a session here. | | |
| 26 | `api/openapi.json` | Generated alongside `schema.d.ts`, committed so a fresh clone builds without a running API. Skim to see what `openapi-typescript` consumes; there is nothing to audit. | | |

---

## Corrections against the actual repo

Verified against `github.com/marzimin/ds-template` on 2026-08-09. The planned file list was
accurate; four adjustments:

- **`vite.config.ts` is not in `src/`.** It sits at `frontend/vite.config.ts`, alongside
  `package.json` and `tsconfig.json`. Row 17 is kept in place — it belongs in the reading
  order — with the path corrected.
- **The test files are not all `.tsx`.** `lib/format.test.ts` is plain TypeScript because
  it tests pure functions with no components. Split into rows 18–22 so each rule-enforcing
  test is checked off against the rule it enforces.
- **Four files in `src/` were missing from the plan**: `test/utils.tsx`, `test/setup.ts`,
  `styles.css`, and `api/openapi.json`. Added as rows 23–26. The last two are skim-only.
- **`KeyValueTable` has no file of its own.** `docs/frontend.md` lists it in the component
  vocabulary, which suggests a separate file; it is actually exported from `DataTable.tsx`.
  Noted on row 7.

---

## You have arrived when…

You can review a pull request against this frontend without hesitation — including
disagreeing with it.

Not "without finding it hard". Without *hesitation*: knowing which file the change belongs
in, whether it breaks one of the four rules, and whether the author's reasoning holds —
and being able to say so, in review, and defend it. That is the whole point of this repo,
and this is where it gets tested against code you did not write.
