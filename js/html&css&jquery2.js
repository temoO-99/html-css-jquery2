/* global window , $ */



$(function () {
    
    'use strict';
    //body
    
//    $('body').height($('.footer').offset().top+50);
    
    
    
    $('html ,body').scroll(function () {
        console.log($(this).scrollTop())
    })
    
    //header is important
    $('.header').height($(window).height());
    
    $(window).resize(function () {
        $('.header').height($(window).height());
    });
    
    
    
    //intro
    $('.navbar .intro').css({
        paddingTop: ($(window).height()) / 2 - 30
    });
    
    $('.arrow i').click(function () {
        $('html , body').animate({
            scrollTop: $('.feat').offset().top + 10
        }, 1000);
    });
    
    
    //our
    $('.our .button button').click(function () { 
        $('.our .work .hidde').slideToggle(1000);
//        , function () {
//            $('.our .button .show').fadeToggle();
//            $('.our .button .hidden').fadeToggle()
//        });
    });
    
    
    //slider 
    
    var right = $('.test .fa-angle-right'),
        left = $('.test .fa-angle-left');
    
    function check() {
        if($('.client:first').hasClass('active')) {
            left.fadeOut();
        } else {
            left.fadeIn();
        }  
        
        if($('.client:last').hasClass('active')) {
            right.fadeOut();
        } else {
            right.fadeIn();
        }
    }
    
    check();
    
    
    $('.test i').click(function () {
       
        if($(this).hasClass('fa-angle-right')){
            $('.test .active').fadeOut(100, function () {
               $(this).removeClass('active').next().addClass('active').fadeIn(); 
                check();
            });
        } else {
            $('.test .active').fadeOut(100, function () {
               $(this).removeClass('active').prev().addClass('active').fadeIn(); 
                check();
            });            
        }
        
    });
      
    
    //links
    $('.navbar .menu').click(function () {
        $('.navbar ul').slideToggle(1000);
    });
    
    $('.navbar ul li a').click(function(){
        $('html, body').animate({
          scrollTop : $('#' + $(this).data('value')).offset().top + 40
        },1000)
    })
    
    
    
    //nice scroll
    $("body").niceScroll({
        cursorcolor: 'darkorange',
        cursorwidth: '10px',
        cursorborder: 'none',
        cursoropacitymin: '0.5',
        
    });
    
});



