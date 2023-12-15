// calculator.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: Division ";
  }
}

console.log("suma:", add(5, 3));
console.log("resta:", subtract(5, 3));
console.log("multiplicacion:", multiply(5, 3));
console.log("Division:", divide(5, 3));


