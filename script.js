//declaring global variables
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const movesLeft = document.querySelector(".movesLeft");
const result = document.querySelector(".result");
const chooseMove = document.querySelector(".move");
const restart = document.querySelector("#restart");
const playerScoreCount = document.querySelector(".p-count");
const computerScoreCount = document.querySelector(".c-count");

//the main game logic
const game = () => {
  //setting scores and move to 0
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  // the function to play the game
  const playGame = () => {
    //player options
    const playerOptions = [rock, paper, scissor];
    //CPU options
    const computerOptions = ["rock", "paper", "scissor"];

    //this enables each tiles to be clickable
    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        //randomize computer selections
        const choice = Math.floor(Math.random() * computerOptions.length);
        const computerChoice = computerOptions[choice];

        //function to check winner of a single round
        winner(this.alt, computerChoice);

        //calling gameover function after 10 moves
        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  //conditional function to decide final winner
  const winner = (player, computer) => {
    if (player === computer) {
      result.textContent = `Player: ${player} (TIE!) Computer: ${computer}`;
    } else if (player == "rock" && computer == "scissor") {
      playerScore++;
      playerScoreCount.textContent = playerScore;
      result.textContent = `Player: ${player} (YOU WON!) Computer: ${computer}`;
    } else if (player == "paper" && computer == "rock") {
      playerScore++;
      playerScoreCount.textContent = playerScore;
      result.textContent = `Player: ${player} (YOU WON!) Computer: ${computer}`;
    } else if (player == "scissor" && computer == "paper") {
      playerScore++;
      playerScoreCount.textContent = playerScore;
      result.textContent = `Player: ${player} (YOU WON!) Computer: ${computer}`;
    } else {
      computerScore++;
      computerScoreCount.textContent = computerScore;
      result.textContent = `Player: ${player} (COMPUTER WON!) Computer: ${computer}`;
    }
  };
  //function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {
    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "Game over!";
    movesLeft.style.display = "none";

    if (playerScore > computerScore) {
      result.innerText = "You won the game";
      result.style.color = "green";
    } else if (playerScore < computerScore) {
      result.innerText = "You lost the game";
      result.style.color = "red";
    } else {
      result.innerText = "Game ended in a tie";
    }
  };
  //restart game function
  restart.addEventListener("click", () => {
    window.location.reload();
  });

  //call playGame funtion inside game
  playGame();
};
game();
