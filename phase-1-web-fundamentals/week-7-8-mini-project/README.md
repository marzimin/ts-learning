# Weeks 7-8 — Mini Project: Live Data Dashboard

## Overview

This is your Phase 1 capstone. No starter code — just a spec and a blank canvas.

You've now covered:
- ✅ HTML structure and semantic markup
- ✅ CSS layout with Flexbox
- ✅ JS variables, types, and control flow
- ✅ JS functions and array methods
- ✅ JS objects and DOM manipulation
- ✅ Async JS with fetch and error handling

This project combines all of it into one coherent, deployable page.

---

## The Project: Live Data Dashboard

Build a **single-page dashboard** that fetches real data from a public API,
displays it dynamically, and lets the user filter it — all in vanilla HTML/CSS/JS.

This deliberately mirrors what a real ML dashboard does:
- Fetch data from a backend endpoint
- Render it as a structured layout
- Handle loading and error states
- Let users filter or search the results

---

## Suggested API

**REST Countries API** — https://restcountries.com/v3.1/all

Free, no API key, returns rich structured data (name, population, region, flags).

Or use **Open-Meteo** — https://open-meteo.com — for a weather dashboard.
Your choice. Pick whichever data interests you more.

---

## Requirements

### Functional
- [ ] Fetch data from the API on page load (not on button click)
- [ ] Display results as a **grid or card layout** (not an HTML table)
- [ ] Show a **loading state** while data is being fetched
- [ ] Show a **user-friendly error state** if the fetch fails
- [ ] A **search/filter input** that filters the displayed results in real-time
      as the user types (no submit button needed — use the `input` event)
- [ ] Filter logic uses `.filter()` on the data array

### Code Quality (SWE habits)
- [ ] Functions are small and do one thing (no 50-line event handlers)
- [ ] Data fetching is in its own function, separate from display logic
- [ ] No `var` anywhere — only `const` and `let`
- [ ] `===` used for all equality checks
- [ ] All async calls have `try/catch` error handling

### Stretch Goals (only after core requirements are met)
- [ ] A second filter (e.g. filter by region as well as name)
- [ ] Sort the results (A-Z, population, etc.) with a dropdown
- [ ] Display a summary stat above the cards (e.g. "Showing 54 of 250 countries")
- [ ] Responsive layout that works on a narrower window

---

## File Structure

Create these files in this folder:

```
week-7-8-mini-project/
├── index.html       ← structure
├── styles.css       ← layout and visual design
├── app.js           ← all JS logic
└── NOTES.md         ← your reflection
```

---

## Approach (How to Start)

Work in this order — don't try to build everything at once:

**Day 1 (Week 7):**
1. Set up `index.html` with the skeleton structure (header, search input, results container)
2. Write `fetchData()` and log the raw response to the console
3. Write `renderCards()` with hardcoded test data first, then wire to real data

**Day 2 (Week 8):**
4. Add loading and error states
5. Add real-time filter with the `input` event
6. Polish the CSS layout

---

## Claude Code Usage for This Project

**This is a Mode 2-only project.** Write everything yourself, then bring Claude Code in for review.

Specific review requests to use at the end:

```
"Review my HTML structure for semantic correctness.
Do NOT rewrite it — just tell me what to improve and why."
```

```
"Review my async error handling in app.js.
Am I handling all realistic failure cases?
Do NOT rewrite — just identify gaps and explain."
```

```
"Review my CSS layout.
What would a professional frontend developer improve first?
Do NOT rewrite — just give me prioritised feedback."
```

```
"Review my JavaScript overall.
Are my functions doing too much? Is there any repeated logic
that should be extracted? Do NOT rewrite."
```

---

## Completing Phase 1

When this project is done:

1. Commit everything to a public GitHub repo
2. Write your final `NOTES.md` reflection (template below)
3. You're ready for Phase 2 — TypeScript Core

**Phase 2 will be added to this repo** in the `phase-2-typescript/` folder
when you're ready to start it.
