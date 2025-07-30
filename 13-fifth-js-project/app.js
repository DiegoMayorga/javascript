// const h1 = document.querySelector("h1");
// h1.textContent = "Some new text!"; // Some new text!
// h1.style.color = "white";
// h1.style.backgroundColor = "black";

const h1 = document.getElementById("main-title");
h1.textContent = "Some new text!"; // Some new text!
h1.style.color = "white";
h1.style.backgroundColor = "black";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + " (Changed!)";

// const body = document.body;

const listItemElements = document.getElementsByTagName("li");

for (const listItemEl of listItemElements) {
  console.log(listItemEl);
}

const section = document.querySelector("section");
// section.style.backgroundColor = "blue"; // Los estilos inline tienen mayor prioridad, por tanto, si tenía estilos según la clase, ahora se sobre escriben.
section.className = ""; // Le quito la clase, de manera que ya el fondo no es como antes.

const toggle = () => {
  section.classList.toggle("invisible");
};

const button = document.querySelector("button");
button.addEventListener("click", toggle);

// section.innerHTML = "<h1>Some new text!</h1>";
// Se podría hacer algo como section.innerHTML = section.innerHTML + "<h2>Hola<h2>".
// Pero también hay otra opción: section.insertAdjacentHTML("beforeend", "<h2>Hola<h2>");
// El primer argumento es la posición donde se insertará el nuevo HTML:
// - beforebegin: antes del elemento
// - afterbegin: después del elemento
// - beforeend: antes del último hijo del elemento
// - afterend: después del último hijo del elemento
// Si quiero agregar otro li a mi ul.
// list.insertAdjacentHTML("beforeend", '<li>Holi</li>');

/* También puedo crear un elemento con document.createElement() */
/* const list = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.textContent = "Item 4";
newLi.addEventListener("click", () => console.log("click")); */

// list.appendChild(newLi);
/* list.append("Some text"); // Esto lo que hace es agregar texto al final de la lista.

const newLi2 = document.createElement("li");
newLi2.textContent = "Item 5";
list.prepend(newLi2); // Esto lo que hace es agregar el elemento al principio de la lista.

list.lastElementChild.before(newLi2); // Esto lo que hace es agregar el elemento antes del último hijo de la lista.
list.firstElementChild.replaceWith(newLi2); */ // Esto lo que hace es reemplazar el primer hijo de la lista por el elemento que le paso.

// Con append() también puedo agregar más de un elemento.

/* const list2 = document.createElement("ul");
const secondLi = list.children[1];
const newLi3 = document.createElement("li");
newLi3.textContent = "Item 4";

list2.insertAdjacentElement("afterend", newLi3); */ // Todos los navegadores lo soportan. Con los casos anteriores habia problema con IE y Safari.

/* CLONANDO ELEMENTOS DEL DOM */

/* const newLi2 = newLi.cloneNode(true); // Con true se clona todo el elemento, incluyendo los eventos y las propiedades.
// newLi3.cloneNode(false); // Con false se clona solo el elemento, sin eventos y propiedades. Este es el valor por defecto. Es decir, como newLi3.cloneNode().

list.append(newLi, newLi2); */

/* Listas de nodos Live vs Static */

const list = document.querySelector("ul");
const listItems = list.querySelectorAll("li");
const listItems2 = document.getElementsByTagName("li"); // Esto es una lista de nodos estáticos. Es decir, no se actualizan cuando se agrega un nuevo elemento a la lista.
const newLi = document.createElement("li");
newLi.textContent = "Item 4";
list.append(newLi);

listItems[0].textContent = "Item 11"; // Cambio el primer elemento de la lista a "Item 11".