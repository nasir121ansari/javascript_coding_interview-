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

// -------------------------------------------- find a duplicates in array -----------------------------------------------------------

let newArray1 = [2, 1, 8, 6, 1, 2, 2, 3, 12, 10];

// using set method
let uniqueArray = [...new Set(newArray1)];
// console.log(uniqueArray);

//using filter method
let uniqueArray1 = newArray1.filter(
  (item, index) => newArray1.indexOf(item) === index
);
// console.log(uniqueArray);

// ----------------------------------------------- remove the duplicates from aray ------------------------------------
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
var map = newArray1.reduce(function (prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

console.log("map", map);

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
