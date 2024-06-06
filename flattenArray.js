// ------------------------------------------------------------------------------------ Flatten array -------------------------------------------------
let array = [1, 2, 3, [5, 6, [7, 8]], 9, 10];

let output = ""; // returning as string
let output1 = [];
function flateen(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //recursive call
      flateen(arr[i]);
    } else {
      // output += arr[i]
      output1.push(arr[i]);
    }
  }

  return output1;
}

// console.log(flateen(array));

// Using in built method
let flatArray = array.flat(Infinity);
// console.log(flatArray);

// ------------------------------------------------------------------- reverese a string ----------------------------------------------------------------
const string = "Mango";
// console.log([...string].reverse().join(""));

function Reverse(string) {
  let result = "";
  for (var i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
  }
  return result;
}
console.log("Without Built in Function =====>", Reverse(string));

// -------------------------------------------------------- swap the value without using third varibale ------------------------------------

let a = 5;
let b = 10;

[a, b] = [b, a];

// console.log(a); // Output: 10
// console.log(b); // Output: 5

// --------------------------------------------------------------------sort an array --------------------------------------------------------

let newArray = [2, 1, 8, 6, 1, 2, 2, 3, 12, 10];

// using in built method
// console.log(
//   shortArray.sort((a, b) => {
//     return a - b;
//   })
// );

// using function

function shortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  return array;
}

// console.log(shortArray(newArray));

// -------------------------------------------------------------------- sort an object --------------------------------------------------------
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 35 },
];

function bubbleSortByAge(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j].age < array[i].age) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  return array;
}

// console.log(bubbleSortByAge(people));

// -------------------------------------------- remove a duplicates in array -----------------------------------------------------------

let newArray1 = [2, 1, 8, 6, 1, 2, 2, 3, 12, 10];

// using set method
let uniqueArray = [...new Set(newArray1)];
// console.log(uniqueArray);

//using filter method
let uniqueArray1 = newArray1.filter(
  (item, index) => newArray1.indexOf(item) === index
);
// console.log(uniqueArray);

// ----------------------------------------------- find the duplicates from aray ------------------------------------
function removeDuplicat(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

// console.log("here", removeDuplicat(newArray1));

// ---------------------------------- count the dulpicates in array ---------------------------------

const abc = newArray.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

const newArray4 = newArray.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log("map", abc);

// ---------------------------------- find if the sum of any two elements in an array is zero, ---------------------------------
function findPairsWithZeroSum(array) {
  let pairs = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        pairs.push([array[i], array[j]]);
      }
    }
  }

  return pairs;
}

// Usage example
let array22 = [1, 2, -2, 3, -1, 4, -4, 5];
let zeroSumPairs = findPairsWithZeroSum(array22);
console.log("Pairs with zero sum:", zeroSumPairs); // Output: [[2, -2], [-1, 1], [4, -4]]

//---------------------------------------------- Program to Reverse the order only even/odd Elements of array -------------------------------
function reverseEvenElements(arr) {
  // Step 1: Extract and reverse the even elements
  let evenElements = arr.filter((x) => x % 2 === 0).reverse();

  // Step 2: Replace the even elements in the original array
  let evenIndex = 0;
  return arr.map((x) => (x % 2 === 0 ? evenElements[evenIndex++] : x));
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let result = reverseEvenElements(arr);
console.log(result); // Output: [1, 8, 3, 6, 5, 4, 7, 2]

//---------------- 4.Program to generate the Random number from Array------------------------------
let arraya = [3, 1, 5, 2, 7];
function RandomArray(array) {
  return arraya[Math.floor(Math.random() * array.length)];
}
console.log(RandomArray(array));

//-------- 5.Program to Rotate the Element of Array -------
let arrayz = [3, 1, 5, 2, 7];
function Rotate(array, count) {
  return [...arrayz.slice(count, array.length), ...array.slice(0, count)];
}
console.log(Rotate(array, 3));

// 12. Program to  sum Elements of array
let array = [3, 1, 5, 2, 7];
let sum = array.reduce((acc, value) => {
  return (acc += value);
});
console.log(sum);

// 10. Program to get the largest Elements of array
let array = [3, 1, 5, 2, 7];
let MaxArray = array.reduce((prev, curr) => {
  return Math.max(prev, curr);
});
console.log(MaxArray);

// 14. Program to  search the string present in array or not
let array = ["3", "1", "5", "2", "7"];
let string_Tobe_Searched = "6";
function searchString(array) {
  for (let val of array) {
    if (val === string_Tobe_Searched) {
      return "String Found";
    }
  }
  return "String not Found";
}
console.log(searchString(array));

// 21. Program to Find the Longest string in An string
function longestString() {
  let string = "go google gosh";
  let arr = string.split(" ");
  var array = arr.sort((a, b) => a.length - b.length);
  console.log(array);
  var longest = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}
console.log(longestString());

Note: if (array[i].length > longest.length) {
  longest = array[i];
}

// 22. Program To find longest common string from array of strings
function longestCommonString() {
  let array = ["go", "google", "gosh"];
  var arr = array.sort((a, b) => a.length - b.length);
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] === arr[arr.length - 1][i]) {
      result += arr[0][i];
    }
  }
  return result;
}
console.log(longestCommonString());

Note: if (array[0][i] === array[array.length - 1][i]) {
  result += array[0][i];
}

// 23. Program to  find vowels and its count in a given string
function vowelCounts() {
  vowels = ["a", "i", "e", "o", "u"];
  var str = "priya";
  count = 0;
  for (var letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
      console.log(letter);
    }
  }
  console.log(count);
}
vowelCounts();

// 2.Program to check the given string is palindrome or not

// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward  e.g "madam", "level"

function isPalindrome(str) {
  // Step 1: Normalize the string
  let normalizedStr = str.toLowerCase();

  // Step 2: Reverse the normalized string
  let reversedStr = normalizedStr.split("").reverse().join("");

  // Step 3: Check if the normalized string is equal to its reverse
  return normalizedStr === reversedStr;
}

// Example usage:
let testStr1 = "level";
let testStr2 = "hello";

console.log(isPalindrome(testStr1)); // Output: true
console.log(isPalindrome(testStr2)); // Output: false

// 4.Program to check the given strings are anagram or not
function isAnagram(a, b) {
  let aa = a.toLowerCase().split("").sort().join("");
  let bb = b.toLowerCase().split("").sort().join("");
  return aa === bb;
}
console.log(isAnagram("mary", "army"));

// 5.Program for Fibonnaci Series
let n1 = 0;
let n2 = 1;
let numberSeries = 10;
let nextTerms;
console.log("Fibonnaci Series");
for (let i = 1; i <= numberSeries; i++) {
  console.log(n1);
  nextTerms = n1 + n2;
  n1 = n2;
  n2 = nextTerms;
}

// 6.Program to print prime numbers between the two numbers
const lowerNumber = 1;
const higherNumber = 10;

console.log(
  `The prime numbers between ${lowerNumber} and ${higherNumber} are:`
);
for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;
  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}

// 12. Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
// For numbers which are multiples of both three and five, print "FizzBuzz"

// 13. Program to Uppercase of each first letter of a words using map function

// ------------ find the factorial--------------------------
