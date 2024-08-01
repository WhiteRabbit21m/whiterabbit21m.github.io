---
layout: default
title: Bitcoin Lightning a On-chain Swap
---

<div class="swap-container">
    <h1 class="swap-title">Bitcoin Lightning a On-chain Swap</h1>
    <div class="swap-card">
        <form id="swapForm" class="swap-form">
            <div class="form-group">
                <label for="amount">Importo (BTC):</label>
                <input type="number" id="amount" step="0.00000001" required>
            </div>
            <div class="form-group">
                <label for="onchainAddress">Indirizzo On-chain:</label>
                <input type="text" id="onchainAddress" required>
            </div>
            <button type="submit" class="btn-primary">Inizia Swap</button>
        </form>
    </div>
    <div id="result" class="swap-card swap-result" style="display:none;">
        <h2>Dettagli dello Swap</h2>
        <div class="result-item">
            <span class="result-label">LNURL per la fee:</span>
            <span id="feeLNURL" class="result-value"></span>
        </div>
        <div class="result-item">
            <span class="result-label">Importo della fee:</span>
            <span id="feeAmount" class="result-value"></span> BTC
        </div>
        <div class="result-item">
            <span class="result-label">Importo dello swap:</span>
            <span id="swapAmount" class="result-value"></span> BTC
        </div>
        <div class="result-item">
            <span class="result-label">Invoice Boltz:</span>
            <span id="boltzInvoice" class="result-value"></span>
        </div>
    </div>
</div>

<script src="{{ '/assets/js/swap.js' | relative_url }}"></script>
