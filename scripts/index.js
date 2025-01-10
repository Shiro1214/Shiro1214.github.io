
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 500; // Adjust this value based on your preference
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const sectionId = element.id;
            const navItem = sectionId.slice(0,8) === "project" ? document.getElementById("project-section-nav"): document.getElementById(`${sectionId}-nav`);
            // revealing
            if (elementTop < windowHeight - revealPoint) {
                console.log(sectionId.slice(0,8));
                element.classList.add('visible');
                console.log(sectionId);
                console.log(navItem);
                if (navItem != null) 
                navItem.classList.add('activeNav');
            }
            else if (navItem.id === "project-section-nav" && navItem.classList.contains('activeNav') && sectionId !== "project-section")
            {
                navItem.classList.add('activeNav');
            }
            else {
                element.classList.remove('visible');
                if (navItem != null) 
                navItem.classList.remove('activeNav');
            }
            // revealed
            if (elementTop < -windowHeight + 200 && sectionId.slice(0,8) !== "project"){
                if (navItem != null) 
                navItem.classList.remove('activeNav');
            }else if (elementTop < -windowHeight + 200 && sectionId === "project1"){
                if (navItem != null) 
                navItem.classList.remove('activeNav');
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