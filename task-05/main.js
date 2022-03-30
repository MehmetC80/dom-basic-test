"use strict";

const tableElem = document.querySelector("table");
const inputFirstNameElem = document.querySelector("#inputFirstName");
const inputLastNameElem = document.querySelector("#inputLastName");
const inputCompanyElem = document.querySelector("#inputCompany");
const btnElem = document.querySelector("button");

btnElem.addEventListener("click", () => {
  const rowElem = tableElem.insertRow(1);
  const cellElem0 = rowElem.insertCell(0);
  const cellElem1 = rowElem.insertCell(1);
  const cellElem2 = rowElem.insertCell(2);
  const cellElem3 = rowElem.insertCell(3);
  cellElem0.innerHTML = inputFirstNameElem.value;
  cellElem1.innerHTML = inputLastNameElem.value;
  cellElem2.innerHTML = inputCompanyElem.value;
  cellElem3.innerHTML = `<button id=edit>Edit</button>`;

  const btnEditElem = document.querySelector("#edit");
  btnEditElem.addEventListener("click", () => {
    // cellElem0.innerHTML = " ";
    // cellElem1.innerHTML = " ";
    // cellElem2.innerHTML = " ";
    const firstNameElem = btnEditElem.parentElement.parentElement.children[0];
    const lastNameElem = btnEditElem.parentElement.parentElement.children[1];
    const companyElem = btnEditElem.parentElement.parentElement.children[2];
    firstNameElem.innerHTML = `<input class=tdText value="${firstNameElem.innerText}"/>`;
    lastNameElem.innerHTML = `<input class=tdText value="${lastNameElem.innerText}"/>`;
    companyElem.innerHTML = `<input class=tdText value="${companyElem.innerText}"/>`;
  });
});
