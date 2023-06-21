// кнопки, которые открывают модальное окно
const btns = document.querySelectorAll('.authorisation-btn, .mobile-menu-authorisation-btn');

// модальные окна
const signUpModal = document.querySelector('.modal-login-form-sign-up');
const signInModal = document.querySelector('.modal-login-form-sign-in');
const overlayLoginForm = document.querySelector('.overlayLoginFormUp');

// крестик для закрытия модального окна
const closeBtnSignUp = document.querySelector('.modal-login-form-close-btn-up');
const closeBtnSignIn = document.querySelector('.modal-login-form-close-btn');

// Функция отображения модального окна SIGN UP
function showSignUpModal() {
  signUpModal.style.display = 'block';
  overlayLoginForm.style.display = 'block';
}

// Функция отображения модального окна SIGN IN
function showSignInModal() {
  signUpModal.style.display = 'none';
  overlayLoginForm.style.display = 'none';
  signInModal.style.display = 'block';
}

// Функция скрытия модальных окон
function hideModal() {
  signUpModal.style.display = 'none';
  signInModal.style.display = 'none';
  overlayLoginForm.style.display = 'none';
}

if (signUpModal) {
  // привязка обработчика события к кнопкам
  btns.forEach(function(btn) {
    btn.addEventListener('click', showSignUpModal);
  });

  // При нажатии на крестик закрываем модальное окно SIGN UP
  closeBtnSignUp.addEventListener('click', hideModal);

  // При клике вне модального окна или на бекдропе закрываем его
  window.addEventListener('click', function(event) {
    if (event.target === signUpModal || event.target === overlayLoginForm) {
      hideModal();
    }
  });

  // При нажатии кнопки Esc закрываем модальное окно SIGN UP
  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      hideModal();
    }
  });

  // Обработчик события для ссылки "SIGN IN"
  const signInLink = document.querySelector('.sign-in-link');
  signInLink.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращение стандартного поведения ссылки
    showSignInModal();
  });

  // При нажатии на крестик закрываем модальное окно SIGN IN
  closeBtnSignIn.addEventListener('click', hideModal);

  // При клике вне модального окна или на бекдропе закрываем его
  window.addEventListener('click', function(event) {
    if (event.target === signInModal || event.target === overlayLoginForm) {
      hideModal();
    }
  });

  // При нажатии кнопки Esc закрываем модальное окно SIGN IN
  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      hideModal();
    }
  });
}
