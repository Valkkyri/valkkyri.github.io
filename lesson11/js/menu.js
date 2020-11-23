const mobileMenu = document.querySelector('.mobile-nav');
const mainNav = document.querySelector('.navigation');

//mobileMenu.addEventListener('click', () => {headerNav.classList.toggle('mobile-view');}, false);

mobileMenu.addEventListener('click', showHide, false);

function showHide() {
    mainNav.classList.toggle('mobile-view');
}


