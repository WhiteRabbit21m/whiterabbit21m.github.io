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

  <h2 id="C">C</h2>
  
  <dl>

    <dt>Checksum</dt>
    <dd>Un checksum è un modo semplice per rilevare errori o sbagli nei dati. Per quanto riguarda Bitcoin, i checksum vengono calcolati utilizzando una porzione di 32 bit di un hash SHA256 (gli ultimi quattro byte) e sono usati per individuare indirizzi errati, aiutando a prevenire che le transazioni vadano male a causa di semplici errori di battitura. Un checksum usa solo 32 bit perché è più che sufficiente per identificare in modo univoco un indirizzo Bitcoin o una transazione, assicurando al contempo l'efficienza della rete. Il checksumming è il processo di calcolo e conferma rapida dei checksum per convalidare i dati senza richiedere un'elaborazione estesa o il coinvolgimento di terze parti.</dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="D">D</h2>
  
  <dl>

    <dt>Diceware</dt>
    <dd>Diceware è un metodo per generare passphrase, password e altri elementi crittografici, come i seed di Bitcoin, utilizzando dadi comuni. Per creare ogni parola nella passphrase, sono necessari cinque lanci di un dado a sei facce. Ogni numero ottenuto viene assemblato come un numero di cinque cifre, corrispondente a una parola in una lista di parole crittografiche. Ad esempio, se hai ottenuto 1, 3, 4, 2 e 6 per la prima parola, cercheresti la parola "teach" nella lista di parole. In Bitcoin, diceware viene utilizzato per generare il seed di un portafoglio Bitcoin. Un seed di portafoglio Bitcoin è una stringa di 128 o 256 bit che viene utilizzata per creare tutte le chiavi private di un portafoglio Bitcoin. Inoltre, questo seed può essere utilizzato anche per recuperare il portafoglio nel caso in cui le chiavi private vengano smarrite o rubate. Nota bene, ricorda di non condividere mai il tuo seed con nessuno, poiché darebbe loro accesso al tuo portafoglio Bitcoin.</dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="E">E</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="F">F</h2>
  
  <dl>

    <dt>Fork</dt>
    <dd>Un fork in Bitcoin si riferisce a un cambiamento nelle regole del protocollo. Ci sono due tipi principali: Hard fork: Un cambiamento incompatibile con le versioni precedenti, che causa la divisione della blockchain in due se non tutti i nodi si aggiornano. Risulta in una blockchain completamente nuova. Soft fork: Un cambiamento retrocompatibile, il che significa che la nuova catena è ancora compatibile con quella vecchia. I nodi più vecchi vedono le nuove transazioni come valide (ma potrebbero non comprenderle), assicurando una singola catena continua. Questo tipo di fork restringe o aggiunge regole senza ostracizzare i nodi precedenti. Due soft fork importanti in Bitcoin sono stati Segregated Witness (SegWit) nel 2017 e Taproot nel 2021.</dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="G">G</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="H">H</h2>
  
  <dl>

    <dt>Hashcash</dt>
    <dd>Nel 1997, il Dr. Adam Back, CEO di Blockstream, propose Hashcash, un meccanismo di proof-of-work (PoW) destinato a fermare lo spam e gli attacchi di denial-of-service (DoS). Oggi viene utilizzato come base per l'algoritmo di mining di Bitcoin. Nei sistemi di posta elettronica, Hashcash funge da funzione di costo che impone un costo computazionale al mittente, scoraggiando così lo spam e i remailer anonimi. Questo costo computazionale è simile a un "pedaggio" che il mittente deve pagare per assicurare che l'email venga consegnata. L'idea alla base di questo è che gli spammer, che tipicamente inviano grandi volumi di email, sarebbero scoraggiati dal farlo poiché il costo computazionale sarebbe proibitivamente costoso. In Bitcoin, Hashcash viene utilizzato nella creazione di nuovi blocchi richiedendo ai minatori di eseguire una certa quantità di lavoro computazionale prima che il loro blocco possa essere considerato valido. Questo lavoro comporta la ricerca di un valore che, quando viene sottoposto a hash con SHA-256, produce un risultato che soddisfa criteri specifici, come un certo numero di zeri iniziali. Ciò assicura che la creazione di nuovi blocchi richieda un elevato sforzo di calcolo, contribuendo a proteggere la rete decentralizzata e giocando un ruolo critico nella sicurezza della blockchain di Bitcoin.</dd>

    <dt>Hashrate</dt>
    <dd>Una misura aggregata di quanti hash i minatori di Bitcoin producono al secondo nell'algoritmo di consenso Proof-of-Work. Attualmente, l'hashrate di Bitcoin si misura in exahash al secondo (EH/s), rappresentando la velocità con cui i minatori tentano di trovare un hash valido per un nuovo blocco.</dd>

    <dt>HODLer</dt>
    <dd>Un errore intenzionale per 'holder' (detentore); una persona che mantiene risparmi a lungo termine in Bitcoin. L'errore ha origine da uno sfogo ubriaco del 2013 dell'utente del forum BitcoinTalk GameKyuubi, intitolato "I AM HODLING" ("STO HODLANDO"), in cui spiega che il trading tipicamente crea perdite e la migliore strategia è non vendere mai.</dd>

  </dl>

  <h2 id="I">I</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="J">J</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="K">K</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="L">L</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="M">M</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="N">N</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  
  <h2 id="O">O</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="P">P</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="Q">Q</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="R">R</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="S">S</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="T">T</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="U">U</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="V">V</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="W">W</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="X">X</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="Y">Y</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  
<h2 id="Z">Z</h2>
  
  <dl>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

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
