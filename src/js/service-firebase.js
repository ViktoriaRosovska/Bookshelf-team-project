// Import the functions you need from the SDKs you need
import sodium from 'libsodium-wrappers-sumo';
import {
  reportsSuccess,
  reportsFailure,
  reportsWarning,
} from './notificationsNotiflix';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import {} from 'firebase/auth';
import {} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBEQW57F-dgQwZr4xo9wUxUnzM1AQy95gE',
  authDomain: 'bookshelf-group-project.firebaseapp.com',
  databaseURL: 'https://bookshelf-group-project-default-rtdb.firebaseio.com',
  projectId: 'bookshelf-group-project',
  storageBucket: 'bookshelf-group-project.appspot.com',
  messagingSenderId: '30179894956',
  appId: '1:30179894956:web:0917ca39260c2f8cf32109',
  measurementId: 'G-ZC6T8HMWXS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const name = document.querySelector('.modal-login-form-name');
const email = document.querySelector('.modal-login-form-email');
const password = document.querySelector('.modal-login-form-password');
const submit = document.querySelector('.modal-login-btn-up');
const logOutBtn = document.querySelector('.log-out-btn');
const authorisationMobileBtn = document.querySelector(
  '.mobile-menu-authorisation-btn'
);
const authorisationDesktop = document.querySelector(
  '.authorisation-btn-desktop'
);
const shoppingListDesk = document.querySelector('.shoppingListDesk');
const name1 = document.querySelector('.modal-login-form-name-in');
const password1 = document.querySelector('.modal-login-form-password-in');
const signInBtn = document.querySelector('.modal-login-btn-in');
const userMobile = document.querySelector('.user-modal');
const shopBtnAdd = document.querySelector('.modal__shopping-button');

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function validation() {
  let nameregex = /^[a-zA-ZА-Яа-я\s]+$/;
  let passwordregex = /^[a-zA-Z0-9]{5,}/;

  if (
    isEmptyOrSpaces(name.value) ||
    isEmptyOrSpaces(password.value) ||
    isEmptyOrSpaces(email.value)
  ) {
    reportsWarning('You cannot left any field empty');
    return false;
  }

  if (!nameregex.test(name.value)) {
    reportsWarning('Name must contains only letters.');
    return false;
  }
  const emailValid = email.value && email.value.includes('@');
  if (!emailValid) {
    reportsWarning(
      "Enter your email address, don't forget to use the obligatory symbol @"
    );
    return false;
  }
  if (!passwordregex.test(password.value)) {
    reportsWarning('Password must be at least 5 letters long');
    return false;
  }

  return true;
}

function validation1() {
  let nameregex = /^[a-zA-ZА-Яа-я\s]+$/;

  if (isEmptyOrSpaces(name1.value) || isEmptyOrSpaces(password1.value)) {
    reportsWarning('You cannot left any field empty');
    return false;
  }

  if (!nameregex.test(name1.value)) {
    reportsWarning('Name must contains only letters.');
    return false;
  }

  return true;
}

function getId() {
  return Math.random().toString(16).slice(2);
}

async function registerUser() {
  if (!validation()) {
    return;
  }

  await sodium.ready;

  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, 'Username/' + name.value.trim()));
  if (snapshot.exists()) {
    reportsWarning('Account already exist!');
  } else {
    const pwd = sodium.crypto_pwhash_str(
      password.value,
      sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
    );
    const user = {
      id: getId(),
      name: name.value.trim(),
      email: email.value.trim(),
      password: pwd,
    };
    try {
      await set(ref(db, 'Username/' + name.value.trim()), user);
      reportsSuccess('User added successfully');
      setTimeout(() => login(user), 500);
    } catch (error) {
      reportsFailure("Can't register user: " + error);
    }
  }
}

async function authentificateUser() {
  if (!validation1()) {
    return;
  }

  await sodium.ready;

  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, 'Username/' + name1.value.trim()));
  if (snapshot.exists()) {
    const user = snapshot.val();
    const valid = sodium.crypto_pwhash_str_verify(
      user.password,
      password1.value
    );
    if (valid) {
      login(user);
    } else {
      reportsFailure('Username or password is invalid');
    }
  } else {
    reportsFailure("User doesn't exist");
  }
}

let currentuser = null;

function login(user) {
  localStorage.setItem('user', JSON.stringify(user));
  window.location = 'index.html';
  authorisationMobileBtn.classList.add('is-hidden');
  authorisationDesktop.classList.add('is-hidden-btn');
  shoppingListDesk.classList.remove('is-hidden-btn');
}

function getUsername() {
  currentuser = JSON.parse(localStorage.getItem('user'));
}

export function isAuthenticated() {
  return currentuser != null;
}

function signout() {
  localStorage.removeItem('user');
  window.location = 'index.html';
}
window.onload = function () {
  getUsername();

  if (currentuser) {
    if (shopBtnAdd) {
      shopBtnAdd.removeAttribute('disabled', '');
    }

    authorisationMobileBtn.classList.add('is-hidden');
    if (authorisationDesktop) {
      authorisationDesktop.classList.add('is-hidden-btn');
    }

    if (document.querySelector('.user-btn span')) {
      document.querySelector('.user-btn span').textContent = currentuser.name;
    }

    document.querySelector('.user-modal')?.classList.remove('is-hidden');
    document.querySelector('.user-modal h2').textContent = currentuser.name;
    document
      .querySelector('.log-out-btn-big')
      ?.addEventListener('click', () => signout());
    document
      .querySelector('.select-user-container')
      ?.classList.remove('is-hidden-btn');
    document
      .querySelector('.header-nav.nav-modal')
      ?.classList.remove('is-hidden');
    logOutBtn?.classList.remove('is-hidden');
    shoppingListDesk?.classList.remove('is-hidden-btn');
    userMobile.classList?.remove('is-hidden');
  }
};
if (submit) {
  submit.addEventListener('click', registerUser);
}

if (signInBtn) {
  signInBtn.addEventListener('click', authentificateUser);
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', signout);
  authorisationMobileBtn.classList.remove('is-hidden');
  if (authorisationDesktop) {
    authorisationDesktop.classList.remove('is-hidden-btn');
  }
  if (shoppingListDesk) {
    shoppingListDesk.classList.add('is-hidden-btn');
  }

  userMobile.classList.add('is-hidden');
}
