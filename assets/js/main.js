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


    $('.section-weapon .weapon-item').on('click', function() {
        $('.section-weapon .weapon-item').removeClass('selected');
        $(this).addClass('selected');

        // Add your logic here to update the content based on the selected item
        // $('.section-weapon .image-section').removeClass('selected');
        // $(this).addClass('selected');

    });

});

// gsap
