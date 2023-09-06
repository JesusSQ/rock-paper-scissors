function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let result;

    switch (randomNumber) {
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper"
            break;
        case 2:
            result = "Scissors";
    }

    return result;
}

console.log(getComputerChoice());