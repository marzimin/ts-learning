# TypeScript Learning Journey 🚀

A structured, self-paced learning repo for a Python/SQL Data Scientist learning TypeScript
from scratch — with the goal of building production-ready ML app frontends and full-stack applications.

**Approach:** Learn by doing. Every folder contains starter files with `TODO` comments.
Write the code yourself first. Use Claude Code as a reviewer and teacher — not a code generator.

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
git clone https://github.com/YOUR_USERNAME/ts-learning-journey.git
cd ts-learning-journey
```

---

## 📚 Learning Plan Overview

| Phase | Focus | Est. Duration |
|---|---|---|
| **Phase 1** ← You are here | Web Fundamentals (HTML, CSS, JS) | ~6-8 weeks |
| Phase 2 | TypeScript Core | ~8-10 weeks |
| Phase 3 | React + TypeScript | ~10-12 weeks |
| Phase 4 | Next.js (Full-Stack) | ~8-10 weeks |
| Phase 5 | APIs & Backend with TypeScript | ~8-10 weeks |
| Phase 6 | Capstone ML Application | ~8-12 weeks |

**Time commitment:** 1-3 hours/week. Steady consistency beats intensity.

---

## 🤖 How to Use Claude Code (The Rules)

Claude Code is your **teacher and reviewer** — not your code writer. Use it in these four modes only:

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
ts-learning-journey/
├── README.md                          ← You are here
├── .gitignore
├── phase-1-web-fundamentals/
│   ├── README.md                      ← Phase overview
│   ├── week-1-html/
│   │   ├── README.md                  ← Concept explanation + task
│   │   ├── NOTES.md                   ← Your learning journal (fill this in)
│   │   └── index.html                 ← Starter file with TODOs
│   ├── week-2-css/
│   ├── week-3-js-basics/
│   ├── week-4-js-functions-arrays/
│   ├── week-5-js-objects-dom/
│   ├── week-6-js-async/
│   └── week-7-8-mini-project/
├── phase-2-typescript/                ← Unlocks after Phase 1
├── phase-3-react/
├── phase-4-nextjs/
├── phase-5-backend/
└── phase-6-capstone/
```
