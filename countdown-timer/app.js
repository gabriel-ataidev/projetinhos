const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
let seconds, minutes, counterInterval;

function updateCounterEl(){
    if(secondsEl.innerText < 10 && secondsEl.innerText.length <=1) secondsEl.innerText = `0${secondsEl.innerText}`;
    if(minutesEl.innerText < 10 && minutesEl.innerText.length <=1) minutesEl.innerText = `0${minutesEl.innerText}`;
    if(hoursEl.innerText < 10 && hoursEl.innerText.length <=1) hoursEl.innerText = `0${hoursEl.innerText}`;
    if(daysEl.innerText < 10 && daysEl.innerText.length <=1) daysEl.innerText = `0${daysEl.innerText}`;
}
function countdown() {
    counterInterval = setInterval( () => {
        seconds = secondsEl.innerText;
        if(secondsEl.innerText == 0) {
            secondsEl.innerText = 59;
            --minutesEl.innerText;
            if(minutesEl.innerText == -1){
                --hoursEl.innerText;
                minutesEl.innerText = 59;
            }
            if(hoursEl.innerText == -1){
                --daysEl.innerText;
                hoursEl.innerText = 23;
            }
        }else{
            console.log(secondsEl.innerText);
            --secondsEl.innerText;
        }
        updateCounterEl();
    }, 1000)
}
countdown();
