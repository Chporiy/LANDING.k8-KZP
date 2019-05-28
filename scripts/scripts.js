
$(document).ready(function () {
  var isMobile = {
      Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
      BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
      iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
      Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
      any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
  };
  if ( isMobile.any() ) {
    if($(window).width() == '375') {
      $('.overlay').height(function () {
        return $(document).height();
      });
      $('.overlayThanks').height(function () {
        return $(document).height();
      });
    } else {
      $('.overlay').height(function () {
        return $(document).height() + 1;
      });
      $('.overlayThanks').height(function () {
        return $(document).height() + 1;
      });
    }

  var mql = window.matchMedia('max-width: 1200px');
  if (mql.matches) {
      $("meta[name='viewport']").detach();
  } else {
      // нет, размер окна более 479px 
  }
    
    
  }
 //  $(document).on('click', '.popup-content__btn', function () {
 //          var
 //            $this = $(this),
 //            id = $this.data('id'),
 //            condition = $this.closest('.overlay').find('button').toArray().some(function (i) {
 //              return $(i).is(':active');
 //            });
            
 //            $this.closest('.overlay').find('.popup-content__btn[data-id=' + id + ']').toggleClass('active');
            

 //          });
 //  $('#line').hover(function(){
 //    $('.overlay').show();
 //    $('#popup').css("display", 'block');
 //  });

	// $('.main-center__btn').on("click", function(){
	// 	$('.overlay').show();
 //    $('.step1').show();
	// });
 //  $('#Quiz').on("click", function(){
 //    setTimeout(function () {
 //      $('.step1').show();
 //      $('.popup').hide();
 //      $('html, body').animate({scrollTop: 0}, 300);
 //          return false;
 //    }, 600);
 //  });
 //  $('.step1-left__btn').on("click", function(){
 //    setTimeout(function () {
 //      $('.step2').show();
 //      $('.step1').hide();
 //      $('html, body').animate({scrollTop: 0}, 300);
 //          return false;
 //    }, 600);
 //  });
 //  $('.step2-left__btn').on("click", function(){
 //    setTimeout(function () {
 //      $('.step3').show();
 //      $('.step2').hide();
 //      $('html, body').animate({scrollTop: 0}, 300);
 //          return false;
 //    }, 600);
 //  });
 //  $('.step3-left__btn').on("click", function(){
 //    setTimeout(function () {
 //      $('.step4').show();
 //      $('.step3').hide();
 //      $('html, body').animate({scrollTop: 0}, 300);
 //          return false;
 //    }, 600);
 //  });
 //  $('.step4-left__btn').on("click", function(){
 //    setTimeout(function () {
 //      $('.step5').show();
 //      $('.step4').hide();
 //      $('html, body').animate({scrollTop: 0}, 300);
 //          return false;
 //    }, 600);
 //  });
 //  $('.step5-left__btn').on("click", function(){
 //    setTimeout(function () {
 //      $('.step6').show();
 //      $('.step5').hide();
 //      $('html, body').animate({scrollTop: 0}, 300);
 //          return false;
 //    }, 600);
 //  });
 //  $('.step6-left__btn').on("click", function(){
 //     setTimeout(function () {
 //           $('.step6').hide();
 //           $('html, body').animate({scrollTop: 0}, 300);
 //         }, 600);
 //      $('.main').hide();
 //      $('.overlay').animate({opacity: "hide"}, 500);
 //      $('.result').show();
 //  });

 //  $('.popup-content__close').on("click", function () {
 //    $('.overlay').hide();
 //    $('.popup').hide();
 //  })

 //  $('.notwork-right__choose').on("click", function(){
 //      $('.notwork-right__times').css('display', 'flex')
 //    });

 //  $('.result-center__btn').prop('disabled', true);

 //  $(function(){
 //    $("#tel").mask("+7 (999) 999-99-99", {
 //      completed: function(){ 
 //        $('.result-center__btn').prop('disabled', false);
 //           $('.result-center__btn').toggleClass('button-disabled');;
 //      }
 //    });
 //  });

 //  $('.result-center__btn').on("click", function () {
 //    $('.overlayThanks').show();
 //  });

 //  $('.thanks-content__close').on("click", function () {
 //    $('.overlayThanks').animate({opacity: "hide"}, 500);
 //  });
 //  $('.thanks-content__btn').on('click', function() {
 //    $(this).toggleClass('active');    
 //  });



  //Слайдер
  
  $('.essence-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.images-slider').slick({
     dots: false,
     slidesToShow: 1,
     slidesToScroll: 1,
     responsive: [
        {
          breakpoint: 767,
          settings: "unslick"
          
        }
      ]
  });
  
  

   
  //Меню Гамбургер
  $('.main-btn').on('click', function() {
    event.preventDefault();
    $(this).toggleClass('main-btn_active');
    $('.main-nav').toggleClass('main-nav_active');
    if ($('.main-nav').hasClass('main-nav_active')) {
      $('.main-contacts').animate({'margin-top': '50px'}, 500);
    } else {
      $('.main-contacts').animate({'margin-top': '-40px'}, 1000);      
    }
  });


  //Плавная прокрутка до блоков

  $("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({scrollTop: destination}, 1000);
    return false;
  });


  if ( !isMobile.any() ) { //Если просмотр не с телефона

    var i = 1;
    $('.withus').mouseenter(
      function stepProgress () { 
        if(i < 6) {
          $('#l1').animate({width: '90.5%'}, 1000);
          $('.withus-block[data-id=' + i + ']').addClass('active');
          $('.withus-block__line[data-id=' + i + ']').animate({width: '95%'}, 1000);          
          i++;
        }
      setTimeout(stepProgress, 2000);
    });

    var k = 1;
    $('.about').mouseenter(function stepProgress1 () { // Прогресс бар в блоке "О компании"
      if(k < 4) {
        $('.about-block[data-id=' + k + ']').addClass('active');
        $('.about-block__line[data-id=' + k + ']').animate({width: '364px'}, 1000);
        
        k++;
      }
      setTimeout(stepProgress1, 2000);
    });

    // Показ кейсов
    $('.case-btn').on("click", function () {
      $("#cb3").show(700);
    })
  }

  $('.case-btn').on("click", function () {
    $("#cb2").show(700);
    $("#cb3").show(700);
  })


  $('#tea').on('click', function() {
    $('.popup').show();
    
  });

  $('.popup-form__close').on("click", function () {
    $('.popup').hide();
  })
 function setSelectionRange(input, selectionStart, selectionEnd) {
     if (input.setSelectionRange) {
       input.focus();
       input.setSelectionRange(selectionStart, selectionEnd);
     } else if (input.createTextRange) {
       var range = input.createTextRange();
       range.collapse(true);
       range.moveEnd('character', selectionEnd);
       range.moveStart('character', selectionStart);
       range.select();
     }
   }

   function setCaretToPos(input, pos) {
     setSelectionRange(input, pos, pos);
   }

   $("#tel").click(function() {
     setCaretToPos($("#tel")[0], 3);
   });
   
   $(function(){
     $("#tel").mask("8 (999) 999-99-99", {
       placeholder: "8 (XXX) XXX-XX-XX"
     });
   });

});

