/* SECCION 5 - DETRÁS DE ESCENAS Y EL PASADO EXTRAÑO (ES3, ES5) Y PRESENTE DE JAVASCRIPT (ES6+) */

// Introducción al módulo
// Nuevos comportamientos de JavaScript

// 1. Sintaxis ES5 vs ES6+
// 2. ¿Cómo funciona JavaScript?
// 3. Las partes extrañas

// 1. ES5 VS ES6+ (NUEVA GENERACIÓN) - EVOLUCIÓN DE JAVASCRIPT

// En la página de ECMA se pueden ver los diferentes estándares.
// Evolución de JavaSript:

// 1. ES5 (y las anteriores)
// -> Es soportado por básicamente todos los navegaadores, incluyendo el antiguo Internet Explorer.
// -> Solo tiene var, no let ni const.
// -> Generalmente la misma sintaxis de ES6, pero algunas características menos.

// 2. ----> ES6+: JavaScript moderno (es lo que se ve en este curso)
// -> Soportado en navegadores modernos, pueden ser transpilados a ES5.
// -> Muchas nuevas características que nos ayudan a escribir código más limpio, mejor y más rápido.
// -> Todavía está bajo un desarrollo activo, pero ES6 fue un gran paso hacia adelante.

// VAR, LET Y CONST -> Introducción al block scope.
// var
// Crea una variable.
// Disponible desde siempre.
// Funciones y scope global.

// let
// Crea una variable.
// Disponible desde ES6.
// Block scope.

// const
// Crea una constante.
// Disponible desde ES6.
// Block scope.

// let name = "Diego";
// let name = "Luis"; // Error: name is already declared.

/*function greet() {
  let name = "Luis"; // Shadowing
  let age = 25;
  console.log(name, age);
}*/
// console.log(name, age); // Error: age is not defined -> Pues se sale del scope de la función greet, de ese block scope.
// console.log(name); // Diego

// greet(); // Luis 25

/*
var name = "Max";
// var name = "Anna"; // Ya no es error, con var no genera problema. Sin embargo, no se recomienda.

if (name === "Max") {
  let hobbies = ["Sports", "Cooking"]; // Usando var, sería una variable global, tal como si la hubiera declarado fuera del if.
  // Ahora, si lo declaro fuera del if y le asigno un valor dentro, sí funcionará a nivel global su valor.
  console.log(hobbies); // Si en vez de var, uso let, esto se imprime normal, el problema es con el hobbies que imprimo afuera del condicional if.
}

function greet() {
  var name = "Manuel";
  var age = 25;
  console.log(name, age, hobbies);
}
console.log(name, hobbies); // Aquí no imprime hobbies, genera el error hobbies is not defined.
// Esto pasa porque let se enfoca en un bloque que inicia con { y termina con }. Como en este caso, el if solo abarca let hobbies y el console.log,
// lo que pase afuera de ese if no será reconocido siempre que se use let.

greet(); // Manuel 25
*/

// En conclusión, no debo usar var, no hay caso de uso que implique sí o sí usar var. Con let y const es suficiente, no necesito más.

// Esto es un ejemplo, no algo que haría en realidad, pero es para demostrar el scope de let y const.
/*
{
  let name = "Diego";
}
console.log(name); // undefined
*/

// LINKS UTILES DE LA SECCIÓN


// More on JavaScript Memory Management (Garbage Collection): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
// V8's Garbage Collection Logic: https://v8.dev/blog/free-garbage-collection
// V8's JavaScript Engine in Great Detail: https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef
// More on Primitive vs Reference Values: https://academind.com/tutorials/reference-vs-primitive-values