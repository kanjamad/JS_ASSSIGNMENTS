


const filterNonUnique = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));

console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5])); //1,3,5
console.log(filterNonUnique([1, 2, 3, 4]));



/* Notes:

// Remove Array Duplicates in ES6
const array = ['🐑', 1, 2, '🐑', '🐑', 3];

// 1: "Set"
[...new Set(array)];

// 2: "Filter"
array.filter((item, index) => array.indexOf(item) === index);

// 3: "Reduce"
array.reduce((unique, item) =>
    unique.includes(item) ? unique : [...unique, item], []);


// RESULT:
// ['🐑', 1, 2, 3];



// https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c

// indexOf() method returns the first index it finds of the provided element from our array.



const array = ['🐑', 1, 2, '🐑', '🐑', 3];

array.indexOf('🐑'); // 0
array.indexOf(1); // 1
array.indexOf(2); // 2
array.indexOf(3); // 5

// filter
const array = ['🐑', 1, 2, '🐑', '🐑', 3]

array.filter((item, index) => {

    console.log( item, index, array.indexOf(item));

    return array.indexOf(item) === index
});
// Item   Index     indexOf      Condition
// 🐑       0           0          true
// 1        1           1          true
// 2        2           2          true
// 🐑       3           0          false
// 🐑       4           0          false
// 3        5           5          true



// Retrieve the duplicate values

const array = ['🐑', 1, 2, '🐑', '🐑', 3];

array.filter((item, index) => array.indexOf(item) !== index);

// ['🐑','🐑']

*/