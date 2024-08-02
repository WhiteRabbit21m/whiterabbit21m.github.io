---
layout: swap
title: Bitcoin-Lightning Swap Service
permalink: /swap/
---

# Bitcoin to Lightning Network Swap Service

Welcome to our Bitcoin to Lightning Network swap service. Here you can easily exchange between on-chain Bitcoin and Lightning Network payments with low fees and fast transactions.

<div id="swap-form">
  <select id="swap-type">
    <option value="BTC-LN">Bitcoin to Lightning Network</option>
    <option value="LN-BTC">Lightning Network to Bitcoin</option>
  </select>
  
  <input type="number" id="amount" placeholder="Amount to swap (in satoshis)">
  
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
  <p>The Lightning Network is a "layer 2" payment protocol that operates on top of Bitcoin. It enables fast, low-cost transactions, making it ideal for small payments and micropayments.</p>
  <p>If you're new to Lightning, here are some wallet options:</p>
  <ul>
    <li><a href="https://phoenix.acinq.co/">Phoenix</a></li>
  </ul>
  <p>Learn more about the Lightning Network <a href="https://lightning.network/">here</a>.</p>
</div>
