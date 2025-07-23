// console.log(userName); // no he creado userName.

// var userName = "Diego"; // Con var no genera error, pero el valor sería undefined
// let userName = "Diego"; // Con let, generaría un error: Cannot access 'userName' before initialization

// El navegador de manera invisible con var hizo esto:
/*
var userName;
console.log(userName);
userName = "Diego";
*/

// El hoisting se puede ver más claro usando funciones. Pues, las funciones se declaran antes de ser invocadas, no importa si se declaran después de ser invocadas.
//let userName = "Diego";
//sayHello();
//console.log(userName);
// function sayHello() {
//  console.log("Hello");
// }
// Hello
// Diego
