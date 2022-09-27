$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.main-nav-container').toggleClass('open');
        $('.nav p').toggleClass('open');
        $('.nav:first-child h2').toggleClass('open');
        $('.nav:nth-child(2) h2').toggleClass('open');
        $('.nav:nth-child(3) h2').toggleClass('open');
       

    });
    $('.nav-wrapper .nav').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.main-nav-container').removeClass('open');
    });

    $('.ac-button').on('click', function() {
        $(this).toggleClass('open');
        $('.accordian-box').toggleClass('open');
        $('#c-arrow').toggleClass('open');
        $('#adb').toggleClass('open');


    });
});