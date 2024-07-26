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

    <dt>Key-value store</dt>
    <dd>Un key-value store in Bitcoin è un tipo di database semplice ed efficiente utilizzato per memorizzare e recuperare dati utilizzando chiavi uniche per accedere ai valori memorizzati. Memorizza i dati come una collezione di coppie chiave-valore: una chiave, che è un identificatore unico, e un valore, che è il dato associato a quella chiave. Ogni chiave è unica e corrisponde a un valore specifico, permettendo un recupero efficiente, un accesso rapido e una gestione dei dati. Alcuni esempi includono: wallet.dat: Questo file contiene dettagli relativi al portafoglio come chiavi private e indirizzi, chiavi pubbliche e metadati delle chiavi (etichette, seed HD e percorsi di derivazione) e utilizza internamente un archivio chiave-valore. LevelDB: Bitcoin Core utilizza il motore di archiviazione chiave-valore LevelDB come libreria di archiviazione ad alte prestazioni, assicurando che le operazioni di recupero e gestione dei dati siano ottimizzate per le esigenze della rete.</dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="L">L</h2>
  
  <dl>

    <dt>Lightning implementation</dt>
    <dd>Un programma software capace di gestire un nodo Lightning e di interagire con la Lightning Network sul backend. Ogni implementazione segue le specifiche BOLT (Basis of Lightning Technology), assicurando compatibilità e interazione senza problemi tra i nodi all'interno della rete. Alcune popolari implementazioni Lightning includono Core Lightning, LND (sviluppato da Lightning Labs) ed Eclair (sviluppato da ACINQ). Mentre possono avere caratteristiche, linguaggi di programmazione o ottimizzazioni diverse, la loro aderenza agli standard BOLT garantisce l'interoperabilità.</dd>

    <dt>Lightning Network (LN)</dt>
    <dd>Un protocollo decentralizzato di livello 2 costruito su Bitcoin che utilizza una rete peer-to-peer di canali di pagamento per consentire transazioni più economiche, veloci e scalabili. I pagamenti su Lightning vengono aggregati off-chain e poi inviati alla blockchain principale di Bitcoin per il regolamento finale, sfruttando la sicurezza e la decentralizzazione di Bitcoin mentre migliora il throughput delle transazioni e aiuta Bitcoin a scalare globalmente. <Lightning è la soluzione di scalabilità definitiva per Bitcoin. Con un limite stimato di 500 transazioni al secondo (TPS) per canale di pagamento (nelle attuali condizioni di rete), Lightning ha un throughput di oltre 42 milioni di TPS, l'equivalente di blocchi di circa 14,4 TB di dimensione. Questo è più di 1000 volte la capacità di VISA, che può gestire solo fino a 150 milioni di TPS al giorno o un massimo di 24.000 TPS contemporaneamente./dd>

    <dt>Lightning Service Provider (LSP)</dt>
    <dd>Un Lightning Service Provider, o LSP, è un'entità che facilita vari servizi di liquidità e di rete sulla Lightning Network per utenti e aziende. Gli LSP agiscono come intermediari, in modo simile a come i fornitori di servizi Internet (ISP) offrono l'accesso a Internet. Forniscono vari servizi, come l'apertura di canali, l'instradamento delle transazioni e una migliore connettività, oltre a funzionalità più avanzate come il ribilanciamento dei canali e l'apertura di canali zero-conf. Il loro ruolo principale è migliorare l'esperienza dell'utente gestendo compiti più complessi come lo scambio di fondi on-chain e off-chain e l'adeguamento della posizione dell'utente all'interno della rete. Gli LSP spesso addebitano commissioni per coprire le spese di mining, i costi del capitale e per i loro servizi specializzati. Confrontando un LSP con un altro servizio Lightning, come un LaaS, gli LSP si concentrano specificamente sui servizi di liquidità e di rete, mentre i fornitori di LaaS possono offrire una gamma più ampia di soluzioni infrastrutturali.</dd>

    <dt>Lightning Specification</dt>
    <dd>La Lightning Specification, nota anche come Basis of Lightning Technology (BOLT), è una raccolta degli sforzi della comunità Bitcoin per specificare e consolidare gli standard tecnici intorno alla Lightning Network, con l'intento di raggiungere la compatibilità delle funzionalità e l'interoperabilità tra le diverse implementazioni. Al momento della stesura, ci sono 11 BOLT, con il molto atteso BOLT12. Lista completa dei BOLT attuali: BOLT #1: Protocollo di Base BOLT #2: Protocollo Peer per la Gestione dei Canali BOLT #3: Formati di Transazione e Script Bitcoin BOLT #4: Protocollo di Routing Onion BOLT #5: Raccomandazioni per la Gestione delle Transazioni On-chain BOLT #7: Scoperta di Nodi e Canali P2P BOLT #8: Trasporto Crittografato e Autenticato BOLT #9: Flag di Funzionalità Assegnate BOLT #10: Bootstrap DNS e Localizzazione Assistita dei Nodi BOLT #11: Protocollo di Fatturazione per Pagamenti Lightning</dd>

    <dt>Lightning-as-a-Service (LaaS)</dt>
    <dd>Lightning-as-a-Service, o LaaS, è un modello di servizio specializzato in cui fornitori terzi offrono infrastrutture e soluzioni relative alla Lightning Network di Bitcoin a imprese e sviluppatori. Invece di lottare con gli aspetti tecnici della configurazione e gestione di nodi Lightning, canali e liquidità, le aziende possono affidarsi ai fornitori LaaS per gestire queste complessità. Ciò permette ai clienti di incorporare più facilmente le capacità di transazione veloci, sicure ed economiche di Lightning nelle loro piattaforme o applicazioni. Questo può comprendere utilizzi che vanno dal facilitare microtransazioni al alimentare applicazioni decentralizzate. L'utilizzo di un fornitore LaaS riduce l'investimento iniziale, minimizza il rischio, utilizza tecnologia Lightning moderna e include manutenzione del sistema 24/7. Tuttavia, i clienti potrebbero essere vincolati al loro fornitore LaaS per periodi contrattuali estesi poiché non possiedono i sistemi Lightning.</dd>

    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>

  </dl>

  <h2 id="M">M</h2>
  
  <dl>

    <dt>Mempool</dt>
    <dd>Il mempool, o memory pool, è il luogo dove le transazioni Bitcoin attendono prima di essere confermate e registrate in modo immutabile sulla blockchain. Ogni nodo Bitcoin ha il proprio mempool che memorizza queste transazioni in sospeso dopo averne verificato la validità. Questa verifica include il controllo per evitare la doppia spesa e la verifica delle firme crittografiche appropriate. Le transazioni rimangono nel mempool finché un minatore non le seleziona per includerle in un nuovo blocco. La dimensione e il contenuto del mempool variano, influenzati dall'attività della rete, dalle commissioni di transazione e dalle politiche dei nodi. Per esempio, quando invii una transazione Bitcoin, questa entra nei mempool della rete e vi rimane fino a quando non viene inserita in un blocco, momento in cui viene confermata e rimossa dai mempool. Gli utenti possono visualizzare il mempool di Bitcoin in tempo reale utilizzando lo strumento open-source mempool.space, oltre a cercare e visualizzare le transazioni.</dd>

    <dt>Merge conflict</dt>
    <dd>Un merge conflict nel contesto di Bitcoin si verifica quando due rami hanno apportato modifiche contrastanti allo stesso codice, e il sistema di controllo versione non può determinare automaticamente quale modifica sia corretta. Per esempio, se uno sviluppatore modifica una certa funzione in Bitcoin Core mentre un altro modifica la stessa funzione in una piattaforma sidechain di Bitcoin come Elements (di cui Liquid è un'implementazione). Ciò richiede una revisione manuale per assicurare che il codice finale di Elements sia coerente, funzionale e compatibile con la sua controparte Bitcoin Core. I merge conflict sono comuni in progetti open-source come Bitcoin (e i suoi protocolli di secondo livello) che hanno una rete indipendente e distribuita di sviluppatori. Una buona comunicazione è fondamentale.</dd>

    <dt>Merkle tree</dt>
    <dd>Un albero di Merkle, noto anche come albero di hash, prende il nome dal suo inventore, Ralph Merkle. È una struttura dati che garantisce l'integrità della verifica dei dati in Bitcoin. La sua struttura ad albero permette ai nodi leggeri di verificare le transazioni senza dover scaricare l'intero blocco, codificando tutte le transazioni in un blocco in un singolo hash, noto come radice di Merkle, che viene poi incluso nell'intestazione del blocco. Ecco un esempio di come potrebbe apparire un albero di Merkle per un blocco con quattro transazioni: Tx0, Tx1, Tx2, Tx3: le singole transazioni incluse in un blocco Bitcoin. Hash0, Hash1, Hash2, Hash3: gli hash delle singole transazioni. Hash 01: l'hash della concatenazione di Hash0 e Hash1. Hash 23: l'hash della concatenazione di Hash2 e Hash3. Radice di Merkle: Questo è l'hash della concatenazione di Hash 01 e Hash 23 incorporato nell'intestazione del blocco. Se qualcuno vuole verificare che una particolare transazione sia inclusa in un blocco, non deve scaricare ogni transazione. Invece, può scaricare la parte superiore dell'albero di Merkle (la radice) insieme a un percorso di Merkle (l'insieme di hash necessari per ricostruire la radice di Merkle da una singola transazione).</dd>

    <dt>Mnemonic</dt>
    <dd>Anche chiamata frase di recupero o frase seme, una mnemonica è tipicamente una sequenza di 12 o 24 parole generate casualmente usate per creare e recuperare un portafoglio Bitcoin. La mnemonica rappresenta i dati esadecimali della tua chiave privata sotto forma di parole inglesi facilmente leggibili e memorizzabili (quindi più facili da usare per gli esseri umani). Viene utilizzata come piano di recupero di backup per accedere ai tuoi bitcoin, come delineato nel BIP 39. È essenziale mantenere segreta la tua mnemonica e seguire le migliori pratiche per la gestione del portafoglio per una custodia ottimale. Se compromessa, i tuoi bitcoin potrebbero essere soggetti a furto.</dd>

    <dt>MuSig2</dt>
    <dd>MuSig2 è un protocollo crittografico per creare multifirme basate su Schnorr in Bitcoin. Un miglioramento rispetto al protocollo MuSig originale, MuSig2 offre maggiore privacy, scalabilità e flessibilità rispetto alla multifirma standard, permettendo a un gruppo di firmatari di produrre una singola firma che rappresenta il loro consenso collettivo per una specifica transazione. In MuSig2, il materiale chiave di ogni firmatario è confidenziale e ha potere di veto, il che significa che la transazione può essere approvata solo se ogni firmatario del gruppo è d'accordo. Ciò permette una maggiore resistenza contro certi attacchi, come la cancellazione della chiave, così come gli attacchi con chiavi canaglia e di replay. MuSig2 è n-di-n, tuttavia, quando abbinato a Taproot, può simulare una firma con soglia t-di-n. Consideriamo 2-di-{A, B, C}, questo è equivalente a 2-di-{A,B}, 2-di-{A,C} o 2-di-{B,C}. Queste sono tutte MuSig 2-di-2, il che significa che puoi costruire il tuo output Taproot in modo che il percorso di spesa più probabile tra i tre diventi il percorso chiave Taproot, e gli altri due vengano inclusi nel percorso script Taproot.</dd>

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

    <dt>Opcode</dt>
    <dd>Gli opcode, abbreviazione di codici operativi, sono i blocchi fondamentali nello Script Bitcoin che definiscono e abilitano varie operazioni sulla rete. Permettono agli utenti di impostare condizioni per le transazioni, manipolare dati sullo stack, eseguire calcoli, validare o invalidare transazioni e eseguire funzioni crittografiche, tra le altre funzioni. Alcuni opcode popolari (con valore esadecimale) e le loro funzioni: OP_CHECKSIG (0xAC): utilizzato per verificare che una firma digitale sia valida per una data chiave pubblica e transazione, assicurando che la persona che spende bitcoin abbia l'autorità per farlo. OP_RETURN (0x6A): marca un output di transazione come non spendibile e permette di incorporarvi una piccola quantità di dati arbitrari. È comunemente usato per aggiungere dati alla blockchain per varie applicazioni, come la marcatura temporale, l'ancoraggio o l'inclusione di metadati. OP_CHECKMULTISIG (0xAE): impiegato per controllare firme multiple contro chiavi pubbliche multiple, permettendo operazioni di multifirma (multisig) n-di-m dove un numero specificato (n) di firme da un insieme possibile (m) sono richieste per validare la transazione. È importante notare che gli opcode Bitcoin comprendono un ampio spettro di operazioni di base, mentre gli opcode di introspezione sono specificamente focalizzati sull'accesso ai dati delle transazioni.</dd>

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

    <dt>Zero-Knowledge Proofs (ZKPs)</dt>
    <dd>Una classe di funzioni matematiche che permettono a qualcuno di dimostrare di conoscere qualcosa su un valore nascosto senza rivelare quel valore.Bulletproofs, Bulletproofs++, zk-STARKS e zk-SNARKS sono tutti esempi di diverse tecniche ZKP. Ognuna offre diversi compromessi e ha distinti vantaggi e svantaggi. Non esiste una soluzione ZKP unica adatta a tutti i casi.</dd>

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
