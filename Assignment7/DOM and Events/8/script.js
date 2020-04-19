// This is calculated how many items you checked
function checkArray(form, arrayName) {
    var retval = new Array();
    for (var i = 0; i < form.elements.length; i++) {
        var el = form.elements[i];
        if (el.type == "checkbox" && el.name == arrayName && el.checked) {
            retval.push(el.value);
        }
    }
    return retval;
}
// The form handler that calls this function and displays the alert
function checkForm(form) {
    var itemsChecked = checkArray(form, "pastimes");
    alert("You selected " + itemsChecked.length + " items");
    if (itemsChecked.length > 0) {
        alert("The items selected were:\n\t" + itemsChecked);
    }
    return false;
}
