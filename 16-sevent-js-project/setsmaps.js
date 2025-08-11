/* const ids = new Set([1, 2]); // Se le puede pasar cualquier iterable como valor, esto lo castea a conjunto.
ids.add(2); // Si agrego un valor que ya existe, no se agrega. No hay duplicados en los conjuntos.
ids.add(3);

ids.delete(2);
ids.delete(8); // Si elimino algo que no existe, no pasa nada, se ignora.

for (const entry of ids.entries()) {
  // ids.entries() Devuelve un iterador con los valores del conjunto.
  console.log(entry[0]); // Si le pongo el indice 0, no imprime duplicados los valores. O también podría hacerlo usando .values() en vez de .entries()
} */
// Esto imprime pares de los valores dos veces. [1, 1] - [2, 2] - [3, 3]

// console.log(ids.has(1)); // Contiene ese valor?
// console.log(ids); // No se puede acceder al índice.

/* MAPS */

// Estos no son maps, son objetos.
/* const person1 = { name: "Juan" };
const person2 = { name: "Maria" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]); // person1 es la clave, el otro array es el valor...

personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

console.log(personData);
console.log(personData.get(person1)); // No es una copia, es el mismo objeto person1.

for (const [key, value] of personData.entries()) {
  console.log(key, value[0]); // Aquí sí funciona mejor el entries() porque me da la clave y el valor que le asigné.
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value[0]);
}
console.log(personData.size); // El size del Map.

personData.clear(); // limpio el Map.
console.log(personData); */

/* MAPS VS OBJECTS */

// MAPS
// Puedo usar cualquier valor (y tipo de dato) como clave.
// Mejor rendimiento para grandes cantidades de datos.
// Mejor rendimiento al agregar/eliminar datos frecuentemente.

// OBJECTS
// Solo puede usar strings, números o símbolos como keys.
// Perfecto para conjuntos de datos pequeños/medianos. 30, 40... pares de clave-valor.
// Más fácil y rápido de crear (normalmente también tiene mejor rendimiento).

// Por lo general se trabaja con arreglos y objetos, no es común trabajar con Maps y Sets.

/* WEAKSETS */
let person = { name: "Juan" };
const persons = new WeakSet(); // weakSet es un conjunto de objetos, no de valores.
persons.add(person);

// ...algunas operaciones
// person = null; // Elimino el objeto. Limpia la data de memoria.

console.log(persons);

/* WEAKMAPS */
const personData = new WeakMap(); // weakMap es un conjunto de objetos, no de valores.
personData.set(person, "Extra info!");

person = null; // Elimino el objeto. Limpia la data de memoria.

console.log(personData);
