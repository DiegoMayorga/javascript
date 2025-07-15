/* alert("This works") */
// Es definido pero no inicializado aún.
// JS sabe que existe pero no se le ha asignado valor.
// let currentResult;
// El punto y coma es generalmente opcional.
const defaultResult = 0;
let currentResult = defaultResult; // Se puede inicializar una variable con otra variable como valor. Sería una copia de esa constante.

// Trabajando con variables y operadores.
currentResult = ((currentResult + 10) * 3) / 2 - 1;
// Los operadores me permiten manipular valores
// (+, -, *, /, %, **, ++, --)
// También el operador de asignación (=)

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessage = "An error" + "occurred!";

outputResult(currentResult, calculationDescription);
