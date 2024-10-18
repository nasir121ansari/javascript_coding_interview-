// -------------------------------------------------------
// 1. Write a JavaScript program to flatten a nested array.
// --------------------------------------------------------

// Example nested array
let array = [1, 2, 3, [5, 6, [7, 8]], 9, 10]; // Nested array to be flattened

let output = []; // Array to hold the flattened result

// Function to flatten a nested array
function flatten(arr) {
    for (let num of arr) { // Iterate over each element in the array
        // Check if the current element is an array
        if (Array.isArray(num)) {
            flatten(num); // Recursively flatten the nested array
        } else {
            output.push(num); // Push non-array elements to the output array
        }
    }
    return output; // Return the flattened array
}

// Log the result of the flatten function
console.log(flatten(array)); // Output: [1, 2, 3, 5, 6, 7, 8, 9, 10]

// Alternative flatten function using ternary operator
function flat1 (arr) {
  for(let num of arr) Array.isArray(num) ? flat1 (num) : output.push(num)
  return output
}
console.log(flat1(array)); // Output: [1, 2, 3, 5, 6, 7, 8, 9, 10]

// uisng in built method 
let flatArray = array.flat(Infinity);
// console.log(flatArray); // Output: [1, 2, 3, 5, 6, 7, 8, 9, 10]







// ---------------------------------------------------------
// 2. Find the largest element in an array
// ---------------------------------------------------------

// Example array
let array1 = [1, 2, 3, 5, 6, 7, 8, 9, 10]; // Array to find the largest element from

// 1. Finding the largest element using the spread operator
console.log(Math.max(...array1)); // Output: 10

// 2. Finding the largest element using a for loop
function findLargestElement(arr) {
    let largest = arr[0]; // Initialize largest with the first element of the array

    // Iterate over each number in the array
    for (let num of arr) {
        // Use a ternary operator to determine if the current number is larger than the largest found so far
        largest = num > largest ? num : largest; // Update largest if current number is greater
    }

    return largest; // Return the largest number found
}

// Log the result of the findLargestElement function
console.log(findLargestElement(array1)); // Output: 10




// ---------------------------------------------------------
//  3. convert nested object into a flat object
// ---------------------------------------------------------
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
  return output2
}
console.log(flatObject(object, "student"))

// Function to flatten the object using ternary for key assignment
let output3 = {};
function flatObject1(obj, name) {
  for (let key in obj) {
    typeof obj[key] === "object"
      ? flatObject1(obj[key], name + "_" + key) // Recursive call if it's an object
      : (output3[name + "_" + key] = obj[key]); // Assign the value to the result object
  }
  return output3; // Return the flattened result
}

// Call the function with the object and the prefix 'student'
console.log(flatObject1(obj, "student"));



const objectss = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  },
  g: 5
}
/*
out put  = {
    {
  "a": 1,
  "b.c": 2,
  "b.d.e": 3,
  "b.d.f": 4,
  "g": 5
}
    
*/

const flattenObj = (ob) => {
  let final = {};
  for (const i in ob) {
    if ((typeof ob[i]) === 'object') {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        final[i + '_' + j] = temp[j];
      }
    }
    else {
      final[i] = ob[i];
    }
  }
  return final;
};



// --------------------------------------------------------------
// 4. Reverse Each Word of a String 
// ---------------------------------------------------------------
// Input: "Welcome to the team Nasir Ansari"
// Output: "emocleW ot eht maet rasiN irasnA"

// Original string
let str = "Welcome to the team Nasir Ansari";

// First Way: Reverse the entire string and then each word
let str1 = str.split('').reverse().join(''); // Reverse the entire string
// console.log(str1); // Output: "iranA rasiN maet eht ot emocleW"

let str2 = str1.split(' ').reverse().join(' '); // Reverse the order of words
// console.log(str2); // Output: "emocleW ot eht maet rasiN irasnA"

// Second Way: Function to reverse a string based on a delimiter
function reverseString(str, delimiter) {
  return str.split(delimiter).reverse().join(delimiter); // Reverse the string based on the delimiter
}

let str3 = reverseString(str, ''); // Output: "iranA rasiN maet eht ot emocleW"
let str4 = reverseString(str3, ' '); 
// console.log(str4); // Output: "emocleW ot eht maet rasiN irasnA"

