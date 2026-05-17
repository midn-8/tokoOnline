const products = [
  { id: 1, name: "Laptop", price: 12000000, stock: 5 },
  { id: 2, name: "Mouse", price: 150000, stock: 20 },
  { id: 3, name: "Keyboard", price: 350000, stock: 15 },
];

function getProducts() {
  return products;
}

function renderProductList() {
  const container = document.getElementById("main-content");
  container.innerHTML = products.map(p =>
    `<div class="product-card">
       <h3>${p.name}</h3>
       <p>Harga: Rp${p.price.toLocaleString()}</p>
       <p>Stok: ${p.stock}</p>
     </div>`
  ).join("");
}

