/*const numbers = [1, 2, 3];
console.log(numbers);*/

/* const moreNumbers = new Array(5, 2);
// Si solo le paso un argumento, se crea un array con ese numero de elementos. Ese sería el length.
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers); */

/*
let listItems = document.querySelectorAll("li");
listItems = Array.from(listItems);
console.log(listItems);

const moreNumbers = Array.from("1234"); // Sirve para castear iterables o array likes a arrays.
// Cambia un array like a un array.
console.log(moreNumbers); // ['1', '2', '3', '4']

// ¿Qué se puede almacenar en un array?

const hobbies = ["Sports", "Cooking"];
const personalData = [30, "Max", { moreDetail: [] }];

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]); // Max
 */

/* Agregando y eliminando elementos de un array */

/* const hobbies = ["Sports", "Cooking"];
const pushedValue = hobbies.push("Reading"); // Devuelve el length una vez agregado Reading.
const unshiftedValue = hobbies.unshift("Coding"); // Devuelve el length una vez agregado Coding. Es más lento que push.
const popedValue = hobbies.pop(); // Devuelve el valor eliminado.
const shiftedValue = hobbies.shift(); // Devuelve el valor eliminado. Es más lento que pop.
console.log(pushedValue, unshiftedValue, popedValue, shiftedValue, hobbies);

hobbies[1] = "Coding";
// hobbies[5] = "Reading"; // Si hago esto, el elemento del index 2, 3 y 4 serán vacíos. No es muy común usarlo.
// console.log(hobbies, hobbies[4]); // Si muestro el 4, retorna undefined. Es como si el arreglo fuera:
// ["Sports", "Cooking", undefined, undefined, undefined, "Reading"];

// Solo funciona en arreglos reales. No en iterables o en objetos como arreglos. Recordar que Array.from castea un iterable a arreglo.
hobbies.splice(0, 0, "Good Food"); // Toma al menos dos argumentos. Indice indicial y la cantidad de elementos que quiero eliminar o reemplazar desde ese item.
// Si le paso un tercer argumento como "Good Food" o cualquier valor, este se agrega en el lugar que especifiqué. Puedo pasar más valores y se agregan después del item agregado.
console.log(hobbies);

hobbies.splice(0, 1);
console.log(hobbies); // Elimina el primer elemento.

const removedElements = hobbies.splice(0); // Si solo le paso un argumento así, elimina todos los elementos desde la posición que especifiqué. En este caso, todos. // Splice devuelve los elementos eliminados.
console.log(hobbies);
console.log(removedElements); */

// Splice también funciona con índices negativos. Solo cambia la forma de acceder a los elementos, pero el segundo argumento sigue funcionando igual, hacia la derecha.

/* SLICE */

/* const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResult = testResults;
testResults.push(12); // Se modifican ambos porque apuntan al mismo lugar en memoria por ser de referencia.

console.log(storedResult, testResults);
// console.log(testResults.slice()); // Como los arreglos son valores de referencia, esta es una buena forma de hacer una copia.

// Con slice también puedo copiar un rango dentro del arreglo. Por ejemplo, del segundo al penúltimo elemento.
const someNumbers = testResults.slice(1, -1);
console.log(someNumbers); */

/* let nums = [];
for (let i = 1; i < testResults.length - 1; i++) {
  nums.push(testResults[i]);
}
console.log(nums); */ // Esta sería la forma manual.

// Si al slice le paso solo un argumento, lo toma como el índice inicial y toma todos desde ese a la derecha.

/* CONCAT */

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2); // También crea un nuevo espacio en memoria y no modifica los anteriores arreglos.
console.log(arr3); */

// indexOf() y lastIndexOf() como métodos para devolver el índice de los elementos en los arreglos.
/* const words = ["Hola", "Mundo"];
console.log(words.indexOf("Hola")); // 0 */

// Si tengo el mismo valor más de una vez, toma el primer valor que haga match.

// Si quiero empezar buscando de derecha a izquierda, uso lastIndexOf()
/* const numbers = [1.3, 1, 5, 5.5, 5, 23.1, 5, 4];
console.log(numbers.lastIndexOf(5)); // 6

// Funciona bien con valores primitivos pero no con valores por referencia.

const personData = [{ name: "Max" }, { name: "Diego" }];
console.log(personData.indexOf({ name: "Diego" })); // Retorna -1 si no puede encontrar el valor especificado. */

// Para trabajar con estos valores por referencia, hay un método que sí les funciona.

/* FIND Y FINDINDEX */

/* const diego = personData.find((person, index, persons) => {
  return person.name === "Diego";
}); */

// Este enfoque no copia el objeto, sigue apuntando al mismo lugar en memoria. Por tanto, si hago un cambio en diego, este se hará también en personData.

/* diego.name = "Alejandro";
console.log(diego, personData); // { name: "Alejandro" } & [{ name: "Max" }, { name: "Alejandro" }]

const maxIndex = personData.findIndex((person, index, persons) => {
  return person.name === "Max";
});

console.log(maxIndex); // 0, porque en personData, Max está en el primer objeto.

const moreNumbers = [0, 23, 5, 4, 9, 1.2, 8, 5];
console.log(moreNumbers.includes(1.2)); // Devuelve true porque sí incluye ese elemento. También es usado para valores primitivos.
console.log(moreNumbers.indexOf(1.2) !== -1); // Esta sería otra forma de hacerlo, porque ya sabemos que -1 */

/* Alternativas para bucles for: El método forEach */

/* const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = []; */

/* for (const price of prices) {
  taxAdjustedPrices.push(price * (1 + tax));
} */

/* prices.forEach((price, index, prices) => {
  const priceObj = { index, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices); // [{ index: 0, taxAdjPrice: 13.0781 }, ...] */

/* TRANSFORMANDO DATOS CON MAP */

/* const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, index, prices) => {
  const priceObj = { index, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices); */

// Es un buen método para transformar elementos de un arreglo.

/* SORT Y REVERSE */

/* const sortedPrices = prices.sort();
console.log(sortedPrices); // Esto organiza como strings, no como números. Se fija índice por índice cada elemento. Por eso 10 es menor que 3.

const sortedPrices2 = prices.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));

console.log(sortedPrices2); // Con este enfoque sí se organiza bien por número. Con el 1, 0 y -1 organizo para que quede después, donde está o antes, respectivamente.
console.log(sortedPrices2.reverse()); // Se ubican al contrario, de mayor a menor. */

/* FILTRANDO CON FILTER() */

// const prices = [10.99, 5.99, 3.99, 6.59];
/* const filteredArray = prices.filter((price, index, prices) => {
  return price > 6;
  }); */

// console.log(filteredArray);

/* AQUI LAS FUNCIONES FLECHA BRILLAN */

/* const filteredArray = prices.filter((p) => p > 6); // Es muy corta la sintaxis con arrow functions.
  console.log(filteredArray); */

/* EL METODO REDUCE */

/* const prices = [10.99, 5.99, 3.99, 6.59]; */
/* let sum = 0;
prices.forEach((price) => (sum += price));
console.log(sum); */

/* const sum = prices.reduce((prevValue, currValue, currIndex, prices) => {
  return prevValue + currValue;
}, 0); // Primer argumento es una función, el segundo es el valor inicial. Se ejecuta elemento por elemento del arreglo.

console.log(sum);

const sum2 = prices.reduce((acc, cur) => acc + cur, 0); // Lo mismo pero de una forma más corta. acc es acumulable.
console.log(sum2);
 */
/*
[ 1 2 3 ] 0
[   2 3 ] 1
[     3 ] 3
[       ] 6

Así es como funciona. Se suma elemento por elemento y se va acumulando.
*/

/* const data = "newyork;10.99;2000";

const transformedData = data.split(";");
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ["Diego", "Mayorga"];
const name = nameFragments.join(" ");
console.log(name); */

/* EL OPERADOR SPREAD */

