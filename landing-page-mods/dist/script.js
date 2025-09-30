function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 20px #d37fff';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});
