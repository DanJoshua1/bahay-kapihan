document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const radios = document.querySelectorAll('input[name="carousel"]');
    let currentSlide = 0;
    let intervalId = null;
    const INTERVAL_TIME = 5000;

    function showSlide(index) {
        slides.forEach(slide => slide.style.opacity = '0');
        slides[index].style.opacity = '1';
        radios[index].checked = true;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoplay() {
        if (!intervalId) {
            intervalId = setInterval(nextSlide, INTERVAL_TIME);
        }
    }

    function stopAutoplay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Handle radio button clicks
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopAutoplay();
            setTimeout(startAutoplay, INTERVAL_TIME);
        });
    });

    // Handle mouse interactions
    const container = document.querySelector('.carousel-container');
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    // Initialize carousel
    showSlide(currentSlide);
    startAutoplay();
});