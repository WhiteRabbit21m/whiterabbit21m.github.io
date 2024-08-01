const SwapInterface = () => {
  const [amount, setAmount] = React.useState('');
  const [swapType, setSwapType] = React.useState('submarine');
  const [swapData, setSwapData] = React.useState(null);
  const [swapStatus, setSwapStatus] = React.useState('');

  const initiateSwap = async () => {
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

  const renderLightningNodeInfo = () => {
    return React.createElement(
      'div',
      { className: 'lightning-node-info' },
      React.createElement('h3', null, 'Improve Swap Reliability'),
      React.createElement('p', null, 'For better swap performance, consider opening a direct Lightning channel with Boltz:'),
      React.createElement('ul', null,
        React.createElement('li', null, 
          React.createElement('a', { href: 'https://bolt.observer/node/026165850492521f4ac8abd9bd8088123446d126f648ca35e60f88177dc149ceb2', target: '_blank' }, 'Boltz LND Node')
        ),
        React.createElement('li', null, 
          React.createElement('a', { href: 'https://bolt.observer/node/023e4a8cb19e9dc22d6b8fcda5d9b2b7bf72a9ff5d874205aaeca34448eb7f1bb9', target: '_blank' }, 'Boltz CLN Node')
        )
      )
    );
  };

  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Initiate Swap'),
    React.createElement(
      'select',
      {
        value: swapType,
        onChange: (e) => setSwapType(e.target.value),
      },
      React.createElement('option', { value: 'submarine' }, 'On-chain to Lightning'),
      React.createElement('option', { value: 'reverse' }, 'Lightning to On-chain')
    ),
    React.createElement('input', {
      type: 'number',
      value: amount,
      onChange: (e) => setAmount(e.target.value),
      placeholder: 'Amount in BTC',
    }),
    React.createElement(
      'button',
      { onClick: initiateSwap },
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
