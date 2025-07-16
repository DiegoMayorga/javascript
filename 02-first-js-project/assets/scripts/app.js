/* alert("This works") */
// Es definido pero no inicializado aún.
// JS sabe que existe pero no se le ha asignado valor.
// let currentResult;
// El punto y coma es generalmente opcional.
const defaultResult = 0;
let currentResult = defaultResult; // Se puede inicializar una variable con otra variable como valor. Sería una copia de esa constante.

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`; // No importa si lo parseo a entero, igual será string porque está dentro de template literals.
  currentResult = currentResult + enteredNumber; // Cualquier cosa que obtengo de un input es de tipo string. Debo convertirlo a número.
  // Una forma rápida de convertir un string a número es usar el operador + antes del valor. La otra forma es con Number(), un método que me permite
  // castearlo a número. parseInt() es otra opción. Con parseFloat también lo convierto en un número, pero en este caso es flotante.
  outputResult(currentResult, calcDescription);
}
// Para las funciones, el comportamiento de top to bottom no aplica. Puedo crear funciones después de usarlas.
// Sin embargo, es más entendible si primero la creo y luego la utilizo.
// alert(result); No funciona ya que no puedo usar variables locales (declaradas dentro de una función) fuera de ese bloque. Al revés, sí.
// currentResult = add(1, 2);

// Trabajando con variables y operadores.
// Los operadores me permiten manipular valores
// (+, -, *, /, %, **, ++, --)
// También el operador de asignación (=)

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessage = "An error" + "occurred!";

addBtn.addEventListener("click", add);
