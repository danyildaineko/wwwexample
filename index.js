// script.js
window.onload = function () {
  console.log("Hello World!");
  var savedTexts = JSON.parse(localStorage.getItem('savedTexts'));
  if (savedTexts) {
    savedTexts.forEach(text => {
      addToTable(text);
    });
  }
};

function saveText() {
  var text = document.getElementById('text-input').value;
  var savedTexts = JSON.parse(localStorage.getItem('savedTexts')) || [];
  savedTexts.push(text);
  localStorage.setItem('savedTexts', JSON.stringify(savedTexts));
  addToTable(text);
  console.log('Saved Text: ', text);
}

function addToTable(text) {
  var table = document.getElementById('text-table');
  var row = table.insertRow(-1); // Append new row to the end
  var cell = row.insertCell(0);
  cell.innerHTML = text;
}