// Third Way: Reverse each word without using the reverse() method
// Split the string into words
let originalString = "Welcome to the team Nasir Ansari";
let words = originalString.split(' ');

// Reverse each word
let reversedWords = words.map(word => {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i]; // Build the reversed word
  }
  return reversed; // Return the reversed word
});

// Join the reversed words back into a single string
let reversedString = reversedWords.join(' ');
// console.log(reversedString); // Output: "emocleW ot eht maet rasiN irasnA"



// --------------------------------------------------------------
// 5. Swap Values Without Using a Third Variable
// ---------------------------------------------------------------

let a = 5, b = 10; [a, b] = [b, a];
console.log(a, b); // 10, 5



// --------------------------------------------------------------
// 6. sort an array and object 
// ---------------------------------------------------------------


// Initialize an array with numbers to be sorted
let newArray = [2, 1, 8, 6, 1, 2, 2, 3, 12, 10];

// Using the built-in method to sort the array in ascending order
console.log("Sorted Array using Built-in Method:", newArray.sort((a, b) => a - b));

// Function to sort an array using bubble sort algorithm
function shortArray(array) {
  // Outer loop to iterate through each element of the array
  for (let i = 0; i < array.length; i++) {
    // Inner loop to compare elements in the array
    for (let j = 0; j < array.length; j++) {
      // Compare elements and swap them if the current element is greater
      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
      
      // Alternative approach using ternary operator for comparison and swapping
      // array[j] < array[i] ? ([array[j], array[i]] = [array[i], array[j]]) : null;
    }
  }
  return array; // Return the sorted array
}

// Call the custom sorting function and log the output
// console.log(shortArray(newArray));




// --------------------------------------------------------------
// 7. sort an  object 
// ---------------------------------------------------------------
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 35 },
];

// Sort the array of objects by age in ascending order using the built-in sort method
console.log(people.sort((a, b) => a.age - b.age));

// Sort the array of objects by name in alphabetical order using localeCompare
console.log(people.sort((a, b) => a.name.localeCompare(b.name)));

// Function to sort an array of objects by age using bubble sort algorithm
function bubbleSortByAge(array) {
  // Outer loop to iterate through each element of the array
  for (let i = 0; i < array.length; i++) {
    // Inner loop to compare elements in the array
    for (let j = 0; j < array.length; j++) {
      // Compare the age property and swap if necessary
      if (array[j].age < array[i].age) {
        [array[j], array[i]] = [array[i], array[j]];
      }
      // Alternative approach using ternary operator for comparison and swapping
      // array[j].age < array[i].age ? ([array[j], array[i]] = [array[i], array[j]]) : null;
    }
  }
  return array; // Return the sorted array by age
}

// Example usage of the bubble sort function
// console.log(bubbleSortByAge(people));



// --------------------------------------------------------------
// 8. Merge two sorted arrays into one sorted array
// Given two sorted arrays [0, 3, 4, 31] and [4, 6, 30], 
// the goal is to merge them into a single sorted array: 
// Output: [0, 3, 4, 4, 6, 30, 31]
// ---------------------------------------------------------------

const array2 = [0, 3, 4, 31]; // First sorted array
const array3 = [4, 6, 30];    // Second sorted array

// -------------------------
// Method 1: Using concat and sort
// -------------------------
// Merge the two arrays using concat and then sort the merged array
const mergedAndSortedArray = array2.concat(array3).sort((a, b) => a - b);

// Alternatively, using the spread operator to merge and sort
const mergedAndSortedArray1 = [...array2, ...array3].sort((a, b) => a - b);

// Log the results of both methods
console.log(mergedAndSortedArray); // Output: [0, 3, 4, 4, 6, 30, 31]
console.log(mergedAndSortedArray1); // Output: [0, 3, 4, 4, 6, 30, 31]

