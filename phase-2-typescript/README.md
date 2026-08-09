# Phase 2 — TypeScript Core

🔒 **Not yet unlocked.**

Complete Phase 1 first. This phase covers the TypeScript type system: interfaces, generics,
strict mode, and reading types you did not write.

Content for this phase will be added to this folder when you're ready to begin.
Come back here (or ask Claude) to generate the full breakdown and starter files.

---

## What this phase covers

### `strict: true`, and `noUncheckedIndexedAccess` in particular

`ds-template` runs TypeScript in full strict mode. Without covering this, the guarded array
and record lookups throughout its frontend look like inexplicable defensive code — and you
will be tempted to delete them.

`strict` is an umbrella over several flags. The two that change how you write code daily:

- **`strictNullChecks`** — `null` and `undefined` are no longer members of every type. If a
  value might be absent, the type says so and you must handle it.
- **`noUncheckedIndexedAccess`** — indexing an array or a record yields `T | undefined`,
  not `T`. `runs[0]` is `RunSummary | undefined`, because TypeScript cannot know the array
  is non-empty.

The Python analogy: it is the difference between `d[k]` and `d.get(k)`. `d[k]` claims the
key is there and raises at runtime if it isn't; `d.get(k)` returns `Optional[T]` and makes
you deal with the absent case. `noUncheckedIndexedAccess` makes *every* lookup behave like
`.get()` — except the consequence lands at compile time instead of in production.

```python
# Python — the risk is deferred to runtime
first = runs[0]          # IndexError if empty
name  = config["model"]  # KeyError if absent
```

```ts
// TypeScript with noUncheckedIndexedAccess — the risk is surfaced now
const first = runs[0];         // RunSummary | undefined
if (!first) return <EmptyState title="No runs yet" />;
// below this line, `first` is RunSummary
```

That early return is not defensiveness. It is the compiler refusing to let you pretend.

### Discriminated unions

Motivated by the thing you will use every day. A TanStack Query result is *one of* three
states — pending, error, success — and the type encodes which fields are available in each.
Checking `isPending` **narrows** the type, so `data` becomes accessible only once you have
proved it is there:

```ts
if (runs.isPending) return <Loading />;        // here, runs.data is undefined
if (runs.isError) return <ErrorState error={runs.error} />;
// only here does TypeScript agree that runs.data exists
```

This is why forgetting a state doesn't just give a blank screen — it gives a *type error*
first, if you let it.

The Python analogy: a union of `TypedDict`s tagged with a `Literal` field, narrowed by
`match` on that tag. Same idea, same payoff — the tag tells the type checker which shape
you're holding.

```python
class Pending(TypedDict):  status: Literal["pending"]
class Failed(TypedDict):   status: Literal["error"]; error: Exception
class Loaded(TypedDict):   status: Literal["success"]; data: list[Run]

Result = Pending | Failed | Loaded

match result:
    case {"status": "success"}:  ...  # only here is `data` known to exist
```

### Reading generated types

You will read far more types than you write. The skills:

- **`.d.ts` files** — declarations only, no runtime code. What they are for and why they
  ship alongside a library.
- **Indexed access types** — `components['schemas']['RunSummary']` reaches into a type the
  way a subscript reaches into a dict, but at the type level.
- **Why `client.ts` derives rather than declares.** Every exported type in `ds-template`'s
  `api/client.ts` is pulled out of `schema.d.ts` instead of being restated. A restated type
  is a second source of truth that drifts silently; a derived one breaks the build the
  moment the backend changes. Phase 5 covers the regeneration workflow — this phase is
  about being able to *read* the output.

### The rest of the type system

- `interface` vs `type` — when each is idiomatic, and why the distinction matters less than
  it appears to.
- Generics — starting from `Array<T>` and `Column<Row>`, which you will meet in
  `DataTable.tsx`. The Python anchor is `TypeVar` and `Generic[T]`.
- Union and intersection types.
- Type narrowing generally: `typeof`, `instanceof` (as in `error instanceof ApiError`),
  truthiness checks, and custom type guards.

---

## Track

🛠️ **BUILD — all of it.** This is the core of what the repo exists to teach. Claude
explains (Mode 1), quizzes (Mode 4), and reviews (Mode 2). Claude does not write it.

---

## Prerequisites Checklist

Before starting this phase, you should be able to:

- [ ] Explain every line of code in your Phase 1 mini project without help
- [ ] Have your Phase 1 project committed to GitHub
- [ ] Have answered your Phase 1 open questions

---

*This repo grows with you. One phase at a time.*
