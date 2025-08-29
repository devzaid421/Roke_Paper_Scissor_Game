const userScoreEle = document.getElementById("user-score");
const compScoreEle = document.getElementById("comp-score");
const btnEle = document.querySelectorAll("button");
const resultEle = document.getElementById("result");

let userScore = 0;
let compScore = 0;
btnEle.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log("you clicked on ", btn.id)
    // console.log("Computer choice " , compChoice())
    setTimeout(() => {
      const result = playRound(btn.id, compChoice());
      resultEle.textContent = result;
    }, 1500);
  });
});

function compChoice() {
  const choices = ["roke", "paper", "scissor"];

  const randomCoice = Math.floor(Math.random() * choices.length);
  return choices[randomCoice];
}

function playRound(userSelection, compSelection) {
  if (userSelection === compSelection) {
    resultEle.style.color = "black";
    return "It's a Tie 🤝 !";
  } else if (
    (userSelection === "roke" && compSelection === "scissor") ||
    (userSelection === "paper" && compSelection === "roke") ||
    (userSelection === "scissor" && compSelection === "paper")
  ) {
    userScore++;
    userScoreEle.textContent = userScore;
    resultEle.style.color = "green";
    return `You won 😎 ! ${userSelection} beats ${compSelection}`;
  } else {
    compScore++;
    compScoreEle.textContent = compScore;
    resultEle.style.color = "red";
    return `You lose 😢 ! ${compSelection} beats ${userSelection}`;
  }
}
