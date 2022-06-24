const gridPhoto = document.querySelector('.product__media-list');
const mainPhoto = document.querySelector('#main-photo');
const gridItem = document.querySelectorAll('.product__media-item');

window.onload = () => {
    document.querySelector('shopify-payment-terms').shadowRoot.children[1].children[1].style.display = 'none';
}

if(window.outerWidth >= 768) {
    gridPhoto.style.height = ((gridItem[0].clientHeight + 5) * 7) + 'px';
};

gridPhoto.addEventListener('click', evt => {
    mainPhoto.src = evt.target.src
})

// Dropdown select on product card
const productSelectMain = document.querySelector('.product__form-chosen');
productSelectMain && productSelectMain.addEventListener('click', evt => {
    const chosenLabel = productSelectMain.querySelector('.product__form-chosen-label');
    const chosenList = productSelectMain.querySelector('.product__form-chosen-list');
    const chosenItem = chosenList.querySelectorAll('li');
    const chosenSelect = document.querySelector('.product__form-select');
    if(chosenList.clientHeight == 0) {
        chosenList.style.height = (chosenItem[0].scrollHeight * chosenItem.length) + 'px';
        chosenList.style.opacity = 1;
        chosenLabel.classList.add("open");
    } else {
        chosenList.style.height = 0 + 'px';
        chosenList.style.opacity = 0;
        chosenLabel.classList.remove("open");
    }
    
    const clickElement = evt.target;
    if(clickElement.matches('li')) {
        chosenLabel.innerHTML = clickElement.innerText;
        const input = document.querySelector('.buy__section').querySelector('input[name="id"]')
        Array.from(chosenSelect).forEach(element => {
            if(element.dataset.value == clickElement.innerText) {
                element.selected = true;
                input.value = element.value
            }
        })
    }
});