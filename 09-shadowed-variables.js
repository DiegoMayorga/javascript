/* Shadowed variables o sombreado de variables */
// Aprendí sobre las variables locales (entre funciones) y variables globales.

/* ¿Qué pasaría en este código? */
let userName = "Max";
function greetUser(name) {
  let userName = name;
  alert(userName);
}

userName = "Manu";
greetUser("Max");

// Esto mostrará "Max" en la consola (no "Manu").
// Pude pensar que esto generaría un error porque estoy creando una variable local con el mismo nombre de una variable global.
// Esto solo genera un error si están en el mismo scope (en el mismo bloque de código).

// let lastName = "Smith";
// let lastName = "Doe";
// Hacer eso sí generaría un error porque lastName ya está definida.
// Entonces, ¿por qué sí se puede teniendo un scope global y uno local?
// JavaScript hace algo llamado "shadowing", que es cuando una variable local oculta una variable global con el mismo nombre.
// Esto crea una nueva variable en un diferente scope - estas variables no sobreescriben o eliminan la variable global. Ambas existen.
