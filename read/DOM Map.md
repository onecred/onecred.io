DOM Map



Select a button, and add an event handler that logs the value of an input that is also selected

document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);

    document.querySelector('.message').textContent = 'Correct number! ';
})