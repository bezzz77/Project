$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:3,
    autoPlay: 3000,
    itemsDesktop: [1199, 3],
    itemsMobile: [479, 1],
  });
  $(".slider__animation").owlCarousel({
    items:3,
    autoPlay: 3000,
    itemsDesktop: [1199, 3],
    itemsMobile: [479, 1],
  });

  $('.showPopupButton').on( "click", function() {
    $('#slider__form').css({
      'display' : 'block',
    });
  });

  $('#slider__form #close').on( "click", function() {
    $('#slider__form').css({
      'display' : 'none',
    });
  });
  $(".slidercool__wrap").owlCarousel({
    items:3,
    autoPlay: 3000,
    itemsDesktop: [1199, 3],
    itemsMobile: [479, 1],
  });


});

function showPopup()
{
  console.log($('#description__formtwo'));
  $('.description__wrapblocktwo').show();
  // $('.thirdsectionblock').css({
  //   'display' : 'none',
  // });
  $('.description__wrap').hide();

}
