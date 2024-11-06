document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Dynamic header background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        }
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('show');
});
