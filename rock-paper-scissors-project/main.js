const rulesBg = document.querySelector(".rules-bg");
function openRules() {
  rulesBg.style.display = "flex";
}
function closeRules() {
  rulesBg.style.display = "none";
}

const main = document.querySelector("main");
const scoreNumber = document.querySelector(".score-number");
const result = document.querySelector(".result");
const chosenCard = document.querySelector(".chosen-card");
const card2 = document.querySelector(".card2");
const outcome = document.querySelector(".outcome");
const playBtn = document.querySelector(".play-button");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const draw = document.querySelector(".draw");
const iconScissors = document.querySelector(".icon-scissors");
const iconScissors2 = document.querySelector(".icon-scissors2");
const iconPaper = document.querySelector(".icon-paper");
const iconPaper2 = document.querySelector(".icon-paper2");
const iconRock = document.querySelector(".icon-rock");
const iconRock2 = document.querySelector(".icon-rock2");
const bgCard = document.querySelector(".bg-card");

let value1;

function rockSelected() {
  main.style.display = "none";
  result.style.display = "flex";
  iconRock.style.display = 'flex';
  value1 = 3;
  secondCard();
}
function paperSelected() {
  main.style.display = "none";
  result.style.display = "flex";
  iconPaper.style.display = 'flex';
  value1 = 2;
  secondCard();
}
function scissorsSelected() {
  main.style.display = "none";
  result.style.display = "flex";
  iconScissors.style.display = 'flex';
  value1 = 1;
  secondCard();
}

function secondCard() {
  let value2 = Math.floor(Math.random() * 3) + 1;
  console.log(value2);
  setTimeout(() => {
    playBtn.style.display = 'flex';
    bgCard.style.display = 'none';
    if (value2 == 1) {
      iconScissors2.style.display = 'flex';
    } else if (value2 == 2) {
      iconPaper2.style.display = 'flex';
    } else {
      iconRock2.style.display = 'flex';
    }
  }, 1000);
  setTimeout(() => {
    if (value1 == value2) {
      draw.style.display = 'flex';
    } else if (value1 < value2 && value2 - value1 !== 2) {
      win.style.display = 'flex';
      ++scoreNumber.innerText;
    } else if(value1 - value2 === 2) {
      win.style.display = 'flex';
      ++scoreNumber.innerText;
    } else {
      lose.style.display = 'flex';
    }
  }, 1000);
}

function playButton() {
  main.style.display = "flex";
  result.style.display = "none";
  playBtn.style.display = 'none';
  draw.style.display = 'none';
  win.style.display = 'none';
  lose.style.display = 'none';
  iconScissors.style.display = 'none';
  iconRock.style.display = 'none';
  iconPaper.style.display = 'none';
  bgCard.style.display = 'flex';
  iconRock2.style.display = 'none';
  iconPaper2.style.display = 'none';
  iconScissors2.style.display = 'none';
}