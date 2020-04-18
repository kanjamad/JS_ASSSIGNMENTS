
const covert = degree => {
    let x;
    if (degree == "F") {
        x = (document.getElementById("f").value - 32) * 5 /9;
        document.getElementById("c").value = Math.round(x);
    } else {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    }
}


