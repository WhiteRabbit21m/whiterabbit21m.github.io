const BACKEND_URL = 'http://localhost:3000';
const WS_URL = 'ws://localhost:3000';

let swapWebSocket;

document.addEventListener('DOMContentLoaded', () => {
  const swapInterface = document.getElementById('swap-interface');
  swapInterface.innerHTML = `
    <select id="swap-type">
      <option value="submarine">Bitcoin to Lightning (Submarine Swap)</option>
      <option value="reverse">Lightning to Bitcoin (Reverse Swap)</option>
    </select>
    <input type="number" id="amount" placeholder="Amount in satoshis">
    <div id="invoice-input" style="display:none;">
      <input type="text" id="invoice" placeholder="Lightning Invoice">
    </div>
    <button id="create-swap">Create Swap</button>
  `;

  const swapType = document.getElementById('swap-type');
  const invoiceInput = document.getElementById('invoice-input');
  const createSwapButton = document.getElementById('create-swap');

  swapType.addEventListener('change', () => {
    invoiceInput.style.display = swapType.value === 'submarine' ? 'block' : 'none';
  });

  createSwapButton.addEventListener('click', createSwap);
});

async function createSwap() {
  const swapType = document.getElementById('swap-type').value;
  const amount = document.getElementById('amount').value;
  const invoice = document.getElementById('invoice').value;

  try {
    const response = await axios.post(`${BACKEND_URL}/create-swap`, {
      type: swapType,
      amount: parseInt(amount),
      invoice: swapType === 'submarine' ? invoice : undefined,
    });

    const { swapId } = response.data;
    displaySwapInstructions(response.data);
    connectWebSocket(swapId);
  } catch (error) {
    console.error('Error creating swap:', error);
    alert('Failed to create swap. Please try again.');
  }
}

function displaySwapInstructions(swapData) {
  const swapStatus = document.getElementById('swap-status');
  swapStatus.innerHTML = `
    <h2>Swap Created</h2>
    <p>Swap ID: ${swapData.id}</p>
    <p>Status: ${swapData.status}</p>
    ${swapData.address ? `<p>Send funds to: ${swapData.address}</p>` : ''}
    ${swapData.invoice ? `<p>Pay this invoice: ${swapData.invoice}</p>` : ''}
  `;
}

function connectWebSocket(swapId) {
  if (swapWebSocket) {
    swapWebSocket.close();
  }

  swapWebSocket = new WebSocket(WS_URL);

  swapWebSocket.onopen = () => {
    swapWebSocket.send(JSON.stringify({ type: 'subscribe', swapId }));
  };

  swapWebSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.swapId === swapId) {
      updateSwapStatus(data.status);
    }
  };

  swapWebSocket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
}

function updateSwapStatus(status) {
  const statusElement = document.querySelector('#swap-status p:nth-child(3)');
  if (statusElement) {
    statusElement.textContent = `Status: ${status}`;
  }
}
