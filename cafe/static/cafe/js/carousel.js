document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-radio-dots label');
    let currentSlide = 0;
    let isPlaying = true;
    let slideInterval = null;
    const intervalTime = 5000;

    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
        });

        // Add active class to current slide
        slides[index].classList.add('active');
        slides[index].style.opacity = '1';

        // Update radio buttons
        document.getElementById(`carousel${index + 1}`).checked = true;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideshow() {
        if (slideInterval === null) {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    }

    function pauseSlideshow() {
        clearInterval(slideInterval);
        slideInterval = null;
    }

    // Add click handlers to radio buttons
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            pauseSlideshow();
            currentSlide = index;
            showSlide(currentSlide);
            // Resume slideshow after 10 seconds of inactivity
            setTimeout(startSlideshow, 10000);
        });
    });

    // Handle mouse interactions
    const carouselContainer = document.querySelector('.carousel-slides');
    carouselContainer.addEventListener('mouseenter', pauseSlideshow);
    carouselContainer.addEventListener('mouseleave', startSlideshow);

    // Start the slideshow
    showSlide(currentSlide);
    startSlideshow();
});