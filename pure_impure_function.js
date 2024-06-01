// Pure and Impure Functions in JavaScript
/*
A pure function is a function that:
1.Always produces the same output for the same input.

2.Has no side effects. This means it does not alter any external state or interact with the outside world (like modifying global variables, I/O operations, etc.).

*/

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always returns 5
console.log(add(2, 3)); // Always returns 5

/*
Impure Functions
An impure function is a function that:

1.May produce different outputs for the same input.

2.Has side effects. This means it interacts with or modifies some external state or performs operations like logging, modifying global variables, or I/O operations.
*/

let counter = 0;

function increment() {
  counter += 1;
  return counter;
}

console.log(increment()); // Returns 1
console.log(increment()); // Returns 2

// Example with Side Effects

function logMessage(message) {
  console.log(message);
}

logMessage("Hello, world!"); // Side effect: Logs to the console

/*
Pure Functions:
1.Always return the same result for the same inputs.
2'Do not have side effects.
3.Easier to reason about, test, and optimize.

Impure Functions:
1.May return different results for the same inputs.
2.Can have side effects.
3.More complex to test and understand due to dependency on external state.

*/
