---
layout: swap
title: Boltz Swap Service
permalink: /swap/
---

# Boltz Swap Service

Welcome to our Boltz swap service. Here you can easily swap between different cryptocurrencies with low fees and fast transactions.

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
  
  <button id="get-quote">Get Quote</button>
</div>

<div id="quote-result"></div>

<div id="swap-result"></div>

<script src="/assets/js/swap.js"></script>
