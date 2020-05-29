$(function() {

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $('body').toggleClass('no-scroll');
    $(this).toggleClass('hamburger--active');
    $('.nav').toggleClass('nav--active');
    $('.header').toggleClass('header--menu');
  });

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
          $('.header--main').addClass('header--main--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
          $('.header--main').removeClass('header--main--active');
      }
  });

  if($(this).scrollTop()>20){
    $('.header').addClass('header--active');
  }


//----------------------------------------slider----------------------------------
  var swiper = new Swiper('.info__for-you_slider', {
    pagination: {
      el: '.info__for-you-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.info__for-you_slider-next',
      prevEl: '.info__for-you_slider-prev',
    },
    slidesPerView: 3,
    spaceBetween: 5,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    }
  });


  
});
