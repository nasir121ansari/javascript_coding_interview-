let array = [1,2,3,[5,6,[7,8]],9,10]

let output = '';  // returning as string
let output1 = [];
function flateen (arr) {
     for(let i =0; i<arr.length;i++){
        if(Array.isArray(arr[i])){
            //recursive call
            flateen(arr[i])
        }else{
            // output += arr[i]
            output1.push(arr[i]);
        }
     }

    return output1
}

console.log(flateen(array))


// Using in built method 
let flatArray = array.flat(Infinity);
console.log(flatArray)
