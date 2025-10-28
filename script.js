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
        element.scrollIntoView({ behavior: "smooth", block: "start" }); // Scrolls to the top of the element
    }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', function () {

    // --- Smooth Scroll for internal anchors ---
    document.addEventListener('click', function (event) {
        // Find the closest anchor link navigating internally
        const anchor = event.target.closest('a[href^="#"]');
        if (!anchor) return; // Exit if it's not an internal anchor

        const hash = anchor.getAttribute('href');
        // Ensure it's not just "#"
        if (!hash || hash === '#') return; 

        const id = hash.slice(1); // Get the ID without the '#'
        if (!id) return; // Exit if no ID is found

        // Check if the target element exists
        const targetElement = document.getElementById(id);
        if (targetElement) {
            event.preventDefault(); // Prevent default jump
            scrollToId(id); // Scroll smoothly
        }
        // If the element doesn't exist, allow the default browser behavior (might navigate away or do nothing)
    });

    // Note: FAQ and Form submission logic are removed as they are not needed for this page.
});

