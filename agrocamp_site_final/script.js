document.addEventListener('DOMContentLoaded', () => {
  const highContrastBtn = document.getElementById('highContrast');
  const increaseFontBtn = document.getElementById('increaseFont');
  const decreaseFontBtn = document.getElementById('decreaseFont');
  const html = document.documentElement;

  // Contraste
  highContrastBtn.addEventListener('click', () => {
    const isActive = document.body.classList.toggle('high-contrast');
    highContrastBtn.setAttribute('aria-pressed', isActive);
  });

  // Controle de fonte
  let fontSize = 16;
  const updateFont = () => html.style.fontSize = `${fontSize}px`;

  increaseFontBtn.addEventListener('click', () => {
    if (fontSize < 24) {
      fontSize += 2;
      updateFont();
    }
  });

  decreaseFontBtn.addEventListener('click', () => {
    if (fontSize > 12) {
      fontSize -= 2;
      updateFont();
    }
  });

  // Skip link foco
  const skipLink = document.querySelector('.skip-link');
  skipLink.addEventListener('click', (e) => {
    const target = document.querySelector(skipLink.getAttribute('href'));
    target.setAttribute('tabindex', '-1');
    target.focus();
    setTimeout(() => target.removeAttribute('tabindex'), 1000);
  });
});