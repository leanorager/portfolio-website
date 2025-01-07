// DRAGGING - SCROLL
const carousel = document.querySelector(".carousel");

let isDragStart = false, // er drag begyndt?
  prevPageX, // Husker musens X-koordinat (vandret position) ved drag-start.
  prevScrollLeft; //Gemmer scrollepositionen for carousel ved drag-start.

// funktionen dragStart
function dragStart(e) {
  e.preventDefault(); // forhindrer standardadfærden at markere billeder
  console.log("Drag start", e.pageX, carousel.scrollLeft);
  isDragStart = true;
  prevPageX = e.pageX; // gemmer musens X-koordinat
  prevScrollLeft = carousel.scrollLeft; // gemmer nuværende scroll-position
}

// funktionen dragging
function dragging(e) {
  if (!isDragStart) return; // kaldes, mens brugeren bevæger musen, og isDragStart er true.
  // if (!isDragStart) return; betyder: "Hvis isDragStart er false, så afslut funktionen her."
  console.log("Dragging: ", e.pageX); // e.pageX giver den horisontale koordinat af musen
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX; // hvor langt musen har flyttet sig siden drag-start
  carousel.scrollLeft = prevScrollLeft - positionDiff; // // justerer scroll-positionen
}

// funktionen dragStop
function dragStop() {
  console.log("Drag stop");
  isDragStart = false; // stopper drag-handlingen
}

carousel.addEventListener("mousedown", dragStart); // kalder funktionen dragStart ved mousedown
carousel.addEventListener("mousemove", dragging); // kalder funktionen dragging ved mousemove
document.addEventListener("mouseup", dragStop); // kalder funktionen dragStop ved mouseup
carousel.addEventListener("mouseleave", dragStop); // kalder også funktionen dragStop ved mouseleave

// CLICK PÅ PILE
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// Scroll ét billede til venstre
leftArrow.addEventListener("click", function () {
  const imageWidth = carousel.querySelector("img").offsetWidth; // Bredden på ét billede
  carousel.scrollLeft = carousel.scrollLeft - imageWidth; // Ryk scrollLeft til venstre med ét billede
});

// Scroll ét billede til højre
rightArrow.addEventListener("click", function () {
  const imageWidth = carousel.querySelector("img").offsetWidth; // Bredden på ét billede
  carousel.scrollLeft = carousel.scrollLeft + imageWidth; // Ryk scrollLeft til højre med ét billede
});

// Fjern pile i enderne
