//Function to generate random dice roll number
function randomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
//Switch Player1 to Player2
function switchP1toP2() {
  diceNumberCount = 0;
  crntScoreP1.innerText = diceNumberCount;
  player1.classList.remove("active");
  player2.classList.add("active");
  isP2Active = 1;
  isP1Active = 0;
  player2.classList.add("switch-player");
  player1.classList.remove("switch-player");
}
//Switch Player2 to Player1
function switchP2toP1() {
  diceNumberCount = 0;
  crntScoreP2.innerText = diceNumberCount;
  player1.classList.add("active");
  player2.classList.remove("active");
  isP1Active = 1;
  isP2Active = 0;
  player1.classList.add("switch-player");
  player2.classList.remove("switch-player");
}

let btnRollDice = document.querySelector(".roll-dice");
let btnHold = document.querySelector(".hold-btn");
let btnNewGame = document.querySelector(".play-againbtn");
let crntScoreP1 = document.querySelector(".current-score-p1");
let crntScoreP2 = document.querySelector(".current-score-p2");
let scoreCountP1 = document.querySelector(".p1-score-count");
let scoreCountP2 = document.querySelector(".p2-score-count");
let diceImage = document.querySelector(".dice-image");
let player1 = document.querySelector(".player-1");
let player2 = document.querySelector(".player-2");

let isP1Active = Number(player1.classList.contains("active"));
let isP2Active = Number(player2.classList.contains("active"));
let diceNumberCount = 0;
let currentScore = 0;
let p1ScoreCount = 0;
let p2ScoreCount = 0;
let winnerP1 = 0;
// Roll Dice Button Function
btnRollDice.addEventListener("click", function btnRollDiceFunction(e) {
  diceNumber = randomDiceNumber();
  diceImage.innerHTML = `<img src="./dice_picture/dice-${diceNumber}.png" alt="dice pic"  width= "100px" height = "100px">`;
  if (isP1Active == 1) {
    diceNumberCount += diceNumber;
    crntScoreP1.innerText = diceNumberCount;
    diceNumber == 1 ? switchP1toP2() : "";
  } else if (isP2Active == 1) {
    diceNumberCount += diceNumber;
    crntScoreP2.innerText = diceNumberCount;
    diceNumber == 1 ? switchP2toP1() : "";
  }
});
// Hold Button Function
btnHold.addEventListener("click", function btnHoldFunction() {
  if (isP1Active == 1) {
    currentScore = parseInt(crntScoreP1.innerText);
    p1ScoreCount += currentScore;
    scoreCountP1.innerText = p1ScoreCount;
    if (p1ScoreCount >= 100) {
      player1.classList.add("winner");
      winnerP1 = 1;
      diceImage.classList.add("hide");
      btnRollDice.disabled = true;
      btnHold.disabled = true;
    }
    switchP1toP2();
  } else {
    currentScore = parseInt(crntScoreP2.innerText);
    p2ScoreCount += currentScore;
    scoreCountP2.innerText = p2ScoreCount;
    if (p2ScoreCount >= 100) {
      player2.classList.add("winner");
      diceImage.classList.add("hide");
      btnRollDice.disabled = true;
      btnHold.disabled = true;
    }
    switchP2toP1();
  }
});
// New Game Button Function
btnNewGame.addEventListener("click", function () {
  winnerP1 == 1
    ? player1.classList.remove("winner")
    : player2.classList.remove("winner");
  diceImage.classList.remove("hide");
  btnRollDice.disabled = false;
  btnHold.disabled = false;
  switchP2toP1();
  currentScore = 0;
  crntScoreP1.innerText = currentScore;
  p1ScoreCount = 0;
  scoreCountP1.innerText = p1ScoreCount;
  p2ScoreCount = 0;
  scoreCountP2.innerText = p2ScoreCount;
  diceImage.innerHTML = "";
  winnerP1 = 0;
});
