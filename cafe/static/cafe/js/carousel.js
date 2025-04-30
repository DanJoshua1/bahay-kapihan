document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const radios = document.querySelectorAll('input[name="carousel"]');
    const container = document.querySelector('.carousel-slides');
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
    const INTERVAL = 5000;
    let intervalId;

    function updateSlidePosition() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        radios[currentIndex].checked = true;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    function startAutoplay() {
        intervalId = setInterval(nextSlide, INTERVAL);
    }

    function stopAutoplay() {
        clearInterval(intervalId);
    }

    // Handle swipe
    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoplay();
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diffX = currentX - startX;

        // Optional: Add drag effect
        container.style.transform = `translateX(calc(-${currentIndex * 100}% + ${diffX}px))`;
    });

    container.addEventListener('touchend', (e) => {
        isDragging = false;
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;

        if (diffX > 50) {
            prevSlide();
        } else if (diffX < -50) {
            nextSlide();
        } else {
            updateSlidePosition(); // snap back
        }

        startAutoplay();
    });

    // Manual radio control
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentIndex = index;
            updateSlidePosition();
            stopAutoplay();
            startAutoplay();
        });
    });

    // Pause autoplay on hover
    document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoplay);
    document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoplay);

    // Initialize
    updateSlidePosition();
    startAutoplay();
});
