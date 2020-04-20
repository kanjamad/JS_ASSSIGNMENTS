// Write a JavaScript program to compare two objects to determine
// if the first one contains equivalent property values to the second one.
/*Notes:

1. Object.keys() method returns an array of a given object 's own enumerable property names, iterated in the same order that a normal loop would.

example

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

2. every() method tests whether all elements in the array pass the test implemented by the provided
function.It returns a Boolean value.

3. hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property(as opposed to inheriting it).

example

const object1 = new Object();
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false




*/
const matches = (obj, source) =>
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);


console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false