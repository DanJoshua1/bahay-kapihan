document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const radios = document.querySelectorAll('input[name="carousel"]');
    const container = document.querySelector('.carousel-container');
    const INTERVAL_TIME = 5000;
    let currentSlide = 0;
    let intervalId = null;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
            slide.style.transition = 'opacity 0.5s ease';
        });
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
        clearInterval(intervalId);
        intervalId = null;
    }

    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopAutoplay();
            setTimeout(startAutoplay, INTERVAL_TIME);
        });
    });

    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    // Initialize
    showSlide(currentSlide);
    startAutoplay();
});
