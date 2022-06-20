const choices = ['Rock', 'Paper', 'Scissors'];
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const chooseFighter = document.querySelector('.choose-fighter');
const explanation = document.querySelector('.first-to-five');
const modal = document.querySelector('#myModal');
const btn = document.querySelector('#myBtn');
const restartBtn = document.querySelector('.restart');
const playAgain = document.querySelector('.play-again');

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)]
}

function youWin() {
    win++
    playerScore.textContent = `Player: ${win}`
    playerChoice.textContent = `${playerSelection}`
    computerChoice.textContent = `${computerSelection}`
    chooseFighter.textContent = `You Win!`
    explanation.textContent = `${playerSelection} beats ${computerSelection}`
}

function youLose() {
    loss++
    computerScore.textContent = `Computer: ${loss}`
    playerChoice.textContent = `${playerSelection}`
    computerChoice.textContent = `${computerSelection}`
    chooseFighter.textContent = `You Lose!`
    explanation.textContent = `${computerSelection} beats ${playerSelection}`
}

function youTie() {
    tie++
    chooseFighter.textContent = `You Tied!`
    playerChoice.textContent = `${playerSelection}`
    computerChoice.textContent = `${computerSelection}`
    explanation.textContent = `${playerSelection} ties with ${computerSelection}`
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            youWin()
        } else if (computerSelection === 'Paper') {
            youLose()
        } else {
            youTie()
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            youWin()
        } else if (computerSelection === 'Scissors') {
            youLose()
        } else {
            youTie()
        }
    } else {
        if (computerSelection === 'Paper') {
            youWin()
        } else if (computerSelection === 'Rock') {
            youLose()
        } else {
            youTie()
        }
    }
}


let playerSelection = "Rock";
let computerSelection = computerPlay();

let total = 0;
let win = 0;
let loss = 0;
let tie = 0;

function isGameOver() {
    return win === 5 || loss === 5
}

function openModal() {
    modal.style.display = 'block';
    if (win === 5) {
        playAgain.textContent = `You win! Would you like to play again?`
    } else if (loss === 5) {
        playAgain.textContent = `You lose! Better luck next time.`
    }
}

function rockFighter(e) {
    if (isGameOver()) {
        return openModal()
    }

    playerSelection = 'Rock'
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

}

rockBtn.addEventListener('click', rockFighter);

function paperFighter(e) {
    if (isGameOver()) {
        return openModal()
    }
    playerSelection = 'Paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

paperBtn.addEventListener('click', paperFighter);

function scissorsFighter(e) {
    if (isGameOver()) {
        return openModal()
    }
    playerSelection = 'Scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

scissorsBtn.addEventListener('click', scissorsFighter);

function restartGame() {
    win = 0;
    loss = 0;
    playerScore.textContent = `Player: ${win}`
    computerScore.textContent = `Computer: ${loss}`
    playerChoice.textContent = `❔`
    computerChoice.textContent = `❔`
    chooseFighter.textContent = `Choose your fighter!`
    explanation.textContent = `First to 5 points wins the game.`
    modal.style.display = 'none';
}

restartBtn.addEventListener('click', restartGame);