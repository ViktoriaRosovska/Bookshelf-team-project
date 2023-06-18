import { sponsors } from './sponsors-obj';
import images from '../images/sponsors/*.png';

const sponsorsList = document.querySelector('.js-sponsors-list');
let distance = 5;
let id = 0;
// console.log(sponsorsList);

let tablet = window.matchMedia('(min-width: 767px)'); 
let mobile = window.matchMedia('(min-width: 375px)');
let desctop = window.matchMedia('(min-width: 1440px)');
if (tablet) {
    distance = 7;
    console.log(7);
}
if (desctop) {
    distance = 8;
    console.log(distance);
}
if (mobile) {
    distance = 5;
    console.log(distance);
}

function renderSponsorsList() {
    const markup = sponsors.map(({ url, title, img }) => {
        const image = images[img];
        return  `<li class="sponsor-item"><span class="sup_number">${pad(id+=1)}</span><a href=${url} target="_blank"><img class="sponsor-img" src="${image}" alt=${title}></a></li>`
    
    }).join("");
    sponsorsList.insertAdjacentHTML("beforeend", markup);
 
};
renderSponsorsList();

function pad(value) {
    return String(value).padStart(2, '0');
}

const sponsorsSlideDownBtn = document.querySelector('.sponsors-slideDown__btn');
const sponsorsSlideUpBtn = document.querySelector('.sponsors-slideUp__btn');

sponsorsSlideUpBtn.classList.add('hide');
    

let step = 0;
let count = 0;
sponsorsSlideDownBtn.addEventListener('click', onScrollDownSponsors);
sponsorsSlideUpBtn.addEventListener('click', onScrollUpSponsors);

function onScrollDownSponsors() {
     
    // console.log(step);
   
    if (count < distance) {
        ++count;
        step += 52;
        sponsorsList.style.transform = `translateY(-${step}px)`;
        console.log(count);
    }

    if (count === distance) {
        sponsorsSlideUpBtn.classList.remove('hide');
        sponsorsSlideDownBtn.classList.add('hide');
    }
}

function onScrollUpSponsors() {
   
    if (count > 0) {
        --count; 
        step -= 52;
        sponsorsList.style.transform = `translateY(-${step}px)`;
        // console.log(step);
        // console.log(count);
    }
   
    if (count === 0) {
        step = 0;
        sponsorsSlideDownBtn.classList.remove('hide');
        sponsorsSlideUpBtn.classList.add('hide');  
    } 
}