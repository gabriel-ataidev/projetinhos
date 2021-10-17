const rulesBg = document.querySelector(".rules-bg");
function openRules() {
  rulesBg.style.display = "flex";
}
function closeRules() {
  rulesBg.style.display = "none";
}

const main = document.querySelector("main");
const scoreNumber = document.querySelector(".score-number");

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


function openRules() {
    rulesBg.style.display = 'flex';
}
function closeRules() {
    rulesBg.style.display = 'none';
}