// Grab elements
const contactToggle = document.getElementById('contactToggle');
const contactPanel = document.getElementById('contactPanel');
const closePanel = document.getElementById('closePanel');

// Open the panel
contactToggle.addEventListener('click', () => {
  contactPanel.classList.add('open');
});

// Close the panel
closePanel.addEventListener('click', () => {
  contactPanel.classList.remove('open');
});
document.addEventListener('DOMContentLoaded', function() {
  const contactToggle = document.getElementById('contactToggle');
  const contactPanel = document.getElementById('contactPanel');
  const closePanel = document.getElementById('closePanel');
  const contactForm = document.getElementById('contactForm');
  const confirmationMessage = document.getElementById('confirmationMessage');

  // Toggle the contact panel when CTA is clicked.
  contactToggle.addEventListener('click', function() {
    // If the panel isn't open yet, open it and reset the form
    if (!contactPanel.classList.contains('open')) {
      // Reset in case there was a previous submission.
      contactForm.reset();
      contactForm.style.display = 'block';
      confirmationMessage.style.display = 'none';
      contactPanel.classList.add('open');
    } else {
      // If the panel is already open (for example, after submission), reset the form.
      contactForm.reset();
      contactForm.style.display = 'block';
      confirmationMessage.style.display = 'none';
    }
  });

  // Close the panel when the close button is clicked.
  closePanel.addEventListener('click', function() {
    contactPanel.classList.remove('open');
  });

  // Handle form submission.
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission.

    // After submission, hide the form and show the confirmation message.
    contactForm.style.display = 'none';
    confirmationMessage.style.display = 'block';
  });
});