// -------------------------
// Method 2: Manual Merge Function
// -------------------------
// Function to merge two sorted arrays without using built-in methods
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = []; // Initialize an empty array to hold the merged results
  let i = 0; // Pointer for the first array
  let j = 0; // Pointer for the second array

  // Compare elements from both arrays and add the smaller one to the merged array
  while (i < arr1.length && j < arr2.length) {
    // If the current element in arr1 is smaller, add it to the merged array
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]); // Add element from arr1
      i++; // Move to the next element in arr1
    } else {
      // Otherwise, add the current element in arr2
      mergedArray.push(arr2[j]); // Add element from arr2
      j++; // Move to the next element in arr2
    }
  }

  // If there are remaining elements in arr1, add them to the merged array
  while (i < arr1.length) {
    mergedArray.push(arr1[i]); // Add remaining elements from arr1
    i++; // Move to the next element in arr1
  }

  // If there are remaining elements in arr2, add them to the merged array
  while (j < arr2.length) {
    mergedArray.push(arr2[j]); // Add remaining elements from arr2
    j++; // Move to the next element in arr2
  }

  return mergedArray; // Return the final merged sorted array
}

// Call the merge function and log the result
console.log(mergeSortedArrays(array2, array3)); // Output: [0, 3, 4, 4, 6, 30, 31]


// --------------------------------------------------------------
// Question: 9
// Given two arrays of objects, the first array contains names with their associated IDs,
// and the second array contains classes with their associated IDs. 
// The goal is to create a new object that maps each name to its corresponding class based on the matching ID.
//
// Input:
// array11 = [
//   { 'name': 'ravi', 'id': 1 },
//   { 'name': 'david', 'id': 2 },
//   { 'name': 'john', 'id': 3 }
// ];
//
// array2222 = [
//   { 'class': 'first', 'id': 1 },
//   { 'class': 'second', 'id': 2 },
//   { 'class': 'third', 'id': 3 }
// ];
//
// Expected Output:
// {
//   'ravi': 'first',
//   'david': 'second',
//   'john': 'third'
// }
// --------------------------------------------------------------

// Input arrays
let array11 = [
  { 'name': 'ravi', 'id': 1 },
  { 'name': 'david', 'id': 2 },
  { 'name': 'john', 'id': 3 }
];

let array2222 = [
  { 'class': 'first', 'id': 1 },
  { 'class': 'second', 'id': 2 },
  { 'class': 'third', 'id': 3 }
];

// Function to map names to classes using nested loops
function mapNamesToClassesUsingLoop(array1, array2) {
  let result = {}; // Object to store the result
  
  // Loop through the first array
  for (let i = 0; i < array1.length; i++) {
    // Loop through the second array to find a match
    for (let j = 0; j < array2.length; j++) {
      // Check if the IDs match
      if (array1[i].id === array2[j].id) {
        // Map the name to the corresponding class
        result[array1[i].name] = array2[j].class;
        break; // Exit the inner loop when a match is found
      }
    }
  }
  
  return result; // Return the final result object
}

// Call the function and log the result
let resultsss = mapNamesToClassesUsingLoop(array11, array2222);
console.log(resultsss); // Output: { 'ravi': 'first', 'david': 'second', 'john': 'third' }

// Function to map names to classes using forEach and find
function mapNamesToClasses(array1, array2) {
  let result = {}; // Object to store the result
  
  // Loop through the first array
  array1.forEach(item1 => {
    // Find the matching item in the second array
    let match = array2.find(item2 => item2.id === item1.id);
    if (match) {
      // Map the name to the corresponding class if a match is found
      result[item1.name] = match.class;
    }
  });
  
  return result; // Return the final result object
}

// Call the second function and log the result
let result = mapNamesToClasses(array11, array2222);
console.log(result); // Output: { 'ravi': 'first', 'david': 'second', 'john': 'third' }




// --------------------------------------------------------------
// Question:10  Remove the duplicate from the array
// --------------------------------------------------------------

// Input array with potential duplicates
let newArray1 = [2, 1, 8, 6, 1, 2, 2, 3, 12, 10];

// Method 1: Using Set to remove duplicates
// The Set object lets you store unique values of any type.
// Here, we convert the array into a Set and back to an array to remove duplicates.
let uniqueArray = [...new Set(newArray1)];
// console.log(uniqueArray); // Output: [2, 1, 8, 6, 3, 12, 10]

