"use strict";

const btnElem = document.querySelector("button");

const aElem = document.querySelector("a");
const pElem = document.querySelector("p");

btnElem.addEventListener("click", () => {
  pElem.style.fontSize = "25px";
  pElem.style.backgroundColor = "grey";
  pElem.style.color = "limegreen";
  pElem.innerText = `Atribute des a-tags:
href: ${aElem.href}
type: ${aElem.type}
rel: ${aElem.rel}
lang: ${aElem.lang}
target: ${aElem.target}

`;
});
