/* 1. Definir funciones */
function greetUser(name) {
  // Puedo (pero no es obligatorio) usar parámetros y puedo (pero no es obligatorio), retornar valores con return.
  alert("Hi " + name);
}

/* Llamar a la función */
greetUser("Diego");

/* Retornando valores */

function add(a, b) {
  return a + b;
  console.log("Hola"); // Cualquier código luego del return no se ejecuta, a no ser que se usen condicionales con if... else
  // y que por ejemplo, en cada condición haya un return
}

// Una función también puede usar el return sin más. Se sale de la condición, por ejemplo, cuando se cumple. Sin retornar valor alguno.
// Si agrego otro return después, tampocon se va a ejecutar. Se detiene en el primer return que encuentre.
