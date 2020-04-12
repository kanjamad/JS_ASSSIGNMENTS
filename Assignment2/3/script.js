console.log("hi")
// Write a program to prompt the user to enter a year(like 2011, 2012, 2010, etc).Based on the value entered, display the movie that won the Oscars
// for that year.Just write this
// for last 8 years.If he enters beyond last 8 years then alert the user to enter between 2003 - 2012.

let year = prompt("Please input a year?", 2003)
let text;
switch (year){
    case "2003":
        text = " => ' The Lord of the Rings: The Return of the King ' that won the Oscars for that year ";
        break;
    case "2004" :
        text = " => ' Million Dollar Baby' that won the Oscars for that year ";
        break;
    case "2005" :
        text = " => ' Crash' that won the Oscars for that year ";
        break;
    case "2006" :
        text = " => ' The Departed ' that won the Oscars for that year ";
        break;
    case "2007" :
        text = " => ' No Country for Old Men ' that won the Oscars for that year ";
        break;
    case "2008" :
        text = " => ' Slumdog Millionaire ' that won the Oscars for that year ";
        break;
    case "2009" :
        text = " => ' The Hurt Locker ' that won the Oscars for that year ";
        break;
    case "2010" :
        text = " => ' The King's Speech ' that won the Oscars for that year ";
        break;
    case "2011" :
        text = " => ' The Artist ' that won the Oscars for that year ";
        break;
    case "2012" :
        text = " => ' Argo ' that won the Oscars for that year ";
        break;
    default:
        alert("Please enter year between 2003-2012.")
        text = " Please enter year between 2003-2012. ";
        break;
}

document.getElementById("demo").innerHTML = year + text
