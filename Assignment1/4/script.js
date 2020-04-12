// Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). Based on the value entered, display the movie that won the Oscars for that year. Just write this for last 8 years. 
// If he enters beyond last 8 years then alert the user to enter between 2003-2012.


let year = prompt("Please input a year?", 2003)
if (year == 2003) {
    document.getElementById("demo").innerHTML = year + " => ' The Lord of the Rings: The Return of the King ' that won the Oscars for that year "
} else if (year == 2004) {
    document.getElementById("demo").innerHTML = year + " => ' Million Dollar Baby' that won the Oscars for that year "
} else if (year == 2005) {
    document.getElementById("demo").innerHTML = year + " => ' Crash' that won the Oscars for that year "
} else if (year == 2006) {
    document.getElementById("demo").innerHTML = year + " => ' The Departed ' that won the Oscars for that year "
} else if (year == 2007) {
    document.getElementById("demo").innerHTML = year + " => ' No Country for Old Men ' that won the Oscars for that year "
} else if (year == 2008) {
    document.getElementById("demo").innerHTML = year + " => ' Slumdog Millionaire ' that won the Oscars for that year "
} else if (year == 2009) {
    document.getElementById("demo").innerHTML = year + " => ' The Hurt Locker ' that won the Oscars for that year "
} else if (year == 2010) {
    document.getElementById("demo").innerHTML = year + " => ' The King's Speech ' that won the Oscars for that year "
} else if (year == 2011) {
    document.getElementById("demo").innerHTML = year + " => ' The Artist ' that won the Oscars for that year "
} else if (year == 2012) {
    document.getElementById("demo").innerHTML = year + " => ' Argo ' that won the Oscars for that year "
} else {
    alert("Please enter year between 2003-2012.")
    document.getElementById("demo").innerHTML = " Please enter year between 2003-2012. "
}
