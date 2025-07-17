// Valores especiales

// undefined es el valor por defecto de una variable que no ha sido inicializada. No DEBO asignar undefined como valor manualmente.
// null representa la ausencia de un valor, no se asume por defecto. Puedo asignarlo a un valor si quiero reiniciar / limpiar una variable.

// Son similares, pero no exactamente iguales.

// NaN no es un tipo. Técnicamente, es un tipo de número y puede ser usado en cálculos (Not a Number).
// Produce un nuevo NaN y es el resultado de cálculos inválidos. Ejemplo: 3 * "hola"

let userName;
// En el momento, ese userName es undefined.
userName = "Diego";
// Ahora no es undefined, es "Diego".
userName = undefined;
// Nuevamente es undefined pero hacer esto no es recomendable.
userName = null;
// Ahora userName es null.
// Finalmente, si hago 3 * "hola", genera NaN.