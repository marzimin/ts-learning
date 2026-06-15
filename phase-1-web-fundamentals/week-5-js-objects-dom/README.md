# Week 5 — JS Objects & The DOM

> **Track: 🛠️ BUILD** — hand-write the DOM wiring yourself. Claude is reviewer only (Modes 1–4).
> See [CLAUDE.md](../../CLAUDE.md).

## Concept

This week combines two things: **objects** (JS's core data structure)
and **the DOM** (the API that lets JS interact with your HTML).

Together, they let you build interactive pages — reading user input,
updating what's shown on screen, and responding to clicks.

---

## JavaScript Objects

Objects in JS are like Python dicts — key/value pairs.
But they're also the building block for everything else in JS (including classes).

```python
# Python dict
prediction_input = {
    "age": 35,
    "income": 72000,
    "credit_score": 680
}
print(prediction_input["age"])  # 35
```

```javascript
// JS object literal
const predictionInput = {
  age: 35,
  income: 72000,
  creditScore: 680  // JS convention: camelCase (not snake_case)
}
console.log(predictionInput.age)      // dot notation → 35
console.log(predictionInput["age"])   // bracket notation → 35 (same as Python)
```

### Destructuring (very common in modern JS)

```javascript
const { age, income } = predictionInput
console.log(age)    // 35 — extracted directly
console.log(income) // 72000
```

Python equivalent: `age, income = prediction_input["age"], prediction_input["income"]`
But cleaner.

---

## The DOM (Document Object Model)

When the browser loads your HTML, it parses it into a **tree of objects** in memory.
This tree is the DOM. JavaScript can read and modify it.

```
document (the root)
  └── html
       ├── head
       └── body
            └── main
                 └── form
                      ├── label > input#age
                      ├── label > input#income
                      └── button#submit
```

### Key DOM methods

```javascript
// Select a single element (returns the first match)
const ageInput = document.querySelector("#age")
const form = document.querySelector("form")
const allInputs = document.querySelectorAll("input") // returns all matches

// Read a value from an input
const age = document.querySelector("#age").value  // always returns a string!

// Update what's displayed on screen
document.querySelector("#result").textContent = "High Risk"

// Listen for user events
document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked!")
})
```

### ⚠️ Input values are always strings

```javascript
const age = document.querySelector("#age").value
console.log(typeof age) // "string" — even if the input is type="number"

// Convert to number for calculations:
const ageNumber = Number(age)       // or: parseInt(age)
const scoreFloat = parseFloat("0.73") // for decimals
```

---

## 🛠️ Your Task

Wire up your HTML form from Weeks 1-2 with JavaScript.

**Setup:**
1. Copy your `index.html` and `styles.css` from `week-2-css/` into this folder
2. Add `<script src="app.js"></script>` just before the closing `</body>` tag in your HTML
   (the clean `app.js` you produce — see below)
3. Add `id` attributes to each of your input fields (e.g. `id="age"`, `id="income"`)
4. Add `id="result"` to a new `<div>` below your submit button (you'll write to it from JS)

Work the TODOs in `app_learning.js` (your annotated starter). When a milestone works, save a
clean, comment-stripped copy as `app.js` — that's the file your HTML links and your deliverable.

**Requirements (write these in `app_learning.js`):**
1. Listen for the form's submit event
2. Prevent the default form behaviour (it would refresh the page — stop that first)
3. Read the values from each input field using `document.querySelector()`
4. Convert numeric inputs from strings to numbers
5. Build a JS object representing the model inputs
6. Log the object to the console
7. Display a hardcoded fake prediction result in the `#result` div

**Example result display:**
```
Prediction: High Risk (score: 0.82)
```

### How to Test
1. Open `index.html` with Live Server
2. Open browser DevTools → Console (`Cmd+Option+J` / `F12`)
3. Fill in the form and click submit
4. You should see your input object logged and the result appear on the page

---

## Claude Code Prompts for This Week

**Before you start (Mode 1):**
```
"Explain the DOM to me as a Python developer.
What's the mental model for how JavaScript interacts with HTML?
Is there an analogy to how Python scripts interact with data structures?
Don't write my project code."
```

**If stuck (Mode 3):**
```
"I'm trying to read the value from an input field on form submit.
I've tried document.querySelector but I'm getting null.
Give me a hint — don't give me the solution."
```

**After you finish (Mode 2):**
```
"Review this JavaScript I wrote to handle my form submission.
Do NOT rewrite it. Tell me: what I got right, what could be improved,
any concepts I'm misunderstanding, and one follow-up exercise.
[paste your app_learning.js here]"
```

---

## Resources
- javascript.info DOM: https://javascript.info/document
- MDN querySelector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
- MDN addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
