

// FUNCTIONS
function allFunctions(){
    
    // SELECTORS
    const billInput = document.querySelector('.bill-input');
    const customInput = document.querySelector('.custom');
    const peopleInput = document.querySelector('.people-input');
    const percentageButton5 = document.querySelector('.n5');
    const percentageButton10 = document.querySelector('.n10');
    const percentageButton15 = document.querySelector('.n15');
    const percentageButton25 = document.querySelector('.n25');
    const percentageButton50 = document.querySelector('.n50');
    let tipValue;
    
    // EVENT LISTENERS
    billInput.addEventListener('change', submitValue);
    customInput.addEventListener('change', submitCustom);
    peopleInput.addEventListener('change', submitPeople);
    percentageButton5.addEventListener('click', percentageValue5);
    percentageButton10.addEventListener('click', percentageValue10);
    percentageButton15.addEventListener('click', percentageValue15);
    percentageButton25.addEventListener('click', percentageValue25);
    percentageButton50.addEventListener('click', percentageValue50);

    
    function submitValue() {
        const billValue = billInput.value;
        console.log(billValue);
    }
    function submitCustom() {
        tipValue = customInput.value * 0.01;
        console.log(tipValue);
    }
    function submitPeople() {
        const peopleValue = peopleInput.value;
        console.log(peopleValue);
    }
    function percentageValue5() {
        tipValue = 0.05;
        console.log(tipValue);
    }
    function percentageValue10() {
        tipValue = 0.1;
        console.log(tipValue);
    }
    function percentageValue15() {
        tipValue = 0.15;
        console.log(tipValue);
    }
    function percentageValue25() {
        tipValue = 0.25;
        console.log(tipValue);
    }
    function percentageValue50() {
        tipValue = 0.50;
        console.log(tipValue);
    }
}
allFunctions();
