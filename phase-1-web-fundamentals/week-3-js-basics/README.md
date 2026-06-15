# Week 3 — JavaScript Basics: Variables, Types & Control Flow

> **Track: 🛠️ BUILD** — hand-write all logic yourself. Claude is reviewer only (Modes 1–4).
> See [CLAUDE.md](../../CLAUDE.md).

## Concept

JavaScript is the programming language of the web — and it's closer to Python
than you might expect. This week is pure syntax mapping: translating what you
already know in Python into JS equivalents.

The key mental shift: JS runs in the browser (and in Node.js, which you just installed).
This week we run JS in **Node.js** — in your terminal, like running a `.py` script.

---

## Python → JavaScript Translation Table

| Concept | Python | JavaScript |
|---|---|---|
| Variable (reassignable) | `x = 5` | `let x = 5` |
| Variable (constant) | `X = 5` (convention) | `const x = 5` (enforced) |
| String interpolation | `f"Hello {name}"` | `` `Hello ${name}` `` |
| None | `None` | `null` or `undefined` |
| Boolean | `True / False` | `true / false` |
| Equality check | `x == 5` | `x === 5` ⚠️ (always use triple equals) |
| Not equal | `x != 5` | `x !== 5` |
| If statement | `if x > 5:` | `if (x > 5) {` |
| Print | `print(x)` | `console.log(x)` |
| Comment | `# comment` | `// comment` |
| Multi-line comment | `"""..."""` | `/* ... */` |

### ⚠️ The Most Important Gotcha: `===` vs `==`

```javascript
// == does type coercion (converts types before comparing) — AVOID IT
console.log(5 == "5")   // true  ← dangerous, unexpected
console.log(0 == false) // true  ← this is a bug waiting to happen

// === checks value AND type — ALWAYS USE THIS
console.log(5 === "5")   // false ← correct
console.log(0 === false) // false ← correct
```

### `const` vs `let` vs `var`

```javascript
const x = 5    // cannot be reassigned — use this by default
let y = 10     // can be reassigned — use when you need to change the value
var z = 15     // old style, function-scoped, has quirks — NEVER USE
```

**Rule:** Default to `const`. Switch to `let` only when you know you'll reassign.
This mirrors the principle of immutability — prefer data that doesn't change.

---

## Running JavaScript in Node.js

Unlike HTML (which needs a browser), `.js` files can be run directly in your terminal:

```bash
# Navigate to this week's folder
cd phase-1-web-fundamentals/week-3-js-basics

# Run your annotated working file while developing
node script_learning.js
```

This is exactly like running `python script.py`.

---

## 🛠️ Your Task

Work the TODOs in `script_learning.js` (your annotated starter); when done, save a clean,
comment-stripped copy as `script.js` — that's your deliverable. This script simulates a basic
classification output.

**Requirements:**
1. Declare `const` variables for at least 3 model input features (age, income, creditScore, etc.)
2. Declare a `let` variable for a predicted probability score (a number 0.0–1.0)
3. Use `console.log()` with template literals to print a summary of the inputs
4. Use an `if / else if / else` block to classify the score into a risk label:
   - score >= 0.7 → "High Risk"
   - score >= 0.4 → "Medium Risk"
   - else → "Low Risk"
5. Log the final classification

**Run it with:** `node script_learning.js` while developing (then `node script.js` for the clean version)

---

## Claude Code Prompts for This Week

**Before you start (Mode 1):**
```
"Explain the difference between let, const, and var in JavaScript.
Are there Python equivalents? Which should I default to and why?
Do NOT write my project code."
```

**After you finish (Mode 4 — test yourself):**
```
"Quiz me on JavaScript type coercion and why === matters.
Use the Socratic method — ask me one question at a time.
My background: Python/SQL data scientist learning JS from scratch."
```

---

## Resources
- javascript.info Chapters 1-9: https://javascript.info/first-steps
- MDN JavaScript Basics: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
