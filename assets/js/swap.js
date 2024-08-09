document.addEventListener('DOMContentLoaded', () => {
  const createSwapButton = document.getElementById('create-swap');
  const checkStatusButton = document.getElementById('check-status');
  const swapForm = document.getElementById('swap-form');
  const swapResult = document.getElementById('swap-result');
  const errorMessage = document.getElementById('error-message');
  
  let swapToken = null;
  let swapId = null;

  createSwapButton.addEventListener('click', createSwap);
  checkStatusButton.addEventListener('click', checkSwapStatus);

  async function createSwap() {
    const amount = document.getElementById('amount').value;
    const address = document.getElementById('address').value;

    try {
      const response = await fetch('https://api.yourdomain.com/create_swap', {
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
      const response = await fetch(`https://api.yourdomain.com/check_swap_status?swap_id=${swapId}`, {
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
});
