//movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//items
const title = document.querySelector('title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//moving animation event
container.addEventListener("mousemove", e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 28;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 28;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    //popout
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

//animate out
container.addEventListener("mouseleave", e => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = `all 0.5s ease-in-out`;
    //popback
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
