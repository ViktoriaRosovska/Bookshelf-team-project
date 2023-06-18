const home = document.querySelector('.home-btn');
const shoplist = document.querySelector('.list-btn');


shoplist.addEventListener('click', (e) => {
    e.preventDefault();
    home.classList.remove('current');
    shoplist.classList.add('current');
});

home.addEventListener('click', (e) => {
    e.preventDefault();
    shoplist.classList.remove('current');
    home.classList.add('current');
});