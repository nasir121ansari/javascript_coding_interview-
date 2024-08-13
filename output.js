

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


