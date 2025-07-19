/* Coerción vs Conversión */

// Es importante entender que JS es capaz de usar variables en condiciones. Incluso sin operadores de comparación.
// Esto suena obvio, si consideramos una variable booleana, por ejemplo:
let isLoggedIn = true;
if (isLoggedIn) {
  //...
}
// Desde que solo necesite una condición que retorne true o false, tiene sentido que solo pueda proveer una variable booleana o valor y funcione.
// Sin comparaciones extra (if (isLoggedIn === true) que también funciona pero es redundante) .

// Mientras que el ejemplo anterior tiene sentido, puede ser confuso cuando encuentro código como este por primera vez:
let userInput = "Diego";
if (userInput) {
  //... Este codigo se ejecutará porque "Diego" es truthy. Todos los strings que no son vacíos lo son.
}

// JavaScript intenta coaccionar (convertir sin realmente convertir) los valores que paso al if (u otros lugares donde los condicionales son requeridos)
// a valores booleanos, y ahí sigue las reglas descritas antes (ej. 0 es tratado como false, todos los otros números como true...).
// Es importante comprender que a JS no le importa convertir el valor.

// userInput todavía contiene "Diego" después de ser usado en una condición como la anterior, no es convertido a un booleano. Eso sería horrible, porque
// pierdo los valores de mis variables de manera invisible.

// En cambio...
if (userInput) {
  //...
}
// es básicamente transformado (detrás de escenas) a:
if (userInput === true) {
  //...
}
// Y aquí, el operador === genera y retorna un booleano. Esto no toca la variable que estoy comparando. userInput permanece siendo un string. Pero genera
// un nuevo booleano que es temporalmente usado en la comparación.

// Y eso es exactamente lo que JS hace cuando encuentra algo como esto: if (userInput) {...}
