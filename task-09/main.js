const inputElemWidth = document.querySelector("#innerWidth");
const inputElemHeigth = document.querySelector("#innerHeigth");

function reportWindowSize() {
  inputElemWidth.value = window.innerWidth;
  inputElemHeigth.value = window.innerHeight;
}

window.onresize = reportWindowSize;
