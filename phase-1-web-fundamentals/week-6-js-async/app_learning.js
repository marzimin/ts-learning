/**
 * Week 6 — Async JS: fetch, Promises & async/await
 * --------------------------------------------------
 * This is your annotated starter (app_learning.js). Work the TODOs here, then
 * save a clean copy (teaching comments stripped) as `app.js` — the file your
 * HTML links and your committed deliverable. (See the learning-file
 * convention in the root README.)
 *
 * SETUP: Copy your index.html and styles.css from week-5/ into this folder.
 * The clean app.js you produce here replaces the one from Week 5.
 *
 * This week's goal: replace the hardcoded fake prediction with a real
 * API call using fetch() and async/await.
 */

// The API endpoint we'll use (free, no key required)
const API_URL = "https://jsonplaceholder.typicode.com/users/1"


// ============================================================
// TODO 1: SELECT YOUR DOM ELEMENTS
//
// Select the form and result div — same as Week 5.
// Store them in consts at the top of the file (outside any function)
// so they're available everywhere.
// ============================================================


// ============================================================
// TODO 2: WRITE AN ASYNC fetchUserData() FUNCTION
//
// This function should:
//   1. Call fetch(API_URL) and await the response
//   2. Check response.ok — if false, throw an Error with the status code
//   3. Await response.json() to parse the body
//   4. Return the parsed data object
//   5. Wrap everything in try/catch — catch should return null
//
// This is a pure data-fetching function — no DOM manipulation here.
// Keep data fetching and display logic separate. (SWE principle: separation of concerns)
//
// Skeleton:
// async function fetchUserData() {
//   try {
//     const response = await fetch(???)
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`)
//     }
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.error("fetchUserData failed:", error.message)
//     return null
//   }
// }
// ============================================================


// ============================================================
// TODO 3: WRITE A displayResult() FUNCTION
//
// This function takes a data object (or null) and updates the DOM.
// Keep display logic in its own function — separate from fetching.
//
// It should handle two cases:
//   - data is null → display an error message
//   - data is valid → display the user's name and email
//
// Example result text:
//   "User: Leanne Graham | Email: Sincere@april.biz"
//
// Access object properties with dot notation: data.name, data.email
// ============================================================


// ============================================================
// TODO 4: WRITE A showLoading() FUNCTION
//
// A small helper that sets the result div to show "Loading..."
// This should run BEFORE the fetch starts, so the user knows
// something is happening.
//
// This is standard UX for any async operation — you'll do this
// in every ML app that calls a model endpoint.
// ============================================================


// ============================================================
// TODO 5: WIRE EVERYTHING INTO THE FORM SUBMIT HANDLER
//
// Add a submit event listener to your form.
// Inside the handler:
//   1. event.preventDefault()
//   2. Call showLoading()
//   3. Await fetchUserData()
//   4. Call displayResult() with the returned data
//
// The handler itself must be async to use await inside it:
//   form.addEventListener("submit", async (event) => {
//     ...
//   })
// ============================================================


// ============================================================
// STRETCH GOAL:
// Add a 1.5 second artificial delay before displaying the result
// to make the loading state visible (the real API is very fast).
//
// Hint: create a delay helper:
//   const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
//   await delay(1500)
//
// This is a great pattern for understanding Promises directly —
// setTimeout is callback-based, but wrapping it in a Promise
// makes it awaitable.
// ============================================================
