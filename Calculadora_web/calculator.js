// calculator.js
const readline = require('readline-sync');

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: División por cero";
  }
}

function obtenerNumero(mensaje) {
  return parseFloat(readline.question(mensaje));
}

console.log("Calculadora Simple en JavaScript");

const numero1 = obtenerNumero("Ingrese el primer número: ");
const numero2 = obtenerNumero("Ingrese el segundo número: ");

console.log(`\nOperaciones:`);
console.log(`1. Sumar`);
console.log(`2. Restar`);
console.log(`3. Multiplicar`);
console.log(`4. Dividir`);

const opcion = readline.questionInt("\nSeleccione la operación (1-4): ");

let resultado;

switch (opcion) {
  case 1:
    resultado = sumar(numero1, numero2);
    console.log(`\nResultado: ${numero1} + ${numero2} = ${resultado}`);
    break;
  case 2:
    resultado = restar(numero1, numero2);
    console.log(`\nResultado: ${numero1} - ${numero2} = ${resultado}`);
    break;
  case 3:
    resultado = multiplicar(numero1, numero2);
    console.log(`\nResultado: ${numero1} * ${numero2} = ${resultado}`);
    break;
  case 4:
    resultado = dividir(numero1, numero2);
    console.log(`\nResultado: ${numero1} / ${numero2} = ${resultado}`);
    break;
  default:
    console.log("Opción no válida");
}
