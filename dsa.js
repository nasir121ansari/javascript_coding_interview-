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
    // result += string[i]
    result = result + string[i];
  }
  return result;
}
// console.log("Without Built in Function =====>", Reverse(string));

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

function removeDuplicates(arr) {
  let uniqueArray = [];
  let seen = new Set(); // Use a Set to track unique elements

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) { // Check if the element is not in the Set
      seen.add(arr[i]); // Add the element to the Set
      uniqueArray.push(arr[i]); // Add the element to the uniqueArray
    }
  }

  return uniqueArray;
}

// ----------------------------------------------- find the duplicates from aray ------------------------------------
function findDuplicates(array) {
  // Create a Set to keep track of elements we've already seen
  let seen = new Set();

  // Create another Set to store duplicates
  let duplicates = new Set();

  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Check if the current element is already in the 'seen' set
    if (seen.has(array[i])) {
      // If it is, add it to the 'duplicates' set
      duplicates.add(array[i]);
    } else {
      // If it is not, add it to the 'seen' set
      seen.add(array[i]);
    }
  }

  // Convert the 'duplicates' set to an array and return it

  return Array.from(duplicates);
}

// console.log("here", findDuplicates(newArray1));

// ---------------------------------- count the dulpicates in array ---------------------------------

const abc = newArray.reduce((acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1
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

// console.log("map", abc);

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
// console.log("Pairs with zero sum:", zeroSumPairs); // Output: [[2, -2], [-1, 1], [4, -4]]

//------------------------------------------------ Program to  sum Elements of array -------------------------------------
let arrays = [3, 1, 5, 2, 7];
let sum = arrays.reduce((acc, value) => {
  return (acc += value);
});
// console.log(sum);

//------------------------------ Program to get the largest Elements of array-----------------------------------------------
let array12 = [3, 1, 5, 2, 7];
let MaxArray = array12.reduce((prev, curr) => {
  return Math.max(prev, curr);
});
console.log(MaxArray);

// 14. Program to  search the string present in array or not
let array222 = ["3", "1", "5", "2", "7"];
let string_Tobe_Searched = "6";
function searchString(array) {
  for (let val of array) {
    if (val === string_Tobe_Searched) {
      return "String Found";
    }
  }
  return "String not Found";
}
// console.log(searchString(array222));





//--------------------------------------------Program to  find vowels and its count in a given string ---------------------------
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
// vowelCounts();

//-------------------------------- Program to check the given string is palindrome or not----------------------------

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

// console.log(isPalindrome(testStr1)); // Output: true
// console.log(isPalindrome(testStr2)); // Output: false

//------------------------------ Program to check the given strings are anagram or not -------------------------
function isAnagram(a, b) {
  let aa = a.toLowerCase().split("").sort().join("");
  let bb = b.toLowerCase().split("").sort().join("");
  return aa === bb;
}
// console.log(isAnagram("mary", "army"));

// 5.Program for Fibonnaci Series



//--------------------------------------- Program to check number primeNumber ---------


function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true; // If no divisors found, num is prime
}

// console.log(isPrime(1));  // Output: false
// console.log(isPrime(2));  // Output: true
// console.log(isPrime(3));  // Output: true
// console.log(isPrime(4));  // Output: false
// console.log(isPrime(17)); // Output: true
// console.log(isPrime(18)); // Output: false

/*
Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
 For numbers which are multiples of both three and five, print "FizzBuzz"
*/


// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i, "Fizz")
//   }
//   if (i % 5 === 0) {
//     console.log(i, "Buzz")
//   }

//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(i, "FizzBuzz")
//   }
// }



//---------------------------- Program to Uppercase of each first letter of a words using map function --------
function capitalizeFirstLetterOfEachWord(str) {
  return str.split(' ')
    .map(words => words.charAt(0).toUpperCase() + words.slice(1))
    .join(' ')
}

const inputString = "hello world this is a test";
// const resultString = capitalizeFirstLetterOfEachWord(inputString);
// console.log(resultString);

// ------------ find the factorial--------------------------

function factorial(n) {
  if (n <= 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive case: n * factorial of (n-1)
  }
}

// console.log(factorial(5))


// ------------ revrer each word of string--------------------------
// input :- Welcome to the team Nasir Ansari
// output :- emocleW ot eht maet risaN irasnA
let str = "Welcome to the team Nasir Ansari"
let str1 = str.split('').reverse().join('')
// console.log(str1)

let str2 = str1.split(' ').reverse().join(' ')
// console.log(str2)


function rversreA(str, deli) {
  return str.split(deli).reverse().join(deli)
}

let str3 = rversreA(str, '')
let str4 = rversreA(str3, ' ')
// console.log(str4)


// without using  revrser()
// Original string
let originalString = "Welcome to the team Nasir Ansari";

// Split the string into words
let words = originalString.split(' ');

// Reverse each word
let reversedWords = words.map(word => {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
});

// Join the reversed words back into a single string
let reversedString = reversedWords.join(' ');

// console.log(reversedString);



// ----------------------------------------- convert nested object into a flat object ----------------------------

const object = {
  name: 'Nasir',
  address: {
    personal: {
      city: "Jamui"
    },
    office: {
      city: "Bengaluru"
    }
  }
}

// output result
/*
let output2 = {
  student_name: "Nasir",
  student_address_personal_city: "Jamui",
  student_address_office_city: "Jamui"
}
*/


let output2 = {}
function flatObject(obj, name) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flatObject(obj[key], name + "_" + key)
    } else {
      output2[name + "_" + key] = obj[key]
    }
  }
}

flatObject(object, "student")
console.log(output2)