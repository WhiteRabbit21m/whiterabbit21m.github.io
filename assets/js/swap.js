const BOLTZ_API_URL = 'https://api.boltz.exchange/v2';
let currentQuote = null;

document.addEventListener('DOMContentLoaded', () => {
  const getQuoteButton = document.getElementById('get-quote');
  getQuoteButton.addEventListener('click', getQuote);

  const payLnurlButton = document.getElementById('pay-lnurl');
  payLnurlButton.addEventListener('click', payWithLnurl);

  // Populate currency dropdowns
  populateCurrencyDropdowns();
});

async function populateCurrencyDropdowns() {
  try {
    const response = await fetch(`${BOLTZ_API_URL}/swap/submarine`);
    const pairs = await response.json();
    
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    
    for (const [from, toPairs] of Object.entries(pairs)) {
      const fromOption = document.createElement('option');
      fromOption.value = from;
      fromOption.textContent = from;
      fromCurrency.appendChild(fromOption);
      
      for (const to of Object.keys(toPairs)) {
        const toOption = document.createElement('option');
        toOption.value = to;
        toOption.textContent = to;
        toCurrency.appendChild(toOption);
      }
    }
  } catch (error) {
    console.error('Error fetching currency pairs:', error);
  }
}

async function getQuote() {
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;
  const amount = document.getElementById('amount').value;

  try {
    const response = await fetch(`${BOLTZ_API_URL}/swap/submarine`);
    const pairs = await response.json();
    
    const pairData = pairs[fromCurrency][toCurrency];
    
    if (!pairData) {
      throw new Error('Invalid currency pair');
    }

    const { rate, fees } = pairData;
    const boltzFee = fees.percentage / 100;
    const serviceFee = 0.005; // 0.5% service fee

    const amountAfterFee = amount * (1 - boltzFee - serviceFee);
    const estimatedReceiveAmount = amountAfterFee * rate;

    currentQuote = {
      fromCurrency,
      toCurrency,
      amount,
      estimatedReceiveAmount,
      serviceFeeAmount: amount * serviceFee,
      boltzFeeAmount: amount * boltzFee,
      pairHash: pairData.hash
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
    <p>Boltz Fee: ${quote.boltzFeeAmount.toFixed(8)} ${quote.fromCurrency}</p>
    <p>Service Fee: ${quote.serviceFeeAmount.toFixed(8)} ${quote.fromCurrency}</p>
    <button id="confirm-swap" class="cta-button">Confirm Swap</button>
  `;

  document.getElementById('confirm-swap').addEventListener('click', confirmSwap);
}

async function confirmSwap() {
  if (!currentQuote) {
    alert('Please get a quote first.');
    return;
  }

  try {
    // Generate a random preimage and calculate its hash
    const preimage = crypto.getRandomValues(new Uint8Array(32));
    const preimageHash = await crypto.subtle.digest('SHA-256', preimage);
    const preimageHashHex = Array.from(new Uint8Array(preimageHash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    // Generate a key pair for refund
    const keyPair = await crypto.subtle.generateKey(
      {
        name: 'ECDSA',
        namedCurve: 'P-256'
      },
      true,
      ['sign', 'verify']
    );
    const publicKey = await crypto.subtle.exportKey('raw', keyPair.publicKey);
    const publicKeyHex = Array.from(new Uint8Array(publicKey))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    const swapResponse = await fetch(`${BOLTZ_API_URL}/swap/submarine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: currentQuote.fromCurrency,
        to: currentQuote.toCurrency,
        amount: parseFloat(currentQuote.amount),
        preimageHash: preimageHashHex,
        refundPublicKey: publicKeyHex,
        pairHash: currentQuote.pairHash
      }),
    });

    const swapData = await swapResponse.json();

    if (swapData.id) {
      displaySwapInstructions(swapData);
      generateLnurlForServiceFee(currentQuote.serviceFeeAmount);
    } else {
      alert('Error creating swap. Please try again.');
    }
  } catch (error) {
    console.error('Error confirming swap:', error);
    alert('Error confirming swap. Please try again.');
  }
}

function displaySwapInstructions(swapData) {
  const swapResult = document.getElementById('swap-result');
  swapResult.innerHTML = `
    <h2>Swap Instructions</h2>
    <p>Swap ID: ${swapData.id}</p>
    <p>Please send ${currentQuote.amount} ${currentQuote.fromCurrency} to this address:</p>
    <p>${swapData.address}</p>
    <p>Timeout Block Height: ${swapData.timeoutBlockHeight}</p>
  `;
}

function generateLnurlForServiceFee(amount) {
  // In una vera implementazione, genereresti un LNURL per il pagamento della fee di servizio
  // Per questo esempio, simula semplicemente la generazione di un LNURL
  const fakeLnurl = `LNURL1DP68GURN8GHJ7MRWW4EXCTNXD9SHG6NPVCHXXMMD9AKXUATJD3CZ7CTSDYHHVVF0D3H82UNVWQHH2MN4WFKZ7QJJVA8X2GS`;
  
  displayLnurlPayment(fakeLnurl);
}

function displayLnurlPayment(lnurl) {
  const lnurlQr = document.getElementById('lnurl-qr');
  lnurlQr.innerHTML = ''; // Clear previous QR code

  new QRCode(lnurlQr, lnurl);

  document.getElementById('lnurl-payment').style.display = 'block';
}

async function payWithLnurl() {
  // In una vera implementazione, gestiresti qui il pagamento LNURL
  // Per questo esempio, simula semplicemente un pagamento riuscito
  alert('LNURL payment simulated. In a real application, you would integrate with a Lightning wallet here.');
  
  // Dopo un pagamento riuscito, potresti voler aggiornare l'interfaccia utente o procedere con il processo di swap
}
