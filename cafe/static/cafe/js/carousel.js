document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const radios = document.querySelectorAll('input[name="carousel"]');
    const container = document.querySelector('.carousel-slides');
    let currentSlide = 0;
    let autoplayInterval;
    const INTERVAL = 5000;
    let isMovingLeft = false;

    // Initialize first slide
    slides[0].classList.add('active');

    function showSlide(index, direction) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active', 'previous');
        });

        // Get previous slide index
        const previousSlide = currentSlide;
        currentSlide = index;

        // Add classes to slides
        slides[previousSlide].classList.add('previous');
        slides[currentSlide].classList.add('active');

        // Update radio buttons
        radios[currentSlide].checked = true;
    }

    function moveCarousel(direction) {
        isMovingLeft = direction === 'left';
        
        if (direction === 'right') {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex, direction);
        } else {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex, direction);
        }
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(() => moveCarousel('right'), INTERVAL);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    // Handle radio button clicks
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            const direction = index > currentSlide ? 'right' : 'left';
            showSlide(index, direction);
            stopAutoplay();
            startAutoplay();
        });
    });

    // Handle hover pause
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    // Start autoplay
    startAutoplay();
});