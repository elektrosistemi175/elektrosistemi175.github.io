let cart = [];

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById('catalog');
    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price} ₴</p>
        <button onclick="addToCart(${product.id})">Добавить в корзину</button>
      `;
      catalog.appendChild(card);
    });
  });

function addToCart(id) {
  cart.push(id);
  document.getElementById('cart-count').textContent = cart.length;
  animateCart();
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('hidden');
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      const items = cart.map(id => data.find(p => p.id === id));
      items.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${item.name} — ${item.price} ₴</p>`;
        cartItems.appendChild(div);
      });
    });
}

function checkout() {
  alert('Заказ оформлен! Мы свяжемся с вами.');
  cart = [];
  document.getElementById('cart-count').textContent = 0;
  toggleCart();
}

function animateCart() {
  const icon = document.querySelector('.cart-icon');
  icon.style.transform = 'scale(1.2)';
  setTimeout(() => icon.style.transform = 'scale(1)', 300);
}
