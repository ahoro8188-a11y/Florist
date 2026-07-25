// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Scroll-reveal animation
const revealTargets = document.querySelectorAll(
  '.about, .services, .contact, .intro-teaser, .feature-strip, .founder, .contact-page, .gallery-page'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// Gallery filter
const filterBtns = document.querySelectorAll('.filter-btn');
const masonryItems = document.querySelectorAll('.masonry-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    masonryItems.forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
    });
  });
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const note = document.getElementById('formNote');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = "Thanks for reaching out — we'll reply within a day.";
    contactForm.reset();
  });
}
