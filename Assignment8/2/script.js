

function myFunction() {

    // get the first list
    const firstList = document.querySelector('#first-list');
    // take the first child element
    const everest = firstList.firstElementChild;
    // get the second list
    const secondList = document.querySelector('#second-list');
    // append the everest to the second list
    secondList.appendChild(everest)
}