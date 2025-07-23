/* Valores primitivos vs valores de referencia */

// En JS hay dos categorías de tipos/valores.

// 1. Valores primitivos.
// Strings, Numbers, Booleans, null, undefined, Symbol
// Almacenados en memoria (normalmente en el stack), una variable almacena un valor por sí misma.
// Copiar una variable (= asignar a diferentes variables) copia el valor.

let name = "Diego";
console.log(name); // Diego
let anotherUser = name;
console.log(anotherUser); // Diego

// Si le cambio el valor a name, también cambia el valor de anotherUser.

// 2. Valores de referencia.
// - Todos los otros objetos (más costosos de crear)
// ¿Por qué "otros"?
// console.log(name.length); // 5
// Podríamos decir que name es un objeto porque tiene propiedades como length. Y sí, lo es. Pero con valores de referencia me refiero a objetos/arreglos.
// - Almacenado en memoria (heap), la variable almacena un punto (dirección) para ubicar en memoria. Simplemente una referencia al objeto almacenado en memoria
// (por eso es llamado: valor de referencia).
// - Copiar una variable (= asignar a una variable diferente) copia la referencia o el pointer. El valor no se copia.

let myArray = [1, 2, 3];
let anotherArray = myArray;
console.log(anotherArray); // [1, 2, 3]

// Esto me puede hacer pensar que el valor de la variable (el arreglo) se copió. Pero miremos esto:
myArray.push(4);
console.log(myArray); // [1, 2, 3, 4]
console.log(anotherArray); // [1, 2, 3, 4]

// ¿Qué pasó? El valor también cambió porque en los objetos/arreglos, se obtiene la referencia. De manera que si hago algún cambio en el arreglo, se refleja en el
// de la nueva variable.

let person = {
  name: "Diego",
  age: 29,
};
let anotherPerson = person;

anotherPerson.age = 30;
console.log(person); // { name: 'Diego', age: 30 }

// En sí, ese es un comportamiento bueno. Pues, evita una duplicación innecesaria de datos, evitar desordenar la memoria, ser más eficiente, mejor rendimiento y demás.
// Cuando necesito que se mantenga un objeto en su forma original y crear una copia, puedo hacer lo siguiente:

let yetAnotherPerson = { ...person };
yetAnotherPerson.age = 31;
console.log(person); // { name: 'Diego', age: 30 }

// Esta sería una copia del valor de la variable person, pero no la referencia. Lo mismo se puede hacer con los arreglos:
let hobbies = ["Sports"];
let moreHobbies = [...hobbies];
hobbies.push("Cooking");
console.log(moreHobbies); // [ 'Sports' ]

// ¿Qué pasa si comparo dos objetos que tienen el mismo valor?

let person1 = { age: 29 };
let person2 = { age: 29 };
console.log(person1 === person2); // false

// Es false porque de nuevo, los objetos son valores de referencia, no valores primitivos. Por eso, aunque tengan el mismo valor, no son iguales. Lo mismo pasa al comparar arreglos.

const hobbies2 = ["Sports"];
hobbies2.push("Cooking");
console.log(hobbies2); // [ 'Sports', 'Cooking' ]

// ¿Por qué me deja agregar elementos si es una constante? Porque al ser un valor de referencia, lo que no se puede es tocar la variable, como reasignarle un nuevo tipo de dato.
// Pero el contenido del arreglo sí se puede modificar con las funciones que se aplican a los arreglos.
// Se modifica el valor pero no la dirección o el pointer, es por eso que esto es posible.

hobbies2 = 2;
console.log(hobbies2); // Uncaught TypeError: Assignment to constant variable.

// Con objetos sería algo así:

const persona = { name: "Diego" };
console.log(persona); // { name: 'Diego' }
persona.age = 25;
console.log(persona); // { name: 'Diego', age: 25 }
persona = { age: 32 };
console.log(persona); // Uncaught TypeError: Assignment to constant variable.
