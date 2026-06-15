# Week 2 — CSS: The Style Layer

> **Track: ⚡ VIBE** — CSS is assemble-only. You may let Claude generate styling, but you MUST run
> the Mandatory Review Gate before using it (walk through it in plain English, name one thing to
> understand before production, name one thing that breaks if requirements change, answer one
> comprehension question). Don't grind Flexbox mastery — read-and-tweak is the goal.
> See [CLAUDE.md](../../CLAUDE.md).

## Concept

CSS (Cascading Style Sheets) is a **rules engine**. You write selectors (what to target)
and declarations (what rules to apply). Think of it like a `CASE WHEN` statement
applied to visual properties.

```css
/* selector { property: value; } */
h1 {
  color: navy;
  font-size: 24px;
}
```

The "Cascading" in CSS means rules can override each other based on specificity and order.
More specific selectors win. When in doubt: element < class < ID (from least to most specific).

---

## Python Analogy

```python
# Python: a dict of styles applied to something
styles = {
    "color": "navy",
    "font_size": "24px",
    "margin": "16px"
}
```

```css
/* CSS: the same idea, applied to an HTML element */
h1 {
  color: navy;
  font-size: 24px;
  margin: 16px;
}
```

---

## Key Concepts This Week

### Selectors
```css
h1 { }           /* element selector — targets ALL <h1> tags */
.my-class { }    /* class selector — targets elements with class="my-class" */
#my-id { }       /* ID selector — targets ONE element with id="my-id" */
```

### The Box Model
Every HTML element is a box. From inside to outside:
```
┌─────────────────────────────────┐
│           margin                │  ← space outside the border
│  ┌───────────────────────────┐  │
│  │         border            │  │  ← the visible border line
│  │  ┌─────────────────────┐  │  │
│  │  │      padding        │  │  │  ← space inside the border
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    content    │  │  │  │  ← your text / image
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Flexbox
Flexbox is the modern layout system. One property on a container controls how its
children are arranged. This week's most important concept.

```css
.container {
  display: flex;           /* enables flexbox */
  flex-direction: column;  /* stack items vertically (default: row) */
  align-items: center;     /* centre items on the cross axis */
  gap: 16px;               /* space between items */
}
```

Play Flexbox Froggy (https://flexboxfroggy.com) before writing any CSS this week.
It teaches Flexbox interactively in ~30 minutes.

---

## 🛠️ Your Task

Style the `index.html` form you built in Week 1.

**Setup:** Copy your completed `week-1-html/index.html` into this folder and link a CSS file to it.

Linking CSS to HTML:
```html
<!-- Add this inside your <head> tag -->
<link rel="stylesheet" href="styles.css" />
```

**Requirements:**
- Form is horizontally centred on the page
- Page has a readable font (not the default browser font)
- Each label/input pair has clear vertical spacing between them
- Inputs have a visible border and some internal padding
- The submit button looks visually distinct from the inputs
- A background colour (even just `#f5f5f5`) so it doesn't look like a blank document

**Intentional, not beautiful.** Every style rule you write should have a reason.

### How to Preview
Use Live Server (right-click `index.html` → "Open with Live Server").
Changes to `styles.css` will hot-reload automatically.

---

## Claude Code Prompts for This Week

**Before you start (Mode 1):**
```
"Explain CSS Flexbox to me as a Python developer.
What mental model should I use for thinking about layout?
Don't write my project code — just explain the concept with small examples."
```

**If stuck on centering (Mode 3):**
```
"I'm trying to centre my form horizontally on the page.
I've tried setting margin: auto on the form but it's not working.
Give me a hint or a guiding question — don't give me the answer."
```

**After you finish (Mode 2):**
```
"Review this CSS I wrote for my ML input form. Do NOT rewrite it.
Tell me: what I got right, what could be improved and why,
any concepts I'm misunderstanding, and one follow-up exercise.
[paste your styles.css here]"
```

**If you let Claude generate any CSS (Review Gate — mandatory before you keep it):**
```
"You generated this CSS. Run the Mandatory Review Gate on it:
1. Walk through it section by section in plain English.
2. Tell me one thing I must understand before using it in production.
3. Tell me one thing that would break if my requirements changed.
4. Ask me one question to confirm I follow the critical part.
[paste the generated styles.css here]"
```

---

## Resources
- Flexbox Froggy (do this first): https://flexboxfroggy.com
- CSS Tricks Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- MDN CSS First Steps: https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps
- MDN Box Model: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
