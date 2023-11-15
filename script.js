$(".menu > ul > li").click(function (e) {
  // remove active from already active
  $(this).siblings().removeClass("active");

  // add active to clicked
  $(this).toggleClass("active");

  //   if has sub menu open it
  $(this).find("ul").slideToggle();

  // close other sub menu
  $(this).siblings().find("ul").slideUp();

  //   remove active class of sub menue
  $(this).siblings().find("ul").find("li").removeClass("active");
});


$(".menu-btn").click(function(){
    $(".sidebar").toggleClass("active");
});