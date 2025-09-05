// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Анимация появления карточек
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.card').forEach(card => observer.observe(card));

// Эффект заголовка
const title = document.querySelector('.animate-title');
title.innerHTML = title.textContent.split('').map((letter, i) =>
  `<span style="animation-delay:${i * 0.05}s">${letter}</span>`
).join('');
