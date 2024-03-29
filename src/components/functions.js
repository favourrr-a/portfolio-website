//this file will contain any functions i'll use in the website
const circles = document.querySelectorAll('.circle');

// Define initial position of circles
let position = 0;

// Function to move circles
function moveCircles() {
    // Update position for each circle
    circles.forEach(circle => {
        // Calculate new position
        position += 1; // Adjust speed as needed
        // Update position of the circle
        circle.style.left = position + 'px';
        // Reset position if it goes beyond the screen width
        if (position > window.innerWidth) {
            position = -50; // Reset to the left of the screen
        }
    });

    // Request next frame
    requestAnimationFrame(moveCircles);
}

export default moveCircles;