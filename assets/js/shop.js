document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const checkoutForm = document.getElementById('checkout-form');
    let cart = [];

    loadCart();
    checkAndClearCart();

    // Handle quantity selection
    document.querySelectorAll('.quantity-selector').forEach(selector => {
        const decreaseBtn = selector.querySelector('.decrease');
        const increaseBtn = selector.querySelector('.increase');
        const input = selector.querySelector('.quantity-input');

        decreaseBtn.addEventListener('click', () => updateQuantity(input, -1));
        increaseBtn.addEventListener('click', () => updateQuantity(input, 1));
        input.addEventListener('change', () => validateQuantity(input));
    });

    // Handle "Add to Cart" button clicks
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            console.log('Add to cart clicked for product ID:', productId); // Debug log
            if (!productId) {
                console.error('Product ID is missing');
                return;
            }
            const quantityInput = this.parentElement.querySelector('.quantity-input');
            const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

            let product;

            if (document.querySelector('.product-detail')) {
                // We're on the product detail page
                product = productData;
                console.log('Product data from detail page:', product); // Debug log
            } else {
                // We're on the main shop page
                product = findProduct(productId);
            }

            if (product) {
                addToCart(product, quantity);
            } else {
                console.error('Product not found for ID:', productId); // Debug log
            }
        });
    });

    function updateQuantity(input, change) {
        let newValue = parseInt(input.value) + change;
        newValue = Math.max(1, Math.min(99, newValue)); // Ensure value is between 1 and 99
        input.value = newValue;
    }

    function validateQuantity(input) {
        let value = parseInt(input.value);
        if (isNaN(value) || value < 1) {
            input.value = 1;
        } else if (value > 99) {
            input.value = 99;
        }
    }

    function addToCart(product, quantity = 1) {
        console.log('Adding product to cart:', product, 'Quantity:', quantity); // Debug log
        if (product && !product.sold_out) {
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
                console.log('Updated existing item in cart:', existingItem); // Debug log
            } else {
                cart.push({...product, quantity});
                console.log('Added new item to cart:', {...product, quantity}); // Debug log
            }
            updateCartDisplay();
            saveCart();
        } else if (product && product.sold_out) {
            console.error(`Product with id ${product.id} is sold out`);
        } else {
            console.error(`Unable to add product with id ${product.id} to cart`);
        }
    }

    function removeFromCart(index) {
        console.log('Removing item from cart at index:', index); // Debug log
        cart.splice(index, 1);
        updateCartDisplay();
        saveCart();
    }

    function findProduct(id) {
        console.log('Searching for product with id:', id); // Debug log
        console.log('productsData:', productsData); // Debug log
        if (typeof productsData !== 'undefined' && id) {
            for (let category in productsData) {
                const product = productsData[category].find(p => p.id === id);
                if (product) {
                    console.log('Found product:', product); // Debug log
                    return product;
                }
            }
        }
        return null;
    }

    function updateCartDisplay() {
        if (cartItems && cartTotal) {
            if (cart.length === 0) {
                cartItems.innerHTML = '<p>Your cart is empty. <a href="/shop">Continue shopping</a></p>';
                cartTotal.textContent = '0 USD';
            } else {
                cartItems.innerHTML = cart.map((item, index) => `
                    <div class="cart-item">
                        <p>${item.name} - ${item.price} USD x ${item.quantity}</p>
                        <button class="remove-from-cart" data-index="${index}">×</button>
                    </div>
                `).join('');
                cartTotal.textContent = `${calculateTotal()} USD`;

                document.querySelectorAll('.remove-from-cart').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const index = parseInt(e.target.dataset.index);
                        removeFromCart(index);
                    });
                });
            }
        }
        updateCartCount();
    }

    function updateCartCount() {
        if (cartCount) {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'inline' : 'none';
        }
    }

    function calculateTotal() {
        return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
    }

    function loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            console.log('Loaded cart from localStorage:', cart); // Debug log
            updateCartDisplay();
        }
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Saved cart to localStorage:', cart); // Debug log
        window.dispatchEvent(new Event('storage'));
    }

    function clearCart() {
        cart = [];
        saveCart();
        updateCartDisplay();
        console.log('Cart cleared'); // Debug log
    }

    function checkAndClearCart() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('clearCart') === 'true') {
            clearCart();
            // Remove the clearCart parameter from the URL
            urlParams.delete('clearCart');
            const newUrl = window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
            window.history.replaceState({}, '', newUrl);
        }
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }

    async function handleCheckout(event) {
        event.preventDefault();

        // Check if the cart is empty or if the total amount is 0
        if (cart.length === 0 || calculateTotal() === '0.00') {
            alert('Your cart is empty. Please add items to your cart before proceeding to checkout.');
            return; // Exit the function without creating the invoice
        }

        const formData = new FormData(checkoutForm);
        const customerData = Object.fromEntries(formData);
        
        customerData.cart = cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        }));

        try {
            console.log('Sending customer data:', customerData);
            const response = await createBTCPayInvoice(customerData);
            console.log('Response from createBTCPayInvoice:', response);
            if (response && response.checkoutLink) {
                console.log('Redirecting to checkout:', response.checkoutLink);
                window.location.href = response.checkoutLink;
            } else {
                console.error('Invalid response from createBTCPayInvoice:', response);
                alert('Error creating invoice. Please check the console for more details.');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert(`An error occurred during checkout: ${error.message}. Please check the console for more details.`);
        }
    }

    async function createBTCPayInvoice(customerData) {
        const btcPayServerUrl = 'https://btcpay.whiterabbit21m.com';
        const storeId = '5vHj4TmiyYMCkFUpyBYf6rUDvaJ6YA7B74v2G7iYD9D2';
        const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxx'; //ADD YOUR APY

        const shopPath = '/shop/';
        const fullShopUrl = new URL(shopPath, window.location.origin).toString();
        const redirectUrlWithClearCart = `${fullShopUrl}?clearCart=true`;

        const detailedDescription = `
Order Details:
${customerData.cart.map(item => `- ${item.name}: $${item.price} x ${item.quantity}`).join('\n')}

Customer Information:
Name: ${customerData.name}
Email: ${customerData.email}
Address: ${customerData.address}
City: ${customerData.city}
ZIP: ${customerData.zip}
Country: ${customerData.country}
        `.trim();

        const invoiceData = {
            amount: calculateTotal(),
            currency: 'USD',
            metadata: {
                orderId: Date.now().toString(),
                itemDesc: detailedDescription,
            },
            checkout: {
                speedPolicy: 'HighSpeed',
                paymentMethods: ['BTC', 'BTC-LightningNetwork'],
                defaultPaymentMethod: 'BTC-LightningNetwork',
                redirectURL: redirectUrlWithClearCart,
                redirectAutomatically: true
            },
            buyer: {
                name: customerData.name,
                email: customerData.email,
                address1: customerData.address,
                city: customerData.city,
                zip: customerData.zip,
                country: customerData.country
            }
        };

        console.log('Sending invoice data:', JSON.stringify(invoiceData, null, 2));

        try {
            const response = await fetch(`${btcPayServerUrl}/api/v1/stores/${storeId}/invoices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${apiKey}`
                },
                body: JSON.stringify(invoiceData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`BTCPay Server responded with status ${response.status}: ${errorText}`);
            }

            const invoice = await response.json();
            console.log('Created invoice:', JSON.stringify(invoice, null, 2));

            if (invoice.checkoutLink) {
                return { checkoutLink: invoice.checkoutLink };
            } else {
                throw new Error('Checkout link not found in BTCPay Server response');
            }
        } catch (error) {
            console.error('Error in createBTCPayInvoice:', error);
            throw error;
        }
    }
});
