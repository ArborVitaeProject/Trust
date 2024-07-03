// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);

            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const bufferOffset = 140; // Adjust this value as needed
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - bufferOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
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
