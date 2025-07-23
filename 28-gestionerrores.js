/* Gestión de errores */

// Algunos errores no pueden ser evitados (más allá de mi control como desarrollador).
// Pues, con el debugger ya ví que se pueden gestionar errores de sintaxis o básicamente míos como desarrollador.

// Por ejemplo:

// 1. Errores de input de usuarios:
// Ejemplo: Si el usuario ingresa un texto como "Hola" en un campo numérico.

// 2. Errores de red:
// Ejemplo: El servidor está caído o no está disponible.

// 3. ...

// En estos casos, puedo lanzar y atrapar errores para fallar con elegancia o recuperar si es posible.
// Eso lo puedo manejar con try-catch.
// Intento un código que podría fallar y después de que se haya ejecutado el código, lo intento atrapar.
// Si falla, puedo lanzar un error personalizado.

// Lanzar un error implica que el programa se detenga, que no pueda continuar ejecutándose. Y, puedo mostrar el mensaje de error en consola.