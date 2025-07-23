/* Modo estricto y escribiendo buen código */

// Si uso lo siguiente:
/*

userName = "Diego";
console.log(userName);

se va a imprimir sin problema. Sin embargo, no debo hacerlo.
*/
"use strict"; // Así habilito el modo estricto y hacer cosas como lo anterior no serán permitidas.

let userName = "Diego";
console.log(userName);

// Aquí más detalles del strict mode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode

// Otra cosa que me limita el modo estricto es que no puedo usar palabras reservadas como variables.

let undefined = "Hola";
console.log(undefined); // Genera el error "SyntaxError: Identifier 'undefined' has already been declared"
// De igual forma, si no lo imprimo, genera un error: Uncaught TypeError: Cannot assign to read only property 'undefined' of object '#<Window>'