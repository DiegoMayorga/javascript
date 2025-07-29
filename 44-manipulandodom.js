/* Evaluando y manipulando elementos del DOM */

// Así puedo evaluar los elementos del DOM
<p id="welcome-text" class="text-default">
  Welcome!
</p>;

const p = document.getElementById("welcome-text");

console.log(p.textContent); // Welcome!
console.log(p.id); // welcome-text
console.log(p.className); // text-default

// Para manipularlos:
p.className = "new-class"; // --> <p class="new-class">Welcome!</p>

/* ATRIBUTOS VS PROPIEDADES */
// Frecuentemente, los atributos son mapeados a propiedades y la sincronización live es configurada.
<input id="input-1" class="input-default" value="Enter text..."></input>;
// id, class y value son atributos ubicados en el código HTML, en tags de elementos.

// La propiedad se podría decir que es el objeto que se construye a partir del DOM.
const input = document.getElementById("input-1");
// Con este input puedo leer el id, el classname, el value...
// Las propiedades automáticamente agregadas en objetos DOM creados.

// input.id --> Mapping 1:1 (+ sincronización live)
// input.className --> Nombres diferentes (pero sincronización live) -- No siempre el nombre de la propiedad es el mismo del atributo en el HTML.
// input.value --> Mapping 1:1 (1 forma de sincronización live)

// Si manipulo el value, cambiando el valor por ejemplo a un input de esta manera:
input.value = "Hello World!";
// En la página se ve el cambio, dirá "Hello World!" en el input. Pero el atributo value en el HTML no se cambia, sigue siendo el que tiene originalmente.
// A diferencia de value, id y className si cambian en el HTML.

// Seleccionando varios elementos con querySelectorAll
const allLis = document.querySelectorAll("li");
allLis; // Devuelve un array de lis
allLis[0]; // funcionaría también, así como recorrer con un for el array de lis.
for (const li in allLis) {
  console.log(li);
}

// También se puede usar el getElementByTagName("li"); toma los elementos así los elimine o agregue y el querySelectorAll() solo toma un snapshot.

/* Atravesando el DOM */

// Para iniciar, hay unos conceptos clave que se irán mencionando: children, descendants, parent y ancestors.
<div>
  <p>
    A <em> test! </em>
  </p>
</div>;
// child/ren: Elemento hijo directo. En el ejemplo, <p> es un hijo de <div>, <em> no.
// descendant/s: El hijo directo o indirecto de un elemento. En el ejemplo, tanto <p> como <em> son descendientes de <div>.
// parent/s: El elemento padre directo de un elemento. En el ejemplo, <div> es el padre de <p>, de <em> no.
// ancestor/s: El elemento padre directo o indirecto de un elemento. En el ejemplo, <div> es un ancestro de <p> y de <em>.

// Nodo actual. Ejemplo: <div>
// document.body es el parentNode, parentElement o closest()

// Los hijos: childNodes, children, querySelector() para acceder a ellos.
// firstChild, firstElementChild, lastChild, lastElementChild también para trabajar con los hijos.

// Para los hermanos: previousSibling, previousElementSibling, nextSibling, nextElementSibling.

// Si tengo una lista de 3 items, 3 <li> tal que así:
<>
  <li>Item 1</li>
  <li class="list-item">Item 2</li>
  <li class="list-item">Item 3</li>
</>;

// Si quiero acceder al segundo <li>, puedo usar el querySelector(".list-item"), ya que toma el primer elemento con esa clase.
// ¿Pero qué pasaría si le agrego la misma clase al primero?
<ul>
  <li class="list-item">Item 1</li>
  <li class="list-item">Item 2</li>
  <li class="list-item">Item 3</li>
</ul>;

// Puedo usar lo siguiente:
const ul = document.querySelector("ul");
ul.children[1]; // Devuelve el segundo <li> El problema acá sería si hay otros elementos antes de ese <li>.
ul.childNodes
ul.firstElementChild // Primer elemento hijo
ul.lastElementChild // Último elemento hijo

/* ParendNode y ParentElement */
const li = document.querySelector("li");
li.parentElement; // Devuelve el elemento padre
li.parentNode; // Devuelve el elemento padre
// Solo pueden tener un padre, por lo que parentNode y parentElement son iguales.

// El método closest() es útil para encontrar el elemento más cercano que cumpla con una condición.
// Por ejemplo, si quiero encontrar el elemento más cercano que tenga de nombre "body", puedo usar closest() como sigue:
li.closest("body"); // Devuelve el elemento más cercano con la clase "list-item"