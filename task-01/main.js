// "use strict";

const btnElem = document.querySelector("main button");
const pElem = document.querySelector("main p");

btnElem.addEventListener("click", () => {
  pElem.style.color = "limegreen";
  pElem.style.fontFamily = "arial";
  pElem.style.fontSize = "x-large";
});
