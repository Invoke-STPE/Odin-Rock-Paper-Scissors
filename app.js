const win = 1;
const lose = -1;
const draw = 0;

const rockNumericValue = 0;
const paperNumericValue = 1;
const scissorsNumericValue = 2;

let playerScore = 0;
let computerScore = 0;

const choicesNumericValues = {
    "rock": rockNumericValue,
    "paper": paperNumericValue,
    "scissors": scissorsNumericValue
}

const choicesTextValues = {
    [rockNumericValue]: "rock",
    [paperNumericValue]: "paper",
    [scissorsNumericValue]: "scissors"
}

const gameRules = {
    "rock": {
        "rock": draw,
        "paper": lose,
        "scissors": win
    },
    "paper": {
        "paper": lose,

    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    return choicesTextValues[randomNumber];
}

function getPlayerChoice() {
    const playerInput = prompt();
    const playerInputConvertedToNumericValue = choicesNumericValues[playerInput.toLocaleLowerCase()];

    return choicesTextValues[playerInputConvertedToNumericValue];
}

function playRound(playerChoice, computerChoice) {
    const gameResult = gameRules[playerChoice][computerChoice];

    switch(gameResult) {
        case lose:
            computerScore++;
            console.log(`Computer wins ${computerChoice} beats ${playerChoice}`);
            break;
        case win:
            playerScore++;
            console.log(`PLayer wins ${playerChoice} beats ${computerChoice}`);
            break;
        default:
            console.log('draw');
        }
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);