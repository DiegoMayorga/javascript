const sumUp = (callback, ...nums) => {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  callback(total);
};

const showResult = (result) => {
  alert(`The result after adding all numbers is: ${result}`);
};

sumUp(showResult, 1, 2, 3, 4);
// Se pasa como parámetro callback, que sería una función que se ejecute dentro de sumUp.
// Ese callback lo usé con el showResult para poder mostrar un alert con el resultado que se le pasara a esta función callback.