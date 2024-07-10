const container = document.querySelector('.container'); // Replace with the actual class of your course container

let scrollPosition = 0;
let isScrolling = false;

function autoScroll() {
    if (!isScrolling) {
        isScrolling = true;
        const scrollAmount = 1; // Adjust this value to control scroll speed (higher = faster)
        scrollPosition += scrollAmount;
        container.scrollTo({ top: scrollPosition, behavior: 'smooth' });

        if (container.scrollHeight > container.clientHeight + scrollPosition) {
            // Scrolling hasn't reached the end, continue scrolling
            window.requestAnimationFrame(autoScroll);
        } else {
            // Reached the end, reset scroll position and potentially pause scrolling (optional)
            scrollPosition = 0;
            isScrolling = false; // Uncomment this line to pause after reaching the end
        }
    }
}

// Start auto scroll on page load (optional)
window.addEventListener('load', autoScroll);

// Optional: Pause scrolling on user interaction (e.g., clicking a course card)
container.addEventListener('click', () => {
    isScrolling = false;
});