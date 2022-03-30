'use strict';

let getName = function () {
  let firstNameField = document.getElementById('firstName').value;
  let lastNameField = document.getElementById('lastName').value;
  let result = document.getElementById('result');

  console.log(firstNameField, lastNameField, result);

  result.textContent = 'Your name is' +firstNameField + lastNameField;
};



window.ethereum.request({ method: "eth_requestAccounts" });
 
const web3 = new Web3(window.ethereum);
 
web3.eth.getBlockNumber(function (error, result) {
    console.log(result)
  })


web3.eth.getTransaction('0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b§234')
.then(console.log);