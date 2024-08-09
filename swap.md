---
layout: swap
title: Swap
permalink: /swap/
---

# Lightning to On-chain Swap

Use this service to swap your Lightning Network funds to on-chain Bitcoin.

<div class="swap-form-container">
  <div id="swap-form">
    <h2>Create Swap</h2>
    <div class="form-group">
      <label for="amount">Amount (sats):</label>
      <input type="number" id="amount" min="10000" max="1000000" required placeholder="10000 - 1000000 sats">
    </div>
    <div class="form-group">
      <label for="address">Bitcoin Address:</label>
      <input type="text" id="address" required placeholder="e.g. bc1q34aq5drpuwy3wgl9lhup9892qp6svr8ldzyy7c">
    </div>
    <button id="create-swap" class="submit-btn">Create Swap</button>
  </div>

  <div id="swap-result" style="display:none;">
    <h2>Swap Details</h2>
    <p>Amount: <span id="result-amount"></span> sats</p>
    <p>Payment Request: <span id="result-payment-request"></span></p>
    <p>On-chain Address: <span id="result-address"></span></p>
    <p>Status: <span id="result-status"></span></p>
    <button id="check-status" class="submit-btn">Check Status</button>
  </div>

  <div id="error-message" class="error-message" style="display:none;"></div>
</div>
