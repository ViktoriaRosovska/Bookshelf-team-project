// Import the functions you need from the SDKs you need
import CryptoJS from "crypto-js";
import { reportsSuccess, reportsFailure, reportsWarning } from "./notificationsNotiflix";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get} from 'firebase/database';
import { } from 'firebase/auth';
import { } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBEQW57F-dgQwZr4xo9wUxUnzM1AQy95gE",
  authDomain: "bookshelf-group-project.firebaseapp.com",
  databaseURL: "https://bookshelf-group-project-default-rtdb.firebaseio.com",
  projectId: "bookshelf-group-project",
  storageBucket: "bookshelf-group-project.appspot.com",
  messagingSenderId: "30179894956",
  appId: "1:30179894956:web:75ca7f025b729727f32109",
  measurementId: "G-T219JCXCC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const name = document.querySelector('.modal-login-form-name');
const email = document.querySelector('.modal-login-form-email');
const password = document.querySelector('.modal-login-form-password');
const submit = document.querySelector('.modal-login-btn-up');
const logOutBtn = document.querySelector('.log-out-btn');
const authorisationMobileBtn = document.querySelector(".mobile-menu-authorisation-btn");
const authorisationDesktop = document.querySelector('.authorisation-btn-desktop');

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function validation() {
  let nameregex = /^[a-zA-Z\s]+$/;
  let passwordregex = /^[a-zA-Z0-9]{5,}/;

  if (isEmptyOrSpaces(name.value) || isEmptyOrSpaces(password.value) || isEmptyOrSpaces(email.value)) {
    reportsWarning("You cannot left any field empty");
    return false;
  }

  if (!nameregex.test(name.value)) {
    reportsWarning("Name must be at least 4 letters long");
    return false;
  }
  const emailValid = email.value && email.value.includes("@");
  if (!emailValid) {
    reportsWarning("Enter your email address, don't forget to use the obligatory symbol @");
    return false;
  }
  if (!passwordregex.test(password.value)) {
    reportsWarning("Name must be at least 4 letters long");
    return false;
  }
 
  return true;
}

function validation1() {
  let nameregex = /^[a-zA-Z\s]+$/;
  let passwordregex = /^[a-zA-Z0-9]{5,}/;

  if (isEmptyOrSpaces(name1.value) || isEmptyOrSpaces(password1.value)) {
    reportsWarning("You cannot left any field empty");
    return false;
  }

  if (!nameregex.test(name1.value)) {
    reportsWarning("Name must be at least 4 letters long");
    return false;
  }
  if (!passwordregex.test(password1.value)) {
    reportsWarning("Name must be at least 4 letters long");
    return false;
  }
 
  return true;
}

function getId() {
        return Math.random().toString(16).slice(2);
    }

function registerUser() {
  if (!validation()) {
    return;
  };
  const dbRef = ref(db);
  get(child(dbRef, "Username/" + name.value)).then((snapshot) => {
    if (snapshot.exists()) {
      reportsWarning("Account already exist!");
    } else {
      const user = {
        id: getId(),
        name: name.value.trim().toLowerCase(),
        email: email.value.trim().toLowerCase(),
        password: cryptoPassword(),
      };
      set(ref(db, "Username/" + name.value), user).then(() => {
        reportsSuccess("User added successfully");
        setTimeout(() => login(user), 500);
      }).catch((error) => {
        alert("error" + error);
      })
    }
  })
}

const name1 = document.querySelector('.modal-login-form-name-in');
const password1 = document.querySelector('.modal-login-form-password-in');
const signInBtn = document.querySelector('.modal-login-btn-in');

function authentificateUser() {
   if (!validation1()) {
    return;
  };
  const dbRef = ref(db);
  get(child(dbRef, "Username/" + name1.value.trim().toLowerCase())).then((snapshot) => {
    if (snapshot.exists()) {
      let dbpass = decPassword(snapshot.val().password);
      if (dbpass == password1.value) {
        login(snapshot.val());
      } else {
        reportsFailure("Username or password is invalid");
      }
    } else {
      reportsFailure("User doesn't exist");
    }
  });
}


let currentuser = null;

function cryptoPassword() {
  const pass = CryptoJS.AES.encrypt(password1.value, password1.value);
  return pass.toString();
}
function decPassword(dbpass) {
  const pass = CryptoJS.AES.decrypt(dbpass, password1.value);
  return pass.toString(CryptoJS.enc.Utf8);
}


function login(user) {
  localStorage.setItem('user', JSON.stringify(user));
  window.location = "index.html";
  authorisationMobileBtn.classList.add('is-hidden');
  authorisationDesktop.classList.add('is-hidden-btn');
}

function getUsername() {
    currentuser = JSON.parse(localStorage.getItem('user'));
}

function signout() {
  localStorage.removeItem('user');
  window.location = "index.html";
}
window.onload = function () {
  getUsername();

  if (currentuser)
  {
    authorisationMobileBtn.classList.add("is-hidden");
    authorisationDesktop.classList.add('is-hidden-btn');
    document.querySelector(".user-btn span").textContent = currentuser.name;
    document.querySelector('.user-modal').classList.remove('is-hidden-btn');
    document.querySelector('.user-modal h2').textContent = currentuser.name;
    document.querySelector(".log-out-btn-big").addEventListener("click", () => signout());
    document.querySelector(".select-user-container").classList.remove("is-hidden-btn");
    logOutBtn.classList.remove('is-hidden');
  }

}
if (submit) {
  submit.addEventListener('click', registerUser);
}

if (signInBtn) {
  signInBtn.addEventListener('click', authentificateUser);
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', signout);
  authorisationMobileBtn.classList.remove('is-hidden');
  authorisationDesktop.classList.remove('is-hidden-btn');
}