var swiper = new Swiper(".event_reser", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    376: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    429: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1025: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

$(function () {
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

  $(".menu_titlst li").click(function () {
    $(".menu_titlst li").removeClass("on");
    $(this).addClass("on");
  });

  $(".numberlist li").click(function () {
    $(".numberlist li").removeClass("active");
    $(this).addClass("active");
  });

  $(".notionlist_pagenate li").click(function () {
    $(".notionlist_pagenate li").removeClass("active");
    $(this).addClass("active");
  });
});
