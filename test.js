function sum(a, b, c) {
    return a + b + c;
}

 function curry(fn) {
    return function curried(...args) {
        console.log(args.length)
        console.log(fn.length)
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}




let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));  // Output: 6
//console.log(curriedSum(1)(2, 3));  // Output: 6
//console.log(curriedSum(1)(2)(3));  // Output: 6
//console.log(curriedSum(1, 2));     // Output: function (still expecting one more argument)