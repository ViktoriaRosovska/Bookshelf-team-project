
const wraperMobileMenuEl = document.querySelector('.js-wraper-mobile-menu')
const menuMobileEl = document.querySelector('.js-modal-mobile-menu')
const burgerBtnEl = document.querySelector('.js-burger')
const closeModalBtnEl = document.querySelector('.js-close-menu')
const headerEl = document.querySelector('.header-container')
const body = document.body;

const homeBtnEl = document.querySelector('.js-modal-home-btn')
const listBtnEl = document.querySelector('.js-modal-list-btn')

burgerBtnEl.addEventListener('click', showModal)
closeModalBtnEl.addEventListener('click', closeModal)

function showModal(elem) {
    headerEl.classList.add('index')
    wraperMobileMenuEl.classList.add('no-scroll')
    body.classList.add('no-scroll')
    wraperMobileMenuEl.classList.remove('is-hidden-mobile')
    // menuMobileEl.classList.add('active')
    burgerBtnEl.classList.add('is-hidden-btn')
    closeModalBtnEl.classList.remove('is-hidden-btn')

}

function closeModal(elem) {
    wraperMobileMenuEl.classList.remove('no-scroll')
    wraperMobileMenuEl.classList.add('is-hidden-mobile')
    burgerBtnEl.classList.remove('is-hidden-btn')
    closeModalBtnEl.classList.add('is-hidden-btn')

}