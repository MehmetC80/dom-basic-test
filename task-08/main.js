"use strict";

const strongElems = document.querySelectorAll("strong");

const strongElemsArr = Array.from(strongElems);

strongElemsArr.forEach((m) => {
  m.style.backgroundColor = "limegreen";
  m.style.fontFamily = "arial";
});
