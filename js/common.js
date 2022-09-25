$('.home-work-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
        {
          breakpoint: 700, 
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  });

  window.onunload = function() {};
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 768) {
} else { 
  $(".hunc").click(function(){
  $('body').toggleClass('nav-open');
  $('.shine').toggleClass('nav');
  $('header-wrapper__nav').fadeToggle(200);
    });
  $("hunber a").click(function(){
  $('body').toggleClass('nav-open');
  $('.shine').toggleClass('nav');
  $('header-wrapper__nav').fadeToggle(200);
    });
  }
}); 