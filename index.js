let slideIndex1 = 1;
let slideIndex2 = 1;

function plusSlides(slideshowNumber, n) {
  if (slideshowNumber == 1) {
    showSlides(1, (slideIndex1 += n));
  } else if (slideshowNumber == 2) {
    showSlides(2, (slideIndex2 += n));
  }
}

function showSlides(slideshowNumber, n) {
  let slides;
  if (slideshowNumber == 1) {
    slides = document.getElementsByClassName("mySlides1");
    if (n > slides.length) {
      slideIndex1 = 1;
    }
    if (n < 1) {
      slideIndex1 = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex1 - 1].style.display = "block";
  } else if (slideshowNumber == 2) {
    slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {
      slideIndex2 = 1;
    }
    if (n < 1) {
      slideIndex2 = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
  }
}

showSlides(1, slideIndex1);
showSlides(2, slideIndex2);
