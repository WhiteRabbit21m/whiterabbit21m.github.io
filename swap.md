---
layout: swap
title: Lightning to On-chain Swap
permalink: /swap/
---

# Lightning to On-chain Swap

Use this service to swap your Lightning Network funds to on-chain Bitcoin.

<div id="swap-form">
  <label for="amount">Amount (sats):</label>
  <input type="number" id="amount" min="10000" max="1000000" required>
  
  <label for="address">Bitcoin Address:</label>
  <input type="text" id="address" required>
  
  <button id="create-swap">Create Swap</button>
</div>

<div id="swap-result" style="display:none;">
  <h2>Swap Details</h2>
  <p>Amount: <span id="result-amount"></span> sats</p>
  <p>Payment Request: <span id="result-payment-request"></span></p>
  <p>On-chain Address: <span id="result-address"></span></p>
  <p>Status: <span id="result-status"></span></p>
  <button id="check-status">Check Status</button>
</div>

<div id="error-message" style="display:none; color: red;"></div>
