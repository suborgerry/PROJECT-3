// Dropdown select on product card
const productSelect = document.querySelector('.product__card2-chosen');
productSelect.addEventListener('click', evt => {
    const chosenLabel = productSelect.querySelector('.product__card2-chosen-label');
    const chosenList = productSelect.querySelector('.product__card2-chosen-list');
    const chosenSelect = document.querySelector('.product__card2-select');
    if(chosenList.clientHeight == 10) {
        chosenList.style.height = chosenList.scrollHeight + 'px';
        chosenList.style.opacity = 1
    } else {
        chosenList.style.height = 0 + 'px';
        chosenList.style.opacity = 0
    }
    
    const clickElement = evt.target;
    if(clickElement.matches('li')) {
        chosenLabel.innerHTML = clickElement.innerText;
        const input = clickElement.parentElement.parentElement.parentElement.querySelector('input[name="id"]');
        Array.from(chosenSelect).forEach(element => {
            if(element.dataset.value == clickElement.innerText) {
                element.selected = true;
                input.value = element.value
            }
        })
    }
})