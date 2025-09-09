fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const grid = document.getElementById('productGrid');
    products.forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p><strong>Цена:</strong> <span style="color:#e91e63;">${p.price} ${p.currency}</span></p>
          <p><strong>Ток:</strong> ⚡ ${p.current}</p>
          <p><strong>Полюсов:</strong> 🔌 ${p.poles}</p>
          <p><strong>Отключение:</strong> 🛡 ${p.breaking}</p>
        </div>`;
    });
  })
  .catch(err => {
    document.getElementById('productGrid').innerHTML = '<p>Ошибка загрузки каталога.</p>';
    console.error('Ошибка загрузки JSON:', err);
  });
