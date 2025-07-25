/* Función flecha */

// La función flecha es de ES6+ y tiene ciertas ventajas. Una de ellas es que puedo escribir de forma más cortas las funciones anónimas que almaceno en una variable/constante.

const suma = (a, b) => {
  return a + b;
};

console.log(suma(1, 2)); // 3
// Esta función trabajaría como expresión de función. Pues sin inicializarla antes, no se puede llamar después. Es decir, no se puede llamar antes de definir.

// Otra ventaja es que así como no es necesario escribir la palabra reservada function, puedo no utilizar el return ni las llaves.

const resta = (a, b) => a - b; // Así de corta puedo hacer una función para restar. ¡Y funciona!
console.log(resta(2, 1)); // 1

// La sintaxis general es esta: (arg1, arg2) => {....}
// En caso de no tener argumentos / parámetros, igual debo agregar los paréntesis, así sea vacíos.
// Si tiene exactamente un argumento, se pueden omitir los paréntesis y en medio del igual y el igual-mayorque, agregar el argumento.

// const showName = n => n;
// console.log(showName("Diego")); // Diego

// Si tengo exactamente una expresión en el cuerpo de la función, puedo omitir las llaves, tal como en los ejemplos anteriores. (a, b) => a + b (Se retorna el resultado).

// Si hay más de una expresión, debo usar el cuerpo de la función.
const x = (a, b) => {
  a *= 2;
  return a + b;
};

console.log(x(1, 5)); // 7

/* DIFERENTES SINTAXIS DE FUNCIONES FLECHA */
// Para las funciones flecha, tengo diferentes sintaxis que puedo usar.
// Importante: No olvidar el caso especial de "la función solo retorna un objeto" al final de esta explicación.

// 1. Sintaxis por defecto.
const add = (a, b) => {
  const result = a + b;
  return result; // Como las funciones "normales", tener parámetros y la declaración return son opcionales.
};
// Cabe destacar: 1. El punto y coma al final. 2. No está la palabra clave "function" y son importantes los paréntesis alrededor de los parámetros/argumentos.

// 2. Sintaxis de parámetros más corta si se recibe exactamente un parámetro.
const log = (message) => {
  console.log(message); // Por su puesto también puede retornar algo. Solo que en este ejemplo no se hizo.
};
// Nota: Se pueden omitir los paréntesis SOLO si existe un argumento.

// 3. Paréntesis vacíos si no hay argumentos a recibir.

const greet = () => {
  console.log("Hi there!");
};
// Nota: Los paréntesis deben ser agregados (no se pueden omitir)

// 4. Cuerpo de función más corto si se usa solo una expresión.

const mult = (a, b) => a * b;
// Nota: Las llaves y el return pueden ser omitidas, la expresión resultante siempre se retorna automáticamente.

// 5. Las funciones retornan un objeto (con una sintaxis más corta como en el punto 4).

const loadPerson = (pName) => ({ name: pName });
// Nota: Los paréntesis extra son requeridos alrededor del objeto cuando se usen llaves. Pues si no se usa paréntesis, se interpretará como el cuerpo de una función
// y no como un objeto. Por ende, lanzaría un error de sintaxis.

// Ese último caso puede ser confuso: Normalmente, en JS, las llaves siempre pueden tener exactamente un significado.
const person = { name: "Diego" }; // Claramente crea un objeto.
if (something) {
  /* ...*/
} // Claramente se usa para marcar que está dentro de un bloque if.

// Pero cuando se usan funciones flecha, las llaves pueden tener dos significados.
// 1. Marcar el cuerpo de la función (en la forma por defecto)
// 2. Crea un objeto que quiero retornar (en la forma de cuerpo de función corta)

// Para decirle a JS lo que quiero hacer, envolver la expresión (ej. Creación de objeto) en paréntesis como se vió antes.
let asd = [1, "asd", true];
console.log(asd.length);

// Puedo usar parámetros de la función como valores de los otros parámetros.
const sum = (a, b = a) => a + b;
console.log(sum(5)); // 10

// Rest Operator
// Si quiero agregar otro parámetro, el parámetro del rest operator siempre debe estar en el final o no habrá forma de que lo tome. (par1, ...par2)
// Tampoco se puede tener más de un parámetro rest. (...par1, ...par2) X
function sumUp(...args) {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }; // función dentro de otra función
  let total = 0;
  for (const number of args) {
    total += validateNumber(number);
  }
  return total;
}

console.log(sumUp(1, 2, 3, 4, 5)); // 15
console.log(sumUp(1, 2, 3, 4, 5, 6, 7, 8)); // 36
console.log(sumUp(1, 2, undefined, "hola")); // 3

// Antes del rest operator (ES6), la forma de tomar argumentos indefinidos era esta:

const subtractUp = function () {
  let sum = 0;
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
};

console.log(subtractUp(8, 2, 1)); // -11
// Para que funcione este approach, se debe usar sí o sí la keyword function. No funciona con funciones flecha.

// Spread operator
let miArr = [1, 2, 3];
let nuevoArr = [...miArr, 4, 5];
console.log(miArr); // [1, 2, 3]
console.log(nuevoArr); // [1, 2, 3, 4, 5]
