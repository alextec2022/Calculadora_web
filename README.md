# Calculadora Simple en JavaScript

Este repositorio contiene una calculadora simple escrita en JavaScript y empaquetada en un contenedor Docker. Puedes utilizar Docker para ejecutar la calculadora de manera fácil y consistente en cualquier entorno compatible con Docker.

## Requisitos

- Docker instalado en tu sistema. [Descargar Docker](https://www.docker.com/get-started)

## Instrucciones de Uso
1.Clona este repositorio en tu máquina local:
```bash
# Clona este repositorio en tu máquina local:
git clone https://github.com/tu-usuario/calculadora-docker.git
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
      return "Error: Division de cero";
    }
  }
  
  console.log("suma:", add(5, 3));
  console.log("resta:", subtract(5, 3));
  console.log("Multiplicacion:", multiply(5, 3));
  console.log("Division:", divide(5, 3));
```
