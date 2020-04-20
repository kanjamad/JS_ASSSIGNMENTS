
/* Notes
1. filter() method creates a new array
2. includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
3. reduce() method executes a reducer
function (that you provide) on each element of the array, resulting in a single output value.
https: //www.w3schools.com/jsref/jsref_reduce.asp
*/


// --- remove the key-value pairs ---------


const reKey = (obj, arr) =>
    Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((myObj, key) => ((myObj[key] = obj[key]), myObj), {});

console.log(reKey({ a: 1, b: '2', c: 3 }, ['b']));
console.log(reKey({ a: 1, b: '2', c: 3 }, ['a']));
console.log(reKey({ a: 1, b: 2, c: 3 ,d:'banana'}, ['b']));


// ----------------or------------


// const reKey = (obj, arr) => {
//     let value = Object.keys(obj);
//     let fil = value.filter(k=>!arr.includes(k));
//     let result = fil.reduce((myObj, key) => ((myObj[key] = obj[key]), myObj), {});
//     return result;
// }



