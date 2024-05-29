const openEl = document.querySelector(".open");
const closeEl = document.querySelector(".close");
const navigationEl = document.querySelector(".navigation-elements");

// display the nav bar

openEl.addEventListener("click", () => {
  navigationEl.style.animationName = "show";
  navigationEl.classList.remove("hide");
});

closeEl.addEventListener("click", () => {
  navigationEl.style.animationName = "hide";
  setTimeout(() => {
    navigationEl.classList.add("hide");
  }, 1000);
});
