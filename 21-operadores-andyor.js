/* Operadores AND y OR (COMBINANDO CONDICIONES) */

// CONDICION A = name === "Max"
// CONDICION B = age === 30
// CONDICION C = isAdmin === true

let name = "Max";
let age = 30;
let isAdmin = true;

console.log(name === "Max" && age === 30 || isAdmin === true); // true
console.log(name === "Diego" && age === 10 || isAdmin === true); // true

// Parte 1: Evalua que name y age sean true.
// Parte 2: Evaluado como una alternativa.

// Genera true si la parte 1 O la parte 2 es true.
// Genera false si la parte 1 Y la parte 2 son false.

// Puedo usar paréntesis para controla qué voy a evaluar en conjunto.

/* PRECEDENCIA DE OPERADORES */
// PAPOMUDAS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// Ej
3 + 2 < 9 - 2 // Primero evalúa la suma y resta. Luego la comparación. Porque está por encima del nivel de precedencia.
5 == 5 && 3 < 6 || 10 > 20 // Primero evalúa la comparación, luego el AND, es decir que el lado izquiero es false. Luego lo compara con el OR,
// el lado derecho es true, por ende genera true.