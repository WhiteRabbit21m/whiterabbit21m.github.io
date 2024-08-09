// Assicurati di includere la libreria qrcode-generator
// <script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    const API_BASE_URL = 'https://www.miodominio.com/api';  // Aggiorna con il tuo dominio effettivo
    const createSwapButton = document.getElementById('create-swap');
    const checkStatusButton = document.getElementById('check-status');
    const swapForm = document.getElementById('swap-form');
    const swapResult = document.getElementById('swap-result');
    const errorMessage = document.getElementById('error-message');
    
    let swapToken = null;
    let swapId = null;

    createSwapButton.addEventListener('click', createSwap);
    checkStatusButton.addEventListener('click', checkSwapStatus);

    function sanitizeAmount(amount) {
        amount = amount.trim();
        const numAmount = parseInt(amount, 10);
        if (isNaN(numAmount) || numAmount < 10000 || numAmount > 1000000) {
            throw new Error("Invalid amount. Must be between 10,000 and 1,000,000 sats.");
        }
        return numAmount;
    }

    function sanitizeBitcoinAddress(address) {
        address = address.trim();
        if (!/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^bc1[ac-hj-np-zAC-HJ-NP-Z02-9]{11,71}$/.test(address)) {
            throw new Error("Invalid Bitcoin address format.");
        }
        return address;
    }

    async function createSwap() {
        try {
            const amount = sanitizeAmount(document.getElementById('amount').value);
            const address = sanitizeBitcoinAddress(document.getElementById('address').value);

            const response = await fetch(`${API_BASE_URL}/create_swap`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount_sat: amount, onchain_address: address }),
            });

            if (!response.ok) {
                throw new Error('Failed to create swap');
            }

            const data = await response.json();
            swapToken = data.token;
            swapId = data.swap_id;

            document.getElementById('result-amount').textContent = data.amount_sat;
            
            // Aggiorna la visualizzazione dell'invoice
            const paymentRequestElement = document.getElementById('result-payment-request');
            paymentRequestElement.textContent = data.payment_request;
            
            // Genera e mostra il QR code
            const qr = qrcode(0, 'M');
            qr.addData(data.payment_request);
            qr.make();
            const qrCodeElement = document.getElementById('qr-code');
            qrCodeElement.innerHTML = qr.createImgTag(5);

            document.getElementById('result-address').textContent = data.onchain_address;
            document.getElementById('result-status').textContent = 'Pending';

            swapForm.style.display = 'none';
            swapResult.style.display = 'block';
            errorMessage.style.display = 'none';

            // Aggiungi funzionalità di copia
            const copyButton = document.getElementById('copy-invoice');
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(data.payment_request).then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy Invoice';
                    }, 2000);
                });
            });

        } catch (error) {
            showError(error.message);
        }
    }

    async function checkSwapStatus() {
        try {
            if (!swapId || !swapToken) {
                throw new Error('Swap information not available');
            }

            const response = await fetch(`${API_BASE_URL}/check_swap_status?swap_id=${swapId}`, {
                headers: {
                    'Authorization': swapToken,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to check swap status');
            }

            const data = await response.json();
            document.getElementById('result-status').textContent = data.status;

            if (data.status === 'completed') {
                document.getElementById('result-status').textContent += ` (TXID: ${data.txid})`;
            }

            errorMessage.style.display = 'none';
        } catch (error) {
            showError(error.message);
        }
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    // Funzione per ottenere i limiti di swap
    async function getSwapLimits() {
        try {
            const response = await fetch(`${API_BASE_URL}/get_swap_limits`);
            if (!response.ok) {
                throw new Error('Failed to get swap limits');
            }
            const limits = await response.json();
            document.getElementById('amount').min = limits.min_amount;
            document.getElementById('amount').max = limits.max_amount;
            document.getElementById('service-fee').textContent = limits.service_fee_percent + '%';
        } catch (error) {
            showError('Failed to load swap limits');
        }
    }

    // Implementa una funzione per aggiornare periodicamente lo stato dello swap
    function startStatusPolling() {
        const pollInterval = setInterval(() => {
            if (swapId && swapToken) {
                checkSwapStatus();
            } else {
                clearInterval(pollInterval);
            }
        }, 30000); // Controlla ogni 30 secondi
    }

    // Inizializza l'applicazione
    getSwapLimits();
    startStatusPolling();
});
