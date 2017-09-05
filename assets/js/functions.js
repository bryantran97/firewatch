$(document).ready(function(){
  // Nice scroll
  $(function() {
      $("body").niceScroll({
        scrollspeed: 250
      });
  });

  // Scroll function
  $(window).scroll(function(){
    // Scroll value
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    $("#keyart-1").css({
      'transform': 'translate(0px, '+ wScroll/11 +'%)'
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
      'transform': 'translate(0px, '+ wScroll/23 +'%)'
    });
  });
});
