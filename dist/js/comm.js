var swiper = new Swiper(".slide_intro", {
  spaceBetween: 40,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

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

var swiper = new Swiper(".artist_lst", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
