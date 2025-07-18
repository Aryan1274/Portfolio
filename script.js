// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('nav .nav-list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      navList.classList.toggle('is-active');
    });
  }

  // Remove or comment out this form submission handler to let Formspree handle form submissions
  /*
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = contactForm.elements['name'].value.trim();
      const email = contactForm.elements['email'].value.trim();
      const message = contactForm.elements['message'].value.trim();

      if (!name) {
        alert('Please enter your name.');
        contactForm.elements['name'].focus();
        return;
      }

      if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        contactForm.elements['email'].focus();
        return;
      }

      if (!message) {
        alert('Please enter a message.');
        contactForm.elements['message'].focus();
        return;
      }

      // Allow the default submission to the form action URL (Formspree)
      contactForm.submit();
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
  */
});
