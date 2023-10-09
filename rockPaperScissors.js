function determineWinner(player1Choice, player2Choice) {
const validChoices = ['rock', 'paper', 'scissors'];

  if (!validChoices.includes(player1Choice) || !validChoices.includes(player2Choice)) {
     return "Argument Error: Invalid choice. Please enter rock, paper, or scissors.";
  }

  if (player1Choice === player2Choice) {
      return "It's a draw!";
  } else if (
      (player1Choice === 'rock' && player2Choice === 'scissors') ||
      (player1Choice === 'paper' && player2Choice === 'rock') ||
      (player1Choice === 'scissors' && player2Choice === 'paper')
  ) {
      return `First player wins!.`;
  } else {
      return `Second player wins!.`;
  } 
}

const result = determineWinner('blabla', 'paper'); 
console.log(result);
