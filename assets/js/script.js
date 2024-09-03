$(function () {
  // alert("yash");
  $(".header .menu-btn").on("click", function () {
    $(".header .header-desktop .main_menu").slideToggle();
    $(this).toggleClass("open");
  });

  if ($(".hero-section").length > 0) {
    $(".hero-section .counter .count .value").counterUp({
      delay: 60,
      time: 1000,
    });
  }
  if ($(".trending-section").length > 0) {
    $(".trending-section .trending-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  if ($(".top-collection-section").length > 0) {
    $(".custom-tab-wrapper .tab-link").click(function () {
      var tabID = $(this).attr("data-tab");

      $(this).addClass("active").siblings().removeClass("active");

      $("#tab-" + tabID)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  }
});
