---
layout: swap
title: Lightning to On-chain Swap
permalink: /swap/
---

# Lightning to On-chain Swap

Use this service to swap your Lightning Network funds to on-chain Bitcoin.

<div class="swap-form-container">
  <div id="swap-form">
    <h2>Create Swap</h2>
    <div class="form-group">
      <label for="amount">Amount (sats):</label>
      <input type="number" id="amount" required min="10000" max="1000000">
      <p class="input-info">Min: <span id="min-amount">10,000</span> sats, Max: <span id="max-amount">1,000,000</span> sats</p>
    </div>
    <div class="form-group">
      <label for="address">Bitcoin Address:</label>
      <input type="text" id="address" required placeholder="Enter a valid Bitcoin address">
    </div>
    <p>Service Fee: <span id="service-fee">2.5</span>%</p>
    <button id="create-swap" class="submit-btn">Create Swap</button>
  </div>

  <div id="swap-result" style="display:none;">
    <h2>Swap Details</h2>
    <p>Amount: <span id="result-amount"></span> sats</p>
    <div class="qr-code-container">
      <div id="qr-code"></div>
    </div>
    <p>Payment Request:</p>
    <div class="payment-request-container">
      <span id="result-payment-request"></span>
      <button id="copy-invoice" class="copy-btn">Copy Invoice</button>
    </div>
    <p>On-chain Address: <span id="result-address"></span></p>
    <p>Status: <span id="result-status"></span></p>
    <button id="check-status" class="submit-btn">Check Status</button>
  </div>

  <div id="error-message" class="error-message" style="display:none;"></div>
</div>
