// ==================== */
/* SMOOTH SCROLL & INTERACTIONS */
// ==================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Applesamosa landing page loaded');
    initSmoothScroll();
    initScrollAnimations();
});

// ==================== */
/* SMOOTH SCROLL */
// ==================== */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== */
/* SCROLL ANIMATIONS */
// ==================== */

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Section is visible - could add animation triggers here
                console.log(`Section visible: ${entry.target.id}`);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });
}

// ==================== */
/* NAVIGATION ACTIVE STATE */
// ==================== */

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            
            if (entry.isIntersecting) {
                // Find corresponding nav link
                navLinks.forEach(link => {
                    const targetSection = link.getAttribute('href')?.substring(1);
                    if (targetSection === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ==================== */
/* CONSOLE LOG */
// ==================== */

console.log('Applesamosa: Portfolio Landing Page');
console.log('Sections: Hero, Mirror Machine, Tech Republic, Applesamosa');
console.log('Design System: Folio-style with consistent color theme');
