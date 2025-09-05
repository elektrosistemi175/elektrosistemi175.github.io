// Запуск после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
  console.log("Сайт загружен и готов к работе!");

  // Плавная прокрутка по якорям
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Анимация появления секций при прокрутке
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});
.hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}
