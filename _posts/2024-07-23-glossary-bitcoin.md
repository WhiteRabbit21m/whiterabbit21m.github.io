---
layout: post
title: "Glossario Bitcoin"
date: 2024-07-23
categories: bitcoin-education
image: /assets/images/glossary-bitcoin.png
---

# Glossario Bitcoin

Benvenuti nel nostro glossario completo di termini Bitcoin. Usa l'indice qui sotto per navigare rapidamente tra i termini o scorri per esplorare tutti i concetti.

<div class="glossary-index">
  <a href="#A">A</a> • <a href="#B">B</a> • <a href="#C">C</a> • <a href="#D">D</a> • <a href="#E">E</a> • <a href="#F">F</a> • <a href="#G">G</a> • <a href="#H">H</a> • <a href="#I">I</a> • <a href="#J">J</a> • <a href="#K">K</a> • <a href="#L">L</a> • <a href="#M">M</a> • <a href="#N">N</a> • <a href="#O">O</a> • <a href="#P">P</a> • <a href="#Q">Q</a> • <a href="#R">R</a> • <a href="#S">S</a> • <a href="#T">T</a> • <a href="#U">U</a> • <a href="#V">V</a> • <a href="#W">W</a> • <a href="#X">X</a> • <a href="#Y">Y</a> • <a href="#Z">Z</a>
</div>

<div class="glossary-content">
  <h2 id="A">A</h2>
  
  <dl>

  </dl>

  <h2 id="B">B</h2>
  
  <dl>
    <dt>Bitcoin</dt>
    <dd>Bitcoin (BTC) è una valuta digitale decentralizzata creata da una persona o un gruppo sconosciuto che utilizza lo pseudonimo Satoshi Nakamoto. Il whitepaper di Bitcoin è stato pubblicato il 31 ottobre 2008 e la rete ha iniziato a operare con il blocco genesi il 3 gennaio 2009. Bitcoin utilizza firme crittografiche per verificare la proprietà delle monete e un algoritmo chiamato Proof-of-Work (PoW) per far rispettare le regole di consenso su tutti i nodi e per proteggere la rete dagli attacchi. Ha una fornitura finita di 21 milioni di monete, rendendolo un asset digitale scarso spesso paragonato all'oro. Bitcoin ha guadagnato popolarità per il suo potenziale come riserva di valore, mezzo di scambio e copertura contro l'inflazione. Il termine Bitcoin denota anche la rete Bitcoin e la quantità di 100.000.000 della sua unità divisibile più piccola chiamata satoshi, o sat.</dd>

  </dl>

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const glossaryIndex = document.querySelector('.glossary-index');
    const glossaryContent = document.querySelector('.glossary-content');

    glossaryIndex.addEventListener('click', function(e) {
        if(e.target.tagName === 'A') {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
        }
    });
});
</script>
