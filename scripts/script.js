const slide = document.querySelectorAll(".slide");
const btnPrev = document.getElementById("prev-btn");
const btnNext = document.getElementById("next-btn");
const showPopup = document.querySelector(".sm1");
const showPopup2 = document.querySelector(".sm2");
const hidePopup = document.querySelector(".saibamenos");
const hidePopup2 = document.querySelector(".saibamenos2");
const popupContainer = document.querySelector(".sm-container");
const popupContainer2 = document.querySelector(".sm-container2");

let currentSlide = 0;

function hideSlide() {
  slide.forEach((item) => item.classList.remove("on"));
}
function showSlide() {
  slide[currentSlide].classList.add("on");
}

function nextSlide() {
  hideSlide();
  if (currentSlide == slide.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide();
}

function prevSlide() {
  hideSlide();
  if (currentSlide == 0) {
    currentSlide = slide.length - 1;
  } else {
    currentSlide--;
  }
  showSlide();
}

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

showPopup.onclick = () => {
  popupContainer.classList.add("active");
};

hidePopup.onclick = () => {
    popupContainer.classList.remove("active");
  };

  showPopup2.onclick = () => {
    popupContainer2.classList.add("active");
  };

  hidePopup2.onclick = () => {
    popupContainer2.classList.remove("active");
  };


  function showMenu() {
    const menuMobile = document.querySelector(".nav_links");
    if(menuMobile.classList.contains('active')){
      menuMobile.classList.remove('active')
      document.querySelector('.icon').src = "images/burger-menu-svgrepo-com (1).svg"
    } else{
      menuMobile.classList.add('active')
      document.querySelector('.icon').src = "images/close-bold-svgrepo-com.svg"
    }
  }