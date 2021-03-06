// SELECTORS
const billInput = document.querySelector(".bill-input");
const customInput = document.querySelector(".custom");
const peopleInput = document.querySelector(".people-input");
const percentageButton5 = document.querySelector(".n5");
const percentageButton10 = document.querySelector(".n10");
const percentageButton15 = document.querySelector(".n15");
const percentageButton25 = document.querySelector(".n25");
const percentageButton50 = document.querySelector(".n50");
const tipNumber = document.querySelector(".tip-number");
const totalNumber = document.querySelector(".total-number");
var tipValue;
var billValue;
const resetBtn = document.querySelector(".reset");

// EVENT LISTENERS
billInput.addEventListener("change", submitValue);
customInput.addEventListener("change", submitCustom);
peopleInput.addEventListener("change", submitPeople);
percentageButton5.addEventListener("click", percentageValue5);
percentageButton10.addEventListener("click", percentageValue10);
percentageButton15.addEventListener("click", percentageValue15);
percentageButton25.addEventListener("click", percentageValue25);
percentageButton50.addEventListener("click", percentageValue50);
resetBtn.addEventListener("click", resetValues);

// FUNCTIONS
function submitValue() {
  billValue = billInput.value;
}
function submitCustom() {
  tipValue = customInput.value * 0.01 + 1;
}
function submitPeople() {
  let peopleValue = peopleInput.value;
  //tip-amout
  var tipAmount = parseFloat(
    ((billValue * (tipValue - 1)) / peopleValue).toFixed(2)
  );
  //total
  var totalAmount = parseFloat(
    ((billValue * tipValue) / peopleValue).toFixed(2)
  );
  //the change of values
  tipNumber.innerHTML = `$${tipAmount}`;
  totalNumber.innerHTML = `$${totalAmount}`;
}
function percentageValue5() {
  tipValue = 1 + 0.05;
  customInput.value = 5;
}
function percentageValue10() {
  tipValue = 1 + 0.1;
  customInput.value = 10;
}
function percentageValue15() {
  tipValue = 1 + 0.15;
  customInput.value = 15;
}
function percentageValue25() {
  tipValue = 1 + 0.25;
  customInput.value = 25;
}
function percentageValue50() {
  tipValue = 1 + 0.5;
  customInput.value = 50;
}
function resetValues() {
  console.log("yy");
  billInput.value = "";
  customInput.value = "";
  peopleInput.value = "";
  tipNumber.innerHTML = "$0.00";
  totalNumber.innerHTML = "$0.00";
}
