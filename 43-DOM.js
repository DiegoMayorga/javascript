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

// RESUMEN - Métodos de consulta de nodos
// Además de los métodos de consulta siguientes, también tengo estas propiedades especiales en el objeto del documento para seleccionar partes del documento:
// document.body -> Selecciona el nodo de elemento <body>
// document.head -> Selecciona el nodo de elemento <head>
// document.documentElement -> Selecciona el nodo de elemento <html>

/* Métodos de consulta */

// document.querySelector(<CSS selector>);

// Toma cualquier selector CSS (#id, .class, div p.class) y retorna el primer elemento que coincida en el DOM. Retorna null si no encuentra ningún elemento.
// Más info: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// document.getElementById(<ID>);

// Toma un ID (sin el #, solo el nombre) y retorna el elemento que tiene ese ID. Desde que ese elemento sea el único con ese ID, retorna solo un elemento.
// Retorna null si no encuentra ningún elemento con ese ID.
// Más info: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// document.querySelectorAll(<CSS selector>);

// Toma cualquier selector CSS (#id, .class, div p.class) y todos los elementos que coincidan en el DOM como un NodeList estático (non-live).
// Retorna un NodeList vacío si no encuentra ningún elemento.
// Más info: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

// document.getElementsByClassName(<CSS CLASS>);

// Toma una clase CSS (ej, "class") y retorna una HTMLCollection viva (live) de los elementos que coincidan en el DOM. Retorna una HTMLCollection vacía si no encuentra ningún elemento.
// Más info: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

// document.getElementsByTagName(<HTML TAG>);

// Toma una etiqueta HTML (ej, "div") y retorna una HTMLCollection de los elementos que coincidan en el DOM. Retorna una HTMLCollection vacía si no encuentra ningún elemento.
// Más info: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName

// También está getElementsByName, que realmente no es muy usada.
// Más info: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName