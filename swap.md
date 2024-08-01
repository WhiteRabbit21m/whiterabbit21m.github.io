---
layout: swap
title: Bitcoin/Lightning Swap
permalink: /swap/
---

# Bitcoin/Lightning Swap Service

Use this service to swap between Bitcoin on-chain and Lightning Network.

<div id="swap-interface"></div>

Please note that all swaps are subject to our terms of service and include a small fee for using our service.

## Improving Swap Reliability

For more reliable swaps, we recommend opening a direct Lightning channel with Boltz:

{% if site.environment == "production" %}
- Mainnet: [CLN](https://bolt.observer/node/023e4a8cb19e9dc22d6b8fcda5d9b2b7bf72a9ff5d874205aaeca34448eb7f1bb9) | [LND](https://bolt.observer/node/026165850492521f4ac8abd9bd8088123446d126f648ca35e60f88177dc149ceb2)
{% else %}
- Testnet: [CLN](https://bolt.observer/node/022e991bdb5da9ce06e6d7bda646913ff00eab33c622bae16abf1a0a5c8830a8f8) | [LND](https://bolt.observer/node/03f060953bef5b777dc77e44afa3859d022fc1a77c55138deb232ad7255e869c00)
{% endif %}
