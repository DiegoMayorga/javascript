const startGameBtn = document.getElementById("start-game-btn");

// Aqui el nombre de la función puede ser omitido.
/*const start = function () {
  console.log("Game is starting...");
};*/
// En este caso, la función ya no está asociada al nombre startGame en un enfoque global, ahora está en la constante start.
// Se agrega el punto y coma por convención. Ya que está a la derecha de un =.

// startGame(); // Ejecución directa
// startGameBtn.addEventListener("click", start); // Ejecución al hacer click en el botón
// El addEventListener no es una función, es un método de un objeto.

/*
const person = {
  greet: function greet() {
    console.log("Hello there!");
  },
};
*/
// person.greet(); // Hello there!
// El greet es una propiedad de person, que es una función.
// Pero un método no es más que una función asociada a un objeto.
// addEventListener, por tanto, es un método de un objeto.

// console.log(typeof start); // function
// console.dir(start); // Aquí se ven todas las propiedades de la función, propiedades a las que se puede acceder. Por tanto, es un objeto.

startGameBtn.addEventListener("click", function () {
  console.log("Game is starting...", age); // Función anónima. Este es un buen lugar para usarla. Con el age, como no existe variable con ese nombre,
  // se obtiene el error de que age no está definido. Si usara name, no habría error, pues es una palabra reservada.
  // Ahora, poner nombres a las funciones nos permite identificar errores con mayor facilidad. Esa sería una "desventaja" de las funciones anónimas.
  // Al debuggear, se puede ver que la función con X nombre es en la que se encuentra el error.
});
