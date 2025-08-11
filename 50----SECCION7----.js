/* SECCION 7 - Más sobre objetos */

/* Más allá de lo básico */

// Los objetos están en todo lado en JavaScript.

// ¿Qué es un objeto?
// Estructura de datos core en JavaScript.
// Típicamente refleja entidades del mundo real. Por ejemplo, botones o películas. Nos permite aplicar lógica del mundo real en código.

// Compuesto de propiedades y métodos.
// Almacena datos en propiedades y acciones en métodos.
// Permite agrupar datos relacionados y dividir el código en partes lógicas.

// Valores primitivos
// Numbers, Strings, Booleans, null, undefined, Symbol

// Valores de referencia (= objetos)
// Todo lo demás, {...}, [...], Nodos DOM, otros objetos integrados...

/* OBJETOS Y VALORES PRIMITIVOS */
// Los objetos son valores de referencia, ya lo sé.

// Puede que no haya sido obvio todavía pero es importante reconocerlo. Al final, los objetos son hechos de valores primitivos.
// Aquí un ejemplo:

const complexPerson = {
  name: "Diego",
  hobbies: ["Futbol", "Cine", "Gym"],
  address: {
    street: "Carrera 10A",
    stateId: 10,
    country: "Colombia",
    phone: {
      number: 123456789,
      isMobile: true,
    },
  },
};

// Incluso complexPerson tiene múltiples valores de referencia anidados como arreglos u objetos, termino con valores primitivos dentro de ellos.
// name almacena "Diego", un valor primitivo.
// hobbies almacena un arreglo lleno de strings.
// address almacena un objeto que reune varios valores primitivos como el country y uno de referencia, phone.

// Entonces se podría decir que los valores primitivos son esos bloques de construcción principales que almacenan datos. Los objetos y arreglos son útiles
// para organizar y trabajar con esos datos.