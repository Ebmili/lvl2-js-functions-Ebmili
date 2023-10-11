const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function rockPaperScissors(player1Choice, player2Choice) {
const validChoices = [ROCK, PAPER, SCISSORS];

  if (!validChoices.includes(player1Choice) || !validChoices.includes(player2Choice)) {
     return "Argument Error: Invalid choice. Please enter rock, paper, or scissors.";
  }

  if (player1Choice === player2Choice) {
      return "It's a draw!";
  } else if (
    (player1Choice === ROCK && player2Choice === SCISSORS) ||
    (player1Choice === PAPER && player2Choice === ROCK) ||
      (player1Choice === SCISSORS && player2Choice === PAPER)
  ) {
      return `First player wins!.`;
  } else {
      return `Second player wins!.`;
  } 
}

const result = rockPaperScissors('rock', 'paper'); 
console.log(result);
