document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});

// Add some interactive animations
const header = document.querySelector('header');
header.addEventListener('mouseover', function() {
    header.style.backgroundColor = '#3cb371';
});
header.addEventListener('mouseout', function() {
    header.style.backgroundColor = '#2e8b57';
});
