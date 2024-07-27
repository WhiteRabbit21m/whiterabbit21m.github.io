document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const checkoutForm = document.getElementById('checkout-form');
    let cart = [];

    loadCart();
    checkAndClearCart();

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const productId = event.target.dataset.id;
        const product = findProduct(productId);
        if (product && !product.sold_out) {
            cart.push(product);
            updateCartDisplay();
            saveCart();
            console.log('Product added to cart:', product);
        } else if (product && product.sold_out) {
            console.error(`Product with id ${productId} is sold out`);
        } else {
            console.error(`Unable to add product with id ${productId} to cart`);
        }
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
        saveCart();
        console.log('Product removed from cart at index:', index);
    }

    function findProduct(id) {
        for (let category in productsData) {
            const product = productsData[category].find(p => p.id === id);
            if (product) return product;
        }
        return null;
    }

    function updateCartDisplay() {
        if (cartItems && cartTotal) {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <p>${item.name} - ${item.price} USD</p>
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
        updateCartCount();
    }

    function updateCartCount() {
        if (cartCount) {
            cartCount.textContent = cart.length;
            cartCount.style.display = cart.length > 0 ? 'inline' : 'none';
        }
    }

    function calculateTotal() {
        return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    }

    function loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartDisplay();
        }
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('storage'));
    }

    function clearCart() {
        cart = [];
        saveCart();
        updateCartDisplay();
    }

    function checkAndClearCart() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('clearCart') === 'true') {
            clearCart();
            // Rimuovi il parametro clearCart dall'URL
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

        // Controllo se il carrello è vuoto o se l'importo totale è 0
        if (cart.length === 0 || calculateTotal() === '0.00') {
            alert('Your cart is empty. Please add items to your cart before checking out.');
            return; // Esce dalla funzione senza creare l'invoice
        }

        const formData = new FormData(checkoutForm);
        const customerData = Object.fromEntries(formData);
        
        customerData.cart = cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price
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
        const apiKey = '8897f77cec2dfba2fe0c5d89fd57192b509b752a';

        const shopPath = '/shop/';
        const fullShopUrl = new URL(shopPath, window.location.origin).toString();
        const redirectUrlWithClearCart = `${fullShopUrl}?clearCart=true`;

        const detailedDescription = `
Order Details:
${cart.map(item => `- ${item.name}: $${item.price}`).join('\n')}

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
