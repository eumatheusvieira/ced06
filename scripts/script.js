const slide = document.querySelectorAll(".slide");
const btnPrev = document.getElementById("prev-btn");
const btnNext = document.getElementById("next-btn");

let currentSlide = 0;

function hideSlide() {
  slide.forEach((item) => item.classList.remove("on"));
}
function showSlide() {
  slide[currentSlide].classList.add('on');
}

function nextSlide() {
    hideSlide()
    if(currentSlide == slide.length - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlide()
}

function prevSlide() {
    hideSlide()
    if(currentSlide == 0) {
        currentSlide = slide.length -1
    } else {
        currentSlide--
    }
    showSlide()
}

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)
