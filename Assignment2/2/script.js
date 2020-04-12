// Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc). Based on the value entered by the user, display a special dish. For example, 
// if the user enters Monday 
  // then alert "Mondays, We serve Pasta". 
// If the user enters Friday 
  // then alert "Fridays, we serve Tacos".

let speciaDish = prompt("Please enter a day", "Monday")
switch(speciaDish){
    case "Monday":
    case "monday":
        alert("We serve Pasta");
        break;
    case "Tuesday":
    case "tuesday":
        alert("We serve Chicken and Yellow Rice");
        break;
    case "Wednesday":
    case "wednesday":
        alert("We serve Spaghetti & Meatballs");
        break;
    case "Thursday":
    case "thursday":
        alert("We serve Tippin's Pot Pie");
        break;
    case "Friday":
    case "friday":
        alert("We serve Fish Fillets");
        break;
    case "Saturday":
    case "saturday":
        alert("We serve Quiche");
        break;
    default:
        alert("We serve Chicken Tenders");
        break;
}