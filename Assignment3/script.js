// 1. Write a program to print (in console) 1-30 numbers with a line break.

for (let i = 1; i <= 30; i++) {
    console.log(i);
}

// 2. Write a program to print numbers 1 - 10 in reverse order(like 10, 9, 8, 7, 6, ....1) with a line break.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 3. Write a program to print numbers from 12 to 33 and also at the end print the sum of all these numbers.
let sum = 0;
for (let i = 12; i <= 33; i++) {
    sum = sum + i;
}
console.log(sum);


// 4. Write a program to print( in console) 1 - 30 odd numbers with a line break
for (let i = 1; i <= 31; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}


// 5. Write a program to print( in console) 1 - 30 even numbers with a line break

for (let i = 1; i <= 31; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 6. Write a program to print 1 - 100 prime numbers.
for (let i = 1; i <= 100; i++) {

    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0 && i !== j) {
            isPrime = false;
        }
    }
    if (isPrime === true) {
        console.log(i);
    }
}