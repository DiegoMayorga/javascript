/* Errores comunes de sintaxis en objetos */

// Aprendí la sintaxis correcta para crear un objeto.
const user = {
  name: "Diego",
  age: 25,
};

// Algunas cosas importantes.
/*
1. Uso {} para agrupar los datos. Un punto y coma se agrega al finalizar el objeto, luego de la llave de cierre.
En las funciones no hice eso. Como regla general, puedo tener en cuenta que un punto y coma se usa después de llaves si las llaves 
si estas están a la derecha del signo igual.

2. Los pares clave valor son separados por comas, no por punto y coma. Usar punto y coma dentro de un objeto dará un error de sintaxis.

3. Los valores son asignados a las claves con dos puntos. No se usa el signo igual. Usarlo, genera un error de sintaxis.

*/

// Ejemplo de un error de sintaxis.

/* const worstPossibleUser = {
    name = "Diego";
    age = 25;
} */