const toggleBtn = document.querySelector("input[name=switch]");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const masterPrice = document.querySelector(".master-price");

toggleBtn.addEventListener("change", function () {
  if (this.checked) {
    console.log("Checkbox is checked..");
    basicPrice.innerHTML = "<span>&dollar;</span>199.99";
    professionalPrice.innerHTML = "<span>&dollar;</span>249.99";
    masterPrice.innerHTML = "<span>&dollar;</span>399.99";
  } else {
    console.log("Checkbox is not checked..");
    basicPrice.innerHTML = "<span>&dollar;</span>19.99";
    professionalPrice.innerHTML = "<span>&dollar;</span>24.99";
    masterPrice.innerHTML = "<span>&dollar;</span>39.99";
  }
});
