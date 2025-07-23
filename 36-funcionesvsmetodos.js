/* Funciones vs métodos */

const person = {
  greet: function greet() {
    console.log("Hello there!");
  },
};

person.greet(); // Hello there!
// El greet es una propiedad de person, que es una función.
// Pero un método no es más que una función asociada a un objeto.
// addEventListener, por tanto, es un método de un objeto.

// Las funciones son objetos.

console.log(typeof greet); // function
