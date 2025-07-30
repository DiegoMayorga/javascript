/* Creando e insertando elementos en el DOM */

/* 1. HTML string */
const htmlString = "<h1>Titulo</h1>";
// Puede ser agregado con innerHTML, agrega (renderiza) el string HTML.
// insertAdjacentHTML() agrega el string HTML en una posición especificada.

/* 2. createElement() */
// appendChild() / append() agrega un nuevo elemento o nodo al DOM.
// prepend(), before(), after(), insertBefore() insertan un elemento o nodo nuevo al DOM en una posición especificada.
// replaceChild(), replaceWith() reemplazan el elemento/nodo existente del DOM con el nuevo.

// Si tengo un section con x contenido y desde JavaScript manipulo ese section agregando con innerHTML un código HTML nuevo, todo será reemplazado.

const section = document.querySelector("section");
section.innerHTML = "<h1>Hola!</h1>"