var splide = new Splide(".main_slide", {
  type: "loop",
  // perPage: 1,
  // arrows: false,
  gap: "40px",
  start: 0,
  autoplay: {
    interval: 300,
    pauseOnHover: {
      resetProgress: true,
    },
  },
});

splide.mount();

// var swiper = new Swiper(".slide_intro", {
//   spaceBetween: 40,
//   centeredSlides: true,
//   slidesPerView: 1,
//   loop: true,
//   loopAdditionalSlides: 1,
//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//   },
// });

var swiper = new Swiper(".event_reser", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
