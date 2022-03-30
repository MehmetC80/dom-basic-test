"use strict";

const btnElem = document.querySelector("button");
const divImageElem = document.querySelector(".image");
let url = "./image/pic01.jpg";

const arrImage = [];

arrImage[0] = "./image/01.jpg";
arrImage[1] = "./image/02.jpg";
arrImage[2] = "./image/03.jpg";
arrImage[3] = "./image/04.jpg";
arrImage[4] = "./image/05.jpg";
arrImage[5] = "./image/06.jpg";
arrImage[6] = "./image/07.jpg";
arrImage[7] = "./image/08.jpg";
arrImage[8] = "./image/09.jpg";
arrImage[9] = "./image/10.jpg";
arrImage[10] = "./image/11.jpg";

btnElem.addEventListener("click", () => {
  divImageElem.style.backgroundImage = `url(${
    arrImage[Math.floor(Math.random() * 10)]
  })`;
  divImageElem.style.backgroundRepeat = "no-repeat";
  divImageElem.style.backgroundSize = "cover";
});
