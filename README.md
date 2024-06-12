# Using JS to create a pyramid
Using JS to create a pyramid

A piece of code that creates pyramids with JS and inverts them with the inverted variable.

```
inverted = false // pyramid
inverted = true // inverted pyramid
```

## Print to console.

```
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
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
  result = result + "\n" + row;
}

console.log(result);
```