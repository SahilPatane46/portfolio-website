// Form submission handler for contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for your message, ' + name + '! I will get back to you soon.');
    // You could add an actual email submission here using an API (e.g., emailJS or a server endpoint)
    document.getElementById('contact-form').reset(); // Clear the form
  } else {
    alert('Please fill out all fields.');
  }
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust offset if needed
      behavior: 'smooth'
    });
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let currentSectionId = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60; // Account for header height
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});
