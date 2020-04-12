// Write a program to prompt the user for age. 
// If age is less than or equal to (<=) 14, 
// alert "Not Allowed". 
// If age is greater than 14 and less than 65, 
// alert "Regular Price". 
// If age is equal to 50, 
// alert "Special discount".




let age = prompt("How old are you?")
if (age <= 14) {
    alert("Not Allowed")
} else if (age > 14 && age < 65 && age != 50) {
    alert("Regular Price")
} else if (age == 50) {
    alert("Special discount")
} else {
    alert("Your age is " + Number(age) + " year old")
}