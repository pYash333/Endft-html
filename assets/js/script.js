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
});
