/* Valores Falsy y Truthy */

// Las condiciones en JS trabajan con booleanos o con valores falsy y truthy
const nameInput = "Max";

// Genera true (un valor booleano)
if (nameInput == "Max") {
  // ... --> Funciona!
}

// Genera un string, NO un booleano.
if (nameInput) {
  // ... --> También funciona!
}

// Por supuesto, JS no valida si nameInput es igual a Max. if (nameInput) genera true si nameInput es un string que no está vacío.

/*
0 -> false
Cualquier otro número, incluyendo negativos -> true
"" String vacío -> false
"Hola" Todo String con contenido -> true
{}, [] y todos los objetos o arreglos -> true
null, undefined, NaN -> false
*/