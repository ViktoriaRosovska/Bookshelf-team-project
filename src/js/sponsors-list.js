import { sponsors } from './sponsors-obj';
import images from '../images/sponsors/*.png';

const sponsorsList = document.querySelector('.js-sponsors-list');
let id = 0;

const mqLarge = window.matchMedia('(min-width: 768px)');
mqLarge?.addEventListener('change', () => (distance = mqLarge.matches ? 3 : 5));

let distance = mqLarge.matches ? 3 : 5;

function renderSponsorsList() {
  const markup = sponsors
    .map(
      ({ url, title, img }) =>
        `<li class="sponsor-item"><span class="sup_number">${pad(
          (id += 1)
        )}</span><a href="${url}" target="_blank" noopener noreferrer class="sponsorsLink" ><img class="sponsor-img" src="${
          images[img]
        }" alt="${title}"/></a></li>`
    )
    .join('');
  sponsorsList?.insertAdjacentHTML('beforeend', markup);
}
renderSponsorsList();

function pad(value) {
  return String(value).padStart(2, '0');
}

const sponsorsSlideDownBtn = document.querySelector('.sponsors-slideDown__btn');
const sponsorsSlideUpBtn = document.querySelector('.sponsors-slideUp__btn');

sponsorsSlideUpBtn?.classList.add('hide');

let step = 0;
let count = 0;
sponsorsSlideDownBtn?.addEventListener('click', onScrollDownSponsors);
sponsorsSlideUpBtn?.addEventListener('click', onScrollUpSponsors);

function onScrollDownSponsors() {
  if (count < distance) {
    ++count;
    step += 52;
    sponsorsList.style.transform = `translateY(-${step}px)`;
  }

  if (count === distance) {
    sponsorsSlideUpBtn?.classList.remove('hide');
    sponsorsSlideDownBtn?.classList.add('hide');
  }
}

function onScrollUpSponsors() {
  if (count > 0) {
    --count;
    step -= 52;
    sponsorsList.style.transform = `translateY(-${step}px)`;
  }

  if (count === 0) {
    step = 0;
    sponsorsSlideDownBtn?.classList.remove('hide');
    sponsorsSlideUpBtn?.classList.add('hide');
  }
}
