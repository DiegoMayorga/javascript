/* alert("This works") */
// Es definido pero no inicializado aún.
// JS sabe que existe pero no se le ha asignado valor.
// let currentResult;
// El punto y coma es generalmente opcional.
const defaultResult = 0;
let currentResult = defaultResult; // Se puede inicializar una variable con otra variable como valor. Sería una copia de esa constante.
let logEntries = [];
// Gets input from input field
function getUserNumberInput() {
  return Number(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; // No importa si lo parseo a entero, igual será string porque está dentro de template literals.
  outputResult(currentResult, calcDescription); // From vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

/* function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber // Si el número ingresado es 0, no se ejecuta el código. Esto es igual a enteredNumber === 0. 0 es tratado como false, por ende al invertirlo será true.
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
} */

/* function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}
function divide() {
  calculateResult("DIVIDE");
} */

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

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  switch (operation) {
    case "ADD":
      currentResult += enteredNumber;
      operator = "+";
      break;
    case "SUBTRACT":
      currentResult -= enteredNumber;
      operator = "-";
      break;
    case "MULTIPLY":
      currentResult *= enteredNumber;
      operator = "*";
      break;
    case "DIVIDE":
      currentResult /= enteredNumber;
      operator = "/";
      break;
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", () => calculate("ADD"));
subtractBtn.addEventListener("click", () => calculate("SUBTRACT"));
multiplyBtn.addEventListener("click", () => calculate("MULTIPLY"));
divideBtn.addEventListener("click", () => calculate("DIVIDE"));
