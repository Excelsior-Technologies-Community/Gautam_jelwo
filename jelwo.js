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

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".sidebar .close-btn");
const sidebar = document.querySelector(".sidebar");
const menuOverlay = document.querySelector(".menu-overlay");

console.log(menuBtn);
console.log(closeBtn);
console.log(sidebar);
console.log(menuOverlay);

if (menuBtn && closeBtn && sidebar && menuOverlay) {

    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
        menuOverlay.classList.add("active");
    });

    function closeMenu() {
        sidebar.classList.remove("active");
        menuOverlay.classList.remove("active");
    }

    closeBtn.addEventListener("click", closeMenu);
    menuOverlay.addEventListener("click", closeMenu);

}