/* EXPRESIÓN CONDICIONAL - OPERADOR TERNARIO */

// Las declaraciones if no retornan valores. No es como una función.

// Esto no funcionará:
/*
const userName = if (isLogin) {
    return "Max";
} else {
    return null;
}
*/

// Será un error de sintaxis, porque las condiciones no retornan nada.

// Sin embargo, el operador ternario sí retorna valores según una condición.
const userName = isLogin ? "Diego" : null;
// isLogin es la condición, funciona tal como en el if.
// Si la condición es true/truthy, retorna "Diego", de lo contrario, si es false/falsy, retorna null.