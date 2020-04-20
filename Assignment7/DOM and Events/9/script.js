// ------ function toggle between hiding and showing ------

const checkFunction = () => {
    let x = document.getElementById("first-list");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}


// ------- appendChild --------------

const addFunction =() => {
    var li = document.createElement("Li");
    li.innerHTML = "https://www.w3schools.com/";
    document.getElementById("first-list").appendChild(li);
}



