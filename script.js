let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
let result = document.querySelector(".result");
let title = document.querySelector(".title");
let playerSelectContainer = document.querySelector(".playerSelectContainer");

function getComputerChoice() {
  let number = Math.floor(Math.random() * 100);
  computerChoice = number < 33 ? "Rock" : number < 66 ? "Paper" : "Scissors";
  return computerChoice;
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore > 4) {
      title.innerText =
        "PLAYER WON GAME OVER NO MORE BUTTONS FOR YOU REFRESH THE PAGE TO DOUBLE OR NOTHING YOUR PRIDE";
      playerSelectContainer.style.display = "none";
    } else if (computerScore > 4) {
      title.innerText =
        "COMPUTER WON GAME OVER BEEP BOOP NO MORE BUTTONS FOR YOU DON'T BOTHER REFRESHING THE PAGE TO PLAY AGAIN BUD";
      playerSelectContainer.style.display = "none";
    } else {
      playerChoice = button.innerHTML;
      getComputerChoice();
      playGame(computerChoice, playerChoice);
    }
  });
});

function playGame(computerChoice, playerChoice) {
  console.log(`computer chose: ${computerChoice}`);
  console.log(`player chose:${playerChoice}`);

  switch (playerChoice) {
    case "Rock":
      switch (computerChoice) {
        case "Rock":
          result.innerText = `Tie! \n Player chose: ${playerChoice} \n Computer chose: ${computerChoice} \n Scores: Player Score:${playerScore} - Computer Score: ${computerScore}`;
          break;

        case "Paper":
          computerScore++;
          result.innerText = `Computer Wins! \n Player chose: ${playerChoice} \n Computer chose: ${computerChoice} \n Scores: Player Score:${playerScore} - Computer Score: ${computerScore}`;
          break;

        case "Scissors":
          playerScore++;
          result.innerText = `Player Wins! \n Player chose: ${playerChoice} \n Computer chose: ${computerChoice} \n Scores: Player Score:${playerScore} - Computer Score: ${computerScore}`;
          break;
      }
      break;

    case "Paper":
      switch (computerChoice) {
        case "Rock":
          playerScore++;
          result.innerText = `Player Wins! \n Player chose: ${playerChoice} \n Computer chose: ${computerChoice} \n Scores: Player Score:${playerScore} - Computer Score: ${computerScore}`;
          break;

        case "Paper":
          result.innerText = `Tie! \n Player chose: ${playerChoice} \n Computer chose: ${computerChoice} \n Scores: Player Score:${playerScore} - Computer Score: ${computerScore}`;
          break;

        case "Scissors":
          computerScore++;
          result.innerText = `Computer Wins! \n Player chose: ${playerChoice} \n Computer chose: ${computerChoice} \n Scores: Player Score:${playerScore} - Computer Score: ${computerScore}`;
          break;
      }
      break;

    case "Scissors":
      switch (computerChoice) {
        case "Rock":
          computerScore++;
          result.innerText = `Computer Wins! \n Player chose: ${playerChoice} \n Computer chose: ${computerChoice} \n Scores: Player Score:${playerScore} - Computer Score: ${computerScore}`;
          break;

        case "Paper":
          playerScore++;
          result.innerText = `Player Wins! \n Player chose: ${playerChoice} \n Computer chose: ${computerChoice} \n Scores: Player Score:${playerScore} - Computer Score: ${computerScore}`;
          break;

        case "Scissors":
          result.innerText = `Tie! \n Player chose: ${playerChoice} \n Computer chose: ${computerChoice} \n Scores: Player Score:${playerScore} - Computer Score: ${computerScore}`;
          break;
      }
      break;
  }
}
