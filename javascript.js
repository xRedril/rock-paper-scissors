const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            console.log(`You Win! Player one picked ${playerSelection} and Player two picked ${computerSelection}.`)
            playerWins = 0;
        } else if (computerSelection === 'Paper') {
            console.log(`You Lost! Player one picked ${playerSelection} and Player two picked ${computerSelection}.`)
            playerWins = 1;
        } else {
            console.log(`You Tied! Player one picked ${playerSelection} and Player two picked ${computerSelection}.`)
            playerWins = 2;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            console.log(`You Win! Player one picked ${playerSelection} and Player two picked ${computerSelection}.`)
            playerWins = 0;
        } else if (computerSelection === 'Scissors') {
            console.log(`You Lost! Player one picked ${playerSelection} and Player two picked ${computerSelection}.`)
            playerWins = 1;
        } else {
            console.log(`You Tied! Player one picked ${playerSelection} and Player two picked ${computerSelection}.`)
            playerWins = 2;
        }
    } else {
        if (computerSelection === 'Paper') {
            console.log(`You Win! Player one picked ${playerSelection} and Player two picked ${computerSelection}.`)
            playerWins = 0;
        } else if (computerSelection === 'Rock') {
            console.log(`You Lost! Player one picked ${playerSelection} and Player two picked ${computerSelection}.`)
            playerWins = 1;
        } else {
            console.log(`You Tied! Player one picked ${playerSelection} and Player two picked ${computerSelection}.`)
            playerWins = 2;
        }
    }
}

let playerSelection = "Rock";
let computerSelection = computerPlay();
let playerWins = 0;

console.log(playRound(playerSelection, computerSelection));

let total = 0;
let wins = 0;
let loss = 0;
let tie = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose Rock, Paper, or Scissors: ", "");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playerWins === 0) {
            total = total + 1;
            wins += 1
        } else if (playerWins === 1) {
            total = total + 1;
            loss += 1;
        } else {
            total = total + 1;
            tie += 1;
        }

        console.log(`Total: ${total}, Wins: ${wins}, Losses: ${loss}, Ties: ${tie}`)
    }
}