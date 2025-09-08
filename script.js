// Язык по умолчанию
let currentLang = 'ru';
const currency = '₴';

// UI переводы
const i18n = {
  ru: {
    tagline: 'Сборка электрических щитов • Автоматы ETI',
    nav_catalog: 'Каталог',
    nav_contact: 'Контакты',
    hero_title: 'Сборка электрических щитов. Автоматы ETI.',
    hero_sub: 'Комплектация, подбор и поставка. Быстро, аккуратно, по ТЗ.',
    cta_view_catalog: 'Смотреть каталог',
    catalog_title: 'Каталог товаров',
    catalog_sub: 'Автоматические выключатели ETI — популярные номиналы и характеристики.',
    btn_details: 'Подробнее',
    btn_add: 'В запрос',
    contact_title: 'Контакты',
    contact_label_phone: 'Телефон:',
    contact_label_note: 'Заметка:',
    contact_note: 'Мы занимаемся только сборкой и поставкой, без монтажных работ.',
    footer_rights: 'Сборка электрических щитов • Автоматы ETI'
  },
  ua: {
    tagline: 'Збірка електричних щитів • Автомати ETI',
    nav_catalog: 'Каталог',
    nav_contact: 'Контакти',
    hero_title: 'Збірка електричних щитів. Автомати ETI.',
    hero_sub: 'Комплектація, підбір і поставка. Швидко, акуратно, за ТЗ.',
    cta_view_catalog: 'Переглянути каталог',
    catalog_title: 'Каталог товарів',
    catalog_sub: 'Автоматичні вимикачі ETI — популярні номінали та характеристики.',
    btn_details: 'Докладніше',
    btn_add: 'У запит',
    contact_title: 'Контакти',
    contact_label_phone: 'Телефон:',
    contact_label_note: 'Нотатка:',
    contact_note: 'Ми займаємося лише збіркою та поставкою, без монтажних робіт.',
    footer_rights: 'Збірка електричних щитів • Автомати ETI'
  }
};

// Товары (из твоей таблицы). Картинки ожидаются в /images/{id}.jpg
const products = [
  {
    id: "2131716",
    name_ru: "Автоматический выключатель ETIMAT 10 1p C 16А (10kA), ETI (2131716)",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p C 16А (10kA), ETI (2131716)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 4.40,
    image: "/images/2131716.jpg"
  },
  {
    id: "2151715",
    name_ru: "Автоматический выключатель ETIMAT 10 1p D 13А (10kA), ETI (2151715)",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p D 13А (10kA), ETI (2151715)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 5.80,
    image: "/images/2151715.jpg"
  },
  {
    id: "2153701",
    name_ru: "Автоматический выключатель ETIMAT 10 2p D 0,5А (10kA), ETI (2153701)",
    name_ua: "Автоматичний вимикач ETIMAT 10 2p D 0,5А (10kA), ETI (2153701)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 15.90,
    image: "/images/2153701.jpg"
  },
  {
    id: "2153707",
    name_ru: "Автоматический выключатель ETIMAT 10 2p D 1,6А (10kA), ETI (2153707)",
    name_ua: "Автоматичний вимикач ETIMAT 10 2p D 1,6А (10kA), ETI (2153707)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 15.90,
    image: "/images/2153707.jpg"
  },
  {
    id: "2126714",
    name_ru: "Автоматический выключатель ETIMAT 10 3p+N В 10А (10kA), ETI (2126714)",
    name_ua: "Автоматичний вимикач ETIMAT 10 3p+N В 10А (10kA), ETI (2126714)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 20.10,
    image: "/images/2126714.jpg"
  },
  {
    id: "2126716",
    name_ru: "Автоматический выключатель ETIMAT 10 3p+N В 16А (10kA), ETI (2126716)",
    name_ua: "Автоматичний вимикач ETIMAT 10 3p+N В 16А (10kA), ETI (2126716)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 20.10,
    image: "/images/2126716.jpg"
  },
  {
    id: "2126718",
    name_ru: "Автоматический выключатель ETIMAT 10 3p+N В 25А (10kA), ETI (2126718)",
    name_ua: "Автоматичний вимикач ETIMAT 10 3p+N В 25А (10kA), ETI (2126718)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 20.10,
    image: "/images/2126718.jpg"
  },
  {
    id: "2126720",
    name_ru: "Автоматический выключатель ETIMAT 10 3p+N В 40А (10kA), ETI (2126720)",
    name_ua: "Автоматичний вимикач ETIMAT 10 3p+N В 40А (10kA), ETI (2126720)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 28.60,
    image: "/images/2126720.jpg"
  },
  {
    id: "2126721",
    name_ru: "Автоматический выключатель ETIMAT 10 3p+N В 50А (6kA), ETI (2126721)",
    name_ua: "Автоматичний вимикач ETIMAT 10 3p+N В 50А (6kA), ETI (2126721)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 45.90,
    image: "/images/2126721.jpg"
  },
  {
    id: "2121714",
    name_ru: "Автоматический выключатель ETIMAT 10 1p B 10А (10kA), ETI (2121714)",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p B 10А (10kA), ETI (2121714)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 4.50,
    image: "/images/2121714.jpg"
  },
  {
    id: "2121715",
    name_ru: "Автоматический выключатель ETIMAT 10 1p B 13А (10kA), ETI (2121715)",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p B 13А (10kA), ETI (2121715)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 4.50,
    image: "/images/2121715.jpg"
  },
  {
    id: "2121716",
    name_ru: "Автоматический выключатель ETIMAT 10 1p B 16А (10kA), ETI (2121716)",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p B 16А (10kA), ETI (2121716)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 4.40,
    image: "/images/2121716.jpg"
  },
  {
    id: "2121717",
    name_ru: "Автоматический выключатель ETIMAT 10 1p B 20А (10kA), ETI (2121717)",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p B 20А (10kA), ETI (2121717)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 4.40,
    image: "/images/2121717.jpg"
  },
  {
    id: "2121718",
    name_ru: "Автоматический выключатель ETIMAT 10 1p B 25А (10kA), ETI (2121718)",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p B 25А (10kA), ETI (2121718)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 4.50,
    image: "/images/2121718.jpg"
  },
  {
    id: "2121719",
    name_ru: "Автоматический выключатель ETIMAT 10 1p B 32А (10kA), ETI (2121719)",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p B 32А (10kA), ETI (2121719)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 4.90,
    image: "/images/2121719.jpg"
  },
  {
    id: "2121720",
    name_ru: "Автоматический выключатель ETIMAT 10 1p B 40А (10kA), ETI (2121720)",
    name_ua: "Автоматичний вимикач ETIMAT 10 1p B 40А (10kA), ETI (2121720)",
    brand: "ETI",
    category: "Автоматические выключатели",
    price: 6.40,
    image: "/images/2121720.jpg"
  }
];

// Текст для alt если нет картинки
const ALT_FALLBACK = {
  ru: 'Изображение товара',
  ua: 'Зображення товару'
};

// Применение перевода к элементам с data-i18n
function applyI18n() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = i18n[currentLang][key];
    if (text) el.textContent = text;
  });
  // Рендер каталога заново для смены языка на карточках
  renderCatalog();
  // Кнопки языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// Форматирование цены
function formatPrice(value) {
  if (typeof value !== 'number') return '';
  return `${value.toFixed(2)} ${currency}`;
}

// Рендер каталога
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  grid.innerHTML = '';

  products.forEach(p => {
    const name = currentLang === 'ua' ? p.name_ua : p.name_ru;
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-media">
        <img loading="lazy" src="${p.image}"
             alt="${name || ALT_FALLBACK[currentLang]}"
             onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,${encodeURIComponent(placeholderSVG(name))}';" />
      </div>
      <div class="product-body">
        <h3 class="product-name" title="${escapeHtml(name)}">${escapeHtml(name)}</h3>
        <div class="product-meta">
          <span class="price">${formatPrice(p.price)}</span>
          <span class="brand">${escapeHtml(p.brand)}</span>
        </div>
        <div class="card-actions">
          <button class="btn" aria-label="details" data-i18n="btn_details">${i18n[currentLang].btn_details}</button>
          <button class="btn btn-primary" aria-label="add" data-i18n="btn_add">${i18n[currentLang].btn_add}</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Минимальный placeholder SVG, если нет фото
function placeholderSVG(title) {
  const t = (title || (currentLang === 'ua' ? 'Товар' : 'Товар')).slice(0, 26);
  return `
    <svg xmlns='http://www.w3.org/2000/svg' width='640' height='480'>
      <rect width='100%' height='100%' fill='%230b0d11'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
            font-family='Inter, Arial' font-size='24' fill='%239aa3b2'>${escapeXml(t)}</text>
    </svg>
  `;
}

// Безопасные экранирования
function escapeHtml(str='') {
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
function escapeXml(str='') {
  return String(str).replace(/[<>&'"]/g, s => ({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[s]));
}

// Переключение языка
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (btn) {
    const lang = btn.dataset.lang;
    if (lang && (lang === 'ru' || lang === 'ua')) {
      currentLang = lang;
      applyI18n();
      // Скролл к началу баннера для явного эффекта смены языка
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  applyI18n();
});
