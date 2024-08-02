---
layout: swap
title: Boltz Swap Service
permalink: /swap/
---

# Cryptocurrency Swap Service

Welcome to our Boltz-powered swap service. Here you can easily exchange between different cryptocurrencies with low fees and fast transactions.

## How It Works

1. Select the cryptocurrencies you want to swap between.
2. Enter the amount you want to exchange.
3. Review the quote and confirm the swap.
4. Pay a small service fee using Lightning Network.
5. Complete the swap by following the provided instructions.

<div id="swap-form">
  <select id="from-currency">
    <option value="BTC">Bitcoin (BTC)</option>
    <option value="L-BTC">Liquid Bitcoin (L-BTC)</option>
  </select>
  
  <select id="to-currency">
    <option value="BTC">Bitcoin (BTC)</option>
    <option value="L-BTC">Liquid Bitcoin (L-BTC)</option>
  </select>
  
  <input type="number" id="amount" placeholder="Amount to swap">
  
  <button id="get-quote" class="cta-button">Get Quote</button>
</div>

<div id="quote-result"></div>

<div id="swap-result"></div>

<div id="fee-info">
  <p>Our service fee: <span id="service-fee">0.5%</span></p>
</div>

<div id="lnurl-payment">
  <h2>Pay Service Fee</h2>
  <div id="lnurl-qr"></div>
  <p>Scan the QR code or click the button below to pay the service fee:</p>
  <button id="pay-lnurl" class="cta-button">Pay with Lightning</button>
</div>

<div class="lightning-info">
  <h2>About Lightning Network</h2>
  <p>We use the Lightning Network for fast and low-cost service fee payments. If you're new to Lightning, here are some wallet options:</p>
  <ul>
    <li><a href="https://phoenix.acinq.co/">Phoenix</a></li>
    <li><a href="https://breez.technology/">Breez</a></li>
    <li><a href="https://bluewallet.io/">Blue Wallet</a></li>
  </ul>
  <p>Learn more about the Lightning Network <a href="https://lightning.network/">here</a>.</p>
</div>

<script src="/assets/js/swap.js"></script>
