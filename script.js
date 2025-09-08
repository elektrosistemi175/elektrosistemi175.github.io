const products = [
  {
    id: "2131716",
    name: "ETIMAT 10 1p C 16А",
    characteristic: "C",
    current: "16",
    poles: "1p",
    brand: "ETI",
    price: 4.40,
    image: "/images/2131716.jpg"
  },
  {
    id: "2126720",
    name: "ETIMAT 10 3p+N В 40А",
    characteristic: "B",
    current: "40",
    poles: "3p+N",
    brand: "ETI",
    price: 28.60,
    image: "/images/2126720.jpg"
  },
  // Добавь остальные товары по аналогии
];

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  grid.innerHTML = "";
  const char = document.getElementById("filter-characteristic").value;
  const curr = document.getElementById("filter-current").value;
  const poles = document.getElementById("filter-poles").value;

  const filtered = products.filter(p =>
    (!char || p.characteristic === char) &&
    (!curr || p.current === curr) &&
    (!poles || p.poles === poles)
  );

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price.toFixed(2)} ₴</p>
      <small>${p.brand}</small>
    `;
    grid.appendChild(card);
  });
}

document.querySelectorAll("select").forEach(sel => {
  sel.addEventListener("change", renderCatalog);
});

document.addEventListener("DOMContentLoaded", renderCatalog);
