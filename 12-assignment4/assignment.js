const sayHello = (name) => {
  console.log("Hi " + name);
};

const sayHello2 = (wave = "Hello", name = "person") => {
  console.log(`${wave}, ${name}!`);
};

const sayHello3 = () => {
  console.log("Hi, Diego");
};

const sayHello4 = () => {
  return "Hi, there!";
};

sayHello("Juan");
sayHello2("Hello", "Pedro");
sayHello2();
sayHello3();
console.log(sayHello4());

function checkInput(cb, ...params) {
  let newArr = [];
  for (word of params) {
    newArr.push(word);
  }
  cb(newArr);
}

function validation(arr) {
  if (arr.length === 0) {
    alert("You did not add any values to this function.");
  }
  for (item of arr) {
    if (typeof item !== "string" || item === "") {
      alert(`${item} is an invalid value. It is empty or it is not a string.`);
      return;
    }
  }
  alert(`${arr.length > 1 ? "Your words are:" : "Your word is:"} ${arr.join(", ")}`)
}

checkInput(validation, "Hola");
checkInput(validation, 5, "hola")