// Method 2: Using filter to remove duplicates
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// In this case, we check if the index of the current item is the same as the first index of that item.
let uniqueArray1 = newArray1.filter(
  (item, index) => newArray1.indexOf(item) === index
);
// console.log(uniqueArray1); // Output: [2, 1, 8, 6, 3, 12, 10]

// Method 3: Using a loop to remove duplicates
// This function iterates over the array and pushes elements into a new array only if they are not already included.
function removeDuplicates(arr) {
  let uniqueArray = []; // Array to store unique values
  for (let i = 0; i < arr.length; i++) {
    // Check if the current item is not already in the uniqueArray
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]); // Add the item to the uniqueArray
    }
  }
  return uniqueArray; // Return the array of unique values
}

// Call the removeDuplicates function and log the result
let uniqueArray2 = removeDuplicates(newArray1);
console.log(uniqueArray2); // Output: [2, 1, 8, 6, 3, 12, 10]


// --------------------------------------------------------------
// 11. Remove duplicates from an array of objects
// --------------------------------------------------------------

const inputArray = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },    // Duplicate name
  { name: "Nang" },   // Duplicate name
  { name: "111111" }
];

// Function to get unique objects based on the 'name' property
function getUniqueObjects(arr) {
  // Set to track unique names
  const uniqueNames = new Set();

  // Array to store the unique objects
  const uniqueObjects = [];

  // Loop through each object in the input array
  for (const obj of arr) {
    // Check if the 'name' property of the current object is not in the Set
    if (!uniqueNames.has(obj.name)) {
      // If unique, add the name to the Set
      uniqueNames.add(obj.name);
      // Add the current object to the array of unique objects
      uniqueObjects.push(obj);
    }
  }
  
  // Return the array of unique objects
  return uniqueObjects;
}

// Calling the function and storing the result in a variable
const uniqueObjects = getUniqueObjects(inputArray);

// Output the unique objects
console.log(uniqueObjects);

//------------------------------------------------------------------------------
// 12. find the duplicates from array
//------------------------------------------------------------------------------
let newArrayd = [2, 1, 8, 6, 1, 2, 2, 3, 12, 10];
function findDuplicates(array) {
  let seen = new Set();
  let duplicates = new Set();
  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) {
      duplicates.add(array[i]);
    } else {
      seen.add(array[i]);
    }
  }

  // Convert the 'duplicates' set to an array and return it

  return Array.from(duplicates);
}
// console.log("here", findDuplicates(newArrayd));


// --------------------------------------------------------------
// 13. Count the duplicates in an array
// This code counts the occurrences of each element in the array 
// and returns an object where the keys are the elements and 
// the values are their respective counts.
// --------------------------------------------------------------

// Sample array with duplicate values
const newArrayr = [2, 1, 8, 6, 1, 2, 2, 3, 12, 10];

// Using reduce to count duplicates
const countDuplicatesUsingReduce = newArrayr.reduce((acc, curr) => {
  // If the current element already exists in the accumulator,
  // increment its count; otherwise, initialize it to 1
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
  return acc; // Return the accumulator for the next iteration
}, {});

// Output the result of counting duplicates using reduce
console.log("Count of duplicates using reduce:", countDuplicatesUsingReduce);


// Using a standard loop to count duplicates
const countDuplicatesWithoutReduce = (arr) => {
  const counts = {}; // Object to hold the counts of each element

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i]; // Get the current element
    // If the current element already exists in the counts object,
    // increment its count; otherwise, initialize it to 1
    counts[currentElement] = counts[currentElement] ? counts[currentElement] + 1 : 1;
  }

  return counts; // Return the counts object
};

// Output the result of counting duplicates without reduce
console.log("Count of duplicates without reduce:", countDuplicatesWithoutReduce(newArrayr));



// --------------------------------------------------------------
// 14. Count the occurrences of each character in a string
// --------------------------------------------------------------

// Sample input string
const inputString1 = "javascript";

// Using reduce to count character occurrences
const countCharactersUsingReduce = inputString1.split('').reduce((acc, curr) => {
  // If the current character already exists in the accumulator,
  // increment its count; otherwise, initialize it to 1
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
  return acc; // Return the accumulator for the next iteration
}, {});

// Output the result of counting characters using reduce
console.log("Character counts using reduce:", countCharactersUsingReduce);


// Using a standard loop to count character occurrences
const countCharactersWithoutReduce = (str) => {
  const counts = {}; // Object to hold the counts of each character

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i]; // Get the current character
    // If the current character already exists in the counts object,
    // increment its count; otherwise, initialize it to 1
    counts[currentChar] = counts[currentChar] ? counts[currentChar] + 1 : 1;
  }

  return counts; // Return the counts object
};

// Output the result of counting characters without reduce
console.log("Character counts without reduce:", countCharactersWithoutReduce(inputString1));





// --------------------------------------------------------------
// 15.Find a substring inside a string in JavaScript 
// --------------------------------------------------------------

// --------------------------------------------------------------
// 1. Check if a substring exists within a string using includes()
// The includes() method checks if the specified substring exists
// within the string and returns true if found; otherwise, it returns false.
// --------------------------------------------------------------

// Sample string
const str121 = "Hello, Nasir!";

// Check if "Nasir" is in the string
console.log("Using includes():");
console.log(str121.includes("Nasir")); // Output: true
// Check for a substring that does not exist
console.log(str121.includes("world")); // Output: false


// --------------------------------------------------------------
// 2. Find the first occurrence of a substring using indexOf()
// The indexOf() method returns the index of the first occurrence of the
// specified substring within the string, or -1 if the substring is not found.
// --------------------------------------------------------------

// Sample string
const str0 = "Hello, Nasir! Welcome, Nasir!";

// Find the index of the first occurrence of "Nasir"
console.log("Using indexOf():");
console.log(str0.indexOf("Nasir")); // Output: 7
// Check for a substring that does not exist
console.log(str0.indexOf("world")); // Output: -1


// --------------------------------------------------------------
// 3. Find the last occurrence of a substring using lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of
// the specified substring within the string, or -1 if not found.
// --------------------------------------------------------------

// Sample string
const str00 = "Hello, Nasir! Welcome, Nasir!";

// Find the index of the last occurrence of "Nasir"
console.log("Using lastIndexOf():");
console.log(str00.lastIndexOf("Nasir")); // Output: 18




// --------------------------------------------------------------
// 16.Find the Largest Three Numbers in an Array 
// --------------------------------------------------------------

// Function to find the largest three unique numbers in an array
function largestThree(arr) {
  // Step 1: Remove duplicates using Set
  const uniqueArr = [...new Set(arr)];

  // Step 2: Sort the unique array in descending order
  uniqueArr.sort((a, b) => b - a);

  // Step 3: Get the largest three numbers by slicing the sorted array
  return uniqueArr.slice(0, 3);
}

// Example usage
const numbers = [4, 1, 7, 2, 3, 8, 4, 5];

// Call the function and log the output
console.log("The largest three numbers are:", largestThree(numbers)); // Output: [8, 7, 5]



// --------------------------------------------------------------
// 17. find if the sum of any two elements in an array is zero
// --------------------------------------------------------------
let array22 = [1, 2, -2, 3, -1, 4, -4, 5];
function sumFirstPairZero(arr) {
  for (let n1 of arr) {
      for (let n2 of arr) {
          if(n1 + n2 === 0){
              return [n1,n2]
          }
      }
  }
}

function sumAllPairZero(arr) {
  let result = [];
  let seen = new Set(); // Track seen numbers to avoid duplicates

  for (let n1 of arr) {
      for (let n2 of arr) {
          // Check if the pair sums to zero and that n1 < n2 to avoid reversed pairs
          if (n1 + n2 === 0 && n1 < n2) {
              let pair = `${n1},${n2}`; // Create a unique string representation
              if (!seen.has(pair)) {
                  result.push([n1, n2]); // Add the valid pair
                  seen.add(pair); // Mark this pair as seen
              }
          }
      }
  }
  return result;
}
// console.log("Pairs with zero sum:", sumAllPairZero(array22)); // Output: [[2, -2], [-1, 1], [4, -4]]



// --------------------------------------------------------------
// 18. Program to  sum Elements of array
// --------------------------------------------------------------
let arrays = [3, 1, 5, 2, 7];
let sum = arrays.reduce((acc, value) => {
  return (acc += value);
});
// console.log(sum);


