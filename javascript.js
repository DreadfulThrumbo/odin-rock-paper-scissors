let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomInt = getRandomInt(3);
    let choice;

    switch (randomInt) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            choice = "face punch";
            break;
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");

    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice;
    } else {
        choice = "rock";
        return choice;
    }
}
