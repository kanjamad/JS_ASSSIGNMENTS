// Arrays:

// 1. Write a program to display 10 quotes (one after the other in sequence). Hint: use Arrays to store the quotes (sayings). Name the function as displayQuotes.

//quote array
let quotes = ["\"Dude, suckin' at something is the first step at being sorta good at something.\" Jake (Adventure Time)", "\"Either I will find a way, or I will make one.\" Philip Sidney", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"C.S Lewis", "\"If you can dream it, you can do it.\"Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"Bruce Lee", ];

const displayQuotes = () => {
    for (let i = 0; i < quotes.length; i++) {
        // console.log(authorQuotes[i]);   
        window.alert(quotes[i]);
    };
};

console.log(displayQuotes(quotes))

// 2. Create a function that accepts a parameter which is of the type Array and 
// alerts the length of the array 
// as well as the elements one after the other starting from 4th element. 
// Call this function from displayQuotes function that you created in Question 1.


let quotes = ["\"Dude, suckin' at something is the first step at being sorta good at something.\" Jake (Adventure Time)", "\"Either I will find a way, or I will make one.\" Philip Sidney", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"C.S Lewis", "\"If you can dream it, you can do it.\"Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"Bruce Lee", ];

const displayQuotes = () => {
    for (let i = 0; i < quotes.length; i++) {
        // console.log(authorQuotes[i]);  
        let splitQuotes = quotes[i].split(' ')
        window.alert(quotes[i] + "'This quotes length is :' " + splitQuotes.length);
    };
};

console.log(displayQuotes(quotes))


// 3. For the above created array, perform the following operations on an array.
// a. pop()
// b. Now check the length and print it to console
// c. reverse()
// d. Now access the 8th array element and print it to console
// e. shift()
// f. Now check the length and print it to console
// g. sort()

/*
Note:
pop() method removes the last element from an array
shift() method removes the first element
sort() method sorts the elements of an array in place and returns the sorted array. 

*/

let quotes = ["\"Dude, suckin' at something is the first step at being sorta good at something.\" Jake (Adventure Time)", "\"Either I will find a way, or I will make one.\" Philip Sidney", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"C.S Lewis", "\"If you can dream it, you can do it.\"Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"Bruce Lee"];

const displayQuotes = () => {
    for (let i = 0; i < quotes.length; i++) {
        // let splitQuotes = quotes[i].split(' ')
        window.alert(quotes[i]);

    };
};

console.log(displayQuotes(quotes))
console.log(quotes.pop())
console.log(quotes.length)
console.log(quotes.reverse())
console.log(quotes.shift())
console.log(quotes.length)
console.log(quotes.sort())

// 4. Prompt the user
// for appropriate values based on the operation that you are performing and then execute the following operations on the array:
//     a.push()
// b.Now check the length and print it to console
// c.unshift()
// d.Now check the length and print it to console
// e.splice()
// f.Now check the length and print it to console.Now access the 5 th array element and print it to console.g.slice()
// 5. Create a Months Array(jan, feb, mar...etc) and repeat question 3 and 4. Once you implement these two arrays, use concat() method to add these arrays.Print each of the elements of this concatenated array one after the other - hint: use loops.
// 6. Create an array with Monday, Tuesday, Wednesday, Thursday, Friday and Saturday and console.log individually.
// 7. Ask
// for a prompt,
// if I enter‘ Monday’, in console display - Tuesday’, ’Wednesday’, ’Thursday’, ’Friday’ and‘ Saturday.
// If I enter‘ Tuesday’, in console display’ Wednesday’, ’Thursday’, ’Friday’ and‘ Saturday’.
// If I enter‘ Wednesday’, in console display’ Thursday’, ’Friday’ and‘ Saturday’.
// If I enter‘ Thursday’, in console - ‘Friday’ and‘ Saturday’.
// If I enter‘ Friday’, in console - ‘Saturday’.
// If I enter‘ Saturday, in console–‘ Sunday’.
// If I enter‘ Sunday’, in console - it is the last day of the week.
// 8. Ask
// for a prompt,
// if I enter‘ Monday’, in console display‘ Tuesday’, ’Wednesday’, ’Thursday’, ’Friday’, ‘Saturday’, ’Sunday’ and‘ Monday’.
// When I enter‘ Tuesday’, in console display’ Wednesday’, ’Thursday’, ’Friday’, ‘Saturday’, ’Sunday’‘ Monday’ and‘ Tuesday’.
// When I enter‘ Wednesday’, in console display’ Thursday’, ’Friday’, ‘Saturday’, ’Sunday’, ‘Monday’, ’Tuesday’ and‘ Wednesday’.
// When I enter‘ Thursday’, in console display’ Friday’, ‘Saturday’, ’Sunday’, ‘Monday’, ‘Tuesday’ and‘ Wednesday’.
// When I enter‘ Friday’, in console display‘ Saturday’, ’Sunday’, ‘Monday’, ‘Tuesday’, ‘Wednesday’, ’Thursday’ and‘ Friday’.
// When I enter‘ Saturday’, in console display‘ Sunday’, ‘Monday’, ‘Tuesday’, ‘Wednesday’, ’Thursday’ and‘ Friday’ and‘ Saturday’.
// When I enter‘ Sunday’, in console display‘ Monday’, ‘Tuesday’, ‘Wednesday’, ’Thursday’, ‘Friday’ and‘ Saturday’.
// 9. Create an array,
// for every match, display an alert‘ match’.
// 10. Create two arrays,
// for every match between the 2 arrays, display an alert‘ there is a match’.