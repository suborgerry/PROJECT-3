'use strict';

// Dropdown select on product card
var productSelect = document.querySelector('.product__card2-chosen');
productSelect.addEventListener('click', function (evt) {
    var chosenLabel = productSelect.querySelector('.product__card2-chosen-label');
    var chosenList = productSelect.querySelector('.product__card2-chosen-list');
    var chosenSelect = document.querySelector('.product__card2-select');
    if (chosenList.clientHeight == 10) {
        chosenList.style.height = chosenList.scrollHeight + 'px';
        chosenList.style.opacity = 1;
    } else {
        chosenList.style.height = 0 + 'px';
        chosenList.style.opacity = 0;
    }

    var clickElement = evt.target;
    if (clickElement.matches('li')) {
        chosenLabel.innerHTML = clickElement.innerText;
        var input = clickElement.parentElement.parentElement.parentElement.querySelector('input[name="id"]');
        Array.from(chosenSelect).forEach(function (element) {
            if (element.dataset.value == clickElement.innerText) {
                element.selected = true;
                input.value = element.value;
            }
        });
    }
});