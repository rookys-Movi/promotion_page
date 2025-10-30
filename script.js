// --- Initialize Animate On Scroll (AOS) ---
AOS.init({
    duration: 800,
    once: true,
    offset: 50, // Trigger animations slightly early
});

// --- Smooth Scroll Helper ---
function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', function () {
    
    // --- Smooth Scroll for internal anchors ---
    document.addEventListener('click', function (event) {
        const anchor = event.target.closest('a[href^="#"]');
        if (!anchor) return;
        
        const hash = anchor.getAttribute('href');
        if (!hash || hash === '#') return;

        const id = hash.slice(1);
        if (!id) return;

        const targetElement = document.getElementById(id);
        if (targetElement) {
            event.preventDefault();
            scrollToId(id);
        }
    });

    // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = item.querySelector('.faq-icon');
        
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});

