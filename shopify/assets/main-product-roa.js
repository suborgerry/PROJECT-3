// Init function
const mainFunction = () => {
    const photosList = document.querySelector('.product__media-list');
    photosList && (() => {
        photosList.addEventListener('click', exchangeMainPhoto); 
        checkPhotosCount(photosList);
    })();

    choiseColor();
}

const choiseColor = () => {
    const colorsContainer = document.querySelector('.product-info__colors');
    
    colorsContainer.addEventListener('click', evt => {
        const photosList = document.querySelector('.product__media-list');
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

const exchangePhotos = (photosArray) => {
    const mainPhoto = document.querySelector('.product__media-main').querySelector('img');
    const mainList = document.querySelector('.product__media-list');
    
    mainPhoto.src = photosArray[0].src;
    mainList.innerHTML = "";

    photosArray.forEach((photo, index) => {
        const img = document.createElement('img');

        img.src = photo.src;
        photo.alt && img.setAttribute('alt', photo.alt);
        index == 0 && img.classList.add('active');

        mainList.append(img);
    });
}

const exchangeMainPhoto = evt => {
    const mainPhoto = document.querySelector('.product__media-main').querySelector('img');
    const element = evt.target;

    if(element.matches('img')) {
        element.parentElement.querySelector('.active').classList.remove('active');
        element.classList.add('active');
        mainPhoto.src = element.src;
    }
}

const checkPhotosCount = (photosList) => {
    if(photosList.childElementCount > 3) {
        photosList.classList.add('show-more');
        console.log('More 3!!!');
    } else {
        photosList.classList.remove('show-more');
    }
}

document.addEventListener('DOMContentLoaded', mainFunction);