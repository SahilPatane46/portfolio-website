document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name) {
    showPopup('Please enter your name.');
    return;
  }

  if (!validateEmail(email)) {
    showPopup('Please enter a valid email address.');
    return;
  }

  if (!message) {
    showPopup('Please enter your message.');
    return;
  }

  // If everything is valid
  showPopup('Message sent successfully!');
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showPopup(message) {
  const popup = document.getElementById('popup-message');
  const popupText = document.getElementById('popup-text');

  popupText.textContent = message;
  popup.style.display = 'flex'; // Show the popup
}

function closePopup() {
  const popup = document.getElementById('popup-message');
  popup.style.display = 'none'; // Hide the popup
}



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
