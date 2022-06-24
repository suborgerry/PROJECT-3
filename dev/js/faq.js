const faqGroupBtn = document.querySelectorAll('.faq__group-box-btn'),
faqItemBtn = document.querySelectorAll('.faq__box-item-btn');

function openItem(item) {
    let itemContent = item.nextElementSibling,
    itemIcon = item.firstElementChild;
    itemContent.classList.contains('opened') ? itemContent.classList.remove('opened') : itemContent.classList.add('opened');
    itemIcon.classList.contains('arr-rotate') ? itemIcon.classList.remove('arr-rotate') : itemIcon.classList.add('arr-rotate');
}
for (let btn of faqGroupBtn) {
    btn.addEventListener('click', ()=> {
        openItem(btn);
    });
}
for (let btn of faqItemBtn) {
    btn.addEventListener('click', ()=> {
        openItem(btn);
        let parentColored = btn.parentElement;
        parentColored.classList.contains('colored') ? parentColored.classList.remove('colored') : parentColored.classList.add('colored');
    });
}