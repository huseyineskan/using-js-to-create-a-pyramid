// Pyramid with 

const myDiv = document.querySelector('#myDiv');
const character = "#";
const count = 8;
const rows = [];
let inverted = false;
function padRow(rowNumber, rowCount) {
    return "<span class='span-space'> </span>".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + "<span class='span-space'> </span>".repeat(rowCount - rowNumber);
  }
  
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }
  
  let result = ""
  
  for (const row of rows) {
    result = result + "<br>" + row;
  }

myDiv.innerHTML = result;