
(function ($) { // Begin jQuery
    $(function () { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function () {
            this.nav - list.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery


var button = document.querySelector('.button');
var field = document.querySelector('.field');
var icon = document.querySelector('.header i');
var text = document.querySelector('.header p');

button.addEventListener('click', function () {

    if (field.value === '') {
        field.placeholder = 'You must enter your email';
        // alert('You must enter an email');
    } else {
        icon.classList.toggle('animation');
        text.classList.toggle('show');
    }
});

var btn = $('#scroller-button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


