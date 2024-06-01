const navEl = document.querySelector(".navigation-elements");
const openMenuEl = document.querySelector(".open-menu");
const closeMenuEl = document.querySelector(".close-menu");

// Create a MediaQueryList object
let x = window.matchMedia("(min-width: 768px)");
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    navEl.classList.remove("hide");
    openMenuEl.classList.add("hide");
    closeMenuEl.classList.add("hide");
  } else {
    navEl.classList.add("hide");
    openMenuEl.classList.remove("hide");
    closeMenuEl.classList.remove("hide");
  }
}

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});
