import { sponsors } from './sponsors-obj';
// import images from '../images/sponsors/*.png';

import save from '../images/sponsors/save_the_children.png';
import progecthope from '../images/sponsors/progecthope.png';
import united24 from '../images/sponsors/united24.png';
import imc from '../images/sponsors/imc.png';
import medecinssans from '../images/sponsors/medecins_sans.png';
import razom from '../images/sponsors/razom.png';
import actionagainst from '../images/sponsors/action_against.png';
import worldvision from '../images/sponsors/world_vision.png';
import sergiy_prytula from '../images/sponsors/sergiy_prytula.png';

import Newimage from '../images/sponsors/action_against.png';

const sponsorsList = document.querySelector('.js-sponsors-list');
let id = 0;

const mqLarge = window.matchMedia('(min-width: 768px)');
mqLarge?.addEventListener('change', () => (distance = mqLarge.matches ? 3 : 5));

let distance = mqLarge.matches ? 3 : 5;

function renderSponsorsList() {
  const images = [
    save,
    progecthope,
    united24,
    imc,
    medecinssans,
    razom,
    actionagainst,
    worldvision,
    sergiy_prytula,
  ];

  const markup = sponsors
    .map(({ url, title, img }) => {
      return `<li class="sponsor-item"><span class="sup_number">${pad(
        (id += 1)
      )}</span><a href=${url} class="sponsor-link" target="_blank"
       noopener noreferrer><img class="sponsor-img" src="${images[id - 1]}"\n
      alt="${title}"/></a></li>`;
    })

    .join('');
  sponsorsList?.insertAdjacentHTML('beforeend', markup);
}
renderSponsorsList();

{
  /* <img class="sponsor-img" src="${Newimage}" />; */
}
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
