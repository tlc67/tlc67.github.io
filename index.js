var factPlaceholder = document.getElementById("fun-fact");
var showFact = document.getElementById("show-fact");

var FunFacts = [
  "I have nine cats.",
  "I have rescued all of my cats.",
  "I spend a great deal of my time and money taking care of my cats.",
  "I have a dog, who thinks he is a cat.",
  "My pets are like my children.",
];

var factNumber;

function randomFact() {
  return FunFacts[factNumber];
}

showFact.addEventListener("click", function () {
  factNumber = Math.floor(Math.random() * 5);
  factPlaceholder.innerHTML = randomFact();
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");

  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);
