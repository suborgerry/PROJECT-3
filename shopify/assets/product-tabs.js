const mainFunctionTabs = () => {
    const productTabs = document.querySelector('.product-tabs__main');
    productTabs && exchangeTabs(productTabs)
};

const exchangeTabs = (productTabs) => {
    productTabs.addEventListener('click', evt => {
        const element = evt.target;

        if(element.classList.contains('product-tabs__button')) {
            if(window.innerWidth > 991 && !element.classList.contains('active')) {
                const mainBlock = productTabs.querySelector('#product-tabs-desctop');
                const targetBlock = mainBlock.querySelector(`.${element.dataset.id}`);
                const activeBlock = mainBlock.querySelector('.product-tabs__tab.active');
                const activeButton = mainBlock.querySelector('.product-tabs__button.active');

                activeBlock.classList.remove('active');
                activeButton.classList.remove('active');

                element.classList.add('active');
                targetBlock.classList.add('active');
            } else {
                const mainBlock = productTabs.querySelector('#product-tabs-mobile');
                const targetBlock = mainBlock.querySelector(`.${element.dataset.id}`);
                
                element.classList.toggle('active');
                targetBlock.classList.toggle('active');

            }
        }
    });
};

document.addEventListener('DOMContentLoaded', mainFunctionTabs);