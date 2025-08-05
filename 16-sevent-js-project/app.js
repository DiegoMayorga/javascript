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

const hobbies = ["Sports", "Cooking"];
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
