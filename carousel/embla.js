//embla
const rootNode = document.querySelector(".embla");
const viewportNode = rootNode.querySelector(".embla__viewport");
const options = {loop: true};
const autoplay = EmblaCarouselAutoplay({
  delay: 4000,
  stopOnInteraction: false,
});
const embla = EmblaCarousel(viewportNode, options, [autoplay]);

//embla buttons
const prevButtonNode = rootNode.querySelector(".embla__prev");
const nextButtonNode = rootNode.querySelector(".embla__next");
prevButtonNode.addEventListener("click", embla.scrollPrev, false);
nextButtonNode.addEventListener("click", embla.scrollNext, false);

//embla dots
const setupDotBtns = (dotsArray, embla) => {
  dotsArray.forEach((dotNode, i) => {
    dotNode.addEventListener("click", () => embla.scrollTo(i), false);
  });
};
const generateDotBtns = (dots, embla) => {
  const template =
    document.getElementById("embla-dot-template").innerHTML;
  dots.innerHTML = embla
    .scrollSnapList()
    .reduce((acc) => acc + template, "");
  return [].slice.call(dots.querySelectorAll(".embla__dot"));
};
const selectDotBtn = (dotsArray, embla) => () => {
  const previous = embla.previousScrollSnap();
  const selected = embla.selectedScrollSnap();
  dotsArray[previous].classList.remove("is-selected");
  dotsArray[selected].classList.add("is-selected");
};
const dots = document.querySelector(".embla__dots");
const dotsArray = generateDotBtns(dots, embla);
const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
setupDotBtns(dotsArray, embla);
embla.on("select", setSelectedDotBtn);
embla.on("init", setSelectedDotBtn);