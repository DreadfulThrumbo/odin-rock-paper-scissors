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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a tie! Rock and rock.");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a tie! Paper and paper.");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat paper.");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a tie! Scissors and scissors.");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else {
        console.log("Whoopsie daisy");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
