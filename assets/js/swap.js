const BOLTZ_API_URL = 'https://api.boltz.exchange/v2';
const SERVICE_FEE_PERCENTAGE = 0.005; // 0.5%
const LNURL_PAY = 'LNURL1DP68GURN8GHJ7V33D5H8G6TSWVHJUAM9D3KZ66MWDAMKUTMVDE6HYMRS9UC8SVFSXSUN2CEJVG6RGVPKVSCRQESUVXT0J';

let currentQuote = null;
let pairData = null;

document.addEventListener('DOMContentLoaded', () => {
    const getQuoteButton = document.getElementById('get-quote');
    getQuoteButton.addEventListener('click', getQuote);

    const payLnurlButton = document.getElementById('pay-lnurl');
    payLnurlButton.addEventListener('click', payWithLnurl);

    // Fetch pair data on page load
    fetchPairData();
});

async function fetchPairData() {
    try {
        const response = await fetch(`${BOLTZ_API_URL}/swap/submarine`);
        const pairs = await response.json();
        pairData = pairs['BTC']['BTC'];
        if (!pairData) {
            throw new Error('Failed to fetch pair data');
        }
        document.getElementById('amount').placeholder = `Amount to swap (min: ${pairData.limits.minimal} sats)`;
    } catch (error) {
        console.error('Error fetching pair data:', error);
        alert('Failed to fetch swap information. Please try again later.');
    }
}

async function getQuote() {
    const swapType = document.getElementById('swap-type').value;
    const amount = parseInt(document.getElementById('amount').value);

    if (!amount || isNaN(amount) || amount < pairData.limits.minimal) {
        alert(`Please enter a valid amount. Minimum amount is ${pairData.limits.minimal} satoshis.`);
        return;
    }

    try {
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
        console.error('Error creating quote:', error);
        document.getElementById('quote-result').innerHTML = 'Error creating quote. Please try again.';
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
        
        let requestBody;
        if (swapEndpoint === 'submarine') {
            requestBody = {
                from: 'BTC',
                to: 'BTC',
                amount: currentQuote.amount,
                preimageHash: preimageHash,
                refundPublicKey: publicKeyHex,
                pairHash: currentQuote.pairHash
            };
        } else {
            requestBody = {
                from: 'BTC',
                to: 'BTC',
                invoiceAmount: currentQuote.amount,
                preimageHash: preimageHash,
                claimPublicKey: publicKeyHex,
                pairHash: currentQuote.pairHash
            };
        }

        const swapResponse = await fetch(`${BOLTZ_API_URL}/swap/${swapEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!swapResponse.ok) {
            const errorData = await swapResponse.json();
            throw new Error(`API error: ${errorData.error || 'Unknown error'}`);
        }

        const swapData = await swapResponse.json();

        if (swapData.id) {
            displaySwapInstructions(swapData);
            displayLnurlPayment();
        } else {
            alert('Error creating swap. Please try again.');
        }
    } catch (error) {
        console.error('Error confirming swap:', error);
        alert(`Error confirming swap: ${error.message}`);
    }
}

// ... rest of the functions remain the same ...

async function generatePublicKey() {
    const keyPair = await window.crypto.subtle.generateKey(
        {
            name: 'ECDSA',
            namedCurve: 'P-256'
        },
        true,
        ['sign', 'verify']
    );
    const publicKey = await window.crypto.subtle.exportKey('raw', keyPair.publicKey);
    return Array.from(new Uint8Array(publicKey))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
