# Week 4 — JS Functions & Array Methods

> **Track: 🛠️ BUILD** — hand-write all transforms yourself. Claude is reviewer only (Modes 1–4).
> See [CLAUDE.md](../../CLAUDE.md).

## Concept

JavaScript functions are first-class citizens — exactly like Python. You can assign
them to variables, pass them as arguments, and return them from other functions.

Arrow functions (`=>`) are the modern, preferred syntax. They're equivalent to
Python lambdas, but more powerful (they can span multiple lines).

---

## Python → JS Function Syntax

```python
# Python: regular function
def classify(score):
    return "Positive" if score >= 0.5 else "Negative"

# Python: lambda
classify = lambda score: "Positive" if score >= 0.5 else "Negative"
```

```javascript
// JS: regular function declaration
function classify(score) {
  return score >= 0.5 ? "Positive" : "Negative"
}

// JS: arrow function (preferred modern syntax)
const classify = (score) => {
  return score >= 0.5 ? "Positive" : "Negative"
}

// JS: arrow function, short form (implicit return for single expressions)
const classify = (score) => score >= 0.5 ? "Positive" : "Negative"
```

The `? :` syntax is the **ternary operator** — identical to Python's inline if/else.

---

## Array Methods — Your pandas-lite Toolkit

This is the most important section of Week 4. These methods are used constantly.

```python
scores = [0.9, 0.3, 0.7, 0.1, 0.8, 0.4, 0.6, 0.2, 0.75, 0.45]
```

```javascript
const scores = [0.9, 0.3, 0.7, 0.1, 0.8, 0.4, 0.6, 0.2, 0.75, 0.45]
```

| Python | JavaScript | What it does |
|---|---|---|
| `list(map(fn, lst))` | `arr.map(fn)` | Transform every element |
| `list(filter(fn, lst))` | `arr.filter(fn)` | Keep elements where fn returns true |
| `functools.reduce(fn, lst, init)` | `arr.reduce(fn, init)` | Accumulate to a single value |
| `len([x for x in lst if x > 0.5])` | `arr.filter(x => x > 0.5).length` | Count matching elements |
| `sum(lst) / len(lst)` | `arr.reduce((a, b) => a + b, 0) / arr.length` | Average |

### Key difference from Python: arrays are **mutable**

```javascript
const scores = [0.9, 0.3, 0.7]
// .map() and .filter() return NEW arrays (non-mutating) — safe like Python
const labels = scores.map(s => s >= 0.5 ? "Positive" : "Negative")

// .sort() MUTATES the original array — unlike Python's sorted()
scores.sort()  // ⚠️ modifies scores in place!

// Safe sort: copy first
const sorted = [...scores].sort()  // spread operator creates a copy
```

---

## 🛠️ Your Task

Work the TODOs in `pipeline_learning.js` (your annotated starter); when done, save a clean,
comment-stripped copy as `pipeline.js` — that's your deliverable. This script simulates a mini
model evaluation pipeline.

**Requirements:**
1. Declare an array of 10 prediction scores (mix of values between 0.0 and 1.0)
2. Use `.map()` to transform scores into labels ("Positive" / "Negative")
3. Use `.filter()` to create an array of only positive predictions
4. Use `.reduce()` to calculate the average score across all 10
5. Log a summary object with: `{ total, positives, negatives, averageScore }`

**The summary object should look like this when logged:**
```
{ total: 10, positives: 6, negatives: 4, averageScore: 0.57 }
```

**Run it with:** `node pipeline_learning.js` while developing (then `node pipeline.js` for the clean version)

---

## Claude Code Prompts for This Week

**Before you start (Mode 1):**
```
"Explain JavaScript arrow functions to me as a Python developer.
How do they compare to Python lambdas?
When would I choose a regular function over an arrow function?
Don't write my project code — just explain the concept."
```

**After you finish (Mode 2):**
```
"Review this JavaScript pipeline I wrote. Do NOT rewrite it.
Tell me: what I got right, what could be improved and why,
any concepts I'm misunderstanding, and one follow-up exercise.
[paste your pipeline_learning.js here]"
```

---

## Resources
- javascript.info Array Methods: https://javascript.info/array-methods
- MDN Array.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- MDN Array.reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
