// Scroll to section when button clicked
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Optional: Add glow effect to mod cards on hover (extra JS)
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 20px #d37fff';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});