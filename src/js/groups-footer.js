console.log(document.scrollHeight);
const footerG = document.querySelector('.footer_container_group');
const team = document.querySelector('.team_wrap');

console.log(window.scrollY);

window.addEventListener('scroll', () => {
  if (team.offsetHeight - window.scrollY > 823) {
    console.log(team.offsetHeight - window.scrollY);
    footerG.style.bottom = '-72px';
  } else {
    footerG.style.position = 'fixed';
    footerG.style.bottom = '0px';
    footerG.style.left = '50%';
    footerG.style.transform = 'translate(-50%)';
    footerG.style.width = '100%';
  }
});

// if (document.scrollHeight === document.offsetHeight) {
//   footerG.style.position = 'fixed';
//   footerG.style.bottom = '0px';
//   footerG.style.left = '50%';
//   footerG.style.transform = 'translate(-50%)';
//   footerG.style.width = '100%';
// }
