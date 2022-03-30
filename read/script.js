'use strict';



window.ethereum.request({ method: "eth_requestAccounts" });
 
const web3 = new Web3(window.ethereum);
 
web3.eth.getBlockNumber(function (error, result) {
    console.log(result)
  })

let tx = document.getElementById('transIDinput').value;


let enterTX = function () {
 
  web3.eth.getTransaction(tx).then(console.log);

  return tx;
};

console.log(enterTX(tx));