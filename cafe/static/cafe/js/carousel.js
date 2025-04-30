document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const radios = document.querySelectorAll('input[name="carousel"]');
    let currentIndex = 0;
    
    // Debug log to check if elements are found
    console.log('Found slides:', slides.length);
    console.log('Found radios:', radios.length);

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.opacity = '0';
            slide.style.visibility = 'hidden';
            slide.classList.remove('active');
        });
        
        // Show current slide
        slides[index].style.opacity = '1';
        slides[index].style.visibility = 'visible';
        slides[index].classList.add('active');
        radios[index].checked = true;

        // Debug log
        console.log('Showing slide:', index);
    }

    // Auto-advance carousel
    const intervalId = setInterval(() => {
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

    // Cleanup on page unload
    window.addEventListener('unload', () => {
        clearInterval(intervalId);
    });
});