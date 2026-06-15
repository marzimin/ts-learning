# Week 1 — HTML: The Structure Layer

> **Track: 🛠️ BUILD** — hand-write the structure yourself. Claude is reviewer only (Modes 1–4),
> and never writes your `index.html`. See [CLAUDE.md](../../CLAUDE.md).

## Concept

HTML (HyperText Markup Language) is not a programming language — it has no logic,
no loops, no conditions. It is a **document structure language**.

Think of it this way: if a webpage were a pandas DataFrame, HTML defines the
column names and the shape of the data. CSS styles it. JavaScript makes it dynamic.

Every HTML document is a tree of nested **elements**. Each element is wrapped in tags:
```html
<tagname>content</tagname>
```

---

## Python Analogy

In Python, you structure data with classes or dicts.
In HTML, you structure *content* with elements.

```python
# Python: describing a user input form as a data structure
form = {
    "title": "Model Prediction Input",
    "fields": [
        {"name": "age", "type": "number"},
        {"name": "income", "type": "number"},
        {"name": "education", "type": "select", "options": ["High School", "Bachelor", "Master", "PhD"]}
    ],
    "submit_button": "Get Prediction"
}
```

```html
<!-- HTML: the same form, expressed as document structure -->
<form>
  <h1>Model Prediction Input</h1>
  <label>Age: <input type="number" name="age" /></label>
  <label>Income: <input type="number" name="income" /></label>
  <label>
    Education:
    <select name="education">
      <option>High School</option>
      <option>Bachelor</option>
      <option>Master</option>
      <option>PhD</option>
    </select>
  </label>
  <button type="submit">Get Prediction</button>
</form>
```

---

## Key Concepts This Week

### Semantic vs Non-Semantic Elements
- **Non-semantic:** `<div>`, `<span>` — generic containers, say nothing about content
- **Semantic:** `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` — describe meaning

Rule of thumb: use semantic elements wherever possible. It's the HTML equivalent
of writing readable, self-documenting code.

### Essential Tags to Know
| Tag | Purpose |
|---|---|
| `<html>` | Root of the document |
| `<head>` | Metadata (title, links to CSS) — not visible |
| `<body>` | Everything the user sees |
| `<h1>` to `<h6>` | Headings (h1 = most important) |
| `<p>` | Paragraph of text |
| `<a href="...">` | Hyperlink |
| `<div>` | Generic block container |
| `<span>` | Generic inline container |
| `<form>` | Input form wrapper |
| `<input>` | Text, number, checkbox inputs |
| `<label>` | Label for an input |
| `<select>` + `<option>` | Dropdown |
| `<button>` | Clickable button |

---

## 🛠️ Your Task

Build a **static ML model input form** in `index.html`.

Requirements:
- A page title in the browser tab (hint: `<title>` tag goes in `<head>`)
- A visible heading describing what the form does
- At least **4 input fields** relevant to a model you know (e.g. age, income, credit score, loan amount)
- At least **1 dropdown** (`<select>`) field
- A submit button
- Use semantic HTML — wrap your form in `<main>`, use proper `<label>` tags

**Do not add any CSS or JavaScript yet.** Ugly is correct. Structure is the goal.

### How to Preview
1. Open `index.html` in VS Code
2. Right-click anywhere in the file → "Open with Live Server"
3. Your browser will open and auto-refresh as you save

---

## Claude Code Prompts for This Week

**Before you start (Mode 1):**
```
"Explain the difference between semantic and non-semantic HTML to me
as a Python developer. What's the equivalent of writing readable,
self-documenting code in HTML? Do NOT write my project code."
```

**After you finish (Mode 2):**
```
"Review this HTML I wrote. Do NOT rewrite it. Tell me:
1. What I got right
2. What could be improved and why
3. Any concepts I'm misunderstanding
4. One follow-up exercise to deepen my understanding
[paste your index.html here]"
```

---

## Resources
- MDN HTML Basics: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
- MDN Forms Guide: https://developer.mozilla.org/en-US/docs/Learn/Forms
- MDN HTML Elements Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
