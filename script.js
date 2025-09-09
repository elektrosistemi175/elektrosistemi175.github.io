fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('catalog');
    products.forEach(p => {
      container.innerHTML += `
        <div class="product">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p><strong>Цена:</strong> ${p.price} ${p.currency}</p>
          <p><strong>Ток:</strong> ${p.current}</p>
          <p><strong>Полюсов:</strong> ${p.poles}</p>
          <p><strong>Отключающая способность:</strong> ${p.breaking}</p>
        </div>`;
    });
  });
