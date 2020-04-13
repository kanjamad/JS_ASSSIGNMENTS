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
/*Note:
unshift() method adds one or more elements to the beginning 
splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements 
slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end 

*/
https: //repl.it/@kanjamad/ass64

let specialDish = prompt("Please enter a day?", "Monday")

if (specialDish == "Monday" || specialDish == "monday") {
    let text = "We serve Pasta";
    let splited = text.split(' ');
    console.log(splited);
    console.log(splited.length);
    console.log(splited.unshift("My fav"));
    console.log(splited.splice(1, 0, 'Is dinner menu'));
    console.log(splited);
    console.log(splited.slice(1));


} else if (specialDish == "Tuesday" || specialDish == "tuesday") {
    let text = " We serve Chicken and Yellow Rice";
    let splited = text.split(' ');
    console.log(splited);
    console.log(splited.length);
    console.log(splited.unshift("Is so good"));
    console.log(splited.splice(1, 0, 'Is dinner menu'));
    console.log(splited);
    console.log(splited.slice(1));
} else if (specialDish == "Wednesday" || specialDish == "wednesday") {
    let text = " We serve Spaghetti & Meatballs";
    let splited = text.split(' ');
    console.log(splited);
    console.log(splited.length);
    console.log(splited.unshift("I like it"));
    console.log(splited.splice(1, 0, 'Is dinner menu'));
    console.log(splited);
    console.log(splited.slice(1));
} else if (specialDish == "Thursday" || specialDish == "thursday") {
    let text = " We serve Tippin's Pot Pie";
    let splited = text.split(' ');
    console.log(splited);
    console.log(splited.length);
    console.log(splited.unshift("My fav"));
    console.log(splited.splice(1, 0, 'Is dinner menu'));
    console.log(splited);
    console.log(splited.slice(1));
} else if (specialDish == "Friday" || specialDish == "friday") {
    let text = " We serve Fish Fillets";
    let splited = text.split(' ');
    console.log(splited);
    console.log(splited.length);
    console.log(splited.unshift("My fav"));
    console.log(splited.splice(1, 0, 'Is dinner menu'));
    console.log(splited);
    console.log(splited.slice(1));
} else if (specialDish == "Saturday" || specialDish == "saturday") {
    let text = " We serve Quiche";
    let splited = text.split(' ');
    console.log(splited);
    console.log(splited.length);
    console.log(splited.unshift("My fav"));
    console.log(splited.splice(1, 0, 'Is dinner menu'));
    console.log(splited);
    console.log(splited.slice(1));
} else {
    let text = " We serve Chicken Tenders"
    let splited = text.split(' ');
    console.log(splited);
    console.log(splited.length);
    console.log(splited.unshift("My fav"));
    console.log(splited.splice(1, 0, 'Is dinner menu'));
    console.log(splited);
    console.log(splited.slice(1));
}

// 5. Create a Months Array (jan, feb, mar...etc) and repeat question 3 and 4.Once you implement these two arrays, 
// use concat() method to add these arrays. 
// Print each of the elements of this concatenated array one after the other
//  - hint: use loops.

https: //repl.it/@kanjamad/as65

const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];



// a.pop()
months.pop();
console.log(months);
// took off december. 

// b. Now check the length and print it to console
// console.log(months.length);
//returns 11

// c. reverse()
months.reverse();
console.log(months);

// d. Now access the 8th array element and print it to console
// console.log(months[8]);
//returns March;

// e. shift()
months.shift();
console.log(months);

// f. Now check the length and print it to console
console.log(months.length);


// g. sort()
months.sort();

const monthsTwo = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'Jกรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม ',
    'พฤศจิกายน',
    'ธันวาคม',
];


// a. push();
monthsTwo.push('new month');

// b. Now check the length and print it to console
console.log(monthsTwo.length);
//returns 13;

// c. unshift()
console.log(monthsTwo.unshift('month in the front'))

// d. Now check the length and print it to console
console.log(monthsTwo.length);
//reuturns 14;

// e. splice()
monthsTwo.splice(2, 0, 'This should be the third month');
console.log(monthsTwo);

// f. Now check the length and print it to console.
//  Now access the 5th array element and print it to console.
// console.log(monthsTwo.length);
//returns 15;
// console.log(monthsTwo[5]);
//April

// g. slice()
const slicedMonths = monthsTwo.slice(0, 3);
// console.log(slicedMonths);

const monthsCombined = months.concat(monthsTwo)
const monthsArray = [];
const addAllMonths = array => {
    for (let i = 0; i < array.length; i++) {
        monthsArray.push(array[i]);
    }
    console.log(monthsArray);
};

// 6. Create an array with Monday, Tuesday, Wednesday, Thursday, Friday and Saturday and console.log individually.
https: //repl.it/@kanjamad/ass66

const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const days = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    };
};

console.log(days(daysOfWeek));


// 7. Ask
// for a prompt,
// if I enter‘ Monday’, in console display - Tuesday’, ’Wednesday’, ’Thursday’, ’Friday’ and‘ Saturday.
// If I enter‘ Tuesday’, in console display’ Wednesday’, ’Thursday’, ’Friday’ and‘ Saturday’.
// If I enter‘ Wednesday’, in console display’ Thursday’, ’Friday’ and‘ Saturday’.
// If I enter‘ Thursday’, in console - ‘Friday’ and‘ Saturday’.
// If I enter‘ Friday’, in console - ‘Saturday’.
// If I enter‘ Saturday, in console–‘ Sunday’.
// If I enter‘ Sunday’, in console - it is the last day of the week.

https: //repl.it/@kanjamad/ass67

const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const val = prompt('Please enter a day', "Monday");
if (val === 'Monday' || val === 'monday') {
    for (let i = 1; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Tuesday' || val === 'tuesday') {
    for (let i = 2; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    }
} else if (val === 'Wednesday' || val === 'wednesday') {
    for (let i = 3; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Thursday' || val === 'thursday') {
    for (let i = 4; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Friday' || val === 'friday') {
    for (let i = 5; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Saturday' || val === 'saturday') {
    for (let i = 6; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Sunday' || val === 'sunday') {
    console.log('It is the last day of the week');
} else {
    alert('Please enter a valid weekday');
};




// 8. Ask
// for a prompt,
// if I enter‘ Monday’, in console display‘ Tuesday’, ’Wednesday’, ’Thursday’, ’Friday’, ‘Saturday’, ’Sunday’ and‘ Monday’.
// When I enter‘ Tuesday’, in console display’ Wednesday’, ’Thursday’, ’Friday’, ‘Saturday’, ’Sunday’‘ Monday’ and‘ Tuesday’.
// When I enter‘ Wednesday’, in console display’ Thursday’, ’Friday’, ‘Saturday’, ’Sunday’, ‘Monday’, ’Tuesday’ and‘ Wednesday’.
// When I enter‘ Thursday’, in console display’ Friday’, ‘Saturday’, ’Sunday’, ‘Monday’, ‘Tuesday’ and‘ Wednesday’.
// When I enter‘ Friday’, in console display‘ Saturday’, ’Sunday’, ‘Monday’, ‘Tuesday’, ‘Wednesday’, ’Thursday’ and‘ Friday’.
// When I enter‘ Saturday’, in console display‘ Sunday’, ‘Monday’, ‘Tuesday’, ‘Wednesday’, ’Thursday’ and‘ Friday’ and‘ Saturday’.
// When I enter‘ Sunday’, in console display‘ Monday’, ‘Tuesday’, ‘Wednesday’, ’Thursday’, ‘Friday’ and‘ Saturday’.

const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const val = prompt('Please enter a day', "Monday");
if (val === 'Monday' || val === 'monday') {
    for (let i = 1; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Tuesday' || val === 'tuesday') {
    for (let i = 2; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    }
} else if (val === 'Wednesday' || val === 'wednesday') {
    for (let i = 3; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Thursday' || val === 'thursday') {
    for (let i = 4; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Friday' || val === 'friday') {
    for (let i = 5; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Saturday' || val === 'saturday') {
    for (let i = 6; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    };
} else if (val === 'Sunday' || val === 'sunday') {
    console.log('It is the last day of the week');
} else {
    alert('Please enter a valid weekday');
};

// 9. Create an array, for every match, display an alert‘ match’.
// 10. Create two arrays, for every match between the 2 arrays, display an alert‘ there is a match’.