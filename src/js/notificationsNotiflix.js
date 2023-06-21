import Notiflix from 'notiflix';

Notiflix.Notify.init({
  timeout: 2000,
  cssAnimationDuration: 400,
  cssAnimation: true,
  width: '500px',
  position: 'center-top',
  borderRadius: '16px',
  distance: '5px',
  fontSize: '18px',
  cssAnimationStyle: 'zoom', 
  closeButton: false,
  failure: {
    background: '#e53765',
    textColor: 'var(--ligtht-theme)',
    notiflixIconColor: 'var(--ligtht-theme)'
  },
  success: {
    background: '#45e7ea',
    textColor: 'var(--dark-theme)',
    notiflixIconColor: 'var(--dark-theme)',
    
  },
  warning:{
    background: 'var(--color-yellow-componemt)',
    textColor: 'var(--dark-theme)',
    notiflixIconColor: 'var(--dark-theme)'
  },
  info: {
    background: '#7150f5',
    textColor: 'var(--ligtht-theme)',
    notiflixIconColor: 'var(--ligtht-theme)'
  }
});

export function reportsFailure(message) {
  Notiflix.Notify.failure(`${message}`, {width: '380px'});
}

//reportsFailure('Sorry, no books were found. Please try again.')

export function reportsSuccess(message) {
  Notiflix.Notify.success(`${message}`, {width: '380px'})
}

//reportsSuccess('Hello! Authorization was successful!');

export function reportsWarning(message) {
  Notiflix.Notify.warning(`${message}`, {width: '380px'})
}

//reportsWarning('Warning')

export function reportsInfo(message) {
  Notiflix.Notify.info(`${message}`, {width: '380px'})
}

//reportsInfo('Move on')