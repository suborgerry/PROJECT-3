const cartInfoCol = document.querySelectorAll('.accordion-btn');
cartInfoCol && cartInfoCol.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('opened');
    });
});

lineItem = document.querySelectorAll('.quantity-line-item');
lineItem.forEach(elem => {
    let updateLink = elem.parentElement.nextElementSibling;
    let attrLink = updateLink.getAttribute('href');

    elem.addEventListener('change', ()=> {
      elem.setAttribute('value', elem.value);
      attrLink += elem.value;
      updateLink.setAttribute('href', attrLink);
      updateLink.click();
    });
});