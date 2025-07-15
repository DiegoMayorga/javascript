/* Ejecución de funciones directas versus indirectas */
// Puede ser confuso ver que hay dos maneras de ejecutar una función:

// function add(){
// something = someNum + someOtherNum;
// }

/* add vs add() */

// Es importante comprender por qué existen esas dos formas.
// En general, puedo llamar una función que defino usando su nombre (ej, add) y agregar paréntesis (con cualquier parámetro
// que la función necesite - o paréntesis vacíos si no hay parámetros que sean requeridos - ej, add()).

// Así es como ejecuto una función desde mi código. En cualquier momento que JavaScript encuentre esta declaración, continúa y
// corre el código en la función.

// Sin embargo, a veces no quiero ejecutar la función inmediatamente. Quiero decirle a JavaScript que debe ejecutar cierta
// función en algún momento en el futuro (por ejemplo, cuando un evento ocurra).

// Allí es cuando no llamo directamente a la función. En su lugar, le doy solamente el nombre de la función.
// someButton.addEventListener("click", add);

// Este fragmento de código le diría a JavaScript "Hey! Cuando el botón sea presionado, ejecuta la función add".
// someButton.addEventListener("click", add()); estaría mal.
// ¿Por qué? Porque JavaScript encontraría esa línea cuando analiza/ejecuta el script y registra el escuchador de evento e
// inmediatamente ejecutaría add, porque agregué paréntesis.

// Ahora, si uso el add en una parte común del código y no en un evento, no va a suceder nada, no se ejecutará nunca la función.
// let someVar = 5;
// add;
// alert("Haz algo más...");

// ¿Por qué? Porque solo lancé el nombre de la función allí, pero no le dí más información a JavaScript. Esto básicamente
// no sabe qué hacer con ese nombre ("Debería yo correr esto cuando presiono un botón? Después de cierto tiempo? No sé...") y
// JavaScript ignora esa declaración.
