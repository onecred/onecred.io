'use strict';

window.ethereum.request({ method: "eth_requestAccounts" });
 
const web3 = new Web3(window.ethereum);
 
web3.eth.getBlockNumber(function (error, result) {
    console.log(result)
  })


const logoImg = document.querySelector('logo')

const submitButton = document.getElementById('submitButton')



submitButton.setAttribute('type', 'text');
submitButton.setAttribute('id', 'submit');
document.body.appendChild(submitButton);

// let enterTX = function () {
 
//   web3.eth.getTransaction(tx).then(console.log);

//   return tx;
// };

// clickableText.addEventListener('click', function () {
//   console.log(4);
// })

// const txData = web3.eth.getTransaction('0xa7f5a91cd33079fde912f17bb469ff6349fde89eadd2092fa1cc32d6f45dfe4b').then(console.log);


// const input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('id', 'submit');
// document.body.appendChild(input);




// submitButton.addEventListener('click', function(){
//   console.log(`test`);
//   return 4;
// })


// document.getElementById("tx").addEventListener("click", myFunction);

//   function myFunction() {
//     const txData = web3.eth.getTransaction('0xa7f5a91cd33079fde912f17bb469ff6349fde89eadd2092fa1cc32d6f45dfe4b').then(console.log);
//     document.getElementById("tx").textContent = txData;
//   }


