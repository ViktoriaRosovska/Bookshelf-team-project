import { sponsors } from './sponsors';
const sponsorsList = document.querySelector('.js-sponsors-list');
let id = 1;
console.log(sponsors);
console.log(sponsorsList);
function renderSponsorsList() {
    const markup = sponsors.map(({ url, title, img }) => {
        
        return  `<li class="sponsor-item"><span>0${id++}</span><a href=${url} target="_blank"><img class="sponsor-img" src="./sponsors_icon/${img}" alt=${title}></a></li>`
    
    }).join("");
    sponsorsList.insertAdjacentHTML("beforeend", markup);
 
};
renderSponsorsList();

const sponsorSlideUPBtn = document.querySelector('.sponsors-slideUP__btn');
const sponsorSlideDownBtn = document.querySelector('.sponsors-slideDown__btn');

sponsorSlideDownBtn.classList.add('hide');
    
let step = 0;
let count = 0;
sponsorSlideUPBtn.addEventListener('click', onScrollUPSponsors);
sponsorSlideDownBtn.addEventListener('click', onScrollDownSponsors);

function onScrollUPSponsors() {
      count++;
    console.log(step);
   
    if (count <= 6) {
         step += 52;
        sponsorsList.style.transform = `translateY(-${step}px)`;
        console.log(count);
        return;
    }
    
    step = 0;
    sponsorSlideUPBtn.classList.add('hide');
    sponsorSlideDownBtn.classList.remove('hide');
    sponsorsList.style.top = "-364px";
}

function onScrollDownSponsors() {
    count--;
    console.log(step);
    if (count >= 0) {
     step = step + 52; 
        sponsorsList.style.transform = `translateY(${step}px)`;
        console.log(count);
        return;
    }
    step = -52;
    sponsorSlideDownBtn.classList.add('hide');
    sponsorSlideUPBtn.classList.remove('hide');
    sponsorsList.style.top = "0px";
}