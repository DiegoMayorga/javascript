/* Colección en basura y gestión de memoria */

// ¿Cómo se gestiona la memoria que está en Heap?
// (V8's) Garbage Collection

// En este enlace se ve este tema de Garbage Collection a detalle: https://v8.dev/blog/free-garbage-collection

// Revisa periodicamente el heap para objetos sin uso (objetos que no tienen referencias)
// Elimina objetos sin uso

// Debo tener cuidado con los "memory leaks" (memoria sucia): Objetos sin uso, donde todavía mantengo referencias a ellos
