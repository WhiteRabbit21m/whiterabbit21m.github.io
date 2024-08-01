class BoltzSwap {
    constructor() {
        this.form = document.getElementById('swapForm');
        this.resultDiv = document.getElementById('result');
        this.feeLNURLSpan = document.getElementById('feeLNURL');
        this.feeAmountSpan = document.getElementById('feeAmount');
        this.swapAmountSpan = document.getElementById('swapAmount');
        this.boltzInvoiceSpan = document.getElementById('boltzInvoice');

        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        const amount = document.getElementById('amount').value;
        const onchainAddress = document.getElementById('onchainAddress').value;

        try {
            const response = await fetch('/api/boltz-swap/initiate-swap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, onchainAddress }),
            });

            if (!response.ok) {
                throw new Error('Errore durante l\'inizializzazione dello swap');
            }

            const data = await response.json();
            this.updateUI(data);
        } catch (error) {
            console.error('Errore durante lo swap:', error);
            this.showError('Si è verificato un errore durante lo swap. Riprova più tardi.');
        }
    }

    updateUI(data) {
        this.feeLNURLSpan.textContent = data.feeLNURL;
        this.feeAmountSpan.textContent = data.feeAmount.toFixed(8);
        this.swapAmountSpan.textContent = data.swapAmount.toFixed(8);
        this.boltzInvoiceSpan.textContent = data.boltzInvoice;
        
        this.resultDiv.style.opacity = '0';
        this.resultDiv.style.display = 'block';
        setTimeout(() => {
            this.resultDiv.style.opacity = '1';
        }, 10);
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        this.form.appendChild(errorDiv);
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BoltzSwap();
});
