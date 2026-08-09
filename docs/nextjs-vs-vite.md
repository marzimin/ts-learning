# Next.js vs Vite — why this repo targets Vite

This file exists so the Next.js decision is *recorded* rather than silently dropped. Next.js
was deprioritised for this learning plan because it does not appear in the target
architecture — not because it is the wrong tool generally. You may well need it for a future
project that is not an ML dashboard, and when that happens this page is the starting point.

---

## The real distinction

Strip away the feature lists and two questions separate them: **where does rendering
happen, and is there a JavaScript server running in production?**

**Vite builds static files.** You run `vite build` and get a folder of HTML, JS, and CSS.
Any web server can hand those to a browser — nginx, S3, a CDN, whatever. The browser then
downloads them, runs React, and calls your API. **There is no Node process in production.**
The dev server you use while working is a development convenience; nothing of it ships.

**Next.js runs a Node server.** That server renders pages into HTML *before* sending them,
so the browser receives a finished page rather than an empty shell plus instructions. It
also provides API routes, so backend code lives in the same repository and the same
language as the frontend.

Everything else — file-based routing, the image component, the bundler details — follows
from those two choices or is incidental to them.

---

## Why Vite is right for `ds-template`

**Next.js would add a second server to run and deploy while buying nothing.** The Docker
Compose file would grow a Node service alongside FastAPI. That is a real operational cost —
another process to monitor, another thing to version — paid for benefits that don't apply
here.

**The backend is Python because the model is Python.** scikit-learn, MLflow, the whole
training stack. Next.js API routes could not serve the model; they would be a proxy sitting
in front of FastAPI, forwarding requests. A proxy in front of the thing you already have is
not an architecture, it's a hop.

**The dashboard is authenticated, so SEO is irrelevant.** Server-side rendering's headline
benefit is that a search crawler sees content. Nothing crawls a page you must log in to
reach.

**A moment of loading state is acceptable.** The runs table appearing a beat after the page
does is fine for an internal tool. `Loading` is a first-class component in this app, not an
embarrassment to be engineered away.

---

## When to reach for Next.js instead

| Situation | Why Next.js wins |
|---|---|
| The page must exist before JavaScript runs | Search ranking, slow connections, link previews in Slack/social. E.g. a public marketing site for a model, or a public results explorer. |
| There genuinely is no other backend | A CRUD app over Postgres with no ML in it. Next.js + Prisma is a coherent single-language stack. This is the scenario the original Phase 5 was written for — a real scenario, just not this one. |
| Server-side secrets in the request path | Calling a third-party API with a key that must not reach the browser. Doable in FastAPI too, but if the app is already Next.js the API route is right there. |

The pattern across all three: Next.js earns its keep when you need work done on a server
*and you don't already have one*. `ds-template` already has one, and it's the one holding
the model.

---

## Switching cost is low

This is the part that makes deprioritising Next.js a cheap decision rather than a bet.

**Identical in both:** React itself, TypeScript, TanStack Query, the three-state fetch
pattern, component composition, props and state, everything in Phases 2 and 3. That is the
overwhelming majority of what this repo teaches.

**What differs:** routing (file-based directories vs. a `<Routes>` table in `App.tsx`), the
build tool and its config, and whether server components exist as a concept.

Roughly two weeks of adjustment — not a new phase. Which is precisely why deprioritising
Next.js now costs very little later, and why spending eight to ten weeks on it *before*
you need it would be the expensive choice.
