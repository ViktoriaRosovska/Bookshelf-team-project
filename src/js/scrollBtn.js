const scrollBtn = {
    btn: document.querySelector('.scrollBtn'),
    show() {
        this.btn.classList.remove('scrollBtn-hide');
    },
    hide() {
        this.btn.classList.add('scrollBtn-hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 200 ? this.show() : this.hide();
        });
        document.querySelector('.scrollBtn').onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
scrollBtn.addEventListener();