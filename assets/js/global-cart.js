(function() {
    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cartCount.textContent = cart.length;
            cartCount.style.display = cart.length > 0 ? 'inline' : 'none';
        }
    }

    document.addEventListener('DOMContentLoaded', updateCartCount);

    window.addEventListener('storage', function(e) {
        if (e.key === 'cart') {
            updateCartCount();
        }
    });
})();
