const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active"); // toggle = tilføjer eller fjerner active-class fra elementet, afhængigt af om den allerede findes på elementet.
}

menu.addEventListener("click", menuClick); // tilføjer en event listener til elementet menu, så når det bliver klikket på, kaldes funktionen menuClick.

function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active"); // active-class fjernes
}
