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
