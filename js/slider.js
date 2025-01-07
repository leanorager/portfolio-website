// DRAGGING - SCROLL
const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  e.preventDefault();
  console.log("Drag start", e.pageX, carousel.scrollLeft);
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  //   console.log(e.pageX); //   pageX giver den horisontale koordinat af musen
  if (!isDragStart) return;
  console.log("Dragging: ", e.pageX);
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff; //scrollLeft set or return the number of pixel an element's content is scrolled horizontally
};

const dragStop = () => {
  console.log("Drag stop");
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);

// CLICK PÅ PILE
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// Scroll ét billede til venstre
leftArrow.addEventListener("click", () => {
  const imageWidth = carousel.querySelector("img").offsetWidth; // Bredden på ét billede
  carousel.scrollLeft -= imageWidth; // Ryk scrollLeft til venstre med ét billede
});

// Scroll ét billede til højre
rightArrow.addEventListener("click", () => {
  const imageWidth = carousel.querySelector("img").offsetWidth; // Bredden på ét billede
  carousel.scrollLeft += imageWidth; // Ryk scrollLeft til højre med ét billede
});

// Fjern pile i enderne
