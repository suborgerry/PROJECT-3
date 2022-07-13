const tabLink = document.querySelectorAll('.collections-tabs-list__tab'),
tabContent = document.querySelectorAll('.collections-tabs-list__tab-content');

for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].addEventListener('click', () => {
        for (let k = 0; k < tabLink.length; k++) {
            if (i != k) {
                tabLink[k].classList.remove('tab-active');
                tabContent[k].classList.remove('tab-content-active');
            }
        }
        tabLink[i].classList.add('tab-active');
        tabContent[i].classList.add('tab-content-active');
    }); 
}