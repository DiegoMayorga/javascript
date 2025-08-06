// Formas de crear arreglos:
const arr = [1];
const arr2 = Array(1);
const arr3 = new Array(1);

const arr4 = ["Hola"];
const arr5 = Array("Hola");
const arr6 = new Array("Hola");

const arr7 = Array.of(1);
const arr8 = Array.of("Hola");
const arr9 = Array.from("Hola");
const arr10 = Array.from(1);

/* Cambiando métodos en JavaScript */

// Con todos los métodos de arreglos que aprendí, es importante entender cómo combinarlos. Haré un ejemplo con map y reduce.
/* const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const transformedArray = originalArray.map((obj) => obj.price);

const sum = transformedArray.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 46.97 */

// Por supuesto, puedo skipear el paso del map y solo agregar la lógica de extracción a reduce.
const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const sum = originalArray.reduce((acc, cur) => acc + cur.price, 0);
console.log(sum); // 46.97

// Pero digamos que tenemos una extracción de lógica más compleja y por eso queremos dividir en múltiples llamadas a métodos.
// O tengo una función map reutilizable que quiero usar en diferentes lugares de la aplicación. Entonces aún puedo escribir  el ejemplo inicial en una
// forma más concisa si aprovecho el encadenamiento de métodos.

const sum2 = originalArray
  .map((obj) => obj.price)
  .reduce((acc, cur) => acc + cur, 0);

// Llamo .reduce() directamente en el resultado de map() (lo que produce un areglo, por eso esto es posible). Por eso podemos evitar almacenar el arreglo
// mapeado en una constante separada o variable que podríamos no necesitar en otro lugar.