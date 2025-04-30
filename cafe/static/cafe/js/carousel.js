document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide img');
    const radios = document.querySelectorAll('input[name="carousel"]');
    let currentIndex = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
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