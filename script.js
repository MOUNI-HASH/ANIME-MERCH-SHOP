let cart = [];

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.parentElement.getAttribute('data-id');
        cart.push(productId);
        updateCart();
    });
});

// Update cart display
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    // Update cart page
    if (document.getElementById('cart-items')) {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = cart.map(id => {
            return `<p>Product ID: ${id}</p>`;
        }).join('');
        
        const cartTotal = document.getElementById('cart-total');
        const totalPrice = cart.length * 30;  // Example pricing logic
        cartTotal.innerHTML = `<p>Total: $${totalPrice}</p>`;
    }
}
