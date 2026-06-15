/**
 * Week 3 — JavaScript Basics: Variables, Types & Control Flow
 * ------------------------------------------------------------
 * This is your annotated starter (script_learning.js). Work the TODOs here.
 * Run it while developing with: node script_learning.js
 *
 * When the week is done, save a clean copy with the teaching comments
 * stripped out as `script.js` — that is your committed deliverable.
 * (See the learning-file convention in the root README.)
 *
 * Work through the TODOs in order.
 * After each TODO, run the script to see the output.
 * Fix any errors before moving to the next TODO.
 */


// ============================================================
// TODO 1: DECLARE YOUR MODEL INPUT FEATURES
//
// Use `const` to declare at least 3 variables representing
// features a model might take as input.
// Choose features relevant to a model you know.
//
// Examples (replace with your own):
//   const age = 35
//   const annualIncome = 72000
//   const creditScore = 680
//
// Note: No `var`. No reassignment needed here, so use `const`.
// ============================================================


// ============================================================
// TODO 2: LOG YOUR INPUTS USING A TEMPLATE LITERAL
//
// Template literals use backticks (`) and ${} for interpolation.
// This is identical to Python's f-strings — just different syntax.
//
// Python:  print(f"Age: {age}, Income: {annual_income}")
// JS:      console.log(`Age: ${age}, Income: ${annualIncome}`)
//
// Log a readable summary of all your input features.
// ============================================================


// ============================================================
// TODO 3: DECLARE A PREDICTED PROBABILITY SCORE
//
// Use `let` here (not `const`) — you'll reassign it in a later
// week when we connect this to real user input.
//
// Assign a number between 0.0 and 1.0 to simulate a model output.
// ============================================================


// ============================================================
// TODO 4: CLASSIFY THE SCORE WITH IF / ELSE IF / ELSE
//
// Write a conditional block that assigns a risk label based on
// the score you declared in TODO 3.
//
// Classification logic:
//   score >= 0.7  → "High Risk"
//   score >= 0.4  → "Medium Risk"
//   otherwise     → "Low Risk"
//
// Store the label in a `let` variable called `riskLabel`.
//
// Python equivalent:
//   if score >= 0.7:
//       risk_label = "High Risk"
//   elif score >= 0.4:
//       risk_label = "Medium Risk"
//   else:
//       risk_label = "Low Risk"
//
// JS syntax:
//   if (condition) {
//     // code
//   } else if (condition) {
//     // code
//   } else {
//     // code
//   }
// ============================================================


// ============================================================
// TODO 5: LOG THE FINAL RESULT
//
// Log a clear output that shows the score and the label.
// Use a template literal.
//
// Example output:
//   Prediction Score: 0.73 → Risk Label: High Risk
// ============================================================


// ============================================================
// STRETCH GOAL (only after TODOs 1-5 are complete and working):
//
// Add a second classification: confidence level.
// Based on how far the score is from 0.5 (the decision boundary),
// assign a confidence:
//   |score - 0.5| >= 0.3  → "High Confidence"
//   |score - 0.5| >= 0.15 → "Medium Confidence"
//   otherwise             → "Low Confidence"
//
// Hint: Math.abs() works just like Python's abs()
// Log the confidence alongside your risk label.
// ============================================================
