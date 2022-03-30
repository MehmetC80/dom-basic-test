"use strict";

const btnElem = document.querySelector("button");
const inputElem = document.querySelector("#input");
const pElemt = document.querySelector("p");

inputElem.addEventListener("focus", () => {
  pElemt.style.backgroundColor = "limegreen";
  pElemt.style.fontSize = "25px";
});
