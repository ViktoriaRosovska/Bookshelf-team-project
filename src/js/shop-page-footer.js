const footer = document.querySelector('.footer_container_shop');

if (document.scrollHeight === document.offsetHeight) {
    footer.style.position = "fixed";
    footer.style.bottom = "0px";
    footer.style.left = "50%";
    footer.style.transform = "translate(-50%)";
    footer.style.width = "100%";
}


    