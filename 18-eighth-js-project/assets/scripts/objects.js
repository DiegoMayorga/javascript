const person = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  greet: function () {
    alert(`Hi, there!`);
  },
};

// person.greet();
// person.age = 31;
// person.hobbies.push("art");
delete person.age; // Elimina la propiedad age del objeto person.
person.age = null; // Limpio el valor de la propiedad age del objeto person.
person.isAdmin = true;
// person.name = undefined; // No debería asignar undefined a una propiedad ni a una variable.

console.log(person);

// Si quisiera eliminar por completo una propiedad del objeto, uso delete.
// Asigno null a la propiedad si quiero limpiar su valor, pero mantener la propiedad.