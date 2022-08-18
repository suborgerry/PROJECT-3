
new Swiper('.products-slider__list', {
    slidesPerView: 1,
    spaceBetween: 42,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    }
});