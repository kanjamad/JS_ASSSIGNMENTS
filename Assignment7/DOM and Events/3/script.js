const hideElement = () => {
    let x = document.getElementById("hideAll");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}