const hideElement = () => {
    let x = document.getElementById("showElems");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}