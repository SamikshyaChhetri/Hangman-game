const words = [
  "python",
  "programming",
  "hangman",
  "development",
  "algorithm",
  "database",
  "function",
  "variable",
  "syntax",
  "loop",
  "condition",
  "inheritance",
  "object",
  "class",
  "method",
  "exception",
  "recursion",
  "iteration",
  "module",
  "package",
  "compiler",
  "interpreter",
  "debugging",
  "encryption",
  "network",
  "protocol",
  "interface",
  "parameter",
  "argument",
  "operator",
];
const displayValue = document.getElementById("display");
const random = Math.floor(Math.random() * words.length);
const str = words[random];
const a = str.split("");
wordLength = a.length;
// console.log(wordLength);
console.log(a);
const displayString = "_".repeat(wordLength);

displayValue.innerHTML = displayString;

document.getElementById("submit").addEventListener("click", () => {
  const inputValue = document.getElementById("input").value;

  if (inputValue.length > 1) {
    alert("Cannot input more than 1 value");
  } else {
    a.forEach((letter, index) => {
      if (letter === inputValue) {
        // console.log(index);
        const splitDisplay = displayString.split("");
        splitDisplay[index] = inputValue;
        const joinDisplay = splitDisplay.join("");
        displayValue.innerHTML = joinDisplay;
        console.log(joinDisplay);
      }
    });
  }
});
