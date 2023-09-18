let playerScore = 0;
let computerScore = 0;

function reset() {
    playerScore = 0;
    computerScore = 0;
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let result;

    switch (randomNumber) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper"
            break;
        case 2:
            result = "scissors";
    }

    return result;
}

function setPlayerChoice(e) {
    btnValue = this.value;
    roundOfGame();
}

function roundOfGame() {
    let computerChoice = getComputerChoice();
    let playerChoice = btnValue;
    const result = document.querySelector(".result");

    if (playerChoice === computerChoice) {
        result.textContent = "That's a tie!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            result.textContent = "You Win! Rock beats Scissors";
            points(0);
        } else {
            result.textContent = "You Lose! Paper beats Rock";
            points(1);
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            result.textContent = "You Win! Paper beats Rock";
            points(0);
        } else {
            result.textContent = "You Lose! Scissors beats Paper";
            points(1);
        }
    } else {
        if (computerChoice === "paper") {
            result.textContent = "You Win! Scissors beats Paper";
            points(0);
        } else {
            result.textContent = "You Lose! Rock beats Scissors";
            points(1);
        }
    }
}

function points(num) {
    if (num === 0) {
        playerScore++;
    } else {
        computerScore++;
    }

    checkPoints();
}

function checkPoints() {
    const container = document.querySelector(".container");
    if (playerScore === 5) {
        const finalText = document.createElement('div');
        finalText.classList.add(".result");
        finalText.textContent = `PLAYER WINS \n 
        PLAYER: "${playerScore}" \n 
        COMPUTER: "${computerScore}"`;
        container.appendChild(finalText);
        reset();
    } else if (computerScore === 5) {
        const finalText = document.createElement('div');
        finalText.classList.add(".result");
        finalText.textContent = `COMPUTER WINS \n 
        PLAYER: "${playerScore}" \n 
        COMPUTER: "${computerScore}"`;
        container.appendChild(finalText);
        reset();
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', setPlayerChoice);
paper.addEventListener('click', setPlayerChoice);
scissors.addEventListener('click', setPlayerChoice);