// --------------------------------------------------------------
// 19.  Program to  search the string present in array or not 
// --------------------------------------------------------------
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

// --------------------------------------------------------------
// 20. Program to  find vowels and its count in a given string 
// --------------------------------------------------------------
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


// --------------------------------------------------------------
// 21. Program to check the given string is palindrome or not
// --------------------------------------------------------------

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


// ------------------------------------------------------------------------------
// 22. Program to check if the given strings are anagrams or not.
// An anagram is a word or phrase formed by rearranging the letters of another.
// ------------------------------------------------------------------------------

function areAnagrams(str1, str2) {
  // Step 1: Check if the lengths of the strings are equal
  // If not, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false; // Not anagrams
  }

  // Step 2: Sort the characters in both strings
  // Convert strings to arrays, sort them, and join them back into strings
  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  // Step 3: Compare the sorted strings
  // If they are equal, the original strings are anagrams
  return sortedStr1 === sortedStr2;
}

// Example usage
const str111 = "hello"; // First string
const str222 = "world"; // Second string
const str333 = "silent"; // Another example string
const str44 = "listen"; // Anagram of "silent"

// Check if the strings are anagrams and log the results
console.log(areAnagrams(str111, str222)); // Output: false (not anagrams)
console.log(areAnagrams(str333, str44)); // Output: true (are anagrams)



// ---------------------------------------------------------------------------------------------
/*
23.Write a function that takes N and subsequent N parameters and gives the multiplication result. 
reallyCoolFn(N)(n1)(n2)(n3)(ni) // output → n1 * n2 * … * ni
reallyCoolFn(3)(2)(5)(8) // output → 80
reallyCoolFn(2)(1)(4) // output → 4/
*/
// ------------------------------------------------------------------------------------------------

function reallyCoolFn(N) {
  // Initialize a variable to store the product
  let product = 1;
  let count = 0; // Counter to track how many numbers have been provided
  // Inner function to handle multiplication
  function multiply(n) {
    product *= n; // Multiply the current product by the new number
    count++; // Increment the count of numbers provided
    // If we have received N numbers, return the product directly
    if (count === N) {
      return product; // Return the final product when expected numbers are provided
    }
    return multiply; // Allow further chaining for more numbers
  }

  return multiply; // Return the inner function for chaining
}

// Example usages:
console.log(reallyCoolFn(3)(2)(5)(8)); // Output: 80
console.log(reallyCoolFn(2)(1)(4)); // Output: 4





// ------------------------------------------------------------------------------
// 24. Program to demonstrate function currying.
// Currying is a technique of evaluating a function with multiple arguments, 
// transforming it into a sequence of functions each with a single argument.
// ------------------------------------------------------------------------------

function sum(a, b, c) {
  return a + b + c; // Returns the sum of three numbers
}

function curry(fn) {
  return function curried(...args) {
    // Check how many arguments have been provided
    if (args.length >= fn.length) {
      return fn.apply(this, args); // Call the original function if enough arguments
    } else {
      // Return a new function expecting more arguments
      return function (...args2) {
        return curried.apply(this, args.concat(args2)); // Combine the arguments
      };
    }
  };
}

// Creating a curried version of the sum function
let curriedSum = curry(sum);

// Example usage of curriedSum
console.log(curriedSum(1, 2, 3));  // Output: 6 (all arguments provided)
console.log(curriedSum(1)(2, 3));  // Output: 6 (partial application)
console.log(curriedSum(1)(2)(3));  // Output: 6 (fully curried)
console.log(curriedSum(1, 2));     // Output: function (still expecting one more argument)



// ------------------------------------------------------------------------------
// 25. Find the most repeted number
// ------------------------------------------------------------------------------
  function findMostRepeated(input) {
    let mostRepeatedNum = null;
    let maxCount = 0;
    // Loop through each number in the array
    for (let n1 of input) {
      let count = 0; // Count occurrences of the current number
      for (let n2 of input) {
        if (n1 === n2) {
          count++;
        }
      }
      // Update most repeated number if needed
      if (count > maxCount) {
        maxCount = count;
        mostRepeatedNum = n1;
      }
    }
    return mostRepeatedNum;
  }

// Example usage
const input = [3, 2, 3];
const output21 = findMostRepeated(input);
console.log(output21); // Output: 3


// ------------------------------------------------------------------------------
// 26. find the max count of consecutive 1's in an array
// ------------------------------------------------------------------------------
// Function to find the maximum number of consecutive 1s in an array
function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;        // To track the maximum count of consecutive 1s found
  let currentCount = 0;    // To count the current streak of 1s

  // Loop through each number in the input array
  for (let num of nums) {
      // Check if the current number is 1
      if (num === 1) {
          currentCount++; // Increment the count if it's 1
      } else {
          // Reset current count if the number is not 1
          currentCount = 0;
      }

      // Update maxCount if currentCount exceeds it
      maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount; // Return the maximum count of consecutive 1s
}

// Example usage:
const nums = [1, 1, 0, 1, 1, 1, 0, 1];
const maxConsecutiveOnes = findMaxConsecutiveOnes(nums);
console.log(`The maximum count of consecutive 1s is: ${maxConsecutiveOnes}`);


// using ternary operator
function findMaxConsecutiveOnesT(nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of nums) {
    currentCount = (num === 1) ? currentCount + 1 : 0;
    maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
}

// Example usage:
const maxConsecutiveOnesT = findMaxConsecutiveOnesT(nums);
console.log(`The maximum count of consecutive 1s is: ${maxConsecutiveOnesT}`);


//--------------------------------------------------------------
// 27.
/*
Filter the objects with id 1
Expected output is : 
[
{id : 1, itemName: ""Item1""},
{id : 1, itemName: ""Item1""},
{id : 1, itemName: ""Item1""},
{id : 1, itemName: ""Item1""},
]
*/

//--------------------------------------------------------------

let items = [
  {
    subItems: [
      { id: 1, itemName: "Item1" },
      { id: 2, itemName: "Item2" },
      { id: 1, itemName: "Item1" }
    ]
  },
  {
    subItems: [
      { id: 1, itemName: "Item1" },
      { id: 2, itemName: "Item2" },
      { id: 1, itemName: "Item1" }
    ]
  }
]

const filteredItems = items.flatMap(obj => obj.subItems.filter(item => item.id === 1))
console.log(filteredItems)

//---------------------------------------------------------------------------
// 28. Program to Uppercase of each first letter of a words using map function 
//-----------------------------------------------------------------------------

const inputString = "hello world this is a test";

const capitalizeFirstLetterOfEachWord = inputString.split(' ').map((words) => words.charAt(0).toUpperCase() + words.slice(1)).join(' ')
// console.log(capitalizeFirstLetterOfEachWord);

//---------------------------------------------------------------------------
// 29. find the longest word in a given sentence
//---------------------------------------------------------------------------
const sentence = "JavaScript is a versatile programming language.";
function lonest(sentances) {
  const word = sentances.split(' ')
  let long = ''
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > long.length) {
      long = word[i]
    }
  }
  return long

}
console.log(lonest(sentence))


//---------------------------------------------------------------------------------------------------
// 30. Create a function which will accepts two arrays arr1 and arr2. 
//The function should return true if every value in arr1 has its corresponding value squared in array2.
//The frequency of values must be same.
//---------------------------------------------------------------------------------------------------
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Sort both arrays
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // Compare each element of arr1 squared to each element of arr2
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] ** 2 !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Example usage
let arr1 = [1, 2, 3, 2];
let arr2 = [1, 4, 9, 4];
console.log(compareArrays(arr1, arr2)); // true



//---------------------------------------------------------------------------------------------------
// 31. 
// input - "a,1,b,2,c,3";
// Output: { a: 1, b: 2, c: 3 }
//---------------------------------------------------------------------------------------------------
function stringToObject(str) {
  const result = {}; // Initialize an empty object
  const pairs = str.split(','); // Split by ',' to get key-value pairs

  // Loop through each pair
  for (let pair of pairs) {
    let [key, value] = pair.split('.'); // Split by '.'
    result[key] = parseInt(value); // Assign key-value to the object
  }

  return result; // Return the final object
}

// Example usage
let strVal1 = "a.1,b.2,c.3";
const convertedObject = stringToObject(strVal1);
console.log(convertedObject); // Output: { a: 1, b: 2, c: 3 }




//---------------------------------------------------------------------------------------------------
// 32. 
// input - "a.1,b.2,c.3"
// Output: { a: 1, b: 2, c: 3 }
//---------------------------------------------------------------------------------------------------
function stringToObjectPairs(str) {
  const result = {}; // Initialize an empty object
  const pairs = str.split(','); // Split the string by ','

  // Loop through the array with a step of 2 to get key-value pairs
  for (let i = 0; i < pairs.length; i += 2) {
    let key = pairs[i]; // Get the key
    let value = parseInt(pairs[i + 1]); // Get the value and convert to integer
    result[key] = value; // Assign the key-value pair to the object
  }

  return result; // Return the final object
}

// Example usage
let strVal = "a,1,b,2,c,3";
const convertedObjects = stringToObjectPairs(strVal);
console.log(convertedObjects); // Output: { a: 1, b: 2, c: 3 }


//---------------------------------------------------------------------------------------------------
// 33. 
// input - "a.b.c", "someValue"
// // Output: { a: { b: { c: 'someValue' } } }
//---------------------------------------------------------------------------------------------------
function stringToNestedObject(path, value) {
  const keys = path.split('.'); // Split the string into an array of keys
  let result = {}; // Initialize an empty object
  let current = result; // A reference to the current position in the nested object

  // Loop through the keys except the last one
  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] = {}; // Create an empty object for each key
    current = current[keys[i]]; // Move to the next level of nesting
  }

  // Assign the value to the innermost key
  current[keys[keys.length - 1]] = value;

  return result; // Return the final nested object
}

// Example usage:
const resultss = stringToNestedObject("a.b.c", "someValue");
console.log(resultss); // Output: { a: { b: { c: 'someValue' } } }




//---------------------------------------------------------------------------------------------------
// 34. Diagonal sum - (1+6+11+16) + (4+7+10+13) = 68
//---------------------------------------------------------------------------------------------------

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
const dimension = 4
function sumOfDiagonal(matrix, dimension) {
  let sum = 0;
  let sum1 = 0
  for (let i = 0; i < dimension; i++) {
    sum += matrix[i][i]
    sum1 += matrix[i][dimension - i - 1]
  }

  return sum + sum1
}

console.log(sumOfDiagonal(matrix, dimension))  //// Output: 68



//---------------------------------------------------------------------------------------------------
// 35. Program for Fibonnaci Series
//---------------------------------------------------------------------------------------------------
function generateFibonacci(numTerms) {
  if (numTerms <= 0) return [];
  if (numTerms === 1) return [0];

  const fibonacciSequence = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }

  return fibonacciSequence;
}
const numTerms = 10;
const fibonacci = generateFibonacci(numTerms);

console.log(fibonacci); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



//---------------------------------------------------------------------------------------------------
// 36. Program to check number primeNumber
//---------------------------------------------------------------------------------------------------  
function isPrime(num) {
  // Numbers less than 2 are not prime
  if (num <= 1) return false;

  // Check divisibility from 2 to num / 2
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false; // Not prime if divisible by any number other than 1 and itself
    }
  }

  return true; // If no divisors are found, the number is prime
}

// console.log(isPrime(1));  // Output: false
// console.log(isPrime(2));  // Output: true
// console.log(isPrime(3));  // Output: true
// console.log(isPrime(4));  // Output: false
// console.log(isPrime(17)); // Output: true
// console.log(isPrime(18)); // Output: false


//---------------------------------------------------------------------------------------------------
// 37. Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz" 
//--------------------------------------------------------------------------------------------------- 

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i, "Fizz")
  }
  if (i % 5 === 0) {
    console.log(i, "Buzz")
  }

  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i, "FizzBuzz")
  }
}



//---------------------------------------------------------------------------------------------------
// 38. find the factorial
//---------------------------------------------------------------------------------------------------  
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1); // Use ternary for base and recursive case
}
// console.log(factorial(5))



//-----------------------------------------------------------------------------------------------------------------
// 39. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
//---------------------------------------------------------------------------------------------------------------- 
function filterEvenNumbers(arr) {
  return arr.filter(number => number % 2 === 0);
}
// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbersArray);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]














