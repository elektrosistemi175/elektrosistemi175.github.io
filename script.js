let cart = [];
let products = [];
let currentLang = 'ru';

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    renderCatalog(products);
  });

function renderCatalog(list) {
  const catalog = document.getElementById('catalog');
  catalog.innerHTML = '';
  list.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price} ₴</p>
      <button onclick="addToCart(${product.id})">${getText('add_to_cart')}</button>
    `;
    catalog.appendChild(card);
  });
}

function addToCart(id) {
  cart.push(id);
  document.getElementById('cart-count').textContent = cart.length;
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('hidden');
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  const items = cart.map(id => products.find(p => p.id === id));
  items.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<p>${item.name} — ${item.price} ₴</p>`;
    cartItems.appendChild(div);
  });
}

function checkout() {
  alert('Заказ оформлен! Мы свяжемся с вами.');
  cart = [];
  document.getElementById('cart-count').textContent = 0;
  toggleCart();
}

function filterCategory(category) {
  if (!category) return renderCatalog(products);
  const filtered = products.filter(p => p.category === category);
  renderCatalog(filtered);
}

function searchProducts() {
  const query = document.getElementById('search').value.toLowerCase();
  const result = products.filter(p => p.name.toLowerCase().includes(query));
  renderCatalog(result);
}

function switchLang(lang) {
  currentLang = lang;
  fetch('lang.json')
    .then(res => res.json())
    .then(data => {
      const t = data[lang];
      document.getElementById('nav-catalog').textContent = t.catalog;
      document.getElementById('nav-cart').textContent = t.cart;
      document.getElementById
