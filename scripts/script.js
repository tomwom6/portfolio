// Mobile menu toggle

// Inline navbar and footer HTML content
document.getElementById('navbar').innerHTML = `
<nav>
    <div class="nav-container">
        <a href="https://tomwom6.github.io/portfolio/index.html" class="logo">TW</a>
        <ul class="nav-links">
            <li><a href="https://tomwom6.github.io/portfolio/index.html#projects">Projects</a></li>
            <li><a href="https://tomwom6.github.io/portfolio/index.html#about">About</a></li>
            <li><a href="https://tomwom6.github.io/portfolio/index.html#contact">Contact</a></li>
        </ul>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>
`;

document.getElementById('footer').innerHTML = `
<footer>
    <p>2025 Tom Wilderspin. All rights reserved.</p>
    <a href="#" class="back-to-top">↑</a>
</footer>
`;


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

