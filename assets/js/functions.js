$(document).ready(function(){
  // Nice scroll
  $(function() {
      $("body").niceScroll({
        cursoropacitymin: 1,
        scrollspeed: 100
      });
  });

  // Scroll function
  $(window).scroll(function(){
    // Scroll value
    var wScroll = $(this).scrollTop();

    $("#keyart-1").css({
      'transform': 'translate(0px, '+ wScroll/12 +'%)'
    });

    $("#keyart-2").css({
      'transform': 'translate(0px, '+ wScroll/13 +'%)'
    });

    $("#keyart-3").css({
      'transform': 'translate(0px, '+ wScroll/15 +'%)'
    });

    $("#keyart-4").css({
      'transform': 'translate(0px, '+ wScroll/17 +'%)'
    });

    $("#keyart-5").css({
      'transform': 'translate(0px, '+ wScroll/19 +'%)'
    });

    $("#keyart-6").css({
      'transform': 'translate(0px, '+ wScroll/21 +'%)'
    });

    $("#keyart-7").css({
      'transform': 'translate(0px, '+ wScroll/22 +'%)'
    });

    if(wScroll > $('.work').offset().top - ($(window).height() / 3)) {
      $('.work figure').each(function(i){
        setTimeout(function() {
          $('.work figure').eq(i).addClass('is-showing');
        }, 150 * (i+1));
      });
    }
  });

  $(".fa-twitter-square").click(function() {
    alert("Just kidding, I don't have a twitter. You just got trolled! The other links/resume/email works fine though!");
  })

  $(".return button").click(function(){
    $("html, body").animate({scrollTop:0}, 1500);
  })
});
