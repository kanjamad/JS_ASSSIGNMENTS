 // Write a program to prompt the user to enter the Grade of a student (like A+, A, A-, B etc). Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc.

 // document.getElementById("demo").innerHTML = year + " => ' The Artist ' that won the Oscars 

let grade = prompt("Please input the Grade of a student", "A+")

    if (grade === "A+") {
        document.getElementById("demo").innerHTML = grade + " : Outstanding"
    } else if (grade === "A") {
        document.getElementById("demo").innerHTML = grade + " : Excellent"
    } else if (grade === "A-") {
        document.getElementById("demo").innerHTML = grade + " : Average"
    } else if (grade === "B+") {
        document.getElementById("demo").innerHTML = grade + " : Very Good"
    } else if (grade === "B-" || grade === "B") {
        document.getElementById("demo").innerHTML = grade + " : Good"
    } else if (grade === "C+") {
        document.getElementById("demo").innerHTML = grade + " : Satisfactory"
    } else if (grade === "C" || grade === "C-") {
        document.getElementById("demo").innerHTML = grade + " : Acceptable"
    } else if (grade === "D+") {
        document.getElementById("demo").innerHTML = grade + " : Partially Acceptable"
    } else if (grade === "D" || grade === "D-") {
        document.getElementById("demo").innerHTML = grade + " : Insufficient"
    } else if (grade === "E") {
        document.getElementById("demo").innerHTML = grade + " : Very Insufficient"
    } else {
        document.getElementById("demo").innerHTML = grade + " : Fail"
    }