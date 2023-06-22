// const btnAuth = document.querySelector('.authorisation-btn');
// const btnAuthMom = document.querySelector('.mobile-menu-authorisation-btn');
// const modal = document.querySelector('.modal-login-form');
// const closeBtn = document.querySelector('.modal-login-form-close-btn');
// const overlayLoginForm = document.querySelector('.overlayLoginForm');

// function showModal() {
//   modal.style.display = 'block';
//   overlayLoginForm.style.display = 'block';
// }

// function hideModal() {
//   modal.style.display = 'none';
//   overlayLoginForm.style.display = 'none';
// }

// if (btnAuth) {
//   btnAuth.addEventListener('click', showModal);
// }

// if (btnAuthMom) {
//   btnAuthMom.addEventListener('click', showModal);
// }
const closeBtn = document.querySelector('.modal-login-form-close-btn');
if (closeBtn) {
  closeBtn.addEventListener('click', hideModal);
}

// if (overlayLoginForm) {
//   overlayLoginForm.addEventListener('click', hideModal);
// }

// window.addEventListener('keydown', function (event) {
//   if (event.key === 'Escape') {
//     hideModal();
//   }
// });

// через функцию addClickListener
const btnAuth = document.querySelector('.authorisation-btn');
const btnAuthMom = document.querySelector('.mobile-menu-authorisation-btn');
const modal = document.querySelector('.modal-login-form');

const overlayLoginForm = document.querySelector('.overlayLoginForm');

function showModal() {
  modal.style.display = 'block';
  overlayLoginForm.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
  overlayLoginForm.style.display = 'none';
}

function addClickListener(element, callback) {
  if (element) {
    element.addEventListener('click', callback);
  }
}

addClickListener(btnAuth, showModal);
addClickListener(btnAuthMom, showModal);
addClickListener(closeBtn, hideModal);
addClickListener(overlayLoginForm, hideModal);

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    hideModal();
  }
});
