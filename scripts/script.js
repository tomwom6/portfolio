// Mobile menu toggle

// Inline navbar and footer HTML content
if (window.location.pathname === "/index.html") {
    document.getElementById('navbar').innerHTML = `
<nav>
    <div class="nav-container">
        <a href="https://tomwdev.com/index.html" class="logo">TW</a>
        <ul class="nav-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
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
}

else {
    document.getElementById('navbar').innerHTML = `
<nav>
    <div class="nav-container">
        <a href="https://tomwdev.com/index.html" class="logo">TW</a>
        <ul class="nav-links">
            <li><a href="https://tomwdev.com/index.html#projects">Projects</a></li>
            <li><a href="https://tomwdev.com/index.html#about">About</a></li>
            <li><a href="https://tomwdev.com/index.html#contact">Contact</a></li>
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
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
} else {
    console.error('Hamburger or nav-links not found in the DOM');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// Smooth scrolling for "Back to Top" button
document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling to the top
    });
});

