/* ¿Cómos e analiza y compila el código? */

// Tengo X código, por ejemplo:
// const name = "Andres";
// alert(name);

// ¿Cómo lo interpreta el motor?
// 1. Analiza el código
// 2. Compila el código
// 3. Ejecuta el código

// Intérprete y compilador (JiT - Just In Time)
// Primero, se analiza el código e inicia la ejecución. Eso lo hace el intérprete. Traduce esto a bytecode, que es lo que se compila. Ejecuta el bytecode.
// El bytecode se compila a código máquina. Ejecuta el código máquina.
// El compilador inicia compilando + ejecutando el código compilado mientras que el código está siendo leído/ejecutado.
// Finalmente, se compila el código máquina al computador.

// El motor aplica algunas técnicas de optimización, para que sea más rápido...
// Las APIs del navegador son los puentes de comunicación entre JavaScript y la lógics (C++) contruida en el navegador.

// Motor V8 explicado: https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef
// SpiderMonkey: https://firefox-source-docs.mozilla.org/js/index.html

// ¿Cómo se ejecuta el código? - Dentro del motor JavaScript

// Dentro del motor JavaScript "The thing that executes your code".
// Hay dos conceptos principales: Heap y Stack. Heap es el lugar donde se almacenan los objetos. Stack es el lugar donde se almacenan los valores.
// Heap: Ubicación en memoria. Almacena los datos en el la memoria del sistema y gestiona su acceso.
// Stack: Ejecución del contexto. Gestiona el flujo del programa (llamado a funciones y comunicación)

function getName() {
  return prompt("Introduce tu nombre: ", "");
}

function greet() {
  const name = getName();
  console.log(`Hola ${name}`);
}

greet();

// Las funciones son almacenadas en el Heap.
// Cuando se corre el script, se activa el Stack.
// El navegador agrega cosas en el stack. Allí se ejecuta algún código anónimo.

// 1. anonymous
// 2. greet()
// 3. getName()
// 4. prompt()

// El Stack se va poblando de funciones en un orden específico. En el caso anterior, lo que se mencionó.
// Se elimina del stack la función que se va ejecutando. Cuando prompt se ejecuta y retorna el valor, se elimina de la pila. Así sucesivamente. Incluso se elimina el código anónimo.
// El Stack controla qué está sucediendo. Esto está relacionado a que JavaScript es single-threaded. No se puede ejecutar dos cosas al mismo tiempo.

// Hay algo más en el navegador que es el Event Loop. Los Event Listeners se verán más a detalle después, pero van ligados a temas de código asíncrono y enviar solicitudes al navegador.
// El motor JavaScript por sí mismo es el heap y el stack.

/* NAVEGACIÓN PROFUNDA - Lenguaje JavaScript vs APIs del navegador */

// En las últimas clases, se cubrió el motor JavaScript y qué hace dentro del navegador. También aprendí que hay una diferencia entre la ejecución de código JS y las APIs del navegador
// que puedo identificar durante la ejecución.
// Esencialmente, puedo dividir el código que escribo en dos partes:

// 1. El lenguaje JavaScript.
// Comprender la sintaxis core (let, const, etc) pero no saber nada sobre el DOM, por ejemplo.

// 2. APIs del navegador.
// No es responsable de comprender mi código (eso es lo que 1 hace) pero en cambio, es responsable de exponer APIs como la API DOM que puedo usar desde dentro del código script.

// El lenguaje JavaScript es avanzado por la ECMA INTERNATIONAL TECHNICAL COMITTEE 39 (TC39), que es un grupo parte de la organización ECMA. Es responsable de añadir características
// al lenguaje JavaScript. Por ejemplo, en el pasado fue responsable de agregar let y const.

// Puedo aprender más sobre TC39 acá: https://tc39.es/

// Y puedo explorar las nuevas propuestas que están siendo discutidas por ese grupo - características que potencialmente lo hacen en el lenguaje JavaScript core en el futuro:
// https://github.com/tc39/proposals

// IMPORTANTE: Solo porque una características se vuelva parte del lenguaje no significa que todo el motor JavaScript inmediatamete soporte esa característica. Por supuesto
// las personas desarrollando los motores están haciendo lo mejor para proveer soporte tan pronto como sea posible, pero ese proceso simplemente toma tiempo.

// Por otra parte, los proveedores de motores a veces también inician dándole soporte a ciertas características ANTES de que TC39 convierta una función en una parte oficial del
// lenguaje. Porque al final, por supuesto depende completamente de las personas que trabajan en los motores la decisión de qué sintaxis sus motores de JS comprenden.

// Las APIs del navegador también son estandarizadas porque los diferentes proveedores de navegadores (Google para Chrome, Microsoft para Edge, etc) por supuesto quieren (apenas)
// proveer paridad de funciones y APIs similares. No sería buena experiencia como desarrollador si tuviera diferentes funciones que necesite llamar para hacer mis scripts trabajar
// en diferentes navegadores. Además, en el pasado, esto era muy normal.

// Hoy en día, afortunadamente, esto está mejorando mucho porque también hay un grupo trabajando en los APIs de los navegadores - así que esas funciones y APIs en diferentes
// navegadores son evitadas tanto como sea posible.

// Ese grupo de trabajo tiene el nombre WHATWG (Web Hypertext Application Technology Working Group) y puedo aprender más sobre eso acá: https://whatwg.org/

// Si estoy interesado en aprender más sobre las APIs que fueron/son gestionadas por ese grupo, puedo visitar el sitio web de WHATWG: https://spec.whatwg.org/

// Ese grupo no está relacionado con TC39.
