// script.js

// Like Button Functionality
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        const likeCountElement = button.querySelector('.like-count');
        let likeCount = parseInt(likeCountElement.textContent);
        likeCount++;
        likeCountElement.textContent = likeCount;
    });
});

// Comment Modal Functionality
document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Preload any required data for comments if necessary.
        console.log('Comment button clicked');
    });
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Category Accordion Functionality
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        // Expand or collapse categories when clicked.
        console.log('Category accordion toggled');
    });
});

// Form Submission Handler
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); // Prevent actual form submission for demo purposes.

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Form submitted: Name=${name}, Email=${email}, Message=${message}`);

    // Reset form fields after submission.
    event.target.reset();
    alert('Thank you for reaching out!');
});
