/* Tener cuidado (Beware) de la comparación entre objetos y arreglos */

let obj1 = {name: "Diego"}
let obj2 = {name: "Diego"}
console.log(obj1 === obj2); // false

// Sin importar si el contenido de un objeto es exactamente igual a otro, comparar dos objetos siempre generará false. Pasa lo mismo con los arreglos.
// No es de sorprenderse que los arreglos funcionen igual, pues al final son objetos también.

// Los objetos y arreglos son especiales en JavaScript.

// Sin embargo, comparar los valores dentro de las keys sí es válido.

console.log(obj1.name === obj2.name); // true

// Ahora, puede haber una forma de que dos objetos den true al ser comparados.

let obj3 = obj1;
console.log(obj3 === obj1); // true