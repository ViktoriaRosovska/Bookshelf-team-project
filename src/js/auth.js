const signUp = document.querySelector('.signUp');
const signIn = document.querySelector('.signIn');
const formIn = document.querySelector('.modal-login-in');
const formUp = document.querySelector('.modal-login-up');
const formIndiv = document.querySelector('.modal-login-form-input');

if (signUp) {
    signUp.addEventListener('click', onSignUpClick);
}

if (signIn) {
    signIn.addEventListener('click', onSignInClick);
} 

function onSignInClick() {
    signIn.classList.add('underline');
    signUp.classList.remove('underline');
    formIn.classList.remove('is-hidden')
    formUp.classList.add('is-hidden');
    formIn.style.display = "block";
}

function onSignUpClick() {
    signUp.classList.add('underline');
    signIn.classList.remove('underline');
    formIn.classList.add('is-hidden')
    formUp.classList.remove('is-hidden');
}
