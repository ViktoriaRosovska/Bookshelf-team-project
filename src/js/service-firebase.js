// Import the functions you need from the SDKs you need
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
const submit = document.querySelector('.modal-login-btn');


function validation() {
  let nameregex = /^[a-zA-Z\s]+$/;
  let passwordregex = /^[a-zA-Z0-9]{5,}/;

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
  get(child(dbRef, "UserList/" + name.value)).then((snapshot) => {
    if (snapshot.exists()) {
      alert("Account already exist!");
    } else {
      set(ref(db, "Username/" + name.value), {
        name: name.value,
        email: email.value,
        password: password.value
      }).then(() => {
        alert("User added successfully");
      }).catch((error) => {
        alert("error" + error);
      })
    }
  })

}

submit.addEventListener('click', (e) => {
  registerUser();
});