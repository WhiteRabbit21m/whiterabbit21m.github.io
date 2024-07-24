---
layout: home
title: VentunoTipBot
subtitle: Bitcoin Lightning Wallet on Telegram ⚡️ w built-in POS and Scrub.
wallet_title: Launch the wallet on Telegram
cta_link: https://t.me/VentunoTipBot
cta_text: Go to @VentunoTipBot
wallet_screenshot: /assets/images/wallet-screenshot.png
qr_title: Connect
qr_image: /assets/images/wallet-qr-code.png
qr_description: Scan on your mobile and connect to the Bot
opensource_title: Open Source
opensource_description: Made with
opensource_list:
  - "LNbits - Free and open-source lightning-network wallet/accounts system."
  - "telebot - A Telegram bot framework in Go."
  - "gozxing - barcode image processing library in Go."
  - "ln-decodepay - Lightning Network BOLT11 invoice decoder."
  - "go-lnurl - Helpers for building lnurl support into services."
---

This is a Lightning Wallet into a Telegram Bot, but more functionalities have been added:

- /casback command to show a code to get a CashBack from a shop owner
- Integrated full POS service
- POS Link generation for executing POS on an external device
- Scrub service for forwarding all incoming payments to an external address, making the POS actually not custodial if activated
