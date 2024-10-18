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

*/




// -------------------------------- find and filte 
/*
find Method
Purpose: To find the first element in an array that satisfies a given condition.
Returns: The first element that matches the condition. If no element matches, it returns undefined.
*/

const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(num => num > 3);
console.log(found); // Output: 4



/*

Purpose: To create a new array containing all elements that satisfy a given condition.
Returns: A new array with all elements that match the condition. If no elements match, it returns an empty array.

*/

const numbers1 = [1, 2, 3, 4, 5];

const filtered = numbers1.filter(num => num > 3);
console.log(filtered); // Output: [4, 5]


/*
1. slice():
Purpose: Extracts a portion of an array without changing the original array.
Returns: A new array with the sliced portion.
Does not modify the original array.
Example of slice():
*/

const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 4);

console.log(slicedArr);  // [2, 3, 4]
console.log(arr);        // [1, 2, 3, 4, 5] (original remains unchanged)


/*

2. splice():
Purpose: Adds, removes, or replaces elements in the original array.
Returns: An array of removed elements.
Modifies the original array.
Example of splice() (removing elements):

*/

const arrr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2);

console.log(removed);  // [2, 3] (removed elements)
console.log(arrr);      // [1, 4, 5] (original array is modified)

/*

Use **slice()** when you need a copy or subset of an array without changing the original.
Use **splice()** when you need to add, remove, or replace elements directly in the original array.
*/




//------------------------------------------------------------------------------------------------------
// the .sort() method works in JavaScript. By default, the Array.prototype.sort() method sorts elements as strings, even if they are numbers.
let newArray = [2, 1, 8, 6];
console.log(newArray.sort()); // Output: [1, 2, 6, 8]
// Since all numbers in this array have single digits, sorting them as strings gives the correct numeric order.


let newArray1 = [2, 100, 80, 6];
console.log(newArray1.sort()); // Output: [100, 2, 6, 80]

/*
Here, .sort() compares the elements as strings:

"100" comes before "2" because string comparisons are lexicographical (character by character).
Hence, it doesn't sort in numeric order.

*/

//------------------------------------------------------------------------------------------------------------------
// push(), pop(), shift(), and unshift()
/*

Method	   Action	               ExampleInput	          Example Output
push()	   Add to the end	       [1, 2] → push(3)	      [1, 2, 3]
pop()	     Remove from the end	 [1, 2, 3] → pop()	    [1, 2] (returns 3)
shift()   Remove from the start	 [1, 2, 3] → shift()    [2, 3] (returns 1)
unshift()	Add to the start	     [2, 3] → unshift(1)	  [1, 2, 3]

*/


//---------------------------------------------------------------------------------
// To find the character 's' in the string "nasir"

// 1. Using indexOf()
const name = "nasir";
const index = name.indexOf('s');
console.log(index); // Output: 2 (index of 's')


// 2. Using includes()

const names = "nasir";
const hasS = names.includes('s');
console.log(hasS); // Output: true

// 3. Using charAt() with a Loop (if needed)
const namess = "nasir";
for (let i = 0; i < namess.length; i++) {
  if (namess.charAt(i) === 's') {
    console.log(`'s' found at index ${i}`);
  }
}
// Output: 's' found at index 2




