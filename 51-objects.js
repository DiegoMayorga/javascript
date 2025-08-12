const userChosenKeyName = "level";

const person = {
  "first name": "John", // las keys no pueden tener espacios, nums primero, guiones, caracteres especiales al inicio.
  // Pero si uso comillas, puedo llamarlo como quiera.
  age: 30,
  hobbies: ["music", "movies", "sports"],
  greet: function () {
    alert(`Hi, there!`);
  },
  [userChosenKeyName]: "Hello",
  1.5: "Hello", // Los números también pueden ser propiedades de un objeto.
  // Si uso números, puedo acceder a ellos sin comillas. Con corchetes.
  // Igualmente, no es normal hacer esto.
};

// person.greet();
// person.age = 31;
// person.hobbies.push("art");
delete person.age; // Elimina la propiedad age del objeto person.
person.age = null; // Limpio el valor de la propiedad age del objeto person.
person.isAdmin = true;
// person.name = undefined; // No debería asignar undefined a una propiedad ni a una variable.
person["first name"] = "Juan"; // asi se accede a las propiedades con nombres que contengan espacios o caracteres inválidos si se crean sin comillas.
console.log(person);
// Si quisiera eliminar por completo una propiedad del objeto, uso delete.
// Asigno null a la propiedad si quiero limpiar su valor, pero mantener la propiedad.

const nums = {
  3: 30,
  4: 40,
  1: 10,
  2: 20,
  5: 50,
};
// Si uso solo números como keys, así los escriba desordenados, se organizan de menor a mayor.
console.log(nums);

const keyName = "first name";
console.log(person[keyName]); // Acceder a una propiedad con un nombre que no sea una constante.
// Es decir, puedo almacenar en una variable el nombre de una propiedad y al pasarlo dentro de las llaves, se ve el valor.
// Solo funciona con esta sintaxis, no accediendo con un punto a la propiedad.

console.log(person.level); // "Hello"
// Creé esa propiedad con la constante userChosenKeyName. Para agregarla al objeto, usé los corchetes y el nombre de la constante dentro.
// Así, pude con el person.level acceder al valor. Es otra forma de crear keys.

/* SPREAD OPERATORS */

const person = { name: "Diego", hobbies: ["Sports", "Cooking"] };
const anotherPerson = { ...person, age: 25 };
console.log(person); // { name: "Diego", hobbies: ["Sports", "Cooking"] }
console.log(anotherPerson); // { name: "Diego", hobbies: ["Sports", "Cooking"], age: 25 }
// Es una copia, porque es un valor de referencia. Por tanto, no queremos que si uno cambie el otro también.

// Si tengo un objeto en person y quiero sobreescribir por ejemplo el valor de nombre luego de hacer la copia, puedo hacerlo así:
const evenAnotherPerson = { ...person, name: "Pedro" };
// A pesar de que name ya estaba en person, aquí simplemente se sobreescribe el valor.

const person2 = Object.assign({}, person, { name: "Juan" });
