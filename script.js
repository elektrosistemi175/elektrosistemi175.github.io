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
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('hidden');
}

function checkout() {
  alert('Заказ оформлен! Мы свяжемся с вами.');
}
