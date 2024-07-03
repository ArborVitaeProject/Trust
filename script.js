// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            const offset = window.innerWidth < 768 ? 125 : 165; // Adjust the offset for mobile and desktop
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition - offset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close the dropdown menu if a link is clicked
            closeDropdown();
        }
    });
});

// Function to close dropdown menu
function closeDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent) {
        dropdownContent.style.display = 'none';
    }
}

// Function to toggle dropdown menu
function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    }
}

// Add event listener to the dropdown button
document.querySelector('.dropbtn').addEventListener('click', function(e) {
    e.stopPropagation();
    toggleDropdown();
});

// Close the dropdown menu if clicking outside of it
document.addEventListener('click', function(e) {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent && !e.target.closest('.dropdown')) {
        dropdownContent.style.display = 'none';
    }
});

// Prevent closing the dropdown menu when clicking inside it
document.querySelector('.dropdown-content').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Contact Form Submission
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received.`);
    
    // Clear form
    document.getElementById('contact-form').reset();
});

// Fancy Effects
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('header');
    hero.style.opacity = 0;
    setTimeout(() => {
        hero.style.transition = 'opacity 2s';
        hero.style.opacity = 1;
    }, 500);
    
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        setTimeout(() => {
            section.style.transition = 'opacity 1s';
            section.style.opacity = 1;
        }, 1000 + index * 500);
    });
});
