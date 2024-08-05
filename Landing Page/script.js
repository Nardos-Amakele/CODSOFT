document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    let currentIndex = 1;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            slide.style.opacity = '0.5';
            slide.style.transform = 'scale(0.8)'; 
        });

        const activeIndex = currentIndex % slides.length;
        slides[activeIndex].classList.add('active');
        slides[activeIndex].style.opacity = '1';
        slides[activeIndex].style.transform = 'scale(1.2)';
    }

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${(currentIndex - 1) * 100 / 3}%)`;
        updateSlides();
    }

    leftArrow.addEventListener('click', function () {
        showSlide(currentIndex - 1);
    });

    rightArrow.addEventListener('click', function () {
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex); 
});