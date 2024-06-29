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
let displayString = "_".repeat(wordLength);

displayValue.innerHTML = displayString;
let count = 0;

document.getElementById("submit").addEventListener("click", () => {
  const inputValue = document.getElementById("input").value;
  if (inputValue.length > 1) {
    alert("Cannot input more than 1 value");
  } else {
    a.forEach((letter, index) => {
      if (a.includes(inputValue)) {
        if (letter === inputValue) {
          // console.log(index);
          const splitDisplay = displayString.split("");
          splitDisplay[index] = inputValue;
          const joinDisplay = splitDisplay.join("");
          displayString = joinDisplay;
          displayValue.innerHTML = joinDisplay;
          console.log(joinDisplay);
        }
      }
    });
    if (!a.includes(inputValue)) {
      count++;
      if (count == 1) {
        document.getElementById("head").classList.remove("hidden");
        inputValue.innerHTML = " ";
      } else if (count == 2) {
        document.getElementById("leftHand").classList.remove("hidden");
      } else if (count == 3) {
        document.getElementById("rightHand").classList.remove("hidden");
      } else if (count == 4) {
        document.getElementById("body").classList.remove("hidden");
      } else if (count == 5) {
        document.getElementById("leftleg").classList.remove("hidden");
      } else if (count == 6) {
        document.getElementById("rightleg").classList.remove("hidden");
        // toast("You loose");

        displayValue.innerHTML = "You lose";
        setTimeout(() => {
          const tryAgain = document.getElementById("tryagain");
          tryAgain.classList.remove("hidden");
          tryAgain.addEventListener("click", () => {
            window.location.reload();
          });
        }, 1000);
      }

      console.log(count);
    }
  }
});
