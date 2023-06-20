import Notiflix from 'notiflix';

Notiflix.Notify.init({
    width: '500px',
    position: 'center-top',
    borderRadius: '16px',
    distance: '5px',
    fontSize: '16px',
    cssAnimationStyle: 'zoom', // 'fade' - 'zoom'
    failure: {
    background: 'var(--color-yellow-componemt)',
    textColor: 'var(--dark-theme)'
  }});

  export default function reportsFailure() { Notiflix.Notify.failure(
    'Sorry, no books were found.'
  )};

  reportsFailure()