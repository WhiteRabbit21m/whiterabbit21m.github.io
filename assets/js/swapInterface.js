const SwapInterface = () => {
  const [amount, setAmount] = React.useState('');
  const [lightningAddress, setLightningAddress] = React.useState('');
  const [swapData, setSwapData] = React.useState(null);
  const [error, setError] = React.useState('');

  const initiateSwap = async () => {
    try {
      const response = await axios.post('/api/swap/initiate', {
        amount: parseFloat(amount),
        lightningAddress
      });
      setSwapData(response.data);
      setError('');
    } catch (error) {
      console.error('Error initiating swap:', error);
      setError('Failed to initiate swap. Please try again.');
    }
  };

  return (
    <div className="swap-container">
      <h2>Initiate Swap</h2>
      <div className="amount-input-container">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in BTC"
          step="0.00000001"
        />
        <span className="amount-example">Example: 0.001 BTC</span>
      </div>
      <div className="amount-input-container">
        <input
          type="text"
          value={lightningAddress}
          onChange={(e) => setLightningAddress(e.target.value)}
          placeholder="Lightning Address"
        />
      </div>
      <button onClick={initiateSwap} disabled={!amount || !lightningAddress}>Initiate Swap</button>
      {error && <p className="error-message">{error}</p>}
      {swapData && (
        <div className="swap-info">
          <h3>Swap Initiated</h3>
          <p>Swap ID: {swapData.swapId}</p>
          <p>Total Amount: {swapData.totalAmount.toFixed(8)} BTC</p>
          <p>Original Amount: {swapData.originalAmount} BTC</p>
          <p>Fee: {swapData.fee.toFixed(8)} BTC</p>
          <p>Please pay the following invoice:</p>
          <textarea readOnly value={swapData.invoice} className="invoice-text" />
        </div>
      )}
    </div>
  );
};
