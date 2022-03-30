const sectionElems = document.querySelectorAll(".section");
const navHomeElem = document.querySelector("#navHome");
const navMainElem = document.querySelector("#navMain");
const navContactElem = document.querySelector("#navContact");
const navAboutElem = document.querySelector("#navAbout");
const sectionHomeElem = document.querySelector(".home");
const sectionMainElem = document.querySelector(".main");
const sectionContactElem = document.querySelector(".contact");
const sectionAboutElem = document.querySelector(".about");

Array.from(sectionElems).forEach((m) => (m.style.display = "none"));

navHomeElem.addEventListener("click", () => {
  sectionHomeElem.style.display =
    sectionHomeElem.style.display === "block" ? "none" : "block";
});

navMainElem.addEventListener("click", () => {
  sectionMainElem.style.display =
    sectionMainElem.style.display === "block" ? "none" : "block";
});

navContactElem.addEventListener("click", () => {
  sectionContactElem.style.display =
    sectionContactElem.style.display === "block" ? "none" : "block";
});

navAboutElem.addEventListener("click", () => {
  sectionAboutElem.style.display =
    sectionAboutElem.style.display === "block" ? "none" : "block";
});

// navHomeElem.addEventListener("mouseover", () => {
//   sectionHomeElem.style.display = "block";
// });
// navHomeElem.addEventListener("mouseout", () => {
//   sectionHomeElem.style.display = "none";
// });

// navMainElem.addEventListener("mouseover", () => {
//   sectionMainElem.style.display = "block";
// });
// navMainElem.addEventListener("mouseout", () => {
//   sectionMainElem.style.display = "none";
// });

// navContactElem.addEventListener("mouseover", () => {
//   sectionContactElem.style.display = "block";
// });
// navContactElem.addEventListener("mouseout", () => {
//   sectionContactElem.style.display = "none";
// });

// navAboutElem.addEventListener("mouseover", () => {
//   sectionAboutElem.style.display = "block";
// });
// navAboutElem.addEventListener("mouseout", () => {
//   sectionAboutElem.style.display = "none";
// });
