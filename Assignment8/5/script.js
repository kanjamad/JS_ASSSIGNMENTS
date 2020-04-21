function checkRadio(field) {
    for (var i = 0; i < field.length; i++) {
        if (field[i].checked) return field[i].value;
    }
    return false;
}


function checkForm(form) {
    if (radioValue = checkRadio(form.radiofield)) {
        alert("You selected " + radioValue);
        return true;
    } else {
        alert("Error: No value was selected!");
        return false;
    }
}