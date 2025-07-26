/* El DOM - Document Object Model */

/*
<html>
    <head>
        <title>The DOM</title>
    </head>
    <body>
        <header>
            <h1>DOM</h1>
        </header>
        <main>
            <p>There's a lot to it!</p>
        </main>
    </body>
</html>
*/

// <html> --> Nodo: HTML
// |_
//   HEAD
//   |_
//     TITLE
// EL DOM
//   BODY
//   |_
//     HEADER
//     |_
//       H1
// NAVEGANDO EN EL DOM

// NODOS Y ELEMENTOS

// Consultando elementos:

// querySelector(), getElementById()
// Retornan solo un elemento.
// Hay diferentes formas de consultar elementos (por selector CSS, por ID)
// Se retorna una referencia directa al elemento DOM.

// querySelectorAll(), getElementByTagName()
// Retornan colecciones de elementos (array-like): NodeList
// Hay diferentes formas de consultar elementos (por selector CSS, por tagname, por clase CSS)
// querySelectorAll() retorna una NodeList non-live, getXByY retorna NodeList live.

// Nodos y elementos

// Nodos:
// Objetos que maquillan el DOM.
// Las etiquetas HTML son nodos de elementos (o solo elementos).
// El texto crea "nodos de texto"
// Los atributos crean "nodos de atributos"

// Elementos:
// Son un tipo de nodo.
// Tiene propiedades y métodos especiales para interactuar con los elementos.
// Métodos y propiedades disponibles dependen en el tipo de elemento.
// Pueden ser seleccionados en diferentes formas (vía JS).
// Pueden ser creados y eliminados vía JS.

// Tipos de nodos: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType


/* Para acceder al elemento por ID */
// const h1 = document.getElementById("main-title");

/* Para acceder al elemento por className */
// document.getElementsByClassName("list-item");
// for (const el of document.getElementsByClassName("list-item")) {
//  console.log(el)
//};

/* Con querySelector se accede al elemento por ID o por className tal como se hace con CSS */

// const title = document.querySelector("#main-title");
// const h1 = document.querySelector(".list-item");
// document.querySelector("ul li:first-of-type");
// document.querySelector("ul li:last-of-type");

// const ul = document.querySelectorAll("ul");
// ul.querySelector("li"); // retorna el primer elemento de la lista
