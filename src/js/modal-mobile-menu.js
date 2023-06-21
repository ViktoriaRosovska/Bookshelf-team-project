
const wraperMobileMenuEl = document.querySelector('.js-wraper-mobile-menu')
const menuMobileEl = document.querySelector('.js-modal-mobile-menu')
const burgerBtnEl = document.querySelector('.js-burger')
const closeModalBtnEl = document.querySelector('.js-close-menu')
const headerEl = document.querySelector('.header-container')
const body = document.body;


const homeBtnEl = document.querySelector('.modal-home-btn')
const listBtnEl = document.querySelector('.modal-list-btn')


// const home = document.querySelector('.home-btn');
// const shopList = document.querySelector('.list-btn');

// if (window.location.href === shopList.href) {
//     shopList.classList.add('current');
//     home.classList.remove('current');
// }



if (window.location.href === listBtnEl.href) {
    listBtnEl.classList.add('current');
    homeBtnEl.classList.remove('current');
    homeBtnEl.classList.add('pudding');
} else if (window.location.href === homeBtnEl.href) {
    homeBtnEl.classList.remove('pudding');
     listBtnEl.classList.add('padding');
}


burgerBtnEl?.addEventListener('click', showModal)
closeModalBtnEl?.addEventListener('click', closeModal)

function showModal(elem) {
    headerEl?.classList.add('index')
    wraperMobileMenuEl?.classList.add('no-scroll')
    body?.classList.add('no-scroll')
    wraperMobileMenuEl?.classList.remove('is-hidden-mobile')
     menuMobileEl.classList.add('active-mobile-menu')
    burgerBtnEl?.classList.add('is-hidden-btn')
    closeModalBtnEl?.classList.remove('is-hidden-btn')

}

function closeModal(elem) {
    wraperMobileMenuEl?.classList.remove('no-scroll')
    //wraperMobileMenuEl?.classList.add('is-hidden-mobile')
    burgerBtnEl?.classList.remove('is-hidden-btn')
    closeModalBtnEl?.classList.add('is-hidden-btn')
    body?.classList.remove('no-scroll')
     menuMobileEl.classList.remove('active-mobile-menu')

}

