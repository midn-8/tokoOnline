const products = [
  { id: 1, name: "Laptop", price: 12000000, stock: 5 },
  { id: 2, name: "Mouse", price: 150000, stock: 20 },
  { id: 3, name: "Keyboard", price: 350000, stock: 15 },
];

function getProducts() {
  return products;
}
function formatRupiah(amount) {
  return "Rp" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderProductList() {
  const container = document.getElementById("main-content");
  container.innerHTML = products.map(p =>
    `<div class="product-card">
       <h3>${p.name}</h3>
       <p>Harga: ${formatRupiah(p.price)}</p>
       <p>Stok: ${p.stock}</p>
     </div>`
  ).join("");
}
