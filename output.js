

// -------------------------------------------------- Question 1 ------------------------------------------------
console.log(true + true + true * 3)   // 5


// -------------------------------------------------- Question 2 ------------------------------------------------
console.log(undefined ?? "Nasir")


// -------------------------------------------------- Question 3 ------------------------------------------------

function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };
}

const counter1 = createCounter();
counter1.increment();
counter1.increment();

const counter2 = createCounter();
counter2.increment();

console.log(counter1.getCount()); // What will this log?
console.log(counter2.getCount()); // What will this log?




// -------------------------------------------------- Question 4 ------------------------------------------------

const obj = {
    name: "Alice",
    greet: function () {
        console.log("Hello, " + this.name);
    }
};

const greet = obj.greet;
greet(); // What will this log?





// -------------------------------------------------- Question 5 ------------------------------------------------


// What will be the output of this code ?
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);



// -------------------------------------------------- Question 6 ------------------------------------------------

function myFunction() {
    const arr = [1, 2, 3, 4, 5];
    for (var i = 0; i < arr.length; i++) {
        setTimeout(function () {
            console.log(i, arr[i]);
        }, 3000);
    }
}

// i = 5,5,5,5,5
//  arr[i] = undefined, undefined, undefined, undefined, undefined
myFunction()


//---------------------------------------------  Question 6 ---------------------------------------------
const a = 10, b = 10, c = 10;
if (a = b = c) {  // This is an assignment, not a comparison
    console.log("hello");
}

if (a === b && b === c) {
    console.log("hello");
}



//----------------------------------------- question 7-----------
const arr = [1,2,3,4,5]
const mapOutPut = arr.map(((num,i) => num>3 && num))
console.log(mapOutPut) // [ false, false, false, 4, 5 ]
const mapOutPut1 = arr.map(((num,i) => num>3))
console.log(mapOutPut1) // [ false, false, false, true, true ]


const filterOutPut = arr.filter(((num,i) => num>3 && num))
console.log(filterOutPut) // [ 4, 5 ]
const filterOutPut1 = arr.filter(((num,i) => num>3))
console.log(filterOutPut1) // [ 4, 5]

// foreach does not return new array , it just executes the provided function on each element
const forEachOutPut = arr.forEach(((num,i) => num>3 && num))
console.log(forEachOutPut) //undefined
