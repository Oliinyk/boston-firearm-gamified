$(document).ready(function() {

    // gsap slide animation
    let container;
    let slideAnim;
    // let sizeIt;
    let slides;
    let menuItems;
    let stepItems;
    let offsets = [];
    let iw;
    let currentSlide = 0;

    function initScript() {
        container = document.querySelector(".scroll-container");
        slides = document.querySelectorAll(".section");
        menuItems = document.querySelectorAll('.menu-item');
        stepItems = document.querySelectorAll('.step-item');

        iw = window.innerWidth;

        sizeIt();
        gsap.set(container, { x: offsets[currentSlide] });
        updateActiveMenuItem();

        function slideAnim(e, direction, targetSlide = null) {
            e.preventDefault();
            const oldSlide = currentSlide;

            if (e.type === "click" || e.type === "keydown") {
                if (targetSlide !== null) {
                    currentSlide = targetSlide;
                } else if (direction === "next") {
                    currentSlide += 1;
                } else if (direction === "prev") {
                    currentSlide -= 1;
                }

                currentSlide = Math.max(0, Math.min(currentSlide, slides.length - 1));
            } else {
                if (gsap.isTweening(container)) {
                    return;
                }

                currentSlide = e.deltaY > 0 ? (currentSlide += 1) : (currentSlide -= 1);
                currentSlide = Math.max(0, Math.min(currentSlide, slides.length - 1));
            }

            if (oldSlide === currentSlide) {
                return;
            }

            
            // 1
            gsap.to(container, {
                duration: 1.1,
                ease: "expo.out",
                x: offsets[currentSlide],
                onStart: updateActiveMenuItem,
                function() {
                    if (currentSlide === 0) {
                        // slide 1
                        animateStepItems1();
                    } else if (currentSlide === 1) {
                        // slide 2
                        animateStepItems2();
                    } else if (currentSlide === 3) {
                        // slide 4
                        animateStepItems4();
                    }

                }
            });
        }

        function updateActiveMenuItem() {
            // removing the active class from all menu elements
            menuItems.forEach(item => item.classList.remove('active'));
        
            // The data-slide value can be extracted from the flow section
            const currentSlideData = slides[currentSlide].getAttribute('data-slide');
        
            // Find the menu item where data-target is equal to currentSlideData
            const activeMenuItem = Array.from(menuItems).find(item => item.getAttribute('data-target') === currentSlideData);
        
            // add the active class to the found menu item
            if (activeMenuItem) {
                activeMenuItem.classList.add('active');
            }
        }

        // 1
        function animateStepItems1() {
            gsap.killTweensOf('.title');
            
            gsap.fromTo('.title, .subtitle, .wrap-btn',
                { opacity: 0, y: 500 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    stagger: 0.2, 
                    duration: 1.5, 
                    ease: "power2.out"
                }
            );
        }
        animateStepItems1();

        // 2
        function animateStepItems2() {
            gsap.killTweensOf('.step-item, .scroll-prompt');
            
            gsap.fromTo('.step-item, .scroll-prompt', 
                { opacity: 0, x: 500 }, 
                { 
                    opacity: 1, 
                    x: 0, 
                    stagger: 0.2, 
                    duration: 1.5, 
                    ease: "power2.out"
                }
            );
        }

        // 4
        function animateStepItems4() {
            gsap.killTweensOf('.course-curriculum-nav li, .curriculum-desc');
            
            gsap.fromTo('.course-curriculum-nav li, .curriculum-desc',
                { opacity: 0, y: 500 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    stagger: 0.2, 
                    duration: 1.5, 
                    ease: "power2.out"
                }
            );
        }

        container.addEventListener("wheel", slideAnim);
        window.addEventListener("resize", sizeIt);

        document.querySelector('.prev-item').addEventListener("click", (e) => slideAnim(e, 'prev'));
        document.querySelector('.next-item').addEventListener("click", (e) => slideAnim(e, 'next'));

        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                slideAnim(e, 'prev');
            } else if (e.key === 'ArrowRight') {
                slideAnim(e, 'next');
            }
        });

        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {

                // Remove the 'active' class from all menu items
                document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));

                //Find the parent element and add the class 'active'
                const menuItemInner = e.currentTarget.closest('.menu-item');
                menuItemInner.classList.add('active');

                const target = parseInt(item.getAttribute('data-target'));
                slideAnim(e, null, target);

            });
        });
    }

    function sizeIt() {
        offsets = [];
        iw = window.innerWidth;
        if (container && slides.length) {
            gsap.set(container, { width: slides.length * iw });
            gsap.set(slides, { width: iw });
            for (let i = 0; i < slides.length; i++) {
                offsets.push(-slides[i].offsetLeft);
            }
            gsap.set(container, { x: offsets[currentSlide] });
        }
    }

    function clearInlineStyles() {
        if (container) {
            container.removeAttribute('style');
            slides.forEach(slide => slide.removeAttribute('style'));
        }
    }

    if (window.innerWidth >= 992) {
        initScript();
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 992) {
            if (!container) {
                initScript();
            } else {
                sizeIt();
            }
        } else {
            if (container) {
                container.removeEventListener("wheel", slideAnim);
                window.removeEventListener("resize", sizeIt);
                clearInlineStyles();
                container = null;
                slides = null;
                menuItems = null;
                stepItems = null;
                offsets = [];
            }
        }
    });
   


    //
    // const lockBar = document.querySelector('.lock-bar');

    // document.querySelector('.lock-svg').addEventListener('mouseenter', () => {
    //   gsap.to(lockBar, {
    //     y: -20,
    //     duration: 0.5,
    //     ease: "power2.out"
    //   });
    // });
  
    // document.querySelector('.lock-svg').addEventListener('mouseleave', () => {
    //   gsap.to(lockBar, {
    //     y: 0,
    //     duration: 0.5,
    //     ease: "power2.out"
    //   });
    // });



    

    // Tab
    $('.nav-tabs .nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        if ($(this).hasClass('nav-full-armory')) {
            $('.section-compare-packages').addClass('full-armory-active');
            $('.weapon-item + .weapon-item').removeClass('closed');
        } else {
            $('.section-compare-packages').removeClass('full-armory-active');
            $('.weapon-item + .weapon-item').addClass('closed');
        }
    });

    (function($) {
        $(function() {
          $('.course-curriculum-nav').on('click', 'li:not(.active)', function() {
            $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('.course-curriculum-wrap').find('div.curriculum-desc').removeClass('active').eq($(this).index()).addClass('active');
          });
          
        });
    })(jQuery);

    // 5
    $('.weapon-item').click(function() {
        $('.weapon-item').removeClass('selected');
        $('.image-section').removeClass('selected');
        $('.info-section').removeClass('selected');
        $(this).addClass('selected');
        let index = $(this).index();
        $('.image-section').eq(index).addClass('selected');
        $('.info-section').eq(index).addClass('selected');
    });

    // 6
    // default background image
    // function changeBgImg() {
    //     $('.section-experience').css('background-image', "url('assets/img/experience-bg.png')");
    // }
    // changeBgImg();

    // $('.section-experience .sidebar-item').on('click', function() {
    //     let newSrc = $(this).find('img').attr('src');
    //     $('.section-experience').css('background-image', 'url('+newSrc+')');
    //     $('.section-experience .sidebar-item').removeClass('selected');
    //     $(this).addClass('selected');
    // });

    // 
    function changeBgImg() {
        if ($(window).width() >= 992) {
            $('.section-experience').css('background-image', "url('assets/img/experience-bg.png')");
        }
    }
    changeBgImg();
    
    $('.section-experience .sidebar-item').on('click', function() {
        if ($(window).width() >= 992) {
            let newSrc = $(this).find('img').attr('src');
            $('.section-experience').css('background-image', 'url(' + newSrc + ')');
            $('.section-experience .sidebar-item').removeClass('selected');
            $(this).addClass('selected');
        }
    });



    // slider
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumbnail-slider'
    });
    $('.thumbnail-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        dots: false,
        arrows: false,
        // centerMode: true,
        focusOnSelect: true
    });
    

    // faq
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove("open");
                    q.nextElementSibling.style.maxHeight = "0";
                }
            });
            this.classList.toggle("open");
            const answer = this.nextElementSibling;
            if (this.classList.contains("open")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0";
            }
        });
    });


    $(window).on('resize', function() {
        changeBgImg();
    });
});
