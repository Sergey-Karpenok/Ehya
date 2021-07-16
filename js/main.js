$(document).ready(function() {

    $('.menu-button').on('click', function() {
        $('.menu-button__line').toggleClass('menu-button__line--open');
        $('.navbar').toggleClass("navbar--visible");
        $('.header__button').toggleClass("header__button--visible");

    });

});

// Скрываем спойлер