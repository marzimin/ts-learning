# Phase 5 — The API contract seam

🔒 **Not yet unlocked.**

Complete Phase 4 first. This phase covers the one seam where Python and TypeScript meet:
the generated type contract.

> **This phase replaces what was previously "Express + Zod + Prisma".** There is no
> TypeScript backend in the target architecture, so there is no Express and no Prisma. And
> the API contract is *generated* from Pydantic rather than hand-written in TypeScript, so
> there is no Zod. See [`../docs/nextjs-vs-vite.md`](../docs/nextjs-vs-vite.md) for the
> scenario the old phase was written for — it is a real scenario, just not this one.

Content for this phase will be added to this folder when you're ready to begin.
Come back here (or ask Claude) to generate the full breakdown and starter files.

---

## What this phase covers

**What `openapi-typescript` does.** FastAPI already publishes an OpenAPI document at
`/openapi.json`, derived from your Pydantic models — you get it for free the moment you
annotate a route. `openapi-typescript` reads that document and emits TypeScript type
declarations. One direction only: Python is the source of truth, TypeScript is downstream.

**Running `make types`.** Two steps, both in `ds-template`'s Makefile:

```make
types: ## Regenerate frontend types from the API's OpenAPI schema
	cd $(BACKEND) && uv run python -c \
		"import json; from src.api.app import app; print(json.dumps(app.openapi(), indent=2))" \
		> ../$(FRONTEND)/src/api/openapi.json
	cd $(FRONTEND) && npx openapi-typescript src/api/openapi.json -o src/api/schema.d.ts
```

Note it imports the app rather than calling a running server, so regeneration works
offline. Both outputs are committed, so a fresh clone builds without a running API.

**Reading `api/schema.d.ts`.** It is generated. Never hand-edit it — your edit is gone the
next time anyone runs `make types`, and the two sides silently diverge in the meantime.
The skill here is *reading* a `.d.ts` file, not authoring one: finding a schema inside
`components['schemas']`, following an indexed access type, recognising what an optional
field looks like.

**How `api/client.ts` derives everything from it.** Nothing in `client.ts` declares a
response shape:

```ts
import type { components } from './schema';

type Schemas = components['schemas'];

export type PredictResponse = Schemas['PredictResponse'];
export type RunSummary = Schemas['RunSummary'];
```

That is the whole trick. Because the exports are *derived* rather than restated, renaming a
field in a Python Pydantic class breaks the frontend build at exactly the line that needs
updating — rather than silently producing `undefined` at runtime, which is what a
hand-maintained parallel type would do. This is rule 3 of the four dataset-agnostic rules
in `ds-template/docs/frontend.md`.

**The learning goal is the regeneration workflow, not schema authoring.** You are not
learning to design a validation library. You are learning: what to run, when to run it,
what to commit, and how to read what comes out.

---

## The exercise

Rename a field in a backend Pydantic model. Run `make types`. Watch the frontend fail to
compile, and read where. Fix the frontend, revert both, and be able to explain why that
failure is the feature rather than the cost.

---

## Prerequisites Checklist

Before starting this phase, you should be able to:

- [ ] Explain every line of code in your Phase 1 mini project without help
- [ ] Have your Phase 1 project committed to GitHub
- [ ] Have answered your Phase 1 open questions
- [ ] Trace a `/api/predict` request through the Vite proxy in dev and in prod (Phase 4)

---

*This repo grows with you. One phase at a time.*
