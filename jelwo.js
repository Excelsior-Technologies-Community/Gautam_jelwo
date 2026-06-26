let cart = JSON.parse(localStorage.getItem("cart")) || [];

function openCart() {
    document.getElementById("cartDrawer").classList.add("active");
    document.getElementById("cartOverlay").classList.add("active");
}

function closeCart() {
    document.getElementById("cartDrawer").classList.remove("active");
    document.getElementById("cartOverlay").classList.remove("active");
}

function addToCart(name, price, image) {

    cart.push({ name, price, image });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();
    openCart();

}

function updateCart() {

    document.getElementById("cartCount").innerText = `(${cart.length})`;

    const cartItems = document.getElementById("cartItems");

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your cart is empty</p>
                  <a href="collection.html" class="shop-btn">CONTINUE SHOPPING</a>
            </div>
        `;
        return;
    }

    let total = 0;

    cartItems.innerHTML = cart.map((item, index) => {

        total += item.price;

        return `
            <div class="cart-item">
                <div class="cart-img">
                  <img src="${item.image}" alt="${item.name}">
                         </div>
                  <div class="cart-txt">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                   </div>
         
                <button onclick="removeItem(${index})">✕</button>
            </div>
        `;
    }).join("");

    document.getElementById("subtotal").innerText = `₹${total}`;
}

function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();
}

updateCart();

function updateWishlistCount() {

    const count = document.getElementById("wishlistCount");

    if (count) {
        count.innerText = `(${wishlist.length})`;
    }
}

updateWishlistCount();