# Calculadora Simple en JavaScript

Este repositorio contiene una calculadora simple escrita en JavaScript y empaquetada en un contenedor Docker. Puedes utilizar Docker para ejecutar la calculadora de manera fácil y consistente en cualquier entorno compatible con Docker.

## Requisitos

- Docker instalado en tu sistema. [Descargar Docker](https://www.docker.com/get-started)

## Instrucciones de Uso
1.Clona este repositorio en tu máquina local:
```bash
https://github.com/alextec2022/Calculadora_web.git
```
2.Navega al directorio del proyecto:
```bash
cd calculadora-docker
```
3.Ejecuta el contenedor utilizando Docker Compose:
```bash
docker-compose up
```
Esto construirá la imagen y ejecutará la calculadora en un contenedor.

Codigo de la calculadora en js
```js
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

```
