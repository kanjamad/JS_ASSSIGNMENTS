// Write a JavaScript program to filter out the specified values from a specified array.Return the original array
// without the filtered values.

/*
spread operator...
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

example
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

*/

const pull = (arr, ...target) => arr.filter(el => target.every(x => x !== el))
console.log(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')); // ["b", "b"]
console.log(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'b')); // ["a", "c", "a", "c"]


// -----------------or ------------------

const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return pulled;
};
let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c'));
let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra2, 'b'));


// ----- Javascript -----

// function filterVal(arr) {
//     let arg,
//         toFilt = Array.prototype.slice.call(arguments, 1);
//     for (let i = 0; i < toFilt.length; i++) {
//         arg = toFilt[i];
//         arr = arr.filter(e => {
//             return e != arg;
//         });
//     }
//     return arr;
// }
// let arr = ['a', 'e', 'c', 'a', 'y', 'c'];
// let arr2 = ['t', 'o', 'p', 'g', 'u', 'n'];
// console.log(filterVal(arr, 'c'));
// console.log(filterVal(arr2, 'o', 'u'));