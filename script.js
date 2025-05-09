fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('product-list');
    data.forEach(product => {
      list.innerHTML += `
        <div class="card">
          <a href="product.html?id=${product.id}">
            <img src="${product.image}" width="100" />
            <h3>${product.title}</h3>
          </a>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`;
    });
  });

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

