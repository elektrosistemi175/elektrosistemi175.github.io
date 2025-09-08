let currentLang = 'ru';

const products = [
  {
    id: "2131716",
    name_ru: "Автоматический выключатель ETIMAT 10 1p C 16А",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p C 16А",
    price: 4.40,
    image: "/images/2131716.jpg"
  },
  {
    id: "2126720",
    name_ru: "Автоматический выключатель ETIMAT 10 3p+N В 40А",
    name_ua: "Автоматичний вимикач ETIMAT 10 3p+N В 40А",
    price: 28.60,
    image: "/images/2126720.jpg"
  }
];

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  grid.innerHTML = "";

  products.forEach(p => {
    const name = currentLang === 'ua' ? p.name_ua : p.name_ru;
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${name}" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22><rect width=%22200%22 height=%22150%22 fill=%22%230f1115%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%239aa3b2%22 font-size=%2214%22 font-family=%22Arial%22>${name}</text></svg>'" />
      <h3>${name}</h3>
      <p>${p.price.toFixed(2)} ₴</p>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      document.querySelectorAll(".lang-switch button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCatalog();
    });
  });
});
