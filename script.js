// Modal functionality
const modal = document.getElementById('joinModal');
const btn = document.getElementById('joinBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = () => { modal.style.display = 'block'; }
span.onclick = () => { modal.style.display = 'none'; }
window.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; }

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Fade-in ministry cards
const cards = document.querySelectorAll('.card');
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.style.opacity = 1;
  });
}, { threshold: 0.3 });

cards.forEach(card => cardObserver.observe(card));
