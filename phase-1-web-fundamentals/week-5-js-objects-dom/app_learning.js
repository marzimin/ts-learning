/**
 * Week 5 — JavaScript Objects & The DOM
 * ---------------------------------------
 * This is your annotated starter (app_learning.js). Work the TODOs here.
 * When a milestone works, save a clean copy (teaching comments stripped) as
 * `app.js` — that clean file is the one your HTML links and your committed
 * deliverable. (See the learning-file convention in the root README.)
 *
 * This script connects your HTML form to JavaScript.
 *
 * SETUP (do this before writing any code here):
 *   1. Copy index.html and styles.css from week-2-css/ into this folder
 *   2. Add id attributes to each input in your HTML:
 *      e.g. <input type="number" name="age" id="age" />
 *   3. Add a result div below your submit button:
 *      <div id="result"></div>
 *   4. Link your clean script in your HTML just before </body>:
 *      <script src="app.js"></script>
 *
 * Then open index.html with Live Server and open the browser console.
 */


// ============================================================
// TODO 1: SELECT THE FORM ELEMENT
//
// Use document.querySelector() to select your <form> element.
// Store it in a const.
//
// Hint: you can select by tag name: document.querySelector("form")
// Or add id="prediction-form" to your HTML and select by ID:
//   document.querySelector("#prediction-form")
// ============================================================


// ============================================================
// TODO 2: ADD A SUBMIT EVENT LISTENER TO THE FORM
//
// Forms have a "submit" event that fires when the submit button
// is clicked (or Enter is pressed in a field).
//
// IMPORTANT: The first thing inside your handler must be:
//   event.preventDefault()
// This stops the browser's default behaviour (page refresh).
// Without this, your JS runs for a millisecond then the page reloads.
//
// Syntax:
//   yourForm.addEventListener("submit", (event) => {
//     event.preventDefault()
//     // your code here
//   })
// ============================================================


// ============================================================
// TODO 3: READ INPUT VALUES INSIDE THE EVENT HANDLER
//
// Inside your submit handler, use document.querySelector() to
// read the value from each input field.
//
// IMPORTANT: .value always returns a string, even for number inputs.
// Convert numeric values using Number():
//   const age = Number(document.querySelector("#age").value)
//
// Read all your input fields and store them in separate consts.
// ============================================================


// ============================================================
// TODO 4: BUILD A MODEL INPUT OBJECT
//
// Combine your input values into a single JS object.
// This is the data you'd send to your ML model.
//
// const modelInput = {
//   age: age,
//   income: income,
//   // ... other fields
// }
//
// Shorthand (when variable name matches key name):
// const modelInput = { age, income }  ← same thing, cleaner
//
// Log the object: console.log("Model Input:", modelInput)
// ============================================================


// ============================================================
// TODO 5: GENERATE A FAKE PREDICTION
//
// We don't have a real model yet — hardcode a score or use
// a simple rule based on your inputs.
//
// Example: const score = modelInput.creditScore > 700 ? 0.2 : 0.8
//
// Then reuse your classify() logic from Week 3 to get a label.
// Either copy-paste the function here, or rewrite it from memory.
// ============================================================


// ============================================================
// TODO 6: DISPLAY THE RESULT ON THE PAGE
//
// Select your #result div and update its textContent.
// Don't use innerHTML unless you intend to render HTML tags
// (textContent is safer — no risk of injecting unexpected markup).
//
// const resultDiv = document.querySelector("#result")
// resultDiv.textContent = `Prediction: ${label} (score: ${score})`
//
// Optionally, also update the styling of the result based on
// the label — e.g. change the text color for High/Medium/Low risk.
// ============================================================


// ============================================================
// STRETCH GOAL:
// Add basic input validation before building your model input object.
// If any required field is empty or invalid, display an error message
// in the result div instead of running the prediction.
//
// Hint: Number("") returns 0, not NaN — check for empty strings directly.
//   if (document.querySelector("#age").value === "") { ... }
// ============================================================
