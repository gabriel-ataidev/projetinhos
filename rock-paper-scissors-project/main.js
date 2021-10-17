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
let value1;

function rockSelected() {
  main.style.display = "none";
  result.style.display = "flex";
  const rock = document.createElement("IMG");
  rock.setAttribute("src", "images/icon-rock.svg");
  chosenCard.classList.add("a-rock");
  chosenCard.appendChild(rock);
  value1 = 3;
  secondCard();
}
function paperSelected() {
  main.style.display = "none";
  result.style.display = "flex";
  const paper = document.createElement("IMG");
  paper.setAttribute("src", "images/icon-paper.svg");
  chosenCard.classList.add("a-paper");
  chosenCard.appendChild(paper);
  value1 = 2;
  secondCard();
}
function scissorsSelected() {
  main.style.display = "none";
  result.style.display = "flex";
  const scissors = document.createElement("IMG");
  scissors.setAttribute("src", "images/icon-scissors.svg");
  chosenCard.classList.add("a-scissors");
  chosenCard.appendChild(scissors);
  value1 = 1;
  secondCard();
}

function secondCard() {
  let value2 = Math.floor(Math.random() * 3) + 1;
  console.log(value2);
  setTimeout(() => {
    if (value2 == 1) {
      const scissors = document.createElement("IMG");
      scissors.setAttribute("src", "images/icon-scissors.svg");
      card2.classList.add("a-scissors");
      card2.appendChild(scissors);
    } else if (value2 == 2) {
      const paper = document.createElement("IMG");
      paper.setAttribute("src", "images/icon-paper.svg");
      card2.classList.add("a-paper");
      card2.appendChild(paper);
    } else {
      const rock = document.createElement("IMG");
      rock.setAttribute("src", "images/icon-rock.svg");
      card2.classList.add("a-rock");
      card2.appendChild(rock);
    }
  }, 1000);
  setTimeout(() => {
    if (value1 == value2) {
      const h1 = document.createElement("h1");
      h1.innerText = "DRAW";
      outcome.appendChild(h1);
    } else if (value1 < value2 || value1 - value2 == 2) {
      const h1 = document.createElement("h1");
      h1.innerText = "YOU WIN";
      outcome.appendChild(h1);
      ++scoreNumber.innerText;
    } else {
      const h1 = document.createElement("h1");
      h1.innerText = "YOU LOSE";
      outcome.appendChild(h1);
    }
  }, 1000);
}

function playButton() {
  main.style.display = "flex";
  result.style.display = "none";
}
