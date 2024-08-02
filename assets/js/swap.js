const BOLTZ_API_URL = 'https://api.boltz.exchange/v2';
const SERVICE_FEE_PERCENTAGE = 0.005; // 0.5%
const LNURL_PAY = 'LNURL1DP68GURN8GHJ7V33D5H8G6TSWVHJUAM9D3KZ66MWDAMKUTMVDE6HYMRS9UC8SVFSXSUN2CEJVG6RGVPKVSCRQESUVXT0J';

let currentQuote = null;

document.addEventListener('DOMContentLoaded', () => {
    const getQuoteButton = document.getElementById('get-quote');
    getQuoteButton.addEventListener('click', getQuote);

    const payLnurlButton = document.getElementById('pay-lnurl');
    payLnurlButton.addEventListener('click', payWithLnurl);
});

async function getQuote() {
    const swapType = document.getElementById('swap-type').value;
    const amount = document.getElementById('amount').value;

    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    try {
        const response = await fetch(`${BOLTZ_API_URL}/swap/${swapType === 'BTC-LN' ? 'submarine' : 'reverse'}`);
        const pairs = await response.json();
        
        const pairData = pairs['BTC']['BTC'];
        
        if (!pairData) {
            throw new Error('Invalid swap type');
        }

        const { rate, fees } = pairData;
        const boltzFee = fees.percentage / 100;
        const serviceFee = SERVICE_FEE_PERCENTAGE;

        const amountAfterFee = amount * (1 - boltzFee - serviceFee);
        const estimatedReceiveAmount = Math.floor(amountAfterFee * rate);

        currentQuote = {
            swapType,
            amount,
            estimatedReceiveAmount,
            serviceFeeAmount: Math.floor(amount * serviceFee),
            boltzFeeAmount: Math.floor(amount * boltzFee),
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
        <p>Type: ${quote.swapType === 'BTC-LN' ? 'Bitcoin to Lightning' : 'Lightning to Bitcoin'}</p>
        <p>Amount: ${quote.amount} satoshis</p>
        <p>Estimated receive amount: ${quote.estimatedReceiveAmount} satoshis</p>
        <p>Boltz Fee: ${quote.boltzFeeAmount} satoshis</p>
        <p>Service Fee: ${quote.serviceFeeAmount} satoshis</p>
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
        const preimageHash = await generatePreimageHash();
        const publicKeyHex = await generatePublicKey();

        const swapEndpoint = currentQuote.swapType === 'BTC-LN' ? 'submarine' : 'reverse';
        const swapResponse = await fetch(`${BOLTZ_API_URL}/swap/${swapEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'BTC',
                to: 'BTC',
                amount: parseFloat(currentQuote.amount),
                preimageHash: preimageHash,
                refundPublicKey: publicKeyHex,
                pairHash: currentQuote.pairHash
            }),
        });

        const swapData = await swapResponse.json();

        if (swapData.id) {
            displaySwapInstructions(swapData);
            displayLnurlPayment();
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
        ${currentQuote.swapType === 'BTC-LN' 
            ? `<p>Please send ${currentQuote.amount} satoshis to this Bitcoin address:</p>
               <p>${swapData.address}</p>`
            : `<p>Please pay the following Lightning invoice:</p>
               <p>${swapData.invoice}</p>`
        }
        <p>Timeout Block Height: ${swapData.timeoutBlockHeight}</p>
    `;
}

function displayLnurlPayment() {
    const lnurlQr = document.getElementById('lnurl-qr');
    lnurlQr.innerHTML = ''; // Clear previous QR code
    new QRCode(lnurlQr, LNURL_PAY);
    document.getElementById('lnurl-payment').style.display = 'block';
}

async function payWithLnurl() {
    alert('LNURL payment initiated. Please complete the payment in your Lightning wallet.');
    // In a real implementation, you would need to verify the payment server-side
    // For now, we'll just simulate a successful payment
    setTimeout(() => {
        alert('Payment received! Your swap is now processing.');
        document.getElementById('lnurl-payment').style.display = 'none';
    }, 5000);
}

// Helper functions for key generation (not secure for production use)
async function generatePreimageHash() {
    const preimage = crypto.getRandomValues(new Uint8Array(32));
    const preimageHash = await crypto.subtle.digest('SHA-256', preimage);
    return Array.from(new Uint8Array(preimageHash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

async function generatePublicKey() {
    const keyPair = await crypto.subtle.generateKey(
        {
            name: 'ECDSA',
            namedCurve: 'P-256'
        },
        true,
        ['sign', 'verify']
    );
    const publicKey = await crypto.subtle.exportKey('raw', keyPair.publicKey);
    return Array.from(new Uint8Array(publicKey))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
