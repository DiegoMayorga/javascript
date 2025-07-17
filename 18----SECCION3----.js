/* SECCIÓN 3 - Desarrollo Eficiente y Debugging */

// Una vista general -- Masterizando desarrollo en JavaScript

// Escribir código eficiente
// --> Trabajar en un entorno productivo (ej, IDE, edito)
// --> Usar código para formatear automáticamente y usar atajos.
// --> Usar autocompletar y sugerencias.
// --> Explorar extensiones y configuraciones.

/*
1. Configurando el IDE -> En archivo - preferencias - temas - puedo configurar los colores del IDE. También cómo se ven las carpetas y archivos.
2. Usar atajos también me ayuda a reducir tiempos de desarrollo.
3. Usar herramientas de autocompletar y sugerencias. Con Ctrl + Espacio -> me sugiere métodos y propiedades de la clase, cuando es un objeto y recomendaciones para escribir código.
Adiciona, allí salen descripciones de las opciones que me da, para tener más claridad.}
4. Instalando extensiones del IDE. En la sección de extensiones encuentro herramientas como Prettier, ESLint, etc. Estas me pueden servir, se recomienda
no  tener muchas dado que pueden ocurrir problemas inesperados.
5. Ajustar la configuración del editor. Si tengo interés por cambiar configuraciones del editor, puedo hacerlo en File -> Settings.
6. Usando diferentes vistas en el IDE. En View puedo identificar las diferentes vistas que hay en VS Code. El explorador, búsqueda, extensiones...
*/

// Buscar ayuda

// Buscando ayuda y trabajando con MDN (Mozilla Developer Network) - Red de desarrolladores Mozilla.
// --> Usar MDN!
// --> Aprender cómo Googlear.
// --> Hacer preguntas apropiadas y ayudar a otros.
// --> Intentar y equivocarme.

/*
1. developer.mozilla.org -> Aquí encuentro la documentación de JavaScript y algunas otras tecnologías.
En References de JavaScript en Mozilla, podré encontrar información sobre funciones integradas, objetos y muchos más recursos.
Puedo hacer búsquedas específicas como MDN parseInt... Debo usar palabras clave para encontrar con mayor facilidad lo que necesito.

El estandar ECMAScript está bajo continuo desarrollo y el progreso actual y estándares activos están documentados en este curso.
Puedo encontrar el link a esa página aquí: https://262.ecma-international.org/
No es que este documento deba ser aprendido de memoria como desarrollador. Más bien, es importante para los proveedores de navegadores.

2. ¿Cómo Googlear correctamente?
Si no recuerdo bien la palabra o la función o método que debo usar en cierto lugar de mi código, lo puedo buscar como su descripción. Ejemplo, "cómo cambiar
un string a número" y al obtener resultados, busco fuentes recomendadas. Ahora, es importante saber que para obtener un resultado en programación, hay múltiples
soluciones. Por ejemplo, para este caso, puedo usar parseInt(), Number(), incluso usando el operador + antes del string que contiene un número.
*/

// Debuggear código

// Debugging en JavaScript -> Una vista general.
// --> Leer y usar los mensajes de error.
// --> Usar console.log() para obtener información de mi código, para ver el flujo de mi programa.
// --> Usar las herramientas de depuración de Chrome.
// --> Usar las opciones de depuración de VS Code.

/* 
1. Cuando tengo un error de sintaxis, por ejemplo una función que no existe. El IDE puede que no resalte ese error, pues la función podría ser de otro archivo.
Sin embargo, al correr mi aplicación y ejecutar las devtools, allí puedo identificar el error, me dice en qué línea está y qué es específicamente lo que pasa.
2. Usar el console.log() para ver dentro del código. Puedo imprimir los valores que creo que están generando un problema, especialmente si no los veo en la consola, es decir,
que no sean errores de sintaxis, ni en el VS Code marcados como error.
(En Sources de las devtools puedo ver mi código js, el que hice en mi proyecto).
3. DevTools de Chrome y Breakpoints como un siguiente nivel de Debugging.
Los breakpoints tienen muchas posibilidades. Pues, donde pongo el breakpoint, se detiene el código y puedo ir saltando de línea en línea, de paso a paso, puedo entrar a funciones.
Incluso, puedo identificar clicks del mouse para que haya un breakpoint en donde se ejecuta la función que requiere de un click del mouse. También puedo usar breakpoints condicionales
dándole clic derecho a la línea de código y selecciono el breakpoint condicional. Por ejemplo, puedo decir que llegue a ese breakpoint cuando el valor recibido sea mayor a X número...
Testear código cambia directamente en las DevTools.
Si hago cambios en el Sources de las DevTools, los cambios solo se realizan en el navegador, no en mi archivo local.

4. Debuggeando código desde el IDE. Hay una extensión llamada debugger from Chrome.

*/

/*

RECURSOS INTERESANTES QUE ME PUEDEB SERVIR:

VS Code Docs: https://code.visualstudio.com/docs
VS Code Keybindings: https://code.visualstudio.com/docs/getstarted/keybindings
VS Code Extensions Docs: https://code.visualstudio.com/docs/editor/extension-gallery
Google Chrome DevTools Docs: https://developers.google.com/web/tools/chrome-devtools/

*/