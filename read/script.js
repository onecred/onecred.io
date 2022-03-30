'use strict';



window.ethereum.request({ method: "eth_requestAccounts" });
 
const web3 = new Web3(window.ethereum);
 
web3.eth.getBlockNumber(function (error, result) {
    console.log(result)
  })


// let enterTX = function () {
 
//   web3.eth.getTransaction(tx).then(console.log);

//   return tx;
// };

// document.getElementById('enterInfo').addEventListener("click", function(){

// })


const txData = web3.eth.getTransaction('0xa7f5a91cd33079fde912f17bb469ff6349fde89eadd2092fa1cc32d6f45dfe4b').then(console.log);

