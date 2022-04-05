'use strict';

window.ethereum.request({ method: "eth_requestAccounts" });
 
const web3 = new Web3(window.ethereum);
 
web3.eth.getBlockNumber(function (error, result) {
    console.log(result)
  })





// const returnTX = function (tx) {
//     const txData = web3.eth.getTransaction('tx').then(console.log);
//     document.getElementById("tx").textContent = txData;
//   }



// document.querySelector(".submit--button").addEventListener("click", function({
//   const tx = document.querySelector('')
// }));



// let txData = web3.eth.getTransaction('tx')


document.querySelector('.submit--button').addEventListener('click', function(){
  // const tx = String (document.querySelector('.txInput').value);
  // const txData = web3.eth.getTransaction('tx').then(console.log);
  console.log(web3.eth.getTransaction('0xf0bbe45be1e7c22a1c1d2ab0dbdd9bbdfa02c20123d73f21d3d29b8ee81e0af2'));
});