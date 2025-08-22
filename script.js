// Smooth scroll fade-in for sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.animation = "fadeInSection 1s forwards";
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// RSVP Popup
const rsvpBtn = document.getElementById('rsvpBtn');
const popup = document.getElementById('rsvpPopup');
const closeBtn = document.querySelector('.popup .close');

rsvpBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == popup) popup.style.display = 'none';
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
