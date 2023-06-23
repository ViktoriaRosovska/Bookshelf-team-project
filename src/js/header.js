
const home = document.querySelector('.home-btn');
const shopList = document.querySelector('.list-btn');

const mobileMenuHome = document.querySelector('.modal-home-btn')
const mobileMenuList = document.querySelector('.modal-list-btn')

const singUpBtnEl = document.querySelector('.authorisation-btn')
const autorisatedUserBtn = document.querySelector('.user-btn')
const wraperUserSelectEl = document.querySelector('.wraper-user-select')
const userSelectEl = document.querySelector('.js-user-select')
const userSelectBtnEl = document.querySelector('.js-user-select-btn')
const logOutBtn = document.querySelector('.js-log-out-btn')
const loginForm = document.querySelector('.overlayLoginForm')
// console.log(loginForm);


if (shopList) {
    if (window.location.href === shopList.href) {
    shopList.classList.add('current');
    // mobileMenuList.add('current');
    home.classList.remove('current');
    // mobileMenuHome.classList.remove('current');
}
}


if (autorisatedUserBtn) {
    autorisatedUserBtn.addEventListener('click', showUserSelect)
}

if (logOutBtn) {
    logOutBtn.addEventListener('click', isLogeOut)
}

if (singUpBtnEl) {
    singUpBtnEl.addEventListener('click', showSingUpForm)
}

function showUserSelect() {
  userSelectEl.classList.toggle('active-user-select')
  wraperUserSelectEl.classList.toggle('is-hidden')
}
  
function isLogeOut() {
    autorisatedUserBtn.classList.add('is-hidden-btn')
    singUpBtnEl.classList.remove('is-hidden-btn')
     wraperUserSelectEl.classList.add('is-hidden')
}

function showSingUpForm(event) {
    loginForm.classList.remove('is-hidden')
}


    

   
  



   
   

