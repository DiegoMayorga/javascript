const task3Element = document.getElementById("task-3");

function firstFn() {
  alert("First function!");
}

function showName(name) {
  alert(name);
}

function concatenate(a, b, c) {
  return `${a} ${b} ${c}`;
}

showName("Diego");
alert(concatenate("I", "am", "Diego"));

task3Element.addEventListener("click", firstFn);
