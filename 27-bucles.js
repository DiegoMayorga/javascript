/* Bucles */

// En programación puedo necesitar ejecutar un código múltiples veces.

// Bucle for
// Ejecuta código una cantidad establecida de veces (con una variable de control).
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// Bucle for of
// Se ejecuta por cada elemento en un array.
const array = [1, 2, 3];
for (const el of array) {
  console.log(el); // 1, 2, 3
}

// Bucle for in
// Ejecuta código por cada key en un objeto.
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key in obj) {
  console.log(key); // a, b, c
  console.log(obj[key]); // 1, 2, 3
}

// Bucle while
// Ejecuta código mientras una condición se cumpla.
while (isLoggedIn) {
  // ...
}

// No se suele usar cuando hay un número de elementos específicos, pues en ese caso se usaría for.
// Cuando no se sabe cuántas veces se ejecutará el bucle, se suele usar while. Por ejemplo:
let randonNumbers = [];
let finished = false;
while (!finished) {
  const rndNumber = Math.floor(Math.random() * 100);
  randonNumbers.push(rndNumber);
  if (rndNumber > 50) {
    finished = true;
    console.log(randonNumbers);
  }
}

// Puede generar algo como esto: [6, 5, 49, 55] -> Como el último valor es mayor que 50, se termina el bucle y se imprime el array.

// do while
let j = 3;
do {
  console.log(j);
  j++;
} while (j < 3); // 3 porque se ejecuta al menos una vez, aunque la condición no se cumpla.

/* Break y continue */

// Con break, se sale del bucle, con continue, se salta esa iteración y continúa con la siguiente.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
} // 0, 1, 2, 3, 4

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
} // 0, 1, 2, 3, 4, 6, 7, 8, 9

/* Declaraciones etiquetadas */

let n = 0;
outerWhile: do {
  console.log("Outer:", n);
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break outerWhile; // Si pusiera un continue en vez de break, no se actualizaría el valor de n y quedaría un bucle infinito.
    }
    console.log("Inner:", i);
  }
  n++;
} while (n < 3);

// Esto lo que hace es romper un bucle externo, así como el interno al usar ese break. Pues, la etiqueta permite que el break le aplique también a ese bucle.
// Se pueden usar en un contexto real cuando hay un bucle infinito y lo quiero romper desde un botón.