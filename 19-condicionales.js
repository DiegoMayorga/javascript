/* Ejecución de código condicional */
// Si por ejemplo quiero condicionar una función para que según el parámetro recibido tome una acción u otra, ahí es donde uso la declaración if.
// Una condición es sencillamente un valor booleano.

// Operadores booleanos
// Importantes para código condicional: Retorna true o false

// == se usa para comparar dos valores y retornar true o false si contienen el mismo valor. Ej. a == b
// != se usa para comparar dos valores, comprobar que sean diferentes. Si lo son, genera true. Ej. a != b
// === y !== no solo comparan dos valores, también los tipos de datos que son. Ej. a === b y a !== b
// Este último es preferible sobre los dos anteriores, es importante comparar tanto el valor como el tipo de dato.

// > & < verifica que el valor sea mayor o menor que el otro. Ej. a > b o a < b 
// >= & <= verifica que el valor sea mayor o igual o menor o igual que el otro. Ej. a >= b o a <= b 

// ! se usa para negar un valor booleano. Ej. !true --> false y !false --> true

/* Usando booleanos en condiciones y más en comparación de texto */

// Hay que tener en cuenta que la condición siempre debe ser un valor booleano. if (condicion) {}
// Frecuentemente, generaré un valor booleano con la ayuda de ===, >, <, etc. Todos esos operadores producen valores booleanos.
// Desde que if solo quiera un booleano, no debo usar un operador. Si ya tengo una variable que almacene un booleano, puedo usarlo sin ningún operador extra.

// Ejemplo:
const isLoggedIn = true;
if (isLoggedIn) {
  // Esto se ejecutará porque isLoggedIn es true
}

// Yo podría hacer esto:
if (isLoggedIn === true) {
 // ...
}
// pero es redundante. Siempre se espera que la condición sea true para entrar al bloque de código del if.

// También puedo usar el operador ! para negar (invertir) el valor booleano.
if (!isLoggedIn) {
  // Esto no se ejecutará porque !isLoggedIn no es true
} else {
  // Esto sí se ejecutará porque !isLoggedIn es false
}

// De nuevo, eso sería similar a:
if (isLoggedIn !== true) {
  // No se ejecuta
} else {
  // Se ejecuta
}
// Pero de nuevo, es redundante.

/* Más sobre comparaciones de texto (strings) */
// Los strings también pueden ser comparados con > o <. JavaScript se basa en el estándar de orden lexicográfico, usando valores Unicode.
// Esto significa que b es mayor que a, por ejemplo.

// JavaScript siempre mira el primer caracter y solo considera otros caracteres si el primer caracter es el mismo. Adicional, letras en mayúscula
// son consideradas más pequeñas que letras en minúsculas. Ej. "a" > "A"

// Ejemplos:
"ab" > "a" // true
"a" > "B" // true
"a" > "b" // false

// Para el condicional if, continuaré con el proyecto de la sección 2. (02-first-js-project)