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


const tx = document.getElementById('transIDinput');

tx.addEventListener('click', function(){
  const txData = web3.eth.getTransaction(tx).then(console.log);
  return txData;
})

