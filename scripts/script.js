
const showPopup = document.querySelector(".sm1");
const showPopup2 = document.querySelector(".sm2");
const hidePopup = document.querySelector(".saibamenos");
const hidePopup2 = document.querySelector(".saibamenos2");
const popupContainer = document.querySelector(".sm-container");
const popupContainer2 = document.querySelector(".sm-container2");

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

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });