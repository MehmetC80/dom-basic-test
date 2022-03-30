"use strict";

const inputFirstNameElem = document.querySelector("#fname");
const inputLastNameElem = document.querySelector("#lname");
const pElem = document.querySelector("p");
const btnElem = document.querySelector("button");

btnElem.addEventListener("click", (e) => {
  e.preventDefault();
  pElem.innerText = `Vorname: ${inputFirstNameElem.value}
    Nachname: ${inputLastNameElem.value} `;
});
