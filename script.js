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
document.getElementById("submit").addEventListener("click", () => {
  const inputValue = document.getElementById("input");
  const random = Math.floor(Math.random() * words.length);
  const str = words[random];
  const a = str.split("");
  wordLength = a.length;
  console.log(wordLength);
  console.log(str);
  inputValue.value = "__";
});
