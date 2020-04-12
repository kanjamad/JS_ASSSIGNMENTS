// Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc). 
// Based on the value entered by the user, display a special dish. 
// For example, 
// if the user enters Monday 
// then alert "Mondays, We serve Pasta". 
// If the user enters Friday 
// then alert "Fridays, we serve Tacos".

let specialDish = prompt("Please enter a day?", "Monday")
if (specialDish == "Monday" || specialDish == "monday") {
    document.getElementById("demo").innerHTML = specialDish + " => We serve Pasta"
} else if (specialDish == "Tuesday" || specialDish == "tuesday") {
    document.getElementById("demo").innerHTML = specialDish + " => We serve Chicken and Yellow Rice"
} else if (specialDish == "Wednesday" || specialDish == "wednesday") {
    document.getElementById("demo").innerHTML = specialDish + " => We serve Spaghetti & Meatballs"
} else if (specialDish == "Thursday" || specialDish == "thursday") {
    document.getElementById("demo").innerHTML = specialDish + " => We serve Tippin's Pot Pie"
} else if (specialDish == "Friday" || specialDish == "friday") {
    document.getElementById("demo").innerHTML = specialDish + " => We serve Fish Fillets"
} else if (specialDish == "Saturday" || specialDish == "saturday") {
    document.getElementById("demo").innerHTML = specialDish + " => We serve Quiche"
} else {
    document.getElementById("demo").innerHTML = specialDish + " => We serve Chicken Tenders"
}
