document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-slides');
    const radioButtons = document.querySelectorAll('input[name="carousel"]');
    let currentIndex = 0;
    
    // Add auto-carousel class to enable animations
    carousel.classList.add('auto-carousel');
    
    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % radioButtons.length;
        radioButtons[currentIndex].checked = true;
    }, 5000);
    
    // Pause animations on hover
    carousel.addEventListener('mouseenter', () => {
        carousel.classList.remove('auto-carousel');
    });
    
    // Resume animations when mouse leaves
    carousel.addEventListener('mouseleave', () => {
        carousel.classList.add('auto-carousel');
    });
});