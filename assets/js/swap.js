const API_BASE_URL = 'https://api.boltz.exchange/v2';
const BACKEND_URL = '/api/swap'; // Adjust this to your backend endpoint

let currentQuote = null;

document.addEventListener('DOMContentLoaded', () => {
  const getQuoteButton = document.getElementById('get-quote');
  getQuoteButton.addEventListener('click', getQuote);

  const payLnurlButton = document.getElementById('pay-lnurl');
  payLnurlButton.addEventListener('click', payWithLnurl);
});

async function getQuote() {
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;
  const amount = document.getElementById('amount').value;

  try {
    const response = await fetch(`${API_BASE_URL}/swap/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}`);
    const pairData = await response.json();

    const fee = pairData.fees.percentage;
    const rate = pairData.rate;
    const serviceFee = 0.005; // 0.5% service fee

    const amountAfterFee = amount * (1 - fee - serviceFee);
    const estimatedReceiveAmount = amountAfterFee * rate;

    currentQuote = {
      fromCurrency,
      toCurrency,
      amount,
      estimatedReceiveAmount,
      serviceFeeAmount: amount * serviceFee
    };

    displayQuote(currentQuote);
  } catch (error) {
    console.error('Error fetching quote:', error);
    document.getElementById('quote-result').innerHTML = 'Error fetching quote. Please try again.';
  }
}

function displayQuote(quote) {
  const quoteResult = document.getElementById('quote-result');
  quoteResult.innerHTML = `
    <h2>Swap Quote</h2>
    <p>From: ${quote.amount} ${quote.fromCurrency}</p>
    <p>To: ${quote.estimatedReceiveAmount.toFixed(8)} ${quote.toCurrency}</p>
    <p>Service Fee: ${quote.serviceFeeAmount.toFixed(8)} ${quote.fromCurrency}</p>
    <button id="confirm-swap">Confirm Swap</button>
  `;

  document.getElementById('confirm-swap').addEventListener('click', confirmSwap);
}

async function confirmSwap() {
  if (!currentQuote) {
    alert('Please get a quote first.');
    return;
  }

  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentQuote),
    });

    const swapData = await response.json();

    if (swapData.lnurlPay) {
      displayLnurlPayment(swapData.lnurlPay);
    } else {
      alert('Error creating swap. Please try again.');
    }
  } catch (error) {
    console.error('Error confirming swap:', error);
    alert('Error confirming swap. Please try again.');
  }
}

function displayLnurlPayment(lnurlPay) {
  const lnurlQr = document.getElementById('lnurl-qr');
  lnurlQr.innerHTML = ''; // Clear previous QR code

  new QRCode(lnurlQr, lnurlPay);

  document.getElementById('lnurl-payment').style.display = 'block';
}

async function payWithLnurl() {
  // Implement LNURL payment logic here
  // This could open a Lightning wallet or provide instructions for payment
  alert('LNURL payment not implemented in this example. In a real application, you would integrate with a Lightning wallet here.');
}
