'use strict';

let getName = function () {
  let firstNameField = document.getElementById('firstName').value;
  let lastNameField = document.getElementById('lastName').value;
  let result = document.getElementById('result');

  console.log(firstNameField, lastNameField, result);

  result.textContent = 'Your name is' +firstNameField + lastNameField;
};

