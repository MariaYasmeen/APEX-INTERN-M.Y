(function($){ "use strict";
    $(document).ready(function() {
        
        function sliderAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationDuration = $this.data('duration');
                var $animationType = 'wostix-animation ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay,
                    'animation-duration': $animationDuration
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        
        var sliderOptions = {
            speed: 1000,
            autoplay: false,/*{
                delay: 5000,
                disableOnInteraction: false
            },*/
            initialSlide: 0,
            parallax: false,
            mousewheel: false,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: '.wostix-slider-button-next',
                prevEl: '.wostix-slider-button-prev'
            },
            pagination: {
                el: ".wostix-swiper-pagination",
                clickable: true,
            },
        };
        
        const swiperSlides = document.querySelectorAll(".wostix-slider .swiper-slide, .content-slider .swiper-slider");
        const slideCount = swiperSlides.length;
        $(".wostix-slider .wostix-fraction .total-count, .content-slider .wostix-fraction .total-count").text(slideCount);
        $(".wostix-slider .wostix-fraction .current-count, .content-slider .wostix-fraction .current-count").text(1);
        
        sliderOptions.on = {
            init: function () {
                var swiper = this;
                if (sliderOptions.parallax === true) {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        $(swiper.slides[i]).find('.slide-img-wrap').attr({ 'data-swiper-parallax': 0.75 * swiper.width });
                    }
                }
            },
            slideChangeTransitionStart: function () {
                var swiper = this;
                var animatingElements = $(swiper.slides[swiper.activeIndex]).find('[data-animation]');
                sliderAnimations(animatingElements);
                $(".wostix-slider .wostix-fraction .total-count, .content-slider .wostix-fraction .total-count").text(slideCount);
                $(".wostix-slider .wostix-fraction .current-count, .content-slider .wostix-fraction .current-count").text(swiper.realIndex + 1);
            },
            progress: function(swiper, progress) {
                if( 0.25 == progress ) {
                    var progressVal = 100 / 3;
                }else if( 0.5 == progress ) {
                    var progressVal = (100 / 3) * 2;
                }else if( 0.75 == progress ){
                    var progressVal = 100;
                }else{
                    var progressVal = 100 / 3;
                }
                $('.wostix-slider .swiper-slider-progress, .content-slider .swiper-slider-progress').css({'width': progressVal + '%'});
            },
            
            resize: function () {
                this.update();
            }
        };
 
        var swiper = new Swiper(".wostix-slider, .content-slider", sliderOptions);
        
        const swiperSlidesTwo = document.querySelectorAll(".wostix-slider-2 .swiper-slide");
        const slideCountTwo = swiperSlidesTwo.length;
        $(".wostix-slider-2 .wostix-fraction .total-count").text(slideCountTwo);
        $(".wostix-slider-2 .wostix-fraction .current-count").text(1);
        
        var sliderOptionsTwo = {
            speed: 1000,
            autoplay: false,/*{
                delay: 5000,
                disableOnInteraction: false
            },*/
            initialSlide: 0,
            parallax: false,
            mousewheel: false,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: '.wostix-slider-2 .swiper-next',
                prevEl: '.wostix-slider-2 .swiper-prev'
            },
            pagination: false,
            
        };
        
        sliderOptionsTwo.on = {
            init: function () {
                var swiper = this;
                if (sliderOptionsTwo.parallax === true) {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        $(swiper.slides[i]).find('.slide-img-wrap').attr({ 'data-swiper-parallax': 0.75 * swiper.width });
                    }
                }
            },
            slideChangeTransitionStart: function () {
                var swiper = this;
                var animatingElements = $(swiper.slides[swiper.activeIndex]).find('[data-animation]');
                sliderAnimations(animatingElements);
                $(".wostix-slider-2 .wostix-fraction .total-count").text(slideCountTwo);
                $(".wostix-slider-2 .wostix-fraction .current-count").text(swiper.realIndex + 1);
            },
            progress: function(swiper, progress) {
                if( 0.25 == progress ) {
                    var progressVal = 100 / 3;
                }else if( 0.5 == progress ) {
                    var progressVal = (100 / 3) * 2;
                }else if( 0.75 == progress ){
                    var progressVal = 100;
                }else{
                    var progressVal = 100 / 3;
                }
                $('.wostix-slider-2 .swiper-slider-progress').css({'width': progressVal + '%'});
            },
            
            resize: function () {
                this.update();
            }
        };
        
        var swiperTwo = new Swiper(".wostix-slider-2", sliderOptionsTwo);
        
    });
})(jQuery);