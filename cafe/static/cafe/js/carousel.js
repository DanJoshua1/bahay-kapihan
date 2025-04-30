document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide img');
    const radios = document.querySelectorAll('input[name="carousel"]');
    let currentIndex = 0;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.opacity = '0';
        });
        
        // Show current slide
        slides[index].style.opacity = '1';
        radios[index].checked = true;
    }

    // Auto-advance carousel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);

    // Handle manual navigation
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Show first slide initially
    showSlide(0);
});