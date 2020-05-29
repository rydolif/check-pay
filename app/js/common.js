$(function() {

//-------------------------------popup---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

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


  
});
