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