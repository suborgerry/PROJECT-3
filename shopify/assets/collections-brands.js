
new Swiper('.collections-brands__list', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1440: {
            slidesPerView: 4.5,
        }
    },
    pagination: {
      clickable: true,
      el: '.slider-pagination',
    }
});
new Swiper('.collections-brands__list-mob', {
    slidesPerView: 1,
    spaceBetween: 33,
    loop: true,
    breakpoints: {
        576: {
            spaceBetween: 35,
        }
    },
    pagination: {
      clickable: true,
      el: '.slider-pagination',
    }
});