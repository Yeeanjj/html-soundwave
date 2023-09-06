var splide = new Splide(".main_slide", {
  type: "loop",
  // perPage: 1,
  // arrows: false,
  gap: "40px",
  start: 0,
  autoplay: {
    interval: 250,
    pauseOnHover: {
      resetProgress: true,
    },
  },
});

splide.mount();

var swiper = new Swiper(".event_reser", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

$(function () {
  $(".mainitem_txt .minitxt_a").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
    } else {
      $(".mainitem_tit_mini > li").removeClass("active");
      $(this).parent().addClass("active");
    }
  });

  // show content
  $(".mainitem_tit_mini li:first-child").addClass("active");
  $(".mainitem_cont").hide();
  $("#tab1").show();

  // click function
  $(".mainitem_tit_mini li").click(function () {
    $(".mainitem_tit_mini li").removeClass("active");
    $(this).addClass("active");
    $(".mainitem_cont").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).show();
    return false;
  });
});
