document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const radios = document.querySelectorAll('input[name="carousel"]');
    let currentSlide = 0;
    let autoplayInterval;
    const INTERVAL = 5000;

    // Initialize first slide
    slides[0].classList.add('active');

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        // Show selected slide
        slides[index].classList.add('active');
        // Update radio button
        radios[index].checked = true;
    }

    // Handle radio button clicks
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto advance slides
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, INTERVAL);
});