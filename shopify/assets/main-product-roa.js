// Init function

(() => {
    const photosList = document.querySelector('.product__media-list-container');
    const showMoreBtn = document.querySelector('.show-more__btn');

    photosList && (() => {
        photosList.addEventListener('click', exchangeMainPhoto); 
        checkPhotosCount(photosList);
    })();

    showMoreBtn && (() => {
        showMoreBtn.addEventListener('click', showMorePhoto);
    })();

    choiseColor();
})();

function choiseColor() {
    const colorsContainer = document.querySelector('.product-info__colors');
    
    colorsContainer.addEventListener('click', evt => {
        const photosList = document.querySelector('.product__media-list-container');
        const element = evt.target;
        let colorItem; 

        if(element.classList.contains('product-info__colors-container') && !element.classList.contains('active')) {
            colorItem = element
        } else if(element.parentElement.classList.contains('product-info__colors-container') && !element.parentElement.classList.contains('active')) {
            colorItem = element.parentElement;
        }

        colorItem && (() => {
            const photosArray = JSON.parse(colorItem.dataset.photos);

            colorsContainer.querySelector('.active').classList.remove('active');
            colorItem.classList.add('active');

            exchangePhotos(photosArray);
        })();

        photosList && checkPhotosCount(photosList);
    });

};

// Choising variant
function exchangePhotos(photosArray) {
    const mainPhoto = document.querySelector('.product__media-main').querySelector('img');
    const mainList = document.querySelector('.product__media-list-container');
    
    photosArray && (mainPhoto.src = photosArray[0].src);
    mainList.innerHTML = "";

    photosArray && photosArray.forEach((photo, index) => {
        const img = document.createElement('img');

        img.src = photo.src;
        img.classList.add('product__media-img');

        photo.alt && img.setAttribute('alt', photo.alt);
        index == 0 && img.classList.add('active');

        mainList.append(img);
    });
};

function exchangeMainPhoto(evt) {
    const mainPhoto = document.querySelector('.product__media-main').querySelector('img');
    const element = evt.target;

    if(element.matches('img')) {
        element.parentElement.querySelector('.active').classList.remove('active');
        element.classList.add('active');
        mainPhoto.src = element.src;
    }
};

function showMorePhoto(evt) {
    const element = evt.target.closest('.show-more__btn');

    element && (() => {
        const listContainer = element.parentElement;
        
        listContainer.classList.remove('show-more');
    })();
};

function checkPhotosCount(photosList) {
    if(photosList.childElementCount > 4) {
        const countElem = photosList.parentElement.querySelector('.show-more__count');
        photosList.parentElement.classList.add('show-more');
        
        countElem.innerHTML = photosList.childElementCount - 3;
    } else {
        photosList.parentElement.classList.remove('show-more');
    }
}

// document.addEventListener('DOMContentLoaded', mainFunction);