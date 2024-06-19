// script pour la nav bar//

const menuHamburger = document.querySelector(".menu-hamburger")
      const navLinks = document.querySelector(".nav-links")
  
      menuHamburger.addEventListener('click',()=>{
      navLinks.classList.toggle('mobile-menu')
      })


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

// script pour le carrousel qualite//

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carouselContainer => {
        const carousel = carouselContainer.querySelector('.carousel-inner');
        const columns = carouselContainer.querySelectorAll('.column');
        const leftArrow = carouselContainer.querySelector('.left-arrow');
        const rightArrow = carouselContainer.querySelector('.right-arrow');
        let currentIndex = 0;
        const itemsToShow = window.innerWidth > 768 ? 6 : 2;
        const totalItems = columns.length;

        function updateCarousel() {
            const columnWidth = columns[0].offsetWidth;
            carousel.style.transform = `translateX(-${currentIndex * columnWidth}px)`;
        }

        leftArrow.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        rightArrow.addEventListener('click', () => {
            if (currentIndex < totalItems - itemsToShow) {
                currentIndex++;
                updateCarousel();
            }
        });

        window.addEventListener('resize', () => {
            updateCarousel();
        });

        updateCarousel();
    });
});

