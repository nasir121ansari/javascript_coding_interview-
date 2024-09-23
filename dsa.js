// 1.Write a JavaScript program to flatten a nested Array / Write a JavaScript program to find the largest element in a nested array.

let array = [1, 2, 3, [5, 6, [7, 8]], 9, 10];
let output = [];
function flatten(arr) {
  for (let num of arr) {
    if (Array.isArray(num)) {
      flatten(num)
    } else {
      output.push(num)
    }
  }
  return output
}

console.log(flatten(array))

// find the largest element in a nested array
const flatArrays = flatten(array)
let largestElemnet = flatArrays.reduce((prev, curr) => {
  return Math.max(prev, curr);
});
console.log(largestElemnet);


let flatArray = array.flat(Infinity);
// console.log(flatArray);


// 2. convert nested object into a flat object 

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
// console.log(output2)


const flattenObjs = (ob, name) => {
  let final = {};
  for (const i in ob) {
    if (typeof ob[i] === 'object' && ob[i] !== null && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i], name + "_" + i); // Recursive call
      for (const j in temp) {
        final[j] = temp[j]; // Copy flattened keys
      }
    } else {
      final[name + "_" + i] = ob[i]; // Add simple key-value pair
    }
  }
  return final;
};


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

// 3.  revrer each word of string 
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

// 4.swap the value without using third varibale 

let a = 5;
let b = 10;

[a, b] = [b, a];

// console.log(a); // Output: 10
// console.log(b); // Output: 5

// 5. sort an array 

let newArray = [2, 1, 8, 6, 1, 2, 2, 3, 12, 10];

// using in built method
console.log(newArray.sort((a, b) => a - b))

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


// 6. sort an object 
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

// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them [0,3,4,4,6,30,31]


const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];
// first way 
const mergedAndSortedArray = array1.concat(array2).sort((a, b) => a - b)
const mergedAndSortedArray1 = [...array1, ...array2].sort((a, b) => a - b)

console.log(mergedAndSortedArray); // Output: [0, 3, 4, 4, 6, 30, 31]
console.log(mergedAndSortedArray1); // Output: [0, 3, 4, 4, 6, 30, 31]

// second way

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and add the smaller one to the merged array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1, add them to the merged array
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2, add them to the merged array
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

console.log(mergeSortedArrays(array1, array2));


// console.log(bubbleSortByAge(people));

// 8. remove a duplicates in array 

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
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) { 
      uniqueArray.push(arr[i]); 
    }
  }
  return uniqueArray;
}


// 9. Remove duplicates from object / Write logic to get unique objects from below array 

const inputArray = [{ name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" }];

function getUniqueObjects(arr) {
  let seen = new Set()
  let uinque = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i].name)) {
      seen.add(arr[i].name)
      uinque.push(arr[i])
    }
  }

  return uinque
}

const uniqueObjects = getUniqueObjects(inputArray);
console.log(uniqueObjects);


function getUniqueObjects1(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.some(obj => obj.name === arr[i].name)) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

const uniqueObjects1 = getUniqueObjects1(inputArray);
console.log(uniqueObjects1);


// 10. find the duplicates from array
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

// 11. count the dulpicates in array 

const abc = newArray.reduce((acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1
  return acc;
}, {});


// 32.
// Custom map function implementation / polyfill of map
Array.prototype.myMap = function(cb){
  console.log('this',this)
  let temp = [];
  for(let i=0;i< this.length;i++){
      temp.push(cb(this[i],i,this))
  }
  return temp
}

let array11 = [1,2,3]
console.log(array11.myMap((item) =>  item*2))

// find the largest three numbers in an array
function largestThree(arr) {
  // Remove duplicates and sort in descending order
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);

  // Get the largest three numbers
  return uniqueArr.slice(0, 3);
}

// Example usage
const numbers = [4, 1, 7, 2, 3, 8, 4, 5];
console.log(largestThree(numbers)); // Output: [8, 7, 5]




// 12.  write a javascript function to count the occurrences of each character in the string

const inputString1 = "javascript";
const count = inputString1.split('').reduce((acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1
  return acc

}, {})

console.log(count)



// 13. find if the sum of any two elements in an array is zero
let array22 = [1, 2, -2, 3, -1, 4, -4, 5];
function sumFirstZero(arr) {
  let result = [];
  let seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        let pair = `${arr[i]},${arr[j]}`;
        if (!seen.has(pair)) {
          result.push([arr[i], arr[j]]);
          seen.add(pair);
        }
      }
    }
  }
  return result;
}
// console.log("Pairs with zero sum:", zeroSumPairs); // Output: [[2, -2], [-1, 1], [4, -4]]


// 14. Program to  sum Elements of array
let arrays = [3, 1, 5, 2, 7];
let sum = arrays.reduce((acc, value) => {
  return (acc += value);
});
// console.log(sum);



// 15.  Program to  search the string present in array or not 
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

// 16. Program to  find vowels and its count in a given string 
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

// 17. Program to check the given string is palindrome or not

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

// 18.  Program to check the given strings are anagram or not  OR    Given two strings. Find if one string can be formed by rearranging the letters of other string.
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

str1 = "hello";
str2 = "world";
console.log(areAnagrams(str1, str2)); // false

// console.log(isAnagram("mary", "army"));

// 19.Program for Fibonnaci Series
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

// 20.  Program to check number primeNumber 
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


// 21. Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz" 



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



// 22. Program to Uppercase of each first letter of a words using map function 

const inputString = "hello world this is a test";

const capitalizeFirstLetterOfEachWord = inputString.split(' ').map((words) => words.charAt(0).toUpperCase() + words.slice(1)).join(' ')
// console.log(capitalizeFirstLetterOfEachWord);


// 23. find the factorial
function factorial(n) {
  if (n <= 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive case: n * factorial of (n-1)
  }
}

// console.log(factorial(5))





// 26. find the longest word in a given sentence


function findLongestWord(sentence) {
  return sentence
    .split(' ')               // Split the sentence into an array of words
    .reduce((longest, word) =>
      word.length > longest.length ? word : longest, ''); // Compare and find the longest word
}

// Example usage:
const sentence = "JavaScript is a versatile programming language.";
const longest = findLongestWord(sentence);
console.log(`The longest word is: ${longest}`);



// 27. find the max count of consecutive 1's in an array
function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of nums) {
    currentCount = (num === 1) ? currentCount + 1 : 0;
    maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
}

// Example usage:
const nums = [1, 1, 0, 1, 1, 1, 0, 1];
const maxConsecutiveOnes = findMaxConsecutiveOnes(nums);
console.log(`The maximum count of consecutive 1s is: ${maxConsecutiveOnes}`);




// 28. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function filterEvenNumbers(arr) {
  return arr.filter(number => number % 2 === 0);
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbersArray);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// 29. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
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


// 30. Write a function which converts string input into an object i/p -("a.b.c", "someValue"); o/p- { a: { b: { c: "someValue" } } }---------
function stringToNestedObject(path, value) {
  const keys = path.split('.');  // Split the string into an array of keys
  return keys.reverse().reduce((acc, key) => ({ [key]: acc }), value);
}
const resultss = stringToNestedObject("a.b.c", "someValue");
console.log(resultss);

let strVal = "a,1,b,2,c,3"
// output={a:1, b:2,c:3}
const convertToAnobject = strVal.split(',').reduce((acc,curr,index,arr) => {
  if(index % 2 === 0){
      acc[curr] = parseInt(arr[index + 1])
  }
  return acc  
},{})
console.log(convertToAnobject)

let strVal1 = "a.1,b.2,c.3"
// output={a:1, b:2,c:3}
const convertToAnobject1 = strVal1.split(',').reduce((acc,curr) => {
    let [key,value] = curr.split('.')
    acc[key] = value
    return acc;
    
},{})

console.log(convertToAnobject1)




// 30.

let items = [
  {
  subItems : [
  {id : 1, itemName: "Item1"},
  {id : 2, itemName: "Item2"},
  {id : 1, itemName: "Item1"}
                  ]
  },
  {
  subItems : [
  {id : 1, itemName: "Item1"},
  {id : 2, itemName: "Item2"},
  {id : 1, itemName: "Item1"}
                  ]
  }
  ]
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
  
  const filteredItems = items.flatMap(obj => obj.subItems.filter(item => item.id=== 1))
  console.log(filteredItems)

// 31.
  const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
    ]
const dimension = 4
function sumOfDiagonal (matrix,dimension) {
    let sum = 0;
    let sum1 = 0
    for(let i=0;i<dimension;i++){
        sum += matrix[i][i]
        sum1 +=matrix[i][dimension -i -1]
    }
    
    return sum + sum1
}

console.log(sumOfDiagonal(matrix,dimension))







/*
33.Write a function that takes N and subsequent N parameters and gives the multiplication result. 
reallyCoolFn(N)(n1)(n2)(n3)(ni) // output → n1 * n2 * … * ni
reallyCoolFn(3)(2)(5)(8) // output → 80
reallyCoolFn(2)(1)(4) // output → 4/
*/

function reallyCoolFn(N) {
  let product = 1;

  function next(n) {
      product *= n;
      N--;
      return N > 0 ? next : product;
  }

  return next;
}

// Example usage:
console.log(reallyCoolFn(3)(2)(5)(8)); // Output: 80
console.log(reallyCoolFn(2)(1)(4));    // Output: 4


