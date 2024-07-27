let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;
    const slideWidth = slides.children[0].clientWidth;

    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

    slideIndex++;
    if (slideIndex >= totalSlides) { slideIndex = 0; }
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.carousel-slide img').length) { slideIndex = 0; }
    showSlides();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) { slideIndex = document.querySelectorAll('.carousel-slide img').length - 1; }
    showSlides();
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
});