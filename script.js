// Improved Script.js code with personalized message

function submitContactForm() {
    // Assume form submission logic is handled here

    // After successful submission, show a personalized message
    alert("Faço votos que esteja bem!");
}

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    submitContactForm(); // Call the function to handle the submission
});
