const addListenerBtn = document.getElementById("add-listener-btn");
const clickableBtn = document.getElementById("clickable-btn");
const messageInput = document.getElementById("click-message-input");

let person = { name: "Max" }; // No es necesario que use el null para darle el valor nulo a este objeto para que se lleve a Garbage Collection
// Lo hace por sí mismo JavaScript cuando una variable no está siendo usada.

person = null;

function printMessage() {
  const value = messageInput.value;
  console.log(value || "Clicked me!");
}

/* function addListener() {
  clickableBtn.addEventListener("click", () => {
    const value = messageInput.value;
    console.log(value || "Clicked me!");
  });
} */ // Esto es peligroso porque se va a ejecutar la función cada vez más veces cuando le doy click al addListenerBtn.
// Pues, una cosa es poner una función como referencia a cada vez que se cliquee el botón y otra es ejecutarla.

function addListener() {
  clickableBtn.addEventListener("click", printMessage);
}

addListenerBtn.addEventListener("click", addListener);
