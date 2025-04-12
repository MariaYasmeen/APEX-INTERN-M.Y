/*===================================================
    Template Scripts
====================================================*/
(function($){ "use strict";

    // Preloader     
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

    $(document).ready(function() {
        
        // Main Header
        var primaryHeader = $('.primary-header'),
            headerClone = primaryHeader.clone();
        $('.header').after('<div class="sticky-header"></div>');
        $('.sticky-header').html(headerClone);
        var headerSelector = document.querySelector(".sticky-header");
        var triggerPoint = $('.header').height();
        var yOffset = 0;

        $(window).on('scroll', function () {
            yOffset = $(window).scrollTop();
            if (yOffset >= triggerPoint) {
                $('.sticky-header').addClass('sticky-fixed-top');
            } else {
                $('.sticky-header').removeClass('sticky-fixed-top');
            }
        });

        if ($('.primary-header').length) {
            $('.header .primary-header .burger-menu').on("click", function () {
                $(this).toggleClass('menu-open');
                $('.header .header-menu-wrap').slideToggle(300);
            });

            $('.sticky-header .primary-header .burger-menu').on("click", function () {
                $(this).toggleClass('menu-open');
                $('.sticky-header .header-menu-wrap').slideToggle(300);
            });
        }

        $('.header-menu-wrap ul li:has(ul)').each(function () {
            $(this).append('<span class="dropdown-plus"></span>');
            $(this).addClass('dropdown_menu');
        });

        $('.header-menu-wrap .dropdown-plus').on("click", function () {
            $(this).prev('ul').slideToggle(300);
            $(this,).toggleClass('dropdown-open');
            $('.header-menu-wrap ul li:has(ul)').toggleClass('dropdown-open');
        });

        $('.header-menu-wrap .dropdown_menu a').append('<span></span>');

        // Responsive Classes
        function responsiveClasses() {
            var body = $('body');
            if ($(window).width() < 992) {
                body.removeClass('viewport-lg');
                body.addClass('viewport-sm');
            } else {
                body.removeClass('viewport-sm');
                body.addClass('viewport-lg');
            }
        }

        // ResponsiveClasses();
        $(window).on("resize", function () {
            responsiveClasses();
        }).resize();

        // Popup Search Box
        $(function () {
            $('#popup-search-box').removeClass('toggled');

            $('.dl-search-icon').on('click', function (e) {
                e.stopPropagation();
                $('#popup-search-box').toggleClass('toggled');
                $("#popup-search").focus();
            });

            $('#popup-search-box input').on('click', function (e) {
                e.stopPropagation();
            });

            $('#popup-search-box, body').on('click', function () {
                $('#popup-search-box').removeClass('toggled');
            });
        });
        
        $('.side-menu-icon').on("click", function () {
                $('.side-menu-wrapper, .side-menu-overlay').toggleClass('is-open');
            });
        
        $('.side-menu-close, .side-menu-overlay').on('click', function () {
                $('.side-menu-wrapper, .side-menu-overlay').removeClass('is-open');
            });
        
        // Header BTN Effect
        $('.header-btn, .default-btn').on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        }).on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        });
        
        //Range Slider
        if( $('body').hasClass('shop') ){
            var slider = document.getElementById("price-range");
            var output = document.getElementById("price-output");
            output.innerHTML = "$" + slider.value;
            slider.oninput = function() {
              output.innerHTML =  "$"+this.value;
            }
        }
        
        // Venobox Video
        new VenoBox({
            selector: '.video-popup, .img-popup',
            bgcolor: 'transparent',
            numeration: true,
            infinigall: true,
            spinner: 'plane',
        });
       
        //Swiper Slider For Shop
            var swiper = new Swiper(".product-gallary-thumb", {
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });
            var swiper2 = new Swiper(".product-gallary", {
                spaceBetween: 10,
                loop: true,
                navigation: {
                nextEl: ".swiper-nav-next",
                prevEl: ".swiper-nav-prev",
            },
            thumbs: {
            swiper: swiper,
            },
            });
        
        /* ======= Odometer ======= */
            $('.odometer').waypoint(
            function() {
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            },
            {
                offset: "80%",
                triggerOnce: true
            }
        );
        
        //Service Carousel
        var swiperService = new Swiper(".service-carousel", {
            slidesPerView: "4",
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 700,
            center: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 1024px
                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 1
                }
            }
        });
        
        //Project Carousel
        var swiperProject = new Swiper(".project-carousel", {
            slidesPerView: "1",
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 700,
            center: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 1024px
                992: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            }
        });
        
        //Project Carousel 2
        var swiperProject = new Swiper(".project-carousel-2", {
            slidesPerView: "1",
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 700,
            center: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 1024px
                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 2
                }
            }
        });
        
        //Sponsor Carousel
        var swiperSponsor = new Swiper(".sponsor-carousel", {
            slidesPerView: "4",
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            speed: 700,
            center: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 1024px
                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 1
                }
            }
        });
        
        //Blog Carousel
        var swiperBlog = new Swiper(".blog-carousel", {
            slidesPerView: "2",
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 700,
            center: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 1024px
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 1
                }
            }
        });
        
        //Testimonial Carousel
        var swiperTestimonial = new Swiper(".testimonial-carousel-2", {
            slidesPerView: "2",
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 700,
            center: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 767px
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10
                },
                // when window width is >= 1024px
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 1
                }
            }
        });
        
        
        // Select Box
        $(function () {
          $(".ddl-select").each(function () {
            $(this).hide();
            var $select = $(this);
            var _id = $(this).attr("id");
            var wrapper = document.createElement("div");
            wrapper.setAttribute("class", "ddl ddl_" + _id);

            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("class", "ddl-input");
            input.setAttribute("id", "ddl_" + _id);
            input.setAttribute("readonly", "readonly");
            input.setAttribute(
              "placeholder",
              $(this)[0].options[$(this)[0].selectedIndex].innerText
            );
              input.setAttribute("value", $(this)[0].options[$(this)[0].selectedIndex].innerText);

            $(this).before(wrapper);
            var $ddl = $(".ddl_" + _id);
            $ddl.append(input);
            $ddl.append("<div class='ddl-options ddl-options-" + _id + "'></div>");
            var $ddl_input = $("#ddl_" + _id);
            var $ops_list = $(".ddl-options-" + _id);
            var $ops = $(this)[0].options;
            for (var i = 0; i < $ops.length; i++) {
              $ops_list.append(
                "<div data-value='" +
                  $ops[i].value +
                  "'>" +
                  $ops[i].innerText +
                  "</div>"
              );
            }

            $ddl_input.click(function () {
              $ddl.toggleClass("active");
            });
            $ddl_input.blur(function () {
              $ddl.removeClass("active");
            });
            $ops_list.find("div").click(function () {
              $select.val($(this).data("value")).trigger("change");
              $ddl_input.val($(this).text());
              $ddl.removeClass("active");
            });
          });
        });
        
        /* ======= ISOTOP Active ======= */
        $('.blog-items').imagesLoaded( function() {

             // Add isotope click function
            $('.blog-filter li').on( 'click', function(){
                $(".blog-filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr('data-filter');
                $(".blog-items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });

            $(".blog-items").isotope({
                itemSelector: '.single-item',
                layoutMode: 'masonry',
            });
        });
        
        $('.project-wrapper').imagesLoaded( function() {
            $('.project-wrapper').masonry({
                
              itemSelector: '.single-project',
              percentPosition: true
                
            });
        });
        
        // Wow JS Active
        new WOW().init();
        
        // Scrool To Top
        var scrollTop = $("#scroll-top");
        $(window).on('scroll', function() {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
                $('#scrollup').removeClass('hide');
                $('#scrollup').addClass('show');

            } else {
                $('#scrollup').removeClass('show');
                $('#scrollup').addClass('hide');
            }
        });

        $(scrollTop).on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
     });

})(jQuery);