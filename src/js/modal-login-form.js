// кнопка, що відкриває модальне вікно
const btn = document.querySelector('.authorisation-btn');

// модальне вікно
const modal = document.querySelector('.modal-login-form');

// хрестик для закриття модального вікна
const closeBtn = document.querySelector('.modal-login-form-close-btn');
const overlayLoginForm = document.querySelector('.overlayLoginForm');

// Функція приховування модального вікна
function hideModal() {
  modal.style.display = 'none';
  overlayLoginForm.style.display = 'none';
}

if (modal) {
  // клік відкриває модальне вікно
  btn.onclick = function () {
    modal.style.display = 'block';
    overlayLoginForm.style.display = 'block';
  };

  // При натисканні на хрестик закриваємо модальне вікно
  closeBtn.onclick = hideModal;

  // При кліку поза модальним вікном або на бекдропі закриваємо його
  window.onclick = function (event) {
    if (event.target === modal || event.target === overlayLoginForm) {
      hideModal();
    }
  };

  // При натисканні кнопки Esc закриваємо модальне вікно
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      hideModal();
    }
  });
}
