AOS.init({ duration: 1000, once: true });

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

mobileMenu.addEventListener('click', (e) => {
    if(e.target === mobileMenu) mobileMenu.classList.remove('active');
});