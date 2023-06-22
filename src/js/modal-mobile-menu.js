
const wraperMobileMenuEl = document.querySelector('.js-wraper-mobile-menu')
const menuMobileEl = document.querySelector('.js-modal-mobile-menu')
const burgerBtnEl = document.querySelector('.js-burger')
const closeModalBtnEl = document.querySelector('.js-close-menu')
const headerEl = document.querySelector('.header-container')
const body = document.body;

const homeBtnEl = document.querySelector('.js-modal-home-btn')
const listBtnEl = document.querySelector('.js-modal-list-btn')
const iconListBtn = document.querySelector('.list-btn-svg-menu')

burgerBtnEl?.addEventListener('click', showModal)
closeModalBtnEl?.addEventListener('click', closeModal)


if (window.location.href === listBtnEl.href) {
    listBtnEl.classList.add('current');
    homeBtnEl.classList.remove('current');
     iconListBtn.classList.remove('fill');
    homeBtnEl.classList.add('pudding');
   
} else if (window.location.href === homeBtnEl.href) {
    homeBtnEl.classList.remove('pudding');
    listBtnEl.classList.add('padding');
     iconListBtn.classList.add('fill');
}


function showModal(elem) {
    headerEl?.classList.add('index')
    wraperMobileMenuEl?.classList.add('no-scroll')
    body?.classList.add('no-scroll')
    wraperMobileMenuEl?.classList.remove('is-hidden-mobile')
     menuMobileEl.classList.add('active-mobile-menu')
    burgerBtnEl?.classList.add('is-hidden-btn')
    closeModalBtnEl?.classList.remove('is-hidden-btn')

}

function closeModal() {
    wraperMobileMenuEl?.classList.remove('no-scroll')
    //wraperMobileMenuEl?.classList.add('is-hidden-mobile')
    burgerBtnEl?.classList.remove('is-hidden-btn')
    closeModalBtnEl?.classList.add('is-hidden-btn')
    body?.classList.remove('no-scroll')
     menuMobileEl.classList.remove('active-mobile-menu')

}

const home = document.querySelector('.modal-home-btn');
const list = document.querySelector('.modal-list-btn');

list.addEventListener('click', () => {
    if  ((window.location.href === "shoplist") &&
        (list.textContent === "Shopping list")) {
        list.classList.add("current");
    }
});

