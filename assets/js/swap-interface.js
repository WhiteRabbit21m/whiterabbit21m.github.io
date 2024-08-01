const SwapInterface = () => {
  const [amount, setAmount] = React.useState('');
  const [swapType, setSwapType] = React.useState('submarine');
  const [swapData, setSwapData] = React.useState(null);
  const [swapStatus, setSwapStatus] = React.useState('');
  const [error, setError] = React.useState('');

  const MIN_AMOUNT = 0.0001;
  const MAX_AMOUNT = 0.01;

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (value && (parseFloat(value) < MIN_AMOUNT || parseFloat(value) > MAX_AMOUNT)) {
      setError(`Amount must be between ${MIN_AMOUNT} and ${MAX_AMOUNT} BTC`);
    } else {
      setError('');
    }
  };

  const initiateSwap = async () => {
    if (!amount || parseFloat(amount) < MIN_AMOUNT || parseFloat(amount) > MAX_AMOUNT) {
      setError(`Amount must be between ${MIN_AMOUNT} and ${MAX_AMOUNT} BTC`);
      return;
    }
    setError('');
    try {
      const response = await fetch('/api/swap/initiate-swap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, type: swapType }),
      });
      const data = await response.json();
      setSwapData(data);
      setSwapStatus('Swap initiated. Follow the instructions below.');
    } catch (error) {
      console.error('Error initiating swap:', error);
      setSwapStatus('Error initiating swap');
    }
  };

  const checkSwapStatus = async () => {
    if (!swapData || !swapData.id) return;
    try {
      const response = await fetch(`/api/swap/swap-status/${swapData.id}`);
      const data = await response.json();
      setSwapStatus(`Swap status: ${data.status}`);
    } catch (error) {
      console.error('Error checking swap status:', error);
      setSwapStatus('Error checking swap status');
    }
  };

  const renderSwapTypeSelector = () => {
    return React.createElement(
      'div',
      { className: 'swap-type-container' },
      React.createElement('h3', null, 'Select Swap Type:'),
      React.createElement(
        'div',
        { className: 'swap-type-selector' },
        React.createElement(
          'button',
          {
            className: `swap-type-button ${swapType === 'submarine' ? 'active' : ''}`,
            onClick: () => setSwapType('submarine')
          },
          React.createElement('i', { className: 'fas fa-arrow-down' }),
          'On-chain to Lightning'
        ),
        React.createElement(
          'button',
          {
            className: `swap-type-button ${swapType === 'reverse' ? 'active' : ''}`,
            onClick: () => setSwapType('reverse')
          },
          React.createElement('i', { className: 'fas fa-arrow-up' }),
          'Lightning to On-chain'
        )
      ),
      React.createElement(
        'div',
        { className: 'swap-type-indicator' },
        swapType === 'submarine' ? 'On-chain → Lightning' : 'Lightning → On-chain'
      )
    );
  };

  const renderLightningNodeInfo = () => {
    return React.createElement(
      'div',
      { className: 'lightning-node-info' },
      React.createElement('h3', null, 'Improve Swap Reliability'),
      React.createElement('p', null, 'For better swap performance, consider the following:'),
      React.createElement('ul', null,
        React.createElement('li', null, 
          'Check popular Lightning nodes on ',
          React.createElement('a', 
            { href: 'https://1ml.com', target: '_blank', rel: 'noopener noreferrer' },
            '1ML'
          )
        ),
        React.createElement('li', null, 'Open channels with well-connected nodes to improve your network connectivity'),
        React.createElement('li', null, 'Keep your channels balanced for optimal liquidity')
      )
    );
  };

  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Initiate Swap'),
    renderSwapTypeSelector(),
    React.createElement(
      'div',
      { className: 'amount-input-container' },
      React.createElement('input', {
        type: 'number',
        value: amount,
        onChange: handleAmountChange,
        placeholder: 'Amount in BTC',
        step: '0.00000001',
        min: MIN_AMOUNT,
        max: MAX_AMOUNT
      }),
      React.createElement('span', { className: 'amount-example' }, `Enter amount between ${MIN_AMOUNT} and ${MAX_AMOUNT} BTC`)
    ),
    error && React.createElement('p', { className: 'error-message' }, error),
    React.createElement(
      'button',
      { onClick: initiateSwap, disabled: !!error },
      'Initiate Swap'
    ),
    swapData && React.createElement(
      'div',
      null,
      React.createElement('p', null, 'Swap initiated. Please follow these instructions:'),
      React.createElement('p', null, `Original Amount: ${swapData.originalAmount} BTC`),
      React.createElement('p', null, `Our Fee: ${swapData.ourFee.toFixed(8)} BTC (automatically deducted)`),
      React.createElement('p', null, `Amount for Swap: ${swapData.boltzAmount.toFixed(8)} BTC`),
      swapType === 'submarine'
        ? React.createElement(
            'div',
            null,
            React.createElement('p', null, `Send ${swapData.boltzAmount.toFixed(8)} BTC to: ${swapData.address}`),
            React.createElement('p', null, `You will receive ${swapData.originalAmount} BTC via Lightning`),
            React.createElement('p', null, `Lightning Invoice from Boltz: ${swapData.invoice}`)
          )
        : React.createElement(
            'div',
            null,
            React.createElement('p', null, `Pay this Lightning Invoice to Boltz: ${swapData.invoice}`),
            React.createElement('p', null, `You will receive ${swapData.boltzAmount.toFixed(8)} BTC to: ${swapData.address}`)
          ),
      React.createElement(
        'button',
        { onClick: checkSwapStatus },
        'Check Swap Status'
      )
    ),
    React.createElement('p', null, swapStatus),
    renderLightningNodeInfo()
  );
};

// Render the component
ReactDOM.render(React.createElement(SwapInterface), document.getElementById('swap-interface'));
