// assets/js/script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// assets/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 500; // Adjust this value based on your preference

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            console.log(elementTop, windowHeight, revealPoint);
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
            else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))