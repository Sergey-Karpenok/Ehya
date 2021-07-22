$(document).ready(function() {

    $('.menu-button').on('click', function() {
        $('.menu-button__line').toggleClass('menu-button__line--open');
        $('.navbar').toggleClass("navbar--visible");
        $('.header__button').toggleClass("header__button--visible");

    });

});

// Скрываем спойлер

const footerTitle = document.querySelectorAll('.footer__title');
footerTitle.forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('footer__title--active');
        item.nextElementSibling.classList.toggle('footer__ul--active');
    })
})

// Плавная прокрутка ссылок

const smoothScroll = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockId = anchor.getAttribute('href').substring(1);
            document.getElementById(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}
smoothScroll();

// Карусель с отзывами

const carousell = () => {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-carousell__dot');

    let currenSlide = 0,
        interval;

    const prevSlide = (item, index, strClass) => {
        item[index].classList.remove(strClass);
    }

    const nextSlide = (item, index, strClass) => {
        item[index].classList.add(strClass);
    }

    const autoPlaySlide = () => {
        prevSlide(slides, currenSlide, 'testimonial-slide--active');
        prevSlide(dots, currenSlide, 'testimonial-carousell__dot--active');
        currenSlide++;
        if (currenSlide >= slides.length) {
            currenSlide = 0;
        }
        nextSlide(slides, currenSlide, 'testimonial-slide--active');
        nextSlide(dots, currenSlide, 'testimonial-carousell__dot--active');
    }

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    startSlide();
}

carousell();


// Слайдер История

const slider = () => {
    const historySlide = document.querySelector('.history-slide__wrapper'),
        buttonLeft = document.querySelector('.button-left'),
        buttonRight = document.querySelector('.button-right');

    let position = 0;

    const prevSlide = () => {
        console.log(position);
        --position;
        if ((position >= 0) & (window.screen.width > 480)) {
            historySlide.style.transform = `translateX(-${position * 50}%)`
        } else if ((position >= 0) & (window.screen.width <= 480)) {
            historySlide.style.transform = `translateY(-${position * 50}%)`
        } else position = 0;
    };

    const nextSlide = () => {
        console.log(position);
        ++position;
        console.log(position)
        if ((position <= 1) & (window.screen.width > 480)) {
            historySlide.style.transform = `translateX(-${position * 50}%)`
        } else if ((position <= 1) & (window.screen.width <= 480)) {
            historySlide.style.transform = `translateY(-${position * 50}%)`
        } else position = 1;
    };

    const controlSlider = () => {
        buttonLeft.addEventListener('click', prevSlide)
        buttonRight.addEventListener('click', nextSlide)
    };
    controlSlider();
}
slider();