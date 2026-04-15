// Netflix-style horizontal scrolling
document.addEventListener('DOMContentLoaded', function() {
    const galleryScrolls = document.querySelectorAll('.gallery-scroll');

    galleryScrolls.forEach(scroll => {
        const nextBtn = scroll.parentElement.querySelector('.next');
        const prevBtn = scroll.parentElement.querySelector('.prev');

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                scroll.scrollBy({ left: 320, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                scroll.scrollBy({ left: -320, behavior: 'smooth' });
            });
        }
    });

    // Add hover effects for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Smooth scroll for buttons
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            document.querySelector('.trending').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
