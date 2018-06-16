$(window).load(function() {
    $(".loader").slideUp("fast");
});
var url = "story.html";
 $('#about-whole').load(url+"#story");

$(document).ready(function() {

 // Elements Animation (HIDING)
 $('#short-bio').hide();
 $('#anil-img').hide();
 $('#social a > span').hide();
 $('nav > span.fa').hide();
 $('.whole > h1').addClass('');
 $('#progress').hide();
 $('.learning').hide();
 $('.float > label').hide();
 $('.floating > label').hide();
 $('#submit-btn').hide();
 $('#logo-anil').hide();
 $('#anil-gif').hide();
 $('#nav-info').hide();
 setInterval(function(){
   $('#logo-anil').addClass('animated rubberBand').show();
 }, 1000 );


    $('.navbar-text').hide();
    $('.tab').hide();
    $('.tab.0').show();

    $('#skill-me').click(function(ev) {
           ev.preventDefault();
           $('.tab.1').show();
           $('.tab.0').hide();
           $('.tab.2').hide();
           $('.tab.3').hide();
           $('.tab.4').hide();
           setInterval(function(){
             $('.learning').addClass('animated zoomIn').show();
           }, 9000 );
           setInterval(function(){
             $('#progress').addClass('animated flip').show();
           }, 8000 );
       });
       $('#email-me').click(function(ev) {
       ev.preventDefault();
       $('.tab.2').show();
       $('.tab.0').hide();
       $('.tab.1').hide();
       $('.tab.3').hide();
       $('.tab.4').hide();
       setInterval(function(){
         $('.float > label').addClass('animated bounceInLeft').show();
       }, 500 );
       setInterval(function(){
         $('.floating > label').addClass('animated bounceInRight').show();
       }, 500 );
       setInterval(function(){
         $('#submit-btn').addClass('animated flip').show();
       }, 800 );
     });
     $('#story-me').click(function(ev) {
     ev.preventDefault();
     $('.tab.4').show();
     $('.tab.0').hide();
     $('.tab.1').hide();
     $('.tab.2').hide();
     $('.tab.3').hide();
   });



    $('#logo-anil ').click(function(){
       $('.tab.0').show();
       $('.tab.1').hide();
       $('.tab.2').hide();
       $('.tab.3').hide();
       $('.tab.4').hide();


    });
    $('#skill,#myskill').on('click',function(){
      $('.tab.1').show();
      $('.tab.0').hide();
      $('.tab.2').hide();
      $('.tab.3').hide();
      $('.tab.4').hide();
      $(this).addClass('target');
      setInterval(function(){
        $('.learning').addClass('animated zoomIn').show();
      }, 9000 );
      setInterval(function(){
        $('#progress').addClass('animated flip').show();
      }, 8000 );
    });
    $('#email,#emailme').on('click',function(){
      $('.tab.2').show();
      $('.tab.0').hide();
      $('.tab.1').hide();
      $('.tab.3').hide();
      $('.tab.4').hide();
      $(this).addClass('target');
      setInterval(function(){
        $('.float > label').addClass('animated bounceInLeft').show();
      }, 500 );
      setInterval(function(){
        $('.floating > label').addClass('animated bounceInRight').show();
      }, 500 );
      setInterval(function(){
        $('#submit-btn').addClass('animated flip').show();
      }, 800 );
    });
    $('#project,#workingproject').on('click',function(){
      $('.tab.3').show();
      $('.tab.0').hide();
      $('.tab.1').hide();
      $('.tab.2').hide();
      $('.tab.4').hide();
      $(this).addClass('target');
    });
    $('#contact,#mystory').on('click',function(){
      $('.tab.4').show();
      $('.tab.0').hide();
      $('.tab.1').hide();
      $('.tab.2').hide();
      $('.tab.3').hide();
      $(this).addClass('target');
    });
// SOCIAL MEDIA POP-UP
        var twitter = $('#outer-pop-up >.pop-up').get(0);
        var github = $('#outer-pop-up >.pop-up').get(1);
        var google = $('#outer-pop-up >.pop-up').get(2);
        var instagram = $('#outer-pop-up >.pop-up').get(3);
        var linkedin = $('#outer-pop-up >.pop-up').get(4);
      $('#twitter').hover(function(){
                $(twitter).show();
                $(twitter).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){

                $(twitter).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });
      $('#github').hover(function(){
                  $(github).show();
                  $(github).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){
                  $(github).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });
      $('#google').hover(function(){
                  $(google).show();
                  $(google).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){
                  $(google).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });
      $('#instagram').hover(function(){
                  $(instagram).show();
                  $(instagram).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){
                  $(instagram).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });
      $('#linkedin').hover(function(){
                  $(linkedin).show();
                  $(linkedin).removeClass("animated bounceOutLeft").addClass("animated bounceInLeft");
      },function(){
                  $(linkedin).removeClass("animated bounceInLeft").addClass("animated bounceOutLeft");

      });




        // MEDIA QUERIES SCRIPT

    if ( $(window).width() <= 1024 ) {

        $(function(){
            $('#navicon').on('click', function(){
                $(this).toggleClass('fa fa-navicon  fa fa-times');

                $('nav').toggleClass('active-nav animated bounceInLeft');
                $('.navbar-text').removeClass('animated bounceInLeft').addClass('animated infinite pulse').show();
           });
        });
        $(function(){
            $('#nav-social-icon').on('click', function(){
                $(this).toggleClass('fa fa-navicon  fa fa-times');
                $('#social').toggleClass('active-social animated bounceInRight');

           });
        });
        $('nav').click(function() {
          $('nav').toggleClass('active-nav animated bounceInLeft');
            $('#navicon').toggleClass('fa fa-navicon  fa fa-times');

        });
        $('#social').click(function() {
          $('#social').toggleClass('active-social animated bounceInLeft');
            $('#nav-social-icon').toggleClass('fa fa-navicon  fa fa-times');

        });


    } else{
      $('nav > span.fa').hover(function(){

          $(this).next().show();

        },function(){
              $(this).next().hide();

      });

    }






    $('nav > span.fa ,#social > a >span.fa').hover(function(){
        $(this).css("color","orange");
      },function(){
        $(this).css("color","white");

    });




// Animation delay
// MY CV POP-UP
setInterval(function(){
  $('#Anil-cv > span').addClass('animated infinite pulse').show();
}, 4000 );


    setInterval(function(){

          $('.headline').toggleClass('animated infinite pulse');
              setTimeout(function(){
                  $('.headline').toggleClass('animated jackInTheBox');
                },2000);
            },2000);


    setInterval(function(){
    	$('#social a > span').addClass('animated rollIn').show();
    }, 4000 );
    setInterval(function(){
    	$('#social > #nav-info').addClass('animated zoomIn').show();
    }, 4800 );
    setInterval(function(){
    	$('nav > span.fa').addClass('animated tada').show();
    }, 500 );
    setInterval(function(){
    	$('#anil-img').addClass('animated zoomIn').show();
    }, 2000 );
    setInterval(function(){
    	$('#anil-gif').addClass('animated zoomIn').show();
    }, 3500 );
    setInterval(function(){
      $('#short-bio').addClass('animated rotateInDownRight').show();
    }, 1000 );


// SLIDER

 var Slider = $('.slider');
 var slides = $('.slides');

 var No_OfSlides = $(slides).length;
var id = $(slides).attr('id');

  $(slides).first().show();

 var anchor = $('.slider-container > a.anchor');

 $(anchor).on('click',function(e){
   e.preventDefault();
   $(slides).hide();
   var href =$(this).attr('href');
   var img =$('.slider > img'+href);

   $(img).show();

 });

// ZOOM HACK Mobile

 $("#user_name ,#_replyto,#user_phone,#text-area").focus(function() {
 var height = $("body").css('height');
 $("body").css('height', height);
   });









});
