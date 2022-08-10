const orderAccordBtn = document.querySelectorAll('.profile__order-head');
orderAccordBtn.forEach((btn) => {
    let btnParentBlock = btn.parentElement;
    btn.addEventListener('click', ()=> {
        btnParentBlock.classList.contains('opened') ? btnParentBlock.classList.remove('opened') : btnParentBlock.classList.add('opened');
    });
});