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
        } else if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You Win! Rock beats Scissors");
            } else {
                console.log("You Lose! Paper beats Rock");
            }
        } else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You Win! Paper beats Rock");
            } else {
                console.log("You Lose! Scissors beats Paper");
            }
        } else {
            if (computerChoice === "paper") {
                console.log("You Win! Scissors beats Paper");
            } else {
                console.log("You Lose! Rock beats Scissors");
            }
        }
    } else {
        roundOfGame();
    }
}

roundOfGame();