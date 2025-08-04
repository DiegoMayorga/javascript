/* SECCIÓN 7 - TRABAJANDO CON EL DOM (CÓDIGO HTML DEL NAVEGADOR) */

// Interactuando con la página HTML - Explorando el DOM

// CONTENIDO DEL MÓDULO
// 1. HTML, DOM y JavaScript
// 2. Nodos y elementos
// 3. Consultando nodos DOM y atravesando el DOM
// 4. Evaluar y manipular nodos DOM
// 5. Crear y eliminar nodos DOM

// DOM - Document Object Model
// JavaScript
// El navegador le provee el entorno a JavaScript para que corra. Es un lenguaje hosteado.
// En JS tenemos ciertos métodos, ciertas características como const titleEl = document.querySelector('h1'); para acceder a elementos del DOM.

// Navegador
// <body><h1>Welcome</h1></body> --> Analizado y renderizado por el navegador
// Expone APIs web para permitir a JS trabajar con el documento analizado. Eso es el DOM.

// El DOM no está estrictamente atado a los navegadores. Hay otras herramientas que analizan HTML.
// Así mismo, JavaScript no es solo para trabajar con HTML. Node, por ejemplo, es un entorno de ejecución que permite trabajar a nivel del servidor.

// DOCUMENT & WINDOW
// document es el nodo raíz del DOM. Provee acceso a consultas de elementos, contenido del DOM, etc.

// window es el objeto más grande del navegador. Actúa como el almacenamiento global para script, también provee acceso a propiedades y métodos específicos de window.

// Métodos como alert() y prompt() son métodos de window. Se podrían escribir como document.alert() o window.prompt(), pero el navegador los analiza y permite que se
// ejecuten sin escribir window.
// window.document.getElementById() es otro ejemplo.

// RECURSOS ÚTILES
// Thorough DOM Introduction on MDN (also check the linked guides on the left on that page): https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction