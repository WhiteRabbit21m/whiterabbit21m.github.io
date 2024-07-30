---
layout: post
title: "Configurazione Bitcoin Core"
date: 2024-07-30
categories: bitcoin-education
image: /assets/images/conf-bitcoin-core.jpg
---
# Guida completa all'installazione e configurazione di un full-node Bitcoin su Ubuntu Server

## Preparazione del server

Dopo aver installato Ubuntu Server, seguire questi passaggi per preparare il sistema:

1. Accedere come root:
   ```
   sudo -i
   ```

2. Aggiornare il sistema:
   ```
   apt update && sudo apt upgrade
   ```

3. Configurare il firewall:
   ```
   ufw allow from 192.168.1.0/24 to any port ssh comment 'Allow SSH from LAN'
   ufw enable
   ```
   Alla domanda "Command may distrupt existing ssh connection. Proceed with operation (y|n)?", digitare `y`

   **Nota**: Abilitando il firewall, tutte le connessioni in entrata a qualsiasi porta vengono negate per impostazione predefinita.

## Installazione di fail2ban

Fail2ban è un software che protegge il server da attacchi di forza bruta.

```
apt install fail2ban
systemctl enable fail2ban.service
```

## Installazione di Tor Daemon

**ATTENZIONE**: Questa guida è scritta per una macchina amd64. Per sistemi arm64 (es. Raspberry Pi), sostituire `amd64` con `arm64` nei comandi seguenti.

1. Aggiungere i repository Tor:
   ```
   deb [arch=<ARCHITECTURE> signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org jammy main
   deb-src [arch=<ARCHITECTURE> signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org jammy main
   ```

2. Installare apt-transport-https:
   ```
   apt install apt-transport-https
   ```

3. Configurare il repository Tor:
   ```
   nano /etc/apt/sources.list.d/tor.list
   ```
   Inserire nel file:
   ```
   deb     [arch=amd64 signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org jammy main
   deb-src [arch=amd64 signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org jammy main
   ```
   Per salvare e uscire: ctrl+x, poi y, infine enter.

4. Aggiungere la chiave GPG di Tor:
   ```
   wget -qO- https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc | gpg --dearmor | tee /usr/share/keyrings/tor-archive-keyring.gpg >/dev/null
   ```

5. Aggiornare e installare Tor:
   ```
   apt update
   apt install tor deb.torproject.org-keyring
   ```

## Creazione dell'utente Bitcoin

Creiamo un utente (bitcoin) che non avrà una password e non avrà nessun privilegio a differenza dell'amministratore. L'unico modo per accedere all'utente bitcoin sarà tramite l'amministratore.

```
adduser --disabled-password bitcoin
```

Premere enter fino alla fine della procedura.

Per uscire dalla modalità root, premere ctrl+d e si tornerà ad essere utente amministratore.

Per accedere all'utente bitcoin, digitare `sudo su - bitcoin` e inserire la password impostata in fase di installazione dell'ubuntu-server. Ctrl+d per tornare all'utente amministratore.

## Download, verifica e installazione del full-node Bitcoin

Assicurarsi di essere utente "amministratore":

1. Scaricare Bitcoin Core:
   ```
   wget https://bitcoincore.org/bin/bitcoin-core-25.0/bitcoin-25.0-x86_64-linux-gnu.tar.gz
   wget https://bitcoincore.org/bin/bitcoin-core-25.0/SHA256SUMS
   wget https://bitcoincore.org/bin/bitcoin-core-25.0/SHA256SUMS.asc
   ```

2. Verificare l'integrità del download:
   ```
   sha256sum --ignore-missing --check SHA256SUMS
   ```
   Dovrebbe restituire: `bitcoin-25.0-x86_64-linux-gnu.tar.gz: OK`

3. Verificare la firma:
   ```
   git clone https://github.com/bitcoin-core/guix.sigs
   gpg --import guix.sigs/builder-keys/*
   gpg --verify SHA256SUMS.asc
   ```
   Il comando restituirà una serie di controlli della firma. Ogni firma valida mostrerà:
   - Una riga che inizia con: `gpg: Good signature`
   - Una riga completa che dice: `Primary key fingerprint: E777 299F C265 DD04 7930  70EB 944D 35F9 AC3D B76A`

4. Installare Bitcoin Core:
   ```
   tar xzf bitcoin-25.0-x86_64-linux-gnu.tar.gz
   sudo install -m 0755 -o root -g root -t /usr/local/bin bitcoin-25.0/bin/*
   ```

5. Verificare l'installazione:
   ```
   bitcoind --version
   ```

## Configurazione

1. Configurare Tor:
   ```
   sudo nano /etc/tor/torrc
   ```
   Aggiungere alla fine del file:
   ```
   ControlPort 9051
   CookieAuthentication 1
   CookieAuthFileGroupReadable 1
   ```
   Per salvare e uscire: ctrl+x, poi y, infine enter.

2. Aggiungere l'utente bitcoin al gruppo debian-tor:
   ```
   sudo adduser bitcoin debian-tor
   ```

3. Riavviare il server:
   ```
   reboot
   ```

4. Configurare Bitcoin Core:
   ```
   sudo su - bitcoin
   mkdir .bitcoin
   chmod 750 .bitcoin/
   cd .bitcoin
   wget https://raw.githubusercontent.com/bitcoin/bitcoin/master/share/rpcauth/rpcauth.py
   python3 rpcauth.py bitcoin
   ```
   Salvare l'output in un file e renderlo accessibile solo all'utente bitcoin:
   ```
   nano rpcauth.passwd
   chmod 400 rpcauth.passwd
   ```

5. Creare il file bitcoin.conf:
   ```
   nano bitcoin.conf
   ```
   Inserire la seguente configurazione:
   ```
   server=1
   daemon=1
   txindex=1
   blockfilterindex=1
   dns=0
   dnsseed=0
   debug=tor
   listen=1
   onlynet=onion
   bind=127.0.0.1
   proxy=127.0.0.1:9050
   rpcauth=<inserisci qui la stringa che hai salvato prima nel file rpcauth.passwd>
   ```
   Per salvare e uscire: ctrl+x, poi y, infine enter.
   ```
   chmod 640 bitcoin.conf
   ```

## Creazione del file bitcoind.service

Assicurarsi di essere l'utente amministratore.

Per fare in modo che il full-node si avvii direttamente all'avvio del server:

```
sudo nano /etc/systemd/system/bitcoind.service
```

Inserire il seguente contenuto:

```
[Unit]
Description=Bitcoin daemon
After=network.target

[Service]

# Service execution
###################

ExecStart=/usr/local/bin/bitcoind -daemon \
                                  -pid=/run/bitcoind/bitcoind.pid \
                                  -conf=/home/bitcoin/.bitcoin/bitcoin.conf \
                                  -datadir=/home/bitcoin/.bitcoin \
                                 
# Process management
####################
Type=forking
PIDFile=/run/bitcoind/bitcoind.pid
Restart=on-failure
TimeoutSec=300
RestartSec=30

# Directory creation and permissions
####################################
User=bitcoin
UMask=0027

# /run/bitcoind
RuntimeDirectory=bitcoind
RuntimeDirectoryMode=0710

# Hardening measures
####################
# Provide a private /tmp and /var/tmp.
PrivateTmp=true

# Mount /usr, /boot/ and /etc read-only for the process.
ProtectSystem=full

# Disallow the process and all of its children to gain
# new privileges through execve().
NoNewPrivileges=true

# Use a new /dev namespace only populated with API pseudo devices
# such as /dev/null, /dev/zero and /dev/random.
PrivateDevices=true

# Deny the creation of writable and executable memory mappings.
MemoryDenyWriteExecute=true

[Install]
WantedBy=multi-user.target
```

Per salvare: ctrl+x, poi y, infine enter.

Abilitare e avviare il servizio:
```
sudo systemctl enable bitcoind.service
sudo systemctl start bitcoind.service
```

## Monitoraggio del nodo

Da questo momento il tuo nodo è in esecuzione. Impiegherà qualche giorno prima che sarà completamente sincronizzato. 

Per controllare lo stato della sincronizzazione:
```
sudo su - bitcoin
watch -t bitcoin-cli -getinfo
```
oppure
```
tail -f .bitcoin/debug.log
```

Per altri comandi:
```
bitcoin-cli -help
```
