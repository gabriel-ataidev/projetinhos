//selectors
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
let minutes, seconds, counterInterval = undefined;

//functions
resetCounter();
function updateCounterEl(){
    minutesEl.innerHTML  = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.innerHTML  = seconds < 10 ? `0${seconds}` : seconds;
}
function startCounter(){
    if(counterInterval) return;
    counterInterval = setInterval( () => {
        if(seconds === 0){
            if(minutes === 0) return destroyInterval();
            seconds = 59;
            --minutes;
        }else{
            --seconds
        }
        updateCounterEl();
    }, 1000)
}
function pauseCounter(){
    destroyInterval();   
}
function destroyInterval(){
    clearInterval(counterInterval);
    counterInterval;
}
function resetCounter(){
    destroyInterval();
    minutes = 25;
    seconds = 00;
    updateCounterEl();
}
