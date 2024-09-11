// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Predefined name and email
    const name = "Yaseen";
    const email = "yaseensahoo97@gmail.com";
    
    // Get the message from the form input
    const message = document.getElementById('message').value;
    
    // Log the name, email, and message to the console
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    
    // Display a thank you alert
    alert('Thank you for your message!');
    
    // Reset the form fields
    document.getElementById('contact-form').reset();
    
    // Start letter-by-letter animation after form submission
    applyLetterAnimation();
});

// Function to apply letter-by-letter animation
function applyLetterAnimation() {
    // Animate the name section (assuming .name-container > span for each letter)
    document.querySelectorAll('.name span').forEach((span, index) => {
        span.style.setProperty('--i', index);  // Use a custom CSS property for animation delay
        span.classList.add('animate-span');    // Add the animation class
    });

    // Find the heading to apply letter-by-letter animation (e.g., #os-phrases > h2)
    const heading = document.querySelector('#os-phrases > h2');
    const text = heading.textContent.split(''); // Split the heading text into individual letters
    
    heading.innerHTML = ''; // Clear the existing heading content
    
    // Rebuild the heading by wrapping each letter in a span
    text.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter; // Set the letter text
        span.style.animationDelay = `${index * 0.1}s`; // Add staggered animation delay
        span.classList.add('animate-letter'); // Add a class for styling/animation
        heading.appendChild(span); // Append the letter span to the heading
    });
}

// Apply the letter animation once the page is fully loaded
window.addEventListener('load', applyLetterAnimation);
