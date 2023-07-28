const footer = document.querySelector('.footer_container_shop');
const shopList = document.querySelector('.shoplist-wrapper-desc');
// console.log(shopList.offsetHeight - window.scrollY);
window.addEventListener('scroll', () => {
  if (shopList.offsetHeight - window.scrollY < 800) {
    footer.style.bottom = '0px';
  } else {
    footer.style.position = 'fixed';
    footer.style.bottom = '-72px';
    footer.style.left = '50%';
    footer.style.transform = 'translate(-50%)';
    footer.style.width = '100%';
  }
});
if (document.scrollHeight === document.offsetHeight) {
  footer.style.position = 'fixed';
  footer.style.bottom = '0px';
  footer.style.left = '50%';
  footer.style.transform = 'translate(-50%)';
  footer.style.width = '100%';
}
