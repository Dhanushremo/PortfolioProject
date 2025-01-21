// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Offset to account for the fixed navigation bar
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple Validation
        if (!name || !email || !message) {
            alert("Please fill in all fields!");
            return;
        }

        // Mock form submission success message
        alert("Thank you for reaching out, " + name + "! We'll get back to you soon.");

        // Reset form after submission
        contactForm.reset();
    });
}
