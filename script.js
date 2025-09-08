let currentLang = 'ru';

const i18n = {
  ru: {
    catalog_title: 'Каталог товаров',
    btn_details: 'Подробнее',
    btn_add: 'В запрос',
    filter_current: 'Ток',
    filter_char: 'Характеристика',
    filter_poles: 'Полюсы'
  },
  ua: {
    catalog_title: 'Каталог товарів',
    btn_details: 'Докладніше',
    btn_add: 'У запит',
    filter_current: 'Струм',
    filter_char: 'Характеристика',
    filter_poles: 'Полюси'
  }
};

const products = [
  {
    id: "2131716",
    name_ru: "Автоматический выключатель ETIMAT 10 1p C 16А",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p C 16А",
    price: 4.40,
    current: "16",
    characteristic: "C",
    poles: "1p",
    image: "/images/2131716.jpg"
  },
  {
    id: "2126720",
    name_ru: "Автоматический выключатель ETIMAT 10 3p+N В 40А",
    name_ua: "Автоматичний вимикач ETIMAT 10 3p+N В 40А",
    price: 28.60,
    current: "40",
    characteristic: "B",
    poles: "3p+N",
    image: "/images/2126720.jpg"
  }
];

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  grid.innerHTML = "";

  const currentFilter = document.getElementById("filter-current").value;
  const charFilter = document.getElementById("filter-characteristic").value;
  const polesFilter = document.getElementById("filter-poles").value;

  const filtered = products.filter(p =>
    (!currentFilter || p.current === currentFilter) &&
    (!charFilter || p.characteristic === charFilter) &&
    (!polesFilter || p.poles === polesFilter)
  );

  filtered.forEach(p => {
    const name = currentLang === 'ua' ? p.name_ua : p.name_ru;
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${name}" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22><rect width=%22200%22 height=%22150%22 fill=%22%230f1115%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%239aa3b2%22 font-size=%2214%22 font-family=%22Arial%22>${name}</text></svg>'" />
      <h3>${name}</h3>
      <p>${p.price.toFixed(2)} ₴</p>
      <div class="card-actions">
        <button class="btn">${i18n[currentLang].btn_details}</button>
        <button class="btn btn-primary">${i18n[currentLang].btn_add}</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function applyTranslations() {
  document.querySelector("h2").textContent = i18n[currentLang].catalog_title;
  document.getElementById("filter-current").options[0].textContent = i18n[currentLang].filter_current;
  document.getElementById("filter-characteristic").options[0].textContent = i18n[currentLang].filter_char;
  document.getElementById("filter-poles").options[0].textContent = i18n[currentLang].filter_poles;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  applyTranslations();

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      document.querySelectorAll(".lang-switch button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyTranslations();
      renderCatalog();
    });
  });

  document.querySelectorAll("select").forEach(sel => {
    sel.addEventListener("change", renderCatalog);
  });
});
