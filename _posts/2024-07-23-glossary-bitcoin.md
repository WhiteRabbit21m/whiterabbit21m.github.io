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
    
    <dt>Bitcoin Core</dt>
    <dd>Il software client open-source ufficiale per la rete Bitcoin. Bitcoin Core è un'implementazione di nodo completo: scarica e convalida tutte le transazioni e i blocchi Bitcoin, permettendo all'utente di partecipare al consenso. Fornisce agli utenti un set completo di funzionalità necessarie per interagire con la rete Bitcoin, inclusa la funzionalità di portafoglio per inviare e ricevere bitcoin, nonché la partecipazione al processo di mining (agisce come nodo backend per il vero miner ASIC e il software di mining).</dd>

    <dt>Bitcoin node</dt>
    <dd>Un nodo esegue il software Bitcoin Core (o un'altra implementazione di riferimento) che permette agli utenti di interagire e partecipare al consenso della rete mantenendo una copia della blockchain Bitcoin e validando transazioni e blocchi. Nota che mentre tutti i miner sono nodi, non tutti i nodi estraggono bitcoin. È importante sottolineare che eseguire il proprio nodo dà diritto a un voto nel consenso, poiché valida indipendentemente blocchi e transazioni secondo le regole del protocollo Bitcoin. Ciò significa che può rifiutare blocchi o transazioni non conformi, contribuendo al processo decisionale democratico all'interno della rete. Un esempio di gestori di nodi che tentavano di attuare un aggiornamento o una modifica alla rete Bitcoin è avvenuto durante le 'Guerre della Dimensione dei Blocchi' del 2017, dove i gestori di nodi supportavano un User-Activated Soft Fork (UASF). Gli utenti proposero nuove regole sulla dimensione dei blocchi indipendentemente dai miner, effettivamente votando e influenzando la rete verso l'accettazione della modifica del protocollo. Oltre a partecipare alla governance della rete Bitcoin, eseguire il proprio nodo Bitcoin fornisce all'utente una maggiore sicurezza poiché non si dipende da terze parti, nonché privacy poiché ci si può connettere alla rete in modo anonimo. Gli utenti possono scaricare il software open-source Bitcoin Core dal suo repository ufficiale su GitHub.</dd>

    <dt>Bitcoin Script</dt>
    <dd>Bitcoin Script è il linguaggio di programmazione nativo di Bitcoin utilizzato per definire come i bitcoin vengono spesi e chi può spenderli. È un linguaggio semplice basato su stack, progettato per essere sicuro, efficiente e facile da utilizzare per gli sviluppatori. Bitcoin Script è intenzionalmente non Turing-completo, il che significa che non può essere utilizzato per creare programmi arbitrari. Questo impedisce a script potenzialmente malevoli di consumare eccessiva potenza di calcolo che potrebbe danneggiare la rete. Bitcoin Script è uno strumento potente per supportare funzionalità come multifirma, timelock e pagamenti condizionali. Con la crescita dell'ecosistema Bitcoin, è probabile che Bitcoin Script svolgerà un ruolo ancora più importante nell'abilitare nuove e innovative applicazioni. Gli script comuni includono Pay-to-Public-Key-Hash (P2PKH) e Pay-to-Script-Hash (P2SH).</dd>

    <dt>Bolt12</dt>
    <dd>Una proposta di estensione alla Specifica Lightning, focalizzata sul miglioramento dell'efficienza e della flessibilità della rete. La caratteristica principale introdotta da BOLT12 è il protocollo Offers, che semplifica il processo di creazione, gestione ed esecuzione delle fatture Lightning. Le Offers forniscono un'alternativa più dinamica e riutilizzabile alle fatture tradizionali, consentendo la generazione automatica di fatture, pagamenti ricorrenti e una migliore privacy. Implementando BOLT12, Lightning può supportare una gamma più ampia di casi d'uso, inclusi abbonamenti, donazioni e servizi pay-as-you-go, riducendo al contempo la complessità delle interazioni di pagamento. Alcune funzionalità di BOLT12, come le fatture ricorrenti e i percorsi di pagamento oscurati, sono già disponibili come opzioni sperimentali in Core Lightning.</dd>

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
