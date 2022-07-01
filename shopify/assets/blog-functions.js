function sortingByDate(className) {
    const sortButtons = document.querySelector('.blog-categories__sort_buttons');
    
    sortButtons && sortButtons.addEventListener('click', evt => {
        const element = evt.target;

        const sliderContainer = document.querySelector(className);
        const slider = sliderContainer.querySelector('.swiper-wrapper');
        
        if(element.matches('path')) {
            const upBtn = element.parentElement.parentElement.matches('.sort-up');
            const downBtn = element.parentElement.parentElement.matches('.sort-down');
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
        slidesPerView: 4,
        spaceBetween: 25,
        slidesPerGroup: 4,
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
        }
    });
}

function getPagination(id) {
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
        
        const className = button.dataset.class;
        document.querySelector(`.${className}`).click();
        
    })
}

function hiddenSlideBtn(className) {
    document.querySelector(`.sb-${className}`).style.setProperty('display', 'none', 'important');
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