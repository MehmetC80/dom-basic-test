const cards = getCards();

const mainElem = document.querySelector("main");
const questionH2Elem = document.createElement("h2");
const questionElem = document.createElement("p");
const qustionBoxElem = document.querySelector(".questionBox");
questionH2Elem.innerText = "Frage";
mainElem.appendChild(questionH2Elem);
mainElem.appendChild(qustionBoxElem);

const questionBtn = document.querySelector("body > main > h2");

// const min = 1;
// const max = cards.length;
// const elem = cards.find(
//   (m) => m.id === Math.floor(Math.random() * (max - min)) + min
// );

questionBtn.addEventListener("click", () => {
  const min = 1;
  const max = cards.length - 1;
  const elem = cards.find(
    (m) => m.id === Math.floor(Math.random() * (max - min)) + min
  );

  qustionBoxElem.innerHTML = `<p id="pQuestion">${elem.question}</p>`;

  const pQuestionElem = document.querySelector("#pQuestion");
  qustionBoxElem.addEventListener("click", () => {
    pQuestionElem.innerHTML += `<p>A:\n${elem.solution}</p>
    <p>B:\n${elem.wrong}</p>`;

    const pA = document.querySelector("#pQuestion > p:nth-child(1)");
    const pB = document.querySelector("#pQuestion > p:nth-child(2)");

    pA.addEventListener("click", () => {
      if (elem.solution) {
        pA.style.backgroundColor = "limegreen";
      }
    });

    pB.addEventListener("click", () => {
      if (!elem.solution) pB.style.backgroundColor = "limegreen";
      else pB.style.backgroundColor = "red";
    });
  });
});

function getCards() {
  return [
    {
      id: 1,
      categorie: "JavaScript",
      question: "Was ist der Unterschied zwischen war, const und let?",
      solution: "nnn",
      wrong: "nnn",
    },
    {
      id: 2,
      categorie: "JavaScript",
      question:
        "Seit wann gibt es in JavaScipt die Lamda-Notation (Arrow-Function)?",
      solution: "Seit ES6 erschienen 2015.",
      wrong: "nnn",
    },
    {
      id: 3,
      categorie: "JavaScript",
      question: "Was wird in JavaScipt als Hoisting bezeichnet?",
      solution:
        "Hoisting ist ein JavaScript-Mechanismus, bei dem Variablen und Funktionsdeklarationen vor der Codeausführung an den Anfang ihres Gültigkeitsbereichs verschoben werden.",
      wrong: "nnn",
    },
    {
      id: 4,
      categorie: "JavaScript",
      question: "Was ist der Unterschied zwischen war, const und let?",
      solution: "",
      wrong: "nnn",
    },
    {
      id: 5,
      categorie: "JavaScript",
      question:
        "Seit wann gibt es in JavaScipt die Lamda-Notation (Arrow-Function)?",
      solution: "Seit ES6 erschienen 2015.",
      wrong: "nnn",
    },
    {
      id: 6,
      categorie: "JavaScript",
      question: "Was wird in JavaScipt als Hoisting bezeichnet?",
      solution:
        "Hoisting ist ein JavaScript-Mechanismus, bei dem Variablen und Funktionsdeklarationen vor der Codeausführung an den Anfang ihres Gültigkeitsbereichs verschoben werden.",
      wrong: "nnn",
    },
    {
      id: 7,
      categorie: "JavaScript",
      question: "Was ist der Unterschied zwischen war, const und let?",
      solution: "",
      wrong: "nnn",
    },
    {
      id: 8,
      categorie: "JavaScript",
      question:
        "Seit wann gibt es in JavaScipt die Lamda-Notation (Arrow-Function)?",
      solution: "Seit ES6 erschienen 2015.",
      wrong: "nnn",
    },
    {
      id: 9,
      categorie: "JavaScript",
      question: "Was wird in JavaScipt als Hoisting bezeichnet?",
      solution:
        "Hoisting ist ein JavaScript-Mechanismus, bei dem Variablen und Funktionsdeklarationen vor der Codeausführung an den Anfang ihres Gültigkeitsbereichs verschoben werden.",
      wrong: "nnn",
    },
    {
      id: 10,
      categorie: "JavaScript",
      question: "Was ist der Unterschied zwischen war, const und let?",
      solution: "",
      wrong: "nnn",
    },
    {
      id: 11,
      categorie: "JavaScript",
      question:
        "Seit wann gibt es in JavaScipt die Lamda-Notation (Arrow-Function)?",
      solution: "Seit ES6 erschienen 2015.",
      wrong: "nnn",
    },
    {
      id: 12,
      categorie: "JavaScript",
      question: "Was wird in JavaScipt als Hoisting bezeichnet?",
      solution:
        "Hoisting ist ein JavaScript-Mechanismus, bei dem Variablen und Funktionsdeklarationen vor der Codeausführung an den Anfang ihres Gültigkeitsbereichs verschoben werden.",
      wrong: "nnn",
    },
  ];
}
