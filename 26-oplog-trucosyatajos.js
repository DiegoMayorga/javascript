/* Operradores Lógicos - Trucos y abreviaturas o atajos */

/* Trucos Booleanos con operadores lógicos */

// 1. Coerción booleana a través del doble operador NO (doble !): !!
// El solo ! convierte un valor true o truthy a false. Si lo vuelvo a convertir, obtengo un verdadero true, es decir, el verdadero valor booleano true.
!!""; // false
!!1; // true

// Esto para trabajar con booleanos reales.

// 2. Asignación de valor por defecto a través del operador OR. ||
// const name = someInput || "Diego";
// Si someInput no existe, se asigna "Diego" a name.
// Esto porque si comparo dos strings, los compara y devuelve el valor como string. Si existiera someInput, eso sería lo que se retorna.

// 3. Usa value si la condición es true a través del operador AND (&&).
// const name2 = isLoggedIn && "Diego";
// Si isLoggedIn es true, se asigna "Diego" a name2. Si no, se asigna undefined.

// Más ejemplos:
const userInput = "";
// const isValidInput = userInput ? true : false; // Esta sería la forma normal
const isValidnput = !!userInput; // Este es el shorthand.
console.log(isValidnput); // false

//------//

const userName = userInput || "Diego";
console.log(userName); // Diego. Como userInput es falsy, se asigna 'Diego' a userName.
// Si fuera truthy, se asignaría el valor de userInput.
const realUserInput = "Pedro";
const realUserName = realUserInput || "Diego";
console.log(realUserName); // Pedro

//------//

const isLoggedIn = true;
const shoppingCart = isLoggedIn && ["Books"];
console.log(shoppingCart); // ["Books"]
// Como isLoggedIn es true, se asigna el array ["Books"] a shoppingCart.
// Si el primer valor es false, retorna false, si el primer valor es true, retorna el segundo valor.

/** RESUMEN RÁPIDO DE OPERADORES LÓGICOS */

// Como una referencia que puedo volver a ver o tomar como guía, aquí hay un resumen de cómo los operadores lógicos
// y los operadores de comparación se utilizan en JavaScript.

const newUserName = "Diego";
const altName = "";
console.log(newUserName === "Diego"); // genera e imprime un booleano --> true
console.log(newUserName); // no fue manipulado, por ende sigue siendo Diego

console.log(newUserName || null); // newUserName es truthy, por lo tanto retornado por || --> Diego
console.log(altName || "Diego"); // altName es falsy (un string vacío), por tanto devuelve "Diego" --> Diego
console.log(altName || null || "Anna"); // altName y null son falsy, por lo tanto devuelve "Anna" --> Anna
console.log(newUserName && "Anna"); // newUserName es truthy, por lo tanto retorna "Anna" --> Anna
console.log(altName && "Anna"); // altName es falsy, por lo tanto, su primer valor es retornado --> ""
console.log(newUserName && ""); // newUserName es truthy, por lo tanto retorna "" --> ""

// TENER EN CUENTA SIEMPRE: Ningún operador (===, >, etc), tampoco && ni ||, cambia la variable que puedo estar usando para la comparación.
// En los ejemplos anteriores, los valores almacenados en newUserName y altName nunca cambian.

// ===, >, etc, solo generan nuevos valores booleanos cuando son usados en la comparación. || y && no generan booleanos, solo tratan los valores antes y
// después de ellos como condiciones (las cuales entonces necesitan generar valores booleanos y ser coercidos a booleanos si es requerido).

// Debido a los comportamientos descritos antes, frecuentemente uso || en JS para asignar valores fallback o por defecto a variables/constantes.

const enteredValue = ""; // Asumamos que esto se genera basado en algún input proveido por el usuario, por tanto, puede ser un string vacío.
const userName3 = enteredValue || "PLACEHOLDER"; // asignará "PLACEHOLDER " si enteredValue es un string vacío.
