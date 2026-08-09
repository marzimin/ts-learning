# TypeScript Learning Journey 🚀

A structured, self-paced learning repo for a Python/SQL Data Scientist learning TypeScript
from scratch — with the goal of building production-ready ML app frontends and full-stack applications.

**Approach:** Learn by doing. Every folder contains starter files with `TODO` comments.
Write the code yourself first. Use Claude Code as a reviewer and teacher — not a code generator.

> **Core principle:** Hand-write the things I need to read, debug, and judge.
> Vibe-code the things I only need to assemble. Never accept generated code I can't explain.
> The full behavioural contract for Claude Code lives in [CLAUDE.md](CLAUDE.md) and is loaded
> automatically at the start of every session.

---

## 🖥️ Environment Setup (Do This First)

### 1. Install Node.js
Node.js is the JavaScript runtime that lets you run JS outside the browser (like how
you run Python scripts from the terminal).

- Download from: https://nodejs.org/ → choose the **LTS version**
- Verify install:
```bash
node --version   # should print v18.x.x or higher
npm --version    # should print 9.x.x or higher
```

### 2. Install VS Code Extensions
Open VS Code → Extensions (`Cmd+Shift+X` / `Ctrl+Shift+X`) → search and install each:

| Extension | Publisher | Purpose |
|---|---|---|
| ESLint | Microsoft | Catches code quality issues as you type |
| Prettier | Prettier | Auto-formats code on save |
| Live Server | Ritwick Dey | Preview HTML instantly in browser |
| Error Lens | Alexander | Shows errors inline in the editor |
| Path Intellisense | Christian Kohler | Autocompletes file paths |
| Thunder Client | Thunder Client | Test API calls inside VS Code |

### 3. Configure VS Code Settings
Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) → type "Open User Settings JSON" → add:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2
}
```

> **Why tab size 2?** The JS/TS ecosystem convention is 2 spaces (vs Python's 4).
> Prettier will enforce this automatically once configured.

### 4. Clone This Repo
```bash
git clone https://github.com/YOUR_USERNAME/ts-learning.git
cd ts-learning
```

---

## 📚 Learning Plan Overview

| Phase | Focus | Est. Duration | Status |
|---|---|---|---|
| Phase 1 | Web Fundamentals (HTML, CSS, JS) | ~6–8 weeks | Active |
| Phase 2 | TypeScript Core (strict mode, generated types) | ~8–10 weeks | Unlocks after Phase 1 |
| Phase 3 | React + TypeScript + TanStack Query | ~8 weeks | Locked |
| Phase 4 | Vite, react-router, the proxy seam | ~4 weeks | Locked |
| Phase 5 | The OpenAPI contract seam (`make types`) | ~2 weeks | Locked |
| Phase 6 | Audit `ds-template`'s frontend | ~6 weeks | Locked |

**Revised total: ~7 months** at 1–3 hrs/week (was 12–18 months).

The reduction comes from cutting Next.js, Express, Prisma, and Zod — none of which appear
in the target architecture — and from replacing a from-scratch capstone with an audit of
the frontend that already exists in `ds-template`.

> **Scope note:** The goal is to *build and judge* ML app frontends, not to become a frontend
> engineer. CSS internals, React internals (Fiber/reconciliation), design systems, and
> TypeScript backends are explicitly **out of scope** — see [CLAUDE.md](CLAUDE.md) for the full list.

## Every exercise has a real counterpart

The toy projects stay — they are how the fundamentals get hand-written. But each one maps
to a specific file in `ds-template/frontend/src/`. Read the real file after finishing the
toy version.

| Toy exercise | Real counterpart in `ds-template` |
|---|---|
| Wk 6 — `fetch` + `response.ok` + try/catch | `api/client.ts` — `ApiError`, `readErrorDetail` |
| Wk 7–8 — dashboard: fetch → 3 states → filter | `pages/RunsPage.tsx` |
| Wk 4 — array transforms | `metricColumns()` in `RunsPage.tsx` — Set union, then sort |
| Wk 5 — form reads inputs into an object | `components/FeatureForm.tsx` — but generated from the model signature |
| Wk 3 — classify by threshold | `lib/format.ts` — formats by magnitude, never by metric name |

### Assigned reading before Phase 3

`ds-template/docs/architecture.md`, sections 1–2. Its script-versus-server framing (a
pipeline runs and exits; a server loads the model once and waits forever) is the concept
that makes the rest of the frontend intelligible. It is already written for a data
scientist who has not built a web app.

Then `ds-template/docs/frontend.md` — in particular "The four ideas you actually need"
and the four dataset-agnostic rules.

---

## 🛠️⚡ The Two-Track System

Every topic is tagged as one of two tracks. This is what keeps AI from eroding the skill being built:

| Track | What it means | Claude's role |
|---|---|---|
| 🛠️ **Build** | I hand-write the code myself first (type system, async, data transforms, React data flow, the client↔server boundary, the three-state fetch pattern, reading generated types) | Reviewer only — never generates Build-track code unprompted |
| ⚡ **Vibe** | AI may generate it (CSS, HTML scaffolding, file structure, build/deploy config, UI-shell components) | Generates, then runs the **Mandatory Review Gate** |

**Mandatory Review Gate** — after *any* Vibe-track code is generated, before moving on:
walk through it in plain English → name one thing to understand before production → name one thing
that breaks if requirements change → answer one comprehension question. If I can't answer, we stay in review.

Each week folder is tagged with its track at the top of its `README.md`.

---

## 🤖 How to Use Claude Code (The Rules)

Claude Code is your **teacher and reviewer** — not your code writer. The complete, machine-loaded
contract lives in [CLAUDE.md](CLAUDE.md); the four modes below are the everyday summary. On the
**Build track** use Modes 1–4 only (Claude never writes the code). On the **Vibe track** Claude may
generate, but must immediately run the Mandatory Review Gate before you continue.

### Mode 1 — Concept Explainer (use BEFORE writing code)
```
"Explain [concept] to me as if I'm a Python developer.
Show me the Python equivalent side-by-side.
Do NOT write any project code for me — just the concept."
```

### Mode 2 — Rubber Duck Reviewer (use AFTER writing code)
```
"Review this code I wrote. Do NOT rewrite it.
Tell me: (1) what I got right, (2) what could be improved and why,
(3) any concepts I'm misunderstanding, (4) one follow-up exercise."
```

### Mode 3 — Hint Dispenser (use when stuck, after genuine effort)
```
"I'm trying to [goal]. I've tried [what you tried].
I'm stuck on [specific blocker].
Give me a hint or ask me a guiding question — do NOT give me the solution."
```

### Mode 4 — Socratic Questioner (use to test your own understanding)
```
"Quiz me on [topic] using the Socratic method.
Ask me one question at a time. Wait for my answer before continuing.
My background: Python/SQL data scientist learning TypeScript from scratch."
```

### ⚠️ The Golden Rule
> **Write the code first. Always. Then bring Claude Code in.**

---

## 📓 Weekly Learning Ritual

Structure every 1-3 hour session like this:

1. **First 10 min** — Re-read your code from last session. Can you explain every line?
2. **Middle block** — New concept + hands-on task from the week's README
3. **Last 10 min** — Fill in your `NOTES.md` for the week

---

## 🌿 Git Workflow

Use a branch for each week's work. This mirrors real SWE practice.

```bash
# Start a new week
git checkout -b phase-1/week-1-html

# Save your progress
git add .
git commit -m "week 1: complete HTML form task"

# When the week is done, merge back
git checkout main
git merge phase-1/week-1-html
```

---

## 📁 Repo Structure

```
ts-learning/
├── CLAUDE.md                          ← Claude Code's behavioural contract (loaded each session)
├── README.md                          ← You are here
├── .gitignore
├── .editorconfig                      ← 2-space indentation, enforced editor-wide
├── .prettierrc                        ← Formatting rules
├── eslint.config.mts                  ← Code-convention rules (no-var, prefer-const, eqeqeq)
├── package.json                       ← Dev tooling + `npm run lint`
├── phase-1-web-fundamentals/
│   ├── README.md                      ← Phase overview
│   ├── week-1-html/                   ← 🛠️ BUILD
│   │   ├── README.md                  ← Concept explanation + task
│   │   ├── NOTES.md                   ← Your learning journal (fill this in)
│   │   ├── index.html                 ← Clean final deliverable
│   │   └── index_learning.html        ← Annotated working copy (teaching comments kept)
│   ├── week-2-css/                    ← ⚡ VIBE
│   ├── week-3-js-basics/              ← 🛠️ BUILD
│   ├── week-4-js-functions-arrays/    ← 🛠️ BUILD
│   ├── week-5-js-objects-dom/         ← 🛠️ BUILD
│   ├── week-6-js-async/               ← 🛠️ BUILD
│   └── week-7-8-mini-project/         ← 🛠️ BUILD logic, ⚡ VIBE layout
├── phase-2-typescript/                ← Unlocks after Phase 1
├── phase-3-react/                     ← React + TanStack Query
├── phase-4-vite-routing/              ← Vite, react-router, the proxy seam
├── phase-5-api-contract/              ← Generated types, `make types`
├── phase-6-frontend-audit/            ← Review Gate over ds-template's frontend
└── docs/
    └── nextjs-vs-vite.md              ← Why this repo targets Vite, and when Next.js wins
```

### Learning-file convention

For Build-track weeks, the starter file ships with `TODO` comments and teaching annotations.
Keep your annotated working copy as `*_learning.<ext>` (e.g. `index_learning.html`) and produce a
**clean final deliverable** with the teaching comments stripped (e.g. `index.html`). The clean file
is what you'd ship; the `*_learning` file is your reasoning trail. Both are committed.
