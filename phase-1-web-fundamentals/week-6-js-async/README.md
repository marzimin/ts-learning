# Week 6 — Async JavaScript: fetch, Promises & async/await

> **Track: 🛠️ BUILD** — hand-write the async/fetch and error handling yourself. Claude is reviewer
> only (Modes 1–4). See [CLAUDE.md](../../CLAUDE.md).

## Concept

Nearly everything in web development is **asynchronous** — network requests,
file reads, timers. The browser can't freeze and wait for a server response;
it needs to keep running.

JavaScript handles this with **Promises** and `async/await`.
The good news: if you've used Python's `asyncio`, the mental model is nearly identical.

---

## Python → JS Async Comparison

```python
# Python async HTTP request
import httpx
import asyncio

async def get_prediction(payload: dict) -> dict:
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://api.example.com/predict",
            json=payload
        )
        return response.json()

asyncio.run(get_prediction({"age": 35, "income": 72000}))
```

```javascript
// JavaScript async HTTP request — nearly identical mental model
async function getPrediction(payload) {
  const response = await fetch("https://api.example.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)     // like json=payload in Python
  })
  return await response.json()        // like response.json() in Python
}
```

Key differences:
- `fetch()` is the browser's built-in HTTP client (like `httpx` or `requests`)
- `JSON.stringify()` serialises a JS object to a JSON string (like `json.dumps()`)
- `response.json()` is itself async in JS — you must `await` it

---

## Promises (What async/await is built on)

A **Promise** is an object representing a value that will exist in the future.
It has three states: pending → fulfilled or rejected.

```javascript
// Promise-based (older style — you'll see this in documentation)
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

// async/await (modern style — use this)
async function loadData() {
  try {
    const response = await fetch("https://api.example.com/data")
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error("Something went wrong:", error)
  }
}
```

`async/await` is just syntactic sugar over Promises — cleaner, easier to read.
Prefer it. But understand Promises because documentation often uses `.then()`.

---

## Error Handling

Always wrap async calls in `try/catch`. Two types of errors to handle:

```javascript
async function loadData() {
  try {
    const response = await fetch("https://api.example.com/data")

    // fetch() doesn't throw on HTTP errors (404, 500) — check manually
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const data = await response.json()
    return data

  } catch (error) {
    // This catches: network failures AND our thrown HTTP errors
    console.error("Failed to load data:", error.message)
    return null
  }
}
```

This `response.ok` check is the JS equivalent of `response.raise_for_status()` in Python requests.

---

## 🛠️ Your Task

Update your form from Week 5 to call a real API.

**Use:** [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free fake REST API.
No API key needed.

Work the TODOs in `app_learning.js` (your annotated starter); save a clean, comment-stripped
copy as `app.js` (the file your HTML links) as your deliverable.

**Requirements (write these in `app_learning.js`):**
1. On form submit, call `https://jsonplaceholder.typicode.com/users/1` using `fetch()`
2. Make the function `async` and use `await`
3. Check `response.ok` — throw an error if the request failed
4. Display the returned user's name and email on the page
5. Show a **loading state** while the request is in flight ("Loading..." in the result div)
6. Show a **user-friendly error message** if the request fails (wrap in `try/catch`)

**Why a fake API and not our model?** We don't have a real model endpoint yet.
The point is practising the async pattern — the API doesn't matter.

### How to Test
Use Live Server. Open DevTools → Network tab to watch the request fire.
Try changing the URL to something invalid to test your error handling.

---

## Claude Code Prompts for This Week

**Before you start (Mode 1):**
```
"Explain JavaScript Promises vs async/await to me.
I understand Python's asyncio — use that as the starting point.
What's the equivalent of asyncio.run()? Don't write my project code."
```

**After you finish (Mode 4 — test yourself):**
```
"Quiz me on JavaScript async/await using the Socratic method.
Focus on error handling and what happens when a Promise rejects.
Ask me one question at a time and wait for my answer."
```

---

## Resources
- javascript.info Async/Await: https://javascript.info/async-await
- javascript.info Fetch: https://javascript.info/fetch
- JSONPlaceholder: https://jsonplaceholder.typicode.com
- MDN fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
