function sumUp(...args) {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }; // función dentro de otra función
  let total = 0;
  for (const number of args) {
    total += validateNumber(number);
  }
  return total;
}

console.log(sumUp(1, 2, 3, 4, 5)); // 15
console.log(sumUp(1, 2, 3, 4, 5, 6, 7, 8)); // 36
console.log(sumUp(1, 2, undefined, "hola")); // 3
