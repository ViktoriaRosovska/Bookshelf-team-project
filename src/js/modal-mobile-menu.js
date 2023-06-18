
const wraperMobileMenuEl = document.querySelector('.js-wraper-mobile-menu')
const menuMobileEl = document.querySelector('.js-modal-mobile-menu')
const burgerBtnEl = document.querySelector('.js-burger')
const closeModalBtnEl = document.querySelector('.js-close-modal')
const header = document.querySelector('.header-container')
const body = document.body;


burgerBtnEl.addEventListener('click', showModal)
closeModalBtnEl.addEventListener('click', closeModal)

function showModal(elem) {
    header.classList.add('index')
    body.classList.add('no-scroll')
    wraperMobileMenuEl.classList.remove('is-hidden-mobile')
    // menuMobileEl.classList.add('active')
    burgerBtnEl.classList.add('is-hidden-btn')
    closeModalBtnEl.classList.remove('is-hidden-btn')
}

function closeModal(elem) {
    body.classList.remove('no-scroll')
    wraperMobileMenuEl.classList.add('is-hidden-mobile')
    burgerBtnEl.classList.remove('is-hidden-btn')
    closeModalBtnEl.classList.add('is-hidden-btn')

}