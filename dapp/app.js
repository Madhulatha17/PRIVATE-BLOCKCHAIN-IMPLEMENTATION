const contractAddress = "YOUR_CONTRACT_ADDRESS";

const abi = [
  {
    "inputs": [{"internalType": "string","name": "_data","type": "string"}],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get",
    "outputs": [{"internalType": "string","name":"","type":"string"}],
    "stateMutability": "view",
    "type": "function"
  }
];

let web3 = new Web3(Web3.givenProvider);
let contract = new web3.eth.Contract(abi, contractAddress);

async function setData() {
    let accounts = await web3.eth.requestAccounts();
    let value = document.getElementById("text").value;

    await contract.methods.set(value).send({ from: accounts[0] });
}

async function getData() {
    let result = await contract.methods.get().call();
    document.getElementById("output").innerText = result;
}
