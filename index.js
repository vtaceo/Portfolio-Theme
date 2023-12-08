const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.alllinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
});