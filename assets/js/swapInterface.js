import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SwapInterface = () => {
  const [amount, setAmount] = useState('');
  const [swapType, setSwapType] = useState('submarine');
  const [swapData, setSwapData] = useState(null);
  const [swapStatus, setSwapStatus] = useState('');
  const [pairs, setPairs] = useState({});
  const [selectedPair, setSelectedPair] = useState('');
  const [invoice, setInvoice] = useState('');

  useEffect(() => {
    fetchPairs();
  }, []);

  const fetchPairs = async () => {
    try {
      const response = await axios.get('/api/swap/pairs');
      setPairs(response.data);
      if (Object.keys(response.data).length > 0) {
        setSelectedPair(Object.keys(response.data)[0]);
      }
    } catch (error) {
      console.error('Error fetching pairs:', error);
    }
  };

  const initiateSwap = async () => {
    try {
      const [from, to] = selectedPair.split('/');
      const response = await axios.post('/api/swap/initiate', {
        from,
        to,
        amount: parseFloat(amount),
        invoice,
      });
      setSwapData(response.data);
      setSwapStatus('Swap initiated. Follow the instructions below.');
    } catch (error) {
      console.error('Error initiating swap:', error);
      setSwapStatus('Error initiating swap');
    }
  };

  const checkSwapStatus = async () => {
    if (!swapData || !swapData.id) return;
    try {
      const response = await axios.get(`/api/swap/status/${swapData.id}`);
      setSwapStatus(`Swap status: ${response.data.status}`);
    } catch (error) {
      console.error('Error checking swap status:', error);
      setSwapStatus('Error checking swap status');
    }
  };

  return (
    <div>
      <h2>Initiate Swap</h2>
      <select value={selectedPair} onChange={(e) => setSelectedPair(e.target.value)}>
        {Object.keys(pairs).map((pair) => (
          <option key={pair} value={pair}>{pair}</option>
        ))}
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in BTC"
        step="0.00000001"
        min="0.0001"
        max="0.1"
      />
      <input
        type="text"
        value={invoice}
        onChange={(e) => setInvoice(e.target.value)}
        placeholder="Lightning Invoice"
      />
      <button onClick={initiateSwap}>Initiate Swap</button>
      {swapData && (
        <div>
          <p>Swap initiated. Please follow these instructions:</p>
          <p>Swap ID: {swapData.id}</p>
          <p>Original Amount: {swapData.originalAmount} BTC</p>
          <p>Our Fee: {swapData.ourFee.toFixed(8)} BTC</p>
          <p>Amount sent to Boltz: {swapData.boltzAmount.toFixed(8)} BTC</p>
          <p>Send {swapData.expectedAmount} BTC to: {swapData.address}</p>
          <p>Fee Payment Status: {swapData.feePayment.success ? 'Successful' : 'Failed'}</p>
          <button onClick={checkSwapStatus}>Check Swap Status</button>
        </div>
      )}
      <p>{swapStatus}</p>
    </div>
  );
};

export default SwapInterface;
