const combine = (callback, operation, ...nums) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);
  let total = 0;
  for (const num of nums) {
    if (operation === "ADD") {
      total += validateNumber(num);
    } else {
      total -= validateNumber(num);
    }
  }
  callback(total);
};

const showResult = (messageText, result) => {
  alert(`${messageText} ${result}`);
};

// Se pasa como parámetro callback, que sería una función que se ejecute dentro de sumUp.
// Ese callback lo usé con el showResult para poder mostrar un alert con el resultado que se le pasara a esta función callback.

/* const subtractUp = function (showResult, ...args) {
let sum = 0;
for (const num of args) {
sum -= num;
}
showResult(sum);
}; */

// bind toma al menos dos argumentos. El primero tiene que ver con el this, por tanto se verá cuando trabajemos las clases y objetos.
// Puedo pasar muchoas más parámetros, pero dos es lo mínimo.
combine(showResult.bind(this, "The result after adding all numbers is: "), "ADD", 1, 2, 3, 4);
combine(showResult.bind(this, "The result after subtracting all numbers is: "), "SUB", 1, 2, 3, 4);
combine(showResult.bind(this, "The result after adding all numbers is: "), "ADD", 1, 2, 3, 4);

// The result after... sería el primer argumento que recibe la función showResult y la ventaja del bind es que en el callback, es decir, la función
// que puse dentro de la función combine, agrega su argumento después, le hace como un append. De manera que como la función callback es esta: callback(total);
// showResult recibiría:

// showResult("The result...", total)

// showResult.call y showResult.apply ejecutan directamente la función, no la preparan.