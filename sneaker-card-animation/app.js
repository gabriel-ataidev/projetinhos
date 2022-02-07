//movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//moving animation event
container.addEventListener("mousemove", e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 28;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 28;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
});

//animate out
container.addEventListener("mouseleave", e => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = `all 0.5s ease-in-out`;
});

