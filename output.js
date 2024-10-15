

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
const arr = [1, 2, 3, 4, 5]
const mapOutPut = arr.map(((num, i) => num > 3 && num))
console.log(mapOutPut) // [ false, false, false, 4, 5 ]
const mapOutPut1 = arr.map(((num, i) => num > 3))
console.log(mapOutPut1) // [ false, false, false, true, true ]


const filterOutPut = arr.filter(((num, i) => num > 3 && num))
console.log(filterOutPut) // [ 4, 5 ]
const filterOutPut1 = arr.filter(((num, i) => num > 3))
console.log(filterOutPut1) // [ 4, 5]

// foreach does not return new array , it just executes the provided function on each element
const forEachOutPut = arr.forEach(((num, i) => num > 3 && num))
console.log(forEachOutPut) //undefined



///----- --------------------------------------------------------------------------------------
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        }
    };
}

const counter11 = createCounter();
const counter22 = createCounter();

console.log(counter11.increment()); //1 ?
console.log(counter11.increment()); //2 ?
console.log(counter22.increment()); //1 ?
console.log(counter11.decrement()); //1 ?
console.log(counter22.increment()); //2 ?
console.log(counter22.decrement()); //1 ?




//------------------------------------------------------------------------------------------------------------------------------
/*

In JavaScript, two objects are only considered the same if they are exactly the same object in memory. Even if two objects look the same (like { age: 18 }), they are treated as different things.
The { age: 18 } inside the if is a brand-new object. It’s not the same as the one you passed in (checkAge({ age: 18 })). That’s why this check will always fail.
*/
function checkAge(data) {
    // This condition will always return 'false' since JavaScript compares objects by reference, not value
    if (data === { age: 18 }) {
        console.log('You are an adult!');
    } else if (data == { age: 18 }) {
        console.log('You are still an adult.');
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 });  //Hmm.. You don't have an age I 



/// ----------------------------------------------------------------------------------
let kycDetails = { kycData: {} };
kycDetails.kycData.address1 = "Ghaziabad";
kycDetails.kycData.address2 = "2";
kycDetails.kycData.address3 = "3";

console.log(
    kycDetails.kycData.address1 + " " +
        kycDetails.kycData.address2 ? kycDetails.kycData.address2 : "" +
            kycDetails.kycData.address3 ? kycDetails.kycData.address3 : ""
);   // output - 2

/*
kycDetails.kycData.address1 + " " + kycDetails.kycData.address2   // "Ghaziabad 2"

"Ghaziabad 2" ? kycDetails.kycData.address2 : ""   // out put - 2

becacuse of ternary operator 
condition ? value_if_true : value_if_false

JavaScript gives higher precedence to the ternary operator than string concatenation, so "3" is skipped.

*/






//--------------------------------React out based quetion -----------------------------------------

/*
Direct State Update: In this snippet, setCount is called three times with the current count value. However, because React batches state updates and processes them asynchronously, all three calls to setCount will use the initial value of count (which is 0 at the time of the effect). Thus, it will set count to 1 three times, but the final result will still be 1.
*/
const Component = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }, [])

    return
    <div>{count}</div>
}
// output - 1

/*
Functional State Update: This snippet uses a functional update for setCount. Each call to setCount is provided a function that takes the previous state (prevCount) and returns the updated value. This allows each increment to take the most recent value into account, leading to an accurate cumulative result. As a result, count will be incremented from 0 to 1, then to 2, and finally to 3. */

const Components = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);

    }, [])

    return
    <div>{count}</div>
}

// output - 3


