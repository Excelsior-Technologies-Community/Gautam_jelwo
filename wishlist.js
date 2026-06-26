
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateWishlistCount() {
    const count = document.getElementById("wishlistCount");

    if (count) {
        count.innerText = `(${wishlist.length})`;
    }
}

const wishlistItems = document.getElementById("wishlistItems");


function addToWishlist(name, price, image) {

    wishlist.push({
        name,
        price,
        image
    });

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistCount();

    alert("✅ Product added to wishlist!");
}

function renderWishlist() {

    if (!wishlistItems) return;

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = "<h2>Wishlist is empty <u>return to store</u></h2>";
        return;
    }

    wishlistItems.innerHTML = wishlist.map((item, index) => `
        <div class="wishlist-item">
            <img src="${item.image}" width="100">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <button onclick="removeWishlist(${index})">
                Remove
            </button>
        </div>
    `).join("");
}

function removeWishlist(index) {

    wishlist.splice(index, 1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistCount();
    renderWishlist();
}



updateWishlistCount();
renderWishlist();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               