// Write a program to prompt the user to enter the Grade of a student(like A + , A, A - , B etc).
// Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc.


let grade = prompt("Please input the Grade of a student", "A+")
let text;
switch(grade){
    case "A+":
        text = " : Outstanding";
        break;
    case "A":
        text = " : Excellent";
        break;
    case "A-":
        text = " : Average";
        break;
    case "B+":
        text = " : Very Good";
        break;
    case "B-": 
    case "B":
        text = " : Good";
        break;
    case "C+":
        text = " : Satisfactory";
        break;
    case "C" :
    case "C-":
        text = " : Acceptable";
        break;
    case "D+":
        text = " : Partially Acceptable";
        break;
    case "D" :
    case "D-":
        text = " : Insufficient";
        break;
    case "E":
        text = " : Very Insufficient";
        break;
    default:
        text = " : Fail";
        break;
}
document.getElementById("demo").innerHTML = grade + text;

