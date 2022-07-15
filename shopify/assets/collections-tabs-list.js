//Desktop tabs
const tabLink = document.querySelectorAll('.collections-tabs-list__tab'),
tabContent = document.querySelectorAll('.collections-tabs-list__tab-content');

for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].addEventListener('click', () => {
        for (let k = 0; k < tabLink.length; k++) {
            if (i != k) {
                tabLink[k].classList.remove('tab-active');
                tabContent[k].classList.remove('tab-content-active');
            }
        }
        tabLink[i].classList.add('tab-active');
        tabContent[i].classList.add('tab-content-active');
    }); 
}

//Mobile tabs
const tabLinkMob = document.querySelectorAll('.collections-tabs-list__tab-mob'),
tabContentMob = document.querySelectorAll('.collections-tabs-list__tab-content-mob');

for (let i = 0; i < tabLinkMob.length; i++) {
    tabLinkMob[i].addEventListener('click', () => {
        for (let k = 0; k < tabLinkMob.length; k++) {
            if (i != k) {
                tabLinkMob[k].classList.add('tab-active');
                tabContentMob[k].classList.add('tab-content-active');
            }
        }
        tabLinkMob[i].classList.remove('tab-active');
        tabContentMob[i].classList.remove('tab-content-active');
    }); 
}

if (document.querySelector('.tab-content-mob-1') != null) {
    new Swiper('.tab-content-mob-1', {
        slidesPerView: 1,
        spaceBetween: 38,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 56,
            }
        },
        pagination: {
          clickable: true,
          el: '.slider-pagination',
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }
    });
}
if (document.querySelector('.tab-content-mob-2') != null) {
    new Swiper('.tab-content-mob-2', {
        slidesPerView: 1,
        spaceBetween: 38,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 56,
            }
        },
        pagination: {
          clickable: true,
          el: '.slider-pagination',
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }
    });
}