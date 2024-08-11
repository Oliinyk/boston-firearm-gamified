$(document).ready(function() {
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
    $('.section-experience .sidebar-item').on('click', function() {
        let newSrc = $(this).find('img').attr('src');
        $('.section-experience').css('background-image', 'url('+newSrc+')');
        $('.section-experience .sidebar-item').removeClass('selected');
        $(this).addClass('selected');
    });

    // default background image
    function changeBgImg() {
        $('.section-experience').css('background-image', "url('assets/img/experience-bg.png')");
    }
    changeBgImg();


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

});
