// Mobile Menu Logic
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const menuIconSpan = menuBtn.querySelector('span');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    const isActive = mobileMenu.classList.contains('active');
    
    // Switch Icon
    menuIconSpan.innerText = isActive ? 'close' : 'menu';
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isActive ? 'hidden' : '';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuIconSpan.innerText = 'menu';
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', toggleMobileMenu);

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu when resizing to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});

// Scroll Reveal Animation (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach(el => observer.observe(el));
});

// Navbar Scroll Effect (Optional: Hide/Show or enhance blur)
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('shadow-lg');
    } else {
        navbar.classList.add('shadow-lg');
    }
    lastScroll = currentScroll;
});