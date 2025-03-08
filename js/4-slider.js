document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      console.log("Инициализация Swiper...");
      const swiper = new Swiper(".custom-swiper-container1", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        },
      });
  
      console.log("Swiper инициализирован:", swiper);
    }, 500);
  });
  