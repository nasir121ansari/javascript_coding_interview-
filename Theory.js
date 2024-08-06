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



//What is Null coalescing?

// Null coalescing is a feature in programming that allows you to provide a default value if a variable is null or undefined. In JavaScript, it's represented by the ?? operator. For example, let result = value ?? 'default'; assigns 'default' to result if value is null or undefined. This ensures that you always have a meaningful value.


let userInput = null;
let defaultValue = 'default value';

let result = userInput ?? defaultValue;

console.log(result); // Output: 'default value'

console.log(undefined ?? "Number")
console.log(null ?? "Number")





// what is NAN ?

// In JavaScript, NaN stands for "Not-a-Number." It is a value that represents something that is not a legal number.

let result3 = "text" * 2;        // Trying to multiply a string by a number
console.log(result3);





// difference between NUll and undefined ?

//In JavaScript, undefined and null are both used to represent the absence of a value, but they are used in different contexts.

/*
1. 
undefined is of type undefined.
null is of type object.

2.
Variables that are declared but not assigned any value are undefined by default.
null must be explicitly assigned to a variable.

*/


let x;
console.log(x); // Output: undefined


let y = null;
console.log(y); // Output: null




// setTimeout  vs setInterval

/*
setTimeout

1. Executes a function once after a specified delay
2.automatically stops after executing the function once.


setInterval
1.Executes a function repeatedly at specified intervals.
2. continues to run until explicitly stopped using clearInterval.

setTimeout(() => {
    console.log('This runs once after 2 seconds');
}, 2000);


let intervalId = setInterval(() => {
    console.log('This runs every 2 seconds');
}, 2000);

// Stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped');
}, 10000);









