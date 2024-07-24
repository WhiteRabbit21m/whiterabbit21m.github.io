---
layout: page
title: Support Me
permalink: /support/
---
# Lightning Support
You can send an arbitrary amount of sats to [whiterabbit21m@21m.tips][21mtips] or one of
my other lightning addresses.

<div class="btcpay-container">
  <div class="btcpay-logo">
    <img src="/assets/images/btcpay-logo.svg" alt="BTCPay Server Logo">
  </div>
  <form method="POST" action="https://btcpay.whiterabbit21m.com/api/v1/invoices" class="btcpay-form btcpay-form--block">
    <input type="hidden" name="storeId" value="5vHj4TmiyYMCkFUpyBYf6rUDvaJ6YA7B74v2G7iYD9D2" />
    <input type="hidden" name="checkoutDesc" value="Donation" />
    <input type="hidden" name="browserRedirect" value="https://www.tuosito.com/grazie" />
    <input type="hidden" name="currency" value="USD" />
    
    <div class="form-group">
      <label for="btcpay-input-price">Importo della donazione (USD):</label>
      <input type="number" id="btcpay-input-price" name="price" value="5" min="1" step="1" class="form-control">
    </div>
    <button type="submit" class="cta-button">Dona con Bitcoin</button>
  </form>
</div>

<div class="lightning-info">
  <h2>Cos'è un Lightning Address?</h2>
  <p>Un <a href="https://lightningaddress.com/">Lightning Address</a> ti permette di ricevere pagamenti in bitcoin utilizzando un formato simile a un indirizzo email. Prova tu stesso iscrivendoti a <a href="https://stacker.news/r/whiterabbit21m">Stacker News</a> o utilizzando uno di questi bot Telegram: <a href="https://t.me/VentunoTipBot">VentunoTipBot</a>, <a href="https://t.me/SatsMobiBot">SatsMobiBot</a>.</p>
  <p>I miei indirizzi lightning:</p>
  <ul>
    <li><a href="lightning:whiterabbit21m@21m.tips">whiterabbit21m@21m.tips</a></li>
    <li><a href="lightning:whiterabbit21m@sats.mobi">whiterabbit21m@sats.mobi</a></li>
  </ul>
</div>

[21mtips]: lightning:whiterabbit21m@21m.tips
[satsmobi]: lightning:whiterabbit21m@sats.mobi
