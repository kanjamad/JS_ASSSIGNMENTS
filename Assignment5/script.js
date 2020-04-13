// Strings:

// 1. What is the result of “3” + 5 + 6.
356

// 2. What is the result of 3 + ”5” + 6
356

// 3. What is the result of 3 + 5 + ”6”
86

// 4. Write a program to return the length of a string "Pneumonoultramicroscopicsilicovolcanoconiosis".
const findLength = str => str.length;
console.log(findLength("Pneumonoultramicroscopicsilicovolcanoconiosis"))


// 5. Write a program to convert the above string to Upper case
const upperCase = str => str.toUpperCase();
console.log(upperCase("Pneumonoultramicroscopicsilicovolcanoconiosis"))

// 6. Write a program to convert the above string to Lower case
const lowerCase = str => str.toLowerCase();
console.log(lowerCase("Pneumonoultramicroscopicsilicovolcanoconiosis"))

// 7. Consider the string 
// “I like this product; I hate this product; This product is worth buying; I don’t agree with the above user”. 
// Now break this whole string into pieces wherever you see “;”. 
// Now print the broken down pieces one after the other in console.

let myString = '“I like this product; I hate this product; This product is worth buying; I don’t agree with the above user”'
const splitStr = str => str.split(';')
console.log(splitStr(myString))
console.log(splitStr('“I like this product; I hate this product; This product is worth buying; I don’t agree with the above user”'))


// 8. For the above question 1, return the number of time the letter "o" appears.

let myString = '“I like this product; I hate this product; This product is worth buying; I don’t agree with the above user”'

const charCount = (str, letter) => {
    let letterCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}
console.log(charCount(myString, 'o'));
console.log(charCount('“I like this product; I hate this product; This product is worth buying; I don’t agree with the above user”', 'o'));

// 9. Write a program to replace a particular term in a sentence (you can come up with a sentence). Replace with the term "javascript".

let str = "I love dog";
let res = str.replace("dog", "javascript");
console.log(res)

// 10. Find the number of times the string "not" appears in this sentence -
// a. " Javascript notation %^&* notes that structure rules and not context for nothing"
// b. Now, for the above problem 4, create an array with texts before and after "not" occurrences.

/*Note: 
const words = str.split(' ');
const chars = str.split('');
*/

let myStr = 'Javascript notation %^&* notes that structure rules and not context for nothing'

const wordFreq = word => {
    let count = 0;
    let splitStr = myStr.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === word) {
            count++
        };
    };
    return count;
};

console.log(wordFreq('not'));

// b. Now, for the above problem 4, create an array with texts before and after "not" occurrences.
// const myStr = 'Javascript notation %^&* notes that structure rules and not context for nothing'
let myStr = 'Javascript notation %^&* notes that structure rules and not context for nothing'
let arr = myStr.split(' ');
console.log(arr); //["Javascript", "notation", "%^&*", "notes", "that", "structure", "rules", "and", "not", "context", "for", "nothing"]
console.log(arr.indexOf('not')) //8
arr.splice(8, 0, 'Feb'); //// inserts at index 8 not remove
console.log(arr) //["Javascript", "notation", "%^&*", "notes", "that", "structure", "rules", "and", "Feb", "not", "context", "for", "nothing"]




// 11. There is a link: http: //www.pro- tekconsulting.com/main/navigate/about&us/contactus/email/your
//     info.jsp
// a.Alert - ‘contact us’
// b.Alert - ‘your info’
// c.Have two text fields - Replace‘ navigate’, ‘contact’ with whatever the user enters in the text
// field and hits‘ submit’
// d.Have 3 text fields - whatever you enter in those text fields should replace‘ prompt1’, ’prompt2’
// and prompt3’.Then‘ alert’ that.After 3 rd alert, the whole new link should come up.http: //www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/ firstname=prompt1 & lastname=prompt&ph_no=prompt3”

link: 404 (Page Not Found) Error