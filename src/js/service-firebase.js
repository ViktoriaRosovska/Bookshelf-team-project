// Import the functions you need from the SDKs you need
import CryptoJS from "crypto-js";



import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, update, remove, Database } from 'firebase/database';
import { } from 'firebase/auth';
import { } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}


function validation() {
  let nameregex = /^[a-zA-Z\s]+$/;
  let passwordregex = /^[a-zA-Z0-9]{5,}/;

  if (isEmptyOrSpaces(name.value) || isEmptyOrSpaces(password.value) || isEmptyOrSpaces(email.value)) {
    alert("You cannot left any field empty");
    return false;
  }

  if (!nameregex.test(name.value)) {
    alert("Name must be at least 4 letters long")
    return false;
  }
  const emailValid = email.value && email.value.includes("@");
  if (!emailValid) {
    alert("Enter your email address, don't forget to use the obligatory symbol @")
    return false;
  }
  if (!passwordregex.test(password.value)) {
    alert("Name must be at least 4 letters long")
    return false;
  }
 
  return true;
}

function registerUser() {
  if (!validation()) {
    return;
  };
  const dbRef = ref(db);
  get(child(dbRef, "Username/" + name.value)).then((snapshot) => {
    if (snapshot.exists()) {
      alert("Account already exist!");
    } else {
      set(ref(db, "Username/" + name.value), {
        name: name.value,
        email: email.value,
        password: cryptoPassword(),
      }).then(() => {
        alert("User added successfully");
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
  const dbRef = ref(db);
  get(child(dbRef, "Username/" + name1.value)).then((snapshot) => {
    if (snapshot.exists()) {
      let dbpass = decPassword(snapshot.val().password);
      if (dbpass == password1.value) {
        login(snapshot.val());
      }

     else {
      alert("User doesn't exist");
    }
  } else {
        alert("username or password is invalid");
      }
    });
}

let userlink = document.querySelector('.link')
let signoutlink = document.querySelector('.signoutlink');
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
    document.querySelector(".user-btn span").
      textContent = currentuser.name;

    document.querySelector(".log-out-btn-big").
      addEventListener("click", () => signout());
    
    document.querySelector(".select-user-container").
      classList.remove("is-hidden");
    
    document.querySelector(".authorisation-btn").
      classList.add("is-hidden");
  }

}
submit.addEventListener('click', registerUser);

signInBtn.addEventListener('click', authentificateUser);
