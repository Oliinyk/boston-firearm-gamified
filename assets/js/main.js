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

});

// gsap
