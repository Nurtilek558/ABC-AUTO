document.addEventListener("DOMContentLoaded", function () {
    const specialSwiper = new Swiper(".special-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".special-swiper__next",
        prevEl: ".special-swiper__prev",
      },
    });
  });
  