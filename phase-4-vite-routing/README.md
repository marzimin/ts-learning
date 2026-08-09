# Phase 4 — Vite, react-router, and the proxy seam

🔒 **Not yet unlocked.**

Complete Phase 3 first. This phase covers the build tool, the routing table, and the seam
where the browser stops talking to itself and starts talking to Python.

Content for this phase will be added to this folder when you're ready to begin.
Come back here (or ask Claude) to generate the full breakdown and starter files.

---

## What this phase covers

**What Vite actually does.** It bundles your TypeScript and JSX into static files — HTML,
JS, CSS — that any web server can hand to a browser. That is the whole output. **There is
no Node server in production.** The Python analogy: `vite build` is closer to
`sphinx-build` producing a folder of HTML than to `uvicorn` running a process. In
development `vite dev` *does* run a server, but only to serve those files and reload them
when you save. Nothing of it survives into production.

**Reading `vite.config.ts`.** In `ds-template` the config is short and almost all of it is
the proxy:

```ts
const API_TARGET = process.env.VITE_API_TARGET ?? 'http://127.0.0.1:8000';
const BACKEND_PATHS = ['/api', '/docs', '/redoc', '/openapi.json'];
```

Understand why each of those four paths is on the list. `/api` is obvious. `/docs`,
`/redoc`, and `/openapi.json` are FastAPI's own interactive documentation, which the app
footer links to — without them the dev server answers those URLs with the SPA's
`index.html`, and the link silently reloads the app instead of opening the API docs. That
failure mode is worth being able to recognise, because nothing errors.

**Why app code uses relative URLs.** Requests in `api/client.ts` are written as
`/api/predict`, not `http://localhost:8000/api/predict`. A relative URL goes to whatever
origin served the page. In development that is the Vite dev server, which proxies it to
FastAPI; in production one host serves both, so it just arrives. Neither case needs a base
URL compiled into the bundle — and a base URL compiled into the bundle is the classic
reason a frontend works locally and 404s or fails CORS once deployed.

**Routes as data.** `App.tsx` declares the routing table — which URL renders which page —
as a tree of `<Route>` elements rather than as a `switch` statement. `react-router v8`.
Note that `Layout` is the parent route, so the page shell and the model-status indicator
persist while the inner page swaps.

---

## Track split

| Topic | Track |
|---|---|
| `vite.config.ts` scaffolding, plugin setup, build config | ⚡ VIBE — generate, then run the Review Gate |
| The proxy seam: what happens to a `/api/predict` request | 🛠️ BUILD — hand-trace it, no AI |
| Route declarations in `App.tsx` | ⚡ VIBE for the markup, 🛠️ BUILD for what nesting means |

**The exit test for this phase:** trace a `/api/predict` request end to end, out loud, in
development *and* in production, and name what differs between them. If you can't, the
phase isn't finished — regardless of whether the app runs.

---

## Prerequisites Checklist

Before starting this phase, you should be able to:

- [ ] Explain every line of code in your Phase 1 mini project without help
- [ ] Have your Phase 1 project committed to GitHub
- [ ] Have answered your Phase 1 open questions
- [ ] Write the three-state TanStack Query pattern from memory (Phase 3)

---

*This repo grows with you. One phase at a time.*
