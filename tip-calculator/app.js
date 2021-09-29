// SELECTORS
const billInput = document.querySelector('.bill-input');
const customInput = document.querySelector('.custom');
const peopleInput = document.querySelector('.people-input');

// EVENT LISTENERS
billInput.addEventListener('change', submitValue);
customInput.addEventListener('change', submitCustom);
peopleInput.addEventListener('change', submitPeople);

// FUNCTIONS
function submitValue() {
    const billValue = billInput.value;
    console.log(billValue);
}
function submitCustom() {
    const customValue = customInput.value;
    console.log(customValue);
}
function submitPeople() {
    const peopleValue = customInput.value;
    console.log(peopleValue);
}
