export const scrollBtn = {
    btn: document.querySelector('.scrollBtn'),
    show() {
        this.btn.classList.remove('scrollBtn-hide');
    },
    hide() {
        this.btn.classList.add('scrollBtn-hide');
    },
    addEventListener() {
        if (this.btn) {
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                scrollY > 100 ? this.show() : this.hide();
            });
            this.btn.onclick = () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
}
scrollBtn.addEventListener();
