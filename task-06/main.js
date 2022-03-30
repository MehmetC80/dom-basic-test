"use strict";

const carDropDownElem = document.querySelector("#carDropDown");

const removeBtnElem = document.querySelector("#removeBtn");

const inputElem = document.querySelector("input");
const addButtonElem = document.querySelector("#add");

removeBtnElem.addEventListener("click", () => {
  if (carDropDownElem.length >= 0) {
    carDropDownElem.remove(carDropDownElem.length - 1);
  }
});

addButtonElem.addEventListener("click", () => {
  let newOption = new Option(
    inputElem.value,
    `${inputElem.value.toLowerCase()}`
  );
  carDropDownElem.add(newOption);
});
