// There are many ways to pick a DOM node; here we get the form itself and the efirstname
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName('form')[0];


// ---------- first Name -----------

const firstName = document.getElementById('firstname');
const firstNameError = document.querySelector('#firstname + span.error');

firstName.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (firstName.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        firstNameError.innerHTML = ''; // Reset the content of the message
        firstNameError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});


// ----------- last Name-------

const lastName = document.getElementById('lastname');
const lastNameError = document.querySelector('#lastname + span.error');

lastName.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (lastName.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        lastNameError.innerHTML = ''; // Reset the content of the message
        lastNameError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});

// ----------- accept -------




// ----------- submit form ----------------

form.addEventListener('submit', function (event) {
    // if the FirstName field is valid, we let the form submit

    if (!firstName.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }

    // if the LastName field is valid, we let the form submit

    if (!lastName.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }

    // ------- gender --------

    // Find out if a Gender has been selected
    var isChecked = false;
    for (var i = 0; i < form['gender'].length; i++) {
        if (form['gender'][i].checked) {
            isChecked = true; // Found a checked radio button!
            break; // No need to continue the search
        }
    }

    // If a gender selection was not found
    if (!isChecked) {
        alert('* Please choose your gender');
        // firstNameError.textContent = 'You need to enter your First Name.';
    }

    // ----- State -----
    if (!form['state'].value) {
        alert('* Please select your State');
    }

    // ----- Accept -----
    if (!form['accept'].checked) {
        alert('* Please select ACCEPT');
    }
});

function showError() {
    if (firstName.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        firstNameError.textContent = 'You need to enter your First Name.';
    } 
    
    if (lastName.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        lastNameError.textContent = 'You need to enter your Last Name.';
    }

    // Set the styling appropriately
    firstNameError.className = 'error active';
    lastNameError.className = 'error active';
}






