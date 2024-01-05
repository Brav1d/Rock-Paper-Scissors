let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = '';
    if (randomNumber == 0) {
        computerSelection = 'ROCK';
    } else if (randomNumber == 1) {
        computerSelection = 'PAPER';
    } else if (randomNumber == 2) {
        computerSelection = 'SCISSORS';
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
        console.log("That's a tie, try again");
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++;
        roundWinner = 'player';
        console.log("You win :D");
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++;
        roundWinner = 'computer';
        console.log("The computer wins this time, womp womp");
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toUpperCase();
        const computerSelection = getComputerChoice();
    
        playRound(playerSelection, computerSelection);
        console.log("Round Winner: " + roundWinner);
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
    }
}

game();

if (computerScore == 5) {
    console.log('you lose! ;-;')
}
if (playerScore == 5) {
    console.log('you win!!! :D')
}