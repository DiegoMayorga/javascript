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
section.innerHTML = "<h1>Hola!</h1>";

/* Métodos de inserción y eliminación de elementos */

// appendChild()
// insertAdjacentElement()
// replaceChild()
// removeChild()
// Tienen mayor soporte en navegadores. Cantidades de recursos en internet.

/* Métodos más modernos */

// append()
// prepend()
// before()
// after()
// replaceWith()
// remove()
// No lo soportan todos los navegadores. No son la opción más común.

/* RESUMEN: INSERTAR, REEMPLAZAR Y ELIMINAR ELEMENTOS */

// Hay muchas formas de crear, insertar, reemplazar y eliminar elementos del DOM. Aquí hay un resumen de lo que tengo.
// Para soporte en navegadores, debo revisar un enlace que más adelante tendré sobre "Browser Support".

// Crear e insertar.
// Tengo dos formas principales: Proveer un fragmento HTML (ej. vía innerHTML) para validar un snippet HTML y dejar al navegador
// renderizarlo o crear un objeto DOM en el código JS y agregarlo manualmente. El último enfoque tiene la ventaja de darme acceso directo
// al objeto DOM (útil para configurar sus propiedades o agregar event listeners). La desventaja es que tengo que escribir más código.

// Agregando código HTML:
/*
const root = document.getElementById("root-el"); // seleccionar algo como <div id="root-el">
root.innerHTML = `
    <div>
        <h2>Welcome!</h2>
        <p>Some text</p>
    </div>
`
*/
// Importante: Cualquier contenido existente en root es completamente reemplazado al usar innerHTML. Si quiero agregar/insertar código HTML, puedo
// usar insertAdjacentHTML() en su lugar. https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

/* const root = document.getElementById("root-el"); // seleccionar algo como <div id="root-el">
root.insertAdjacentHTML(
  "afterbegin",
  `
    <div>
        <h2>Welcome!</h2>
        <p>Some text</p>
    </div>
`
); */

// Creando e insertando objetos del DOM manualmente:
const someParagraph = document.createElement("p"); // crear un elemento <p>
const root = document.getElementById("root-el"); // seleccionar algo como <div id="root-el">
root.appendChild(someParagraph); // agregar <p> al <div> (appendChild() es el método más común para agregar elementos)

// En este ejemplo, creamos un párrafo y lo agregamos a root. Append significa que eso se inserta al final de root.
// (es decir, dentro de este pero después de todos los otros nodos hijo que tiene).

/* MÉTODOS DE INSERCIÓN */
// append() -> https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
// El soporte de navegadores es decente pero para IE, appendChild() sería preferido -> https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// prepend() -> https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
// El soporte de navegadores es decente pero para IE, prependChild() sería preferido -> https://developer.mozilla.org/en-US/docs/Web/API/Node/prepend

// before(), after() -> https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before & https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after

// El soporte del navegador está bien pero IE y Safari no lo soportan. Debo considerar insertBefore() (https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) 
// o insertAdjacentHTML() (https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) en su lugar.

// IMPORTANTE (No importa cómo inserto elementos): Cuando sea que inserte elementos, muevo el elemento al nuevo lugar si ya lo inserté antes. No es copiado (puedo copiar un
// elemento vía someElement.cloneNode() igual).

// REEMPLAZAR
// Puedo reemplazar elementos en el DOM con dos métodos principales.

// replaceWith() -> https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith
// replaceChild() -> https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild
// replaceWith() es un poco más fácil de usar y tiene un soporte decente de navegadores. IE es la excepción. Para soportarlo también puedo usar replaceChild().

// ELIMINAR
// Puedo eliminar elmentos con 3 métodos principales.
// someElement.innerHTML = '' -> Limpia todo el contenido HTML de someElement y por eso elimina cualquier objeto renderizado ahí.
// someElement.remove() -> Elimina el elemento del DOM (https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove). El soporte
// de navegadores es bueno. IE, de nuevo, no lo soporta. Para soportarlo también puedo usar removeChild().
// someElement.parentNode.removeChild(someElement) -> Elimina el elemento hijo especificado (no el elemento que llamo). Provee un amplio soporte
// de navegadores pero por supuesto requiere un poco más de código (https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild).

// ¿QUÉ PASA CON LOS NODOS DE TEXTO? (TEXT NODES)
// PUedo crear e insertar facilmente nodos de texto así:
// someElement.textContent = "Hola";
// Esto crea e inserta el nodo de texto con el contenido de "Hola".

// ¿QUIERO AGREGAR UN TEXTO EXISTENTE?
// Simplemente debo usar: someElement.textContent += "More text!";