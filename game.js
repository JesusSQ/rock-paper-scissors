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

function askForSelection() {
    let answer = prompt("Type your choice", "");
    let answerFormal = answer.toLowerCase();
    if (answerFormal === "rock" ||
        answerFormal === "paper" ||
        answerFormal === "scissors") {
        return answerFormal;
    } else {
        console.log("Invalid syntax");
        return null;
    }
}

function roundOfGame() {
    let computerChoice = getComputerChoice();
    let playerChoice = askForSelection();

    if (playerChoice !== null) {
        if (playerChoice === computerChoice) {
            console.log("Thats a tie");
            return null;
        } else if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You Win! Rock beats Scissors");
                return true;
            } else {
                console.log("You Lose! Paper beats Rock");
                return false;
            }
        } else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You Win! Paper beats Rock");
                return true;
            } else {
                console.log("You Lose! Scissors beats Paper");
                return false;
            }
        } else {
            if (computerChoice === "paper") {
                console.log("You Win! Scissors beats Paper");
                return true;
            } else {
                console.log("You Lose! Rock beats Scissors");
                return false;
            }
        }
    } else {
        roundOfGame();
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = roundOfGame();
        if (result === true) {
            playerScore++;
        } else if (result === false) {
            computerScore++;
        }
    }
    if (playerScore === computerScore) {
        return "That's an absolutely tie!";
    } else if (playerScore > computerScore) {
        return "You have won the game. Congratulations!";
    } else {
        return "You have lost the game. Good luck next time!";
    }
}

console.log(game());