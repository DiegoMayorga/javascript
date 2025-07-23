/* Expresiones de funciones: Almacenando funciones en variables */

const sumar = function (a, b) {
  return a + b;
};

console.log(sumar(1, 2)); // 3

// Una forma diferente de definir funciones:

// Declaración de función
function multiply(a, b) {
  return a * b;
}

// Expresión de función
const divide = function (a, b) {
  return a / b;
};

// La declaración de función se eleva (hoisted) al principio. Puede ser declarada en cualquier parte del código, incluso después de ser usada.
// Con la expresión de función se eleva al inicio pero no se inicializa/define. No puede ser declarada en cualquier lugar del archivo (por ejemplo, después de ser usada).

restar(); // Uncaught ReferenceError: Cannot access 'restar' before initialization
const restar = function (a, b) {
  return a - b;
};