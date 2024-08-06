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

    // faq
 

    // document.addEventListener("DOMContentLoaded", function() {
        const faqQuestions = document.querySelectorAll(".faq-question");
    
        faqQuestions.forEach(question => {
            question.addEventListener("click", function() {
                // Закрити всі відкриті блоки перед відкриттям нового
                faqQuestions.forEach(q => {
                    if (q !== question) {
                        q.classList.remove("open");
                        q.nextElementSibling.style.maxHeight = "0";
                    }
                });
    
                // Toggle the 'open' class on the clicked question
                this.classList.toggle("open");
    
                // Get the answer element next to the clicked question
                const answer = this.nextElementSibling;
    
                if (this.classList.contains("open")) {
                    // Set max-height to the answer's scrollHeight to make it visible
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    // Set max-height to 0 to hide the answer
                    answer.style.maxHeight = "0";
                }
            });
        });
    // });


});

// gsap
