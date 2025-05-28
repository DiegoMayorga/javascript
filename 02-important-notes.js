/* How is JavaScript Executed? */

// Mi código tiene un efecto en la página web a través del motor JavaScript, que está incorporado en el navegador.
// En Chrome, el nombre del motor es V8, en Firefox es SpiderMonkey y cada uno tiene su propio motor.

// Lo importante es que analiza el código, compila a código de máquina y ejecuta el código de la máquina, para así tener efecto en páginas web.
// Todo esto lo hace en un solo hilo.

/* Single Threading es un concepto fundamental en JavaScript */

/* ¿Dinámico? ¿Debilmente tipado? */

/* |-----------------------------------+-----------------------------------|
   | Lenguaje dinámico e interpretado  +     Debilmente tipado             |
   |                                   |                                   |
   | No es precomplilado. Por el       | Los tipos de dato son asumidos.   |
   | contrario, es analizado y         | Se asignan a variables de manera  |
   | compilado sobre la marcha. Por    | automática.                       |
   | ejemplo, en el navegador.         |                                   |
   |                                   | En otros lenguajes de programación| 
   | El código es evaluado y ejecutado | debo definir el tipo de dato que  |
   | en tiempo de ejecución.           | almaceno en una variable. En JS   |
   |                                   | no defino que algunas variables   |
   | El código puede cambiar en tiempo | deban tener cierto valor. Por     |
   | de ejecución.                     | ejemplo, un número.               |
   |-----------------------------------|-----------------------------------|
*/