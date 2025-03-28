// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    /// when clicking the hamburger icon, toggle the active class on the nav-links
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            console.log('Nav link clicked, nav-links closed');
        });
    });
} else {
    console.error('Hamburger or nav-links not found in the DOM');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load navbar and footer html into the pages.
fetch('/pages/resources/navbar.html')
.then(response => response.text())
.then(html => document.getElementById('navbar').innerHTML = html);
fetch('/pages/resources/navbar.html')
.then(response => response.text())
.then(html => document.getElementById('footer').innerHTML = html);