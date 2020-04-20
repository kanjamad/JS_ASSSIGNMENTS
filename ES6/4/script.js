
// Write a JavaScript program to combine the characters of a given array into an array containing all combinations.Ex: [“d”, ”g”, ”o”].result[“dog”, ”god”, ”dgo”, ”gdo”, ”odg”, ”ogd”]

// result[“dog”, ”god”, ”dgo”, ”gdo”, ”odg”, ”ogd”]
// anagrams


function alphabetize(arr) {
    return arr
        .reverse()
        .join('')
}

console.log(alphabetize(['d', 'g', 'o']))




// binary code

const powerset = arr => 
arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerset(['d', 'g','o']));

// -----


/*
The Math.pow()
function returns the base to the exponent power, that is, baseexponent.

example
console.log(Math.pow(7, 3));
// expected output: 343

console.log(Math.pow(4, 0.5));
// expected output: 2

console.log(Math.pow(7, -2));
// expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// expected output: NaN

*/

function combination(arr) {

    let i, j, temp
    let result = []
    let arrLen = arr.length
    let power = Math.pow
    let combinations = power(2, arrLen)

    // Time & Space Complexity O (n * 2^n)

    for (i = 0; i < combinations; i++) {
        temp = ''

        for (j = 0; j < arrLen; j++) {
            // & is bitwise AND
            if ((i & power(2, j))) {
                temp += arr[j]
            }
        }
        result.push(temp)
    }
    return result
}

console.log(combination(['d', 'g', 'o'])) // 