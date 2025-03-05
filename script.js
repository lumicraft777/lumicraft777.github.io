function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
let slideIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    document.querySelector('.slider').style.transform = `translateX(${-slideIndex * 100}%)`;
}
function nextSlide() { slideIndex++; showSlide(slideIndex); }
function prevSlide() { slideIndex--; showSlide(slideIndex); }
document.addEventListener('DOMContentLoaded', () => showSlide(slideIndex));
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
});
