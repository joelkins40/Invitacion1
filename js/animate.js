function detectarScroll(id,efecto){
    $(window).scroll(function() {
        $('.'+id).each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).css('visibility', 'visible').addClass(efecto);
            }
        });
    });
}


/*Attention seekers*/
detectarScroll('_animate__bounce_r','animate__animated animate__bounce animate__infinite');
detectarScroll('_animate__flash_r','animate__animated animate__flash animate__infinite');
detectarScroll('_animate__pulse_r','animate__animated animate__pulse animate__infinite');
detectarScroll('_animate__rubberBand_r','animate__animated animate__rubberBand animate__infinite');
detectarScroll('_animate__shakeX_r','animate__animated animate__shakeX animate__infinite');
detectarScroll('_animate__shakeY_r','animate__animated animate__shakeY animate__infinite');
detectarScroll('_animate__headShake_r','animate__animated animate__headShake animate__infinite');
detectarScroll('_animate__swing_r','animate__animated animate__swing animate__infinite');
detectarScroll('_animate__tada_r','animate__animated animate__tada animate__infinite');
detectarScroll('_animate__wobble_r','animate__animated animate__wobble animate__infinite');
detectarScroll('_animate__jello_r','animate__animated animate__jello animate__infinite');
detectarScroll('_animate__heartBeat_r','animate__animated animate__heartBeat animate__infinite');

/*Attention seekers*/
detectarScroll('_animate__bounce','animate__animated animate__bounce');
detectarScroll('_animate__flash','animate__animated animate__flash');
detectarScroll('_animate__pulse','animate__animated animate__pulse');
detectarScroll('_animate__rubberBand','animate__animated animate__rubberBand');
detectarScroll('_animate__shakeX','animate__animated animate__shakeX');
detectarScroll('_animate__shakeY','animate__animated animate__shakeY');
detectarScroll('_animate__headShake','animate__animated animate__headShake');
detectarScroll('_animate__swing','animate__animated animate__swing');
detectarScroll('_animate__tada','animate__animated animate__tada');
detectarScroll('_animate__wobble','animate__animated animate__wobble');
detectarScroll('_animate__jello','animate__animated animate__jello');
detectarScroll('_animate__heartBeat','animate__animated animate__heartBeat');

/*Back entrances*/
detectarScroll('_animate__backInDown','animate__animated animate__backInDown');
detectarScroll('_animate__backInLeft','animate__animated animate__backInLeft');
detectarScroll('_animate__backInRight','animate__animated animate__backInRight');
detectarScroll('_animate__backInUp','animate__animated animate__backInUp');

/*Back exits*/
detectarScroll('_animate__backInLeft','animate__animated animate__backInLeft');
detectarScroll('_animate__backInRight','animate__animated animate__backInRight');
detectarScroll('_animate__backInUp','animate__animated animate__backInUp');
detectarScroll('_animate__bounceIn','animate__animated animate__bounceIn');

/*Bouncing entrances*/
detectarScroll('_animate__backOutDown','animate__animated animate__backOutDown');
detectarScroll('_animate__backOutLeft','animate__animated animate__backOutLeft');
detectarScroll('_animate__bounceInRight','animate__animated animate__bounceInRight');
detectarScroll('_animate__bounceInUp','animate__animated animate__bounceInUp');
detectarScroll('_animate__bounceOut','animate__animated animate__bounceOut');

/*Bouncing exits*/
detectarScroll('_animate__bounceOutDown','animate__animated animate__bounceOutDown');
detectarScroll('_animate__bounceOutLeft','animate__animated animate__bounceOutLeft');
detectarScroll('_animate__bounceOutRight','animate__animated animate__bounceOutRight');
detectarScroll('_animate__bounceOutUp','animate__animated animate__bounceOutUp');
detectarScroll('_animate__fadeIn','animate__animated animate__fadeIn');

/*Fading entrances*/
detectarScroll('_animate__fadeInDown','animate__animated animate__fadeInDown');
detectarScroll('_animate__fadeInDownBig','animate__animated animate__fadeInDownBig');
detectarScroll('_animate__fadeInLeft','animate__animated animate__fadeInLeft');
detectarScroll('_animate__fadeInLeftBig','animate__animated animate__fadeInLeftBig');
detectarScroll('_animate__fadeInRight','animate__animated animate__fadeInRight');
detectarScroll('_animate__fadeInRightBig','animate__animated animate__fadeInRightBig');
detectarScroll('_animate__fadeInUp','animate__animated animate__fadeInUp');
detectarScroll('_animate__fadeInTopLeft','animate__animated animate__fadeInTopLeft');
detectarScroll('_animate__fadeInTopRight','animate__animated animate__fadeInTopRight');
detectarScroll('_animate__fadeInBottomRight','animate__animated animate__fadeInBottomRight');
detectarScroll('_animate__fadeOut','animate__animated animate__fadeOut');

/*Fading exits*/
detectarScroll('_animate__fadeOutDown','animate__animated animate__fadeOutDown');
detectarScroll('_animate__fadeOutDownBig','animate__animated animate__fadeOutDownBig');
detectarScroll('_animate__fadeOutLeft','animate__animated animate__fadeOutLeft');
detectarScroll('_animate__fadeOutLeftBig','animate__animated animate__fadeOutLeftBig');
detectarScroll('_animate__fadeOutRight','animate__animated animate__fadeOutRight');
detectarScroll('_animate__fadeOutRightBig','animate__animated animate__fadeOutRightBig');
detectarScroll('_animate__fadeOutUp','animate__animated animate__fadeOutUp');
detectarScroll('_animate__fadeOutUpBig','animate__animated animate__fadeOutUpBig');
detectarScroll('_animate__fadeOutTopLeft','animate__animated animate__fadeOutTopLeft');
detectarScroll('_animate__fadeOutBottomRight','animate__animated animate__fadeOutBottomRight');
detectarScroll('_animate__fadeOutBottomLeft','animate__animated animate__fadeOutBottomLeft');
detectarScroll('_animate__flip','animate__animated animate__flip');
detectarScroll('_animate__flipInX','animate__animated animate__flipInX');

/*Flippers*/
detectarScroll('_animate__flipInY','animate__animated animate__flipInY');
detectarScroll('_animate__flipOutX','animate__animated animate__flipOutX');
detectarScroll('_animate__flipOutY','animate__animated animate__flipOutY');
detectarScroll('_animate__lightSpeedInRight','animate__animated animate__lightSpeedInRight');
detectarScroll('_animate__lightSpeedInLeft','animate__animated animate__lightSpeedInLeft');

/*Lightspeed*/
detectarScroll('_animate__lightSpeedOutRight','animate__animated animate__lightSpeedOutRight');
detectarScroll('_animate__lightSpeedOutLeft','animate__animated animate__lightSpeedOutLeft');
detectarScroll('_animate__rotateIn','animate__animated animate__rotateIn');
detectarScroll('_animate__rotateInDownLeft','animate__animated animate__rotateInDownLeft');

/*Rotating entrances*/
detectarScroll('_animate__rotateInDownRight','animate__animated animate__rotateInDownRight');
detectarScroll('_animate__rotateInUpLeft','animate__animated animate__rotateInUpLeft');
detectarScroll('_animate__rotateInUpLeft','animate__animated animate__rotateInUpLeft');
detectarScroll('_animate__rotateInUpRight','animate__animated animate__rotateInUpRight');
detectarScroll('_animate__rotateOut','animate__animated animate__rotateOut');

/*Rotating exits*/
detectarScroll('_animate__rotateOutDownLeft','animate__animated animate__rotateOutDownLeft');
detectarScroll('_animate__rotateOutDownRight','animate__animated animate__rotateOutDownRight');
detectarScroll('_animate__rotateOutUpLeft','animate__animated animate__rotateOutUpLeft');
detectarScroll('_animate__rotateOutUpLeft','animate__animated animate__rotateOutUpLeft');
detectarScroll('_animate__rotateOutUpRight','animate__animated animate__rotateOutUpRight');

/*Specials*/
detectarScroll('_animate__hinge','animate__animated animate__hinge');
detectarScroll('_animate__jackInTheBox','animate__animated animate__jackInTheBox');
detectarScroll('_animate__rollIn','animate__animated animate__rollIn');
detectarScroll('_animate__rollOut','animate__animated animate__rollOut');

/*Zooming entrances*/
detectarScroll('_animate__zoomIn','animate__animated animate__zoomIn');
detectarScroll('_animate__zoomInDown','animate__animated animate__zoomInDown');
detectarScroll('_animate__zoomInLeft','animate__animated animate__zoomInLeft');
detectarScroll('_animate__zoomInRight','animate__animated animate__zoomInRight');
detectarScroll('_animate__zoomInUp','animate__animated animate__zoomInUp');

/*Zooming exits*/
detectarScroll('_animate__zoomOut','animate__animated animate__zoomOut');
detectarScroll('_animate__zoomOutDown','animate__animated animate__zoomOutDown');
detectarScroll('_animate__zoomOutLeft','animate__animated animate__zoomOutLeft');
detectarScroll('_animate__zoomOutRight','animate__animated animate__zoomOutRight');
detectarScroll('_animate__zoomOutUp','animate__animated animate__zoomOutUp');

/*Sliding entrances*/
detectarScroll('_animate__slideInDown','animate__animated animate__slideInDown');
detectarScroll('_animate__slideInLeft','animate__animated animate__slideInLeft');
detectarScroll('_animate__slideInRight','animate__animated animate__slideInRight');
detectarScroll('_animate__slideInUp','animate__animated animate__slideInUp');

/*Sliding exits*/
detectarScroll('_animate__slideOutDown','animate__animated animate__slideOutDown');
detectarScroll('_animate__slideOutLeft','animate__animated animate__slideOutLeft');
detectarScroll('_animate__slideOutRight','animate__animated animate__slideOutRight');
detectarScroll('_animate__slideOutUp','animate__animated animate__slideOutUp');
