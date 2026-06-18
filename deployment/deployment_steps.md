#  Private Blockchain Deployment Steps

## Tools Required
- Geth (Ethereum client)
- Remix IDE
- MetaMask
- Web3.js



## 1: Create Private Blockchain

bash
geth init config/genesis.json

2: Start Node
geth --networkid 2026 --http --http.api eth,web3,personal,net --allow-insecure-unlock

3: Open Remix IDE
Deploy SimpleStorage.sol on private network

 4: Connect MetaMask
Add custom network (localhost 8545)

 5: Deploy Contract
Deploy using Remix + injected provider

 6: Run DApp
open index.html in browser
