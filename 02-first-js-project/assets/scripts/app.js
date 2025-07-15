/* alert("This works") */
// Es definido pero no inicializado aún.
// JS sabe que existe pero no se le ha asignado valor.
// let currentResult;
// El punto y coma es generalmente opcional.
const defaultResult = 0;
let currentResult = defaultResult; // Se puede inicializar una variable con otra variable como valor. Sería una copia de esa constante.

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, calculationDescription);
}
// Para las funciones, el comportamiento de top to bottom no aplica. Puedo crear funciones después de usarlas.
// Sin embargo, es más entendible si primero la creo y luego la utilizo.
// alert(result); No funciona ya que no puedo usar variables locales (declaradas dentro de una función) fuera de ese bloque. Al revés, sí.
// currentResult = add(1, 2);

// Trabajando con variables y operadores.
// Los operadores me permiten manipular valores
// (+, -, *, /, %, **, ++, --)
// También el operador de asignación (=)

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessage = "An error" + "occurred!";

addBtn.addEventListener("click", add);
