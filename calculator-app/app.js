//SELECTORS
const inputContainer = document.querySelector('.input-container');
const container = document.querySelector('.container');
const body = document.querySelector('body');

//FUNCTIONS
function click7() {
    inputContainer.value = inputContainer.value + 7;
}
function click8() {
    inputContainer.value = inputContainer.value + 8;
}
function click9() {
    inputContainer.value = inputContainer.value + 9;
}
function clickDel() {
    inputContainer.value = inputContainer.value.slice(0, -1);
}
function click4() {
    inputContainer.value = inputContainer.value + 4;
}
function click5() {
    inputContainer.value = inputContainer.value + 5;
}
function click6() {
    inputContainer.value = inputContainer.value + 6;
}
function clickPlus() {
    inputContainer.value = inputContainer.value + `+`;
}
function click1() {
    inputContainer.value = inputContainer.value + 1;
}
function click2() {
    inputContainer.value = inputContainer.value + 2;
}
function click3() {
    inputContainer.value = inputContainer.value + 3;
}
function clickMinus() {
    inputContainer.value = inputContainer.value + `-`;
}
function clickDot() {
    inputContainer.value = inputContainer.value + `.`;
}
function click0() {
    inputContainer.value = inputContainer.value + 0;
}
function clickSlash() {
    inputContainer.value = inputContainer.value + `/`;
}
function clickX() {
    inputContainer.value = inputContainer.value + `*`;
}
function clickReset() {
    inputContainer.value = '';
}
function clickEqual() {
    inputContainer.value = parseFloat(eval(inputContainer.value).toFixed(2));  
}
function switchTheme() {
    container.classList.toggle("active");
    body.classList.toggle("b-active");
}