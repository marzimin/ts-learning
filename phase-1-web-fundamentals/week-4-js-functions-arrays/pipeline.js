/**
 * Week 4 — JS Functions & Array Methods
 * ---------------------------------------
 * Run this file with: node pipeline.js
 *
 * Goal: build a mini model evaluation pipeline using array methods.
 * This should feel like a simplified pandas pipeline — no loops needed.
 */


// ============================================================
// TODO 1: DEFINE YOUR SCORES ARRAY
//
// Create an array of exactly 10 prediction scores.
// Mix values above and below 0.5 to make the pipeline interesting.
// Use `const` — you won't reassign the array itself.
//
// Example (use your own values):
//   const scores = [0.9, 0.3, 0.7, 0.1, 0.8, 0.4, 0.6, 0.2, 0.75, 0.45]
// ============================================================


// ============================================================
// TODO 2: WRITE A classify() FUNCTION
//
// Write an arrow function called `classify` that takes a single
// score (number) and returns a label (string):
//   score >= 0.5 → "Positive"
//   otherwise   → "Negative"
//
// Use the ternary operator (condition ? valueIfTrue : valueIfFalse)
// This is a one-liner.
//
// Python equivalent:
//   classify = lambda score: "Positive" if score >= 0.5 else "Negative"
// ============================================================


// ============================================================
// TODO 3: USE .map() TO PRODUCE A LABELS ARRAY
//
// Apply your classify function to every score using .map().
// Store the result in a const called `labels`.
//
// Python equivalent:
//   labels = list(map(classify, scores))
//   # or: labels = [classify(s) for s in scores]
//
// JS: arr.map(fn) — fn receives (element, index, array)
//     You only need element here.
// ============================================================


// ============================================================
// TODO 4: USE .filter() TO GET ONLY POSITIVE PREDICTIONS
//
// Create an array of only the scores where the label is "Positive".
// Store it in a const called `positiveScores`.
//
// Hint: You don't need the labels array for this.
//       Filter the scores array directly using your classify function.
//
// Python equivalent:
//   positive_scores = [s for s in scores if classify(s) == "Positive"]
// ============================================================


// ============================================================
// TODO 5: USE .reduce() TO CALCULATE THE AVERAGE SCORE
//
// .reduce() accumulates an array into a single value.
// Use it to calculate the average of all scores.
//
// .reduce() signature:
//   arr.reduce((accumulator, currentValue) => newAccumulator, initialValue)
//
// Python equivalent:
//   import functools
//   total = functools.reduce(lambda acc, x: acc + x, scores, 0)
//   average = total / len(scores)
//
// Steps:
//   1. Use .reduce() to get the sum of all scores
//   2. Divide by scores.length to get the average
//   3. Round to 2 decimal places: Math.round(value * 100) / 100
//
// Store the result in a const called `averageScore`.
// ============================================================


// ============================================================
// TODO 6: BUILD AND LOG THE SUMMARY OBJECT
//
// Create a `const summary` object with these keys:
//   - total:        total number of scores
//   - positives:    count of positive predictions
//   - negatives:    count of negative predictions
//   - averageScore: the average score from TODO 5
//
// Then log it with console.log(summary)
//
// Expected output shape:
//   { total: 10, positives: 6, negatives: 4, averageScore: 0.57 }
//
// Hints:
//   - Array length: arr.length
//   - scores.length gives you total
//   - positiveScores.length gives you positives count
//   - negatives = total - positives (no need to filter again)
// ============================================================


// ============================================================
// STRETCH GOAL (only after TODOs 1-6 are done and working):
//
// Write a function called `getTopPredictions` that takes the
// scores array and a number n, and returns the top n scores
// in descending order.
//
// Use: [...scores].sort((a, b) => b - a).slice(0, n)
// (The spread [...scores] copies the array before sorting
//  to avoid mutating the original — important SWE habit.)
//
// Log the top 3 predictions.
// ============================================================
