function sortingByDate(className) {
    const sortButtons = document.querySelector('.blog-categories__sort_buttons');
    
    sortButtons && sortButtons.addEventListener('click', evt => {
        const element = evt.target;

        const sliderContainer = document.querySelector(className);
        const slider = sliderContainer.querySelector('.swiper-wrapper');
        if(element.matches('path') || element.matches('button')) {
            let upBtn;
            let downBtn;

            if(element.matches('path')) {
                upBtn = element.parentElement.parentElement.matches('.sort-up');
                downBtn = element.parentElement.parentElement.matches('.sort-down');
            } else if(element.matches('button')) {
                upBtn = element.matches('.sort-up');
                downBtn = element.matches('.sort-down');
            }
            const newSlider = Array.from(document.querySelector('.swiper-wrapper').children).reverse();

            if(upBtn && slider.classList.contains('up')) {
                slider.innerHTML = "";

                sortButtons.classList.remove('up');
                sortButtons.classList.add('down');
                slider.classList.remove('up');
                slider.classList.add('down');

                newSlider.forEach(element => {
                    slider.append(element);
                })
            } else if(downBtn && slider.classList.contains('down')) {
                slider.innerHTML = "";

                sortButtons.classList.add('up');
                sortButtons.classList.remove('down');
                slider.classList.add('up');
                slider.classList.remove('down');
                
                newSlider.forEach(element => {
                    slider.append(element);
                })
            }
        }
    })
};

function getSwiper(id) {
    new Swiper(`.acb-${id}`, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 25,
        speed: 400,
        initialSlide : 1,
        navigation: {
            nextEl: `.next-${id}`,
            prevEl: `.prev-${id}`
        },
        pagination: {
            el: `.swiper-pagination-${id}`,
            clickable: true,
            renderBullet: function (index) {
                return `<span class="swiper-pagination__index swiper-pagination-bullet">${index + 1}</span>`;
            }
        },
        breakpoints: {
            '992': {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            '768': {
                slidesPerView: 2,
                slidesPerGroup: 1,
            }
        }
    });
}

function getPagination(id) {
    console.log(id);
    const paginationContainer = document.querySelector(`.pc-${id}`);

    paginationContainer && paginationContainer.addEventListener('click', evt => {
        let button;

        if(evt.target.matches('button')) {
            button = evt.target;
        } else if(evt.target.parentElement.matches('button')) {
            button = evt.target.parentElement;
        } else if (evt.target.parentElement.parentElement.matches('button')) {
            button = evt.target.parentElement.parentElement;
        }
        
        const className = button?.dataset.class;
        className && document.querySelector(`.${className}`).click();
        
    })
}

function hiddenSlideBtn(className) {
    const hidden = () => document.querySelector(`.sb-${className}`).style.setProperty('display', 'none', 'important');
    const containerCount = document.querySelector(`.acb-${className}`).querySelector('.swiper-wrapper').childElementCount;
    
    if(window.innerWidth >= 992) {
        hidden();
    } else if(window.innerWidth >= 768 && containerCount < 3) {
        hidden();
    } else if(window.innerWidth >= 0 && containerCount < 2) {
        
    }
}

function toggleArticleTabs(id) {
    const tabs = document.querySelector(`.at-${id}`);
    tabs && tabs.addEventListener('click', evt => {
        const element = evt.target.parentElement;
        
        tabs.querySelector('.active').classList.remove('active');
        element.classList.add('active');

        const sliders = document.querySelector(`#shopify-section-${id}`);
        const slider = document.querySelector(`#${element.dataset.id}`);

        console.log(`#${id}`);

        sliders.querySelector('.active.blog-categories').classList.remove('active');
        slider.classList.add('active');
    })
}