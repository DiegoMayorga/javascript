const numbers = [2, 4, 6, 8, 10, 12];
const filteredNums = numbers.filter((num) => num > 5);
const numsToObj = filteredNums.map((num) => ({ num }));
const reducedNums = numsToObj.reduce((acc, cur) => acc * cur.num, 1);
console.log(filteredNums);
console.log(numsToObj);
console.log("Nums multiplied:", reducedNums);

const findMax = (...args) =>
  args.reduce((num, max) => (num > max ? num : max), 0);
console.log("Max:", findMax(...numbers));

const findMin = (...args) => Math.min(...args);

const findMinAndMax = (...args) => {
  const max = findMax(...args);
  const min = findMin(...args);
  return [min, max];
};

const [min, max] = findMinAndMax(...numbers);

console.log("Min:", min);
console.log("Max:", max);

class UniqueList {
  constructor() {
    this.items = new Set();
  }

  add(value) {
    if (this.items.has(value)) {
      console.log(`El valor ${value} ya existe, no se agregará.`);
      return false;
    }
    this.items.add(value);
    console.log(`Se agregó ${value}`);
    return true;
  }

  getAll() {
    return [...this.items];
  }
}

const myList = new UniqueList();
myList.add(5);
myList.add(6);
myList.add(7);
myList.add(5);

console.log(myList.getAll());
