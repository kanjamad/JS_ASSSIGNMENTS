// For - Loop and If - Else:

// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 2. Print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// 3. Print odd numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
// 4. Print even numbers from 1 to 100

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 5. Numbers to be printed between 40 to 60

for (let i = 40; i <= 60; i++) {
    console.log(i)
}

// 0r

for (let i = 1; i < 100; i++) {
    if (i >= 40 && i <= 60)
        console.log(i)
}


// 6. Numbers printed between 80 to 100

for (let i = 80; i <= 100; i++) {
    console.log(i)
}

// 0r

for (let i = 1; i <= 100; i++) {
    if (i >= 80 && i <= 100)
        console.log(i)
}

// 7. If you enter ‘1’ – it should 
// print numbers between 1 to 11 
// If you enter ‘2’- it should 
// print numbers between 2 to 12
// If you enter ‘3’- it should 
// print numbers between 3 to 13
// If you enter ‘4’-it should 
// print numbers between 4 to 14
// If you enter ‘5’-it should 
// print numbers between 5 to 15


let num = prompt(" What your number you pick")
if (num == 1) {
    for (let i = 1; i <= 11; i++) {
        console.log(i)
    }
} else if (num == 2) {
    for (let i = 2; i <= 12; i++) {
        console.log(i)
    }
} else if (num == 3) {
    for (let i = 3; i <= 13; i++) {
        console.log(i)
    }
} else if (num == 4) {
    for (let i = 4; i <= 14; i++) {
        console.log(i)
    }
} else if (num == 5) {
    for (let i = 5; i <= 15; i++) {
        console.log(i)
    }
} else {
    console.log("Please enter numbers between 1-5")
}
// 8. If the value is entered ‘123’, 
// alert should be ‘One Two Three’ 
// If the value is entered ‘124’, 
// alert should be ‘One Two Four’
// If the value is entered ‘125’, 
// alert should be ‘One Two Five’
// If the value is entered ‘126’, 
// alert should be ‘One Two Six’
// If the value is entered ‘127’, 
// alert should be ‘One Two Seven’


const alertNum = val => {
    if (val === '123') {
        alert('One Two Three');
    } else if (val === '124') {
        alert('One Two Four');
    } else if (val === '125') {
        alert('One Two Five');
    } else if (val === '126') {
        alert('One Two Six');
    } else if (val === '127') {
        alert('One Two Seven');
    } else {
        alert('input another value');
    };
};

console.log(alertNum('123'));

//   9. If I enter ‘1’, 
// alert should be ‘One’ 
// If I enter ‘2’, 
// alert should be ‘Two’
// If I enter ‘3’, 
// alert should be ‘Three’ 
// If I enter ‘4’, 
// alert should be ‘Four’
// If I enter ‘5’, 
// alert should be ‘Five’ 
// Else, please enter a valid number.



const numAlert = val => {
    if (val === '1') {
        alert('One');
    } else if (val === '2') {
        alert('Two');
    } else if (val === '3') {
        alert('Three');
    } else if (val === '4') {
        alert('Four');
    } else if (val === '5') {
        alert('Five');
    } else {
        alert('Please enter a valid number 1-5');
    };
};

console.log(numAlert("1"))


// 10. If I enter a number between 1 to 10, it should 
// alert, the number is between ‘1 and 10’ 
// If I enter a number between 11 to 20, it should 
// alert, the number is between ‘11 and 20’ 
// If I enter a number between 21 to 30, it should 
// alert, the number is between ‘21 and 30’ 
// If I enter a number between 31 to 40, it should 
// alert, the number is between ‘31 and 40’ I
// f I enter a number between 41 to 50, it should 
// alert, the number is between ‘41 and 50’


const alertNum = n => {
    for (let i = 1; i <= n; i++) {
        if (i > 1 && i < 10) {
            alert("The number is between ‘1 and 10'");
        } else if (i > 11 && i < 20) {
            alert("the number is between '11 and 20'");
        } else if (i > 21 && i < 30) {
            alert("the number is between '21 and 30'");
        } else if (i > 31 && i < 40) {
            alert("the number is between '31 and 40'");
        } else if (i > 41 && i < 50) {
            alert("the number is between '41 and 50'");
        } else {
            alert("please enter a number between '1-50'");
        }
    }
}

console.log(alertNum(1));


// 11. If the number is less than 50 or greater than 200, 
// alert the number is a valid number 
// If the number is between 50 and 200, 
// alert this is a good number.
// Else, alert ‘It is an invalid number’.
const alerNum = n => {
    if (n < 50 || n > 200) {
        alert("the number is a valid number : " + n)
    } else if (n > 50 && n < 200) {
        alert("this is a good number : " + n)
    } else {
        alert("It is an invalid number: " + n)
    }

}
console.log(alerNum(40));

// 12. If I enter ‘One’, 
// alert ‘1’ 
// If I enter ‘Two’,  
// alert ‘2’
// If I enter ‘Three’, 
// alert ‘3’
// If I enter ‘Four’,
// alert ‘4’
// If I enter ‘Five’, 
// alert ‘5’

const alertNum = (num) => {
    num = prompt('enter a number between One thru Five', 'One');
    if (num === 'One' || num === 'one') {
        alert('1');
    } else if (num === 'Two' || num === 'two') {
        alert('2');
    } else if (num === 'Three' || num === 'three') {
        alert('3');
    } else if (num === 'Four' || num === 'four') {
        alert('4');
    } else if (num === 'Five' || num === 'five') {
        alert('5');
    } else {
        alert('enter one thru five');
    };
};

// 13. If I enter numbers Six to Ten, 
// please enter a proper number. Anything 
// else, 
// please enter a valid number.

num = prompt('enter a number Six to Ten');
if (num < 6 || num > 10) {
    alert('please enter a proper number')
} else {
    alert('please enter a valid number');
}


// 14. If I enter an even number, I want next 10 even numbers to be printed.If I enter an odd number, I want next 10 odd numbers to be printed.
// 15. If I enter an even number, I want previous 5 even numbers to be printed.If I enter an odd number, I want previous 5 odd numbers to be printed.