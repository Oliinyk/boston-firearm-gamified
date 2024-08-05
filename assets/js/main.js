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


    // $('.section-weapon .weapon-item').on('click', function() {
    //     $('.section-weapon .weapon-item').removeClass('selected');
    //     $(this).addClass('selected');

    //     if ($(this).hasClass('selected')) {
    //         $('.section-weapon .image-section').removeClass('selected');
    //         $('.section-weapon .image-section').addClass('selected');
    //     }

    // });

    // 5
    $('.weapon-item').click(function() {
        $('.weapon-item').removeClass('selected');
        $('.image-section').removeClass('selected');
        $('.info-section').removeClass('selected');

        $(this).addClass('selected');

        var index = $(this).index();

        $('.image-section').eq(index).addClass('selected');
        $('.info-section').eq(index).addClass('selected');
    });




});

// gsap
