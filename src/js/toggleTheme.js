const checkBoxEl = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

export default function onCheckboxClick(evt) {
  let value = '';
  if (evt.currentTarget.checked) {
    value = Theme.DARK;
    body.classList.add(value);
    body.classList.remove(Theme.LIGHT);
  } else {
    value = Theme.LIGHT;
    body.classList.remove(Theme.DARK);
    body.classList.add(value);
  }
  localStorage.setItem(STORAGE_KEY, value);
}

function savedThemeOnReloaded() {
  const savedValue = localStorage.getItem(STORAGE_KEY);

  if (savedValue) {
    body.classList.add(savedValue);
  } else {
    body.classList.add(Theme.LIGHT);
  }

  if (savedValue === Theme.DARK) {
    checkBoxEl.setAttribute('checked', true);
  }
}
savedThemeOnReloaded();