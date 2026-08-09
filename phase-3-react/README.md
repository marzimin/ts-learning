# Phase 3 — React + TypeScript + TanStack Query

🔒 **Not yet unlocked.**

Complete Phase 2 first. This phase covers React components, state, and — the real substance
of it — how data actually arrives on a page.

Content for this phase will be added to this folder when you're ready to begin.
Come back here (or ask Claude) to generate the full breakdown and starter files.

> **Note on the previous version of this phase:** it planned plain `fetch` calls inside
> components. Every page in `ds-template` uses TanStack Query instead. Hand-writing a
> `useEffect` + `fetch` + three `useState` calls is worth doing *once*, to see the problem;
> it is not worth learning as a pattern, because you will never ship it.

---

## What this phase covers

### Components are functions of their props

The framing from `ds-template/docs/frontend.md`, which is written for exactly your
background: **a component is closely analogous to a function returning a matplotlib axis.**
You pass it data, it gives you back something drawable, and it does not care where the data
came from.

```tsx
function Metric({ label, value }: { label: string; value: number }) {
  return <div className="metric">{label}: {formatMetric(value)}</div>;
}
```

Same input, same output. The Python instinct that a function should be a function applies
directly and gets you most of the way.

### JSX is ordinary function calls

That HTML-looking syntax inside TypeScript is JSX, and it compiles to plain function calls
before anything runs. It is not a template language and there is no string interpolation
happening. Knowing this makes the rules stop feeling arbitrary — why you can put an
expression in `{}` but not a statement, why `className` rather than `class`, why a
component must return a single root.

### `useState`, and why changing state redraws

`useState` gives a component a value and a setter. Calling the setter re-runs the function.
That is the entire model, and it is how typing into the prediction form updates what will
be submitted.

The thing to get straight early: the function runs again *from the top*, every time. Local
variables are recomputed. Nothing is preserved between runs except what you put in state.

### Typing props and component signatures

Props are just a parameter object, so typing them is Phase 2 knowledge applied. Where it
gets interesting is generic components — `DataTable<Row>` in `ds-template` is typed so that
its `columns` and its `rows` cannot disagree about what a row is.

### TanStack Query — the core of this phase

**The three-state pattern is the job.** Every request has three possible outcomes, and
forgetting one gives a blank screen with no error anywhere:

```tsx
if (runs.isPending) return <Loading />;
if (runs.isError) return <ErrorState error={runs.error} />;
return <DataTable columns={columns} rows={runs.data} rowKey={(r) => r.run_id} />;
```

Every page in the target app reads exactly this way. Once you can write those three lines
from memory and explain what each one costs if omitted, most of the frontend becomes
readable.

Beyond the three states, TanStack Query is also handling caching, deduplication, refetching,
and retry policy — the reasons you don't hand-roll this. Worth understanding at least well
enough to know why the 503 "no model trained yet" response is deliberately *not* retried:
asking again will not train a model.

**One hook per endpoint** as an organising principle. `ds-template` keeps them all in
`api/hooks.ts` — `useHealth`, `useRuns`, `useRun`, `usePredict`, `useArtifacts` — alongside
a `queryKeys` map. Pages import a hook; no page calls `fetch`. When you want to know what
data a page uses, you read its imports.

### Composition over markup

Pages compose shared primitives — `PageHeader`, `Section`, `DataTable`, `MetricGrid`,
`Loading` / `EmptyState` / `ErrorState` — rather than writing their own markup. That is what
makes three separately-written screens feel like one system, and it means adding a page is
mostly a matter of picking components. Adding new CSS is normally unnecessary.

---

## Track split

| Topic | Track |
|---|---|
| Props, state, and data flow — what re-renders and when | 🛠️ BUILD |
| The three-state pattern | 🛠️ BUILD — write it from memory, no AI |
| Typing props and generic components | 🛠️ BUILD |
| Component markup and JSX structure | ⚡ VIBE — generate, then Review Gate |
| Styling | ⚡ VIBE |

---

## Assigned reading

Before starting: `ds-template/docs/architecture.md` §1–2 (the script-versus-server framing),
then `docs/frontend.md` — "The four ideas you actually need" and the four dataset-agnostic
rules.

---

## Prerequisites Checklist

Before starting this phase, you should be able to:

- [ ] Explain every line of code in your Phase 1 mini project without help
- [ ] Have your Phase 1 project committed to GitHub
- [ ] Have answered your Phase 1 open questions
- [ ] Read a discriminated union and explain how `isPending` narrows it (Phase 2)

---

*This repo grows with you. One phase at a time.*
