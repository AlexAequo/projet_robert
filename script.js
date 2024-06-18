// script pour la nav bar//




// script.js pour le carrousel d'avis //
let currentSlide = 0;

function getSlidesPerView() {
    const width = window.innerWidth;
    if (width <= 768) {
        return 1;
    } else if (width <= 1200) {
        return 2;
    } else {
        return 3;
    }
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const slidesPerView = getSlidesPerView();

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - slidesPerView;
    }

    if (currentSlide >= totalSlides - slidesPerView + 1) {
        currentSlide = 0;
    }

    const offset = currentSlide * (100 / slidesPerView);
    document.querySelector('.carousel-inner').style.transform = `translateX(-${offset}%)`;
}

window.addEventListener('resize', () => {
    currentSlide = 0;
    document.querySelector('.carousel-inner').style.transform = 'translateX(0)';
});
