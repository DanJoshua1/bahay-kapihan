document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const radios = document.querySelectorAll('input[name="carousel"]');
    const container = document.querySelector('.carousel-slides');
    let currentSlide = 0;
    let autoplayInterval;
    const INTERVAL = 5000;

    // Initialize first slide
    slides[0].classList.add('active');

    function showSlide(index) {
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

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    function startAutoplay() {
        stopAutoplay(); // Clear any existing interval
        autoplayInterval = setInterval(nextSlide, INTERVAL);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    // Handle radio button clicks
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            showSlide(index);
            stopAutoplay();
            startAutoplay();
        });
    });

    // Handle hover pause
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    // Handle touch events
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoplay();
    });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const difference = touchEndX - touchStartX;

        if (Math.abs(difference) > 50) { // Minimum swipe distance
            if (difference > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
        startAutoplay();
    });

    // Start autoplay
    startAutoplay();
});