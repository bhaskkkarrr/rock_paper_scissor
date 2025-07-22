let choices = document.querySelectorAll(".box");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let win = document.querySelector("#win-score");
let loss = document.querySelector("#loss-score");
let draw = document.querySelector("#draw-score");
let total = document.querySelector("#total-score");
let msg = document.querySelector(".msg");

let gameOver = false;
let winScore = 0;
let lossScore = 0;
let drawScore = 0;
let totalScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    let compChoice = genCompChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${compChoice}`);
    playGame(userChoice, compChoice);
  });
});
const genCompChoice = () => {
  let possPicks = ["rock", "paper", "scissor"];
  return possPicks[Math.floor(Math.random() * possPicks.length)];
};

const playGame = (userChoice, compChoice) => {
  if (gameOver) {
    return;
  }
  if (userChoice === compChoice) {
    drawScore++;
    totalScore++;
    draw.innerText = drawScore;
    total.innerText = totalScore;
  } else {
    if (
      (userChoice === "rock" && compChoice === "scissor") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissor" && compChoice === "paper")
    ) {
      winScore++;
      totalScore++;
      win.innerText = winScore;
      total.innerText = totalScore;
    } else {
      lossScore++;
      totalScore++;
      total.innerText = totalScore;
      loss.innerText = lossScore;
    }
  }
  if (totalScore === 5) {
    gameOver = true;
    checkWinner(winScore, drawScore, lossScore);
  }
};
const checkWinner = (winScore, drawScore, lossScore) => {
  if (winScore > drawScore && winScore > lossScore) {
    msg.innerText = `Congratulations! You won`;
    msg.classList.remove("hide");
  } else if (drawScore > winScore && drawScore > lossScore) {
    msg.innerText = `Match Drawn! Play Again`;
    msg.classList.remove("hide");
  } else {
    msg.innerText = `You Lost! Play Again`;
    msg.classList.remove("hide");
  }
};
const resetGame = () => {
  win.innerText = 0;
  loss.innerText = 0;
  draw.innerText = 0;
  total.innerText = 0;
  winScore =  lossScore = drawScore = totalScore = 0;
  gameOver = false;
};
msg.addEventListener("click", () => {
  msg.classList.add("hide");
  resetGame();
});
