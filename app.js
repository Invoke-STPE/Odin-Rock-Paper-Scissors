const win = 1;
const lose = -1;
const draw = 0;

const rockNumericValue = 0;
const paperNumericValue = 1;
const scissorsNumericValue = 2;

const rockTextValue = "rock";
const paperTextValue = "paper";
const scissorsTextValue = "scissors";

let playerScore = 0;
let computerScore = 0;

const choicesNumericValues = {
    [rockTextValue]: rockNumericValue,
    [paperTextValue]: paperNumericValue,
    [scissorsTextValue]: scissorsNumericValue
}

const choicesTextValues = {
    [rockNumericValue]: rockTextValue,
    [paperNumericValue]: paperTextValue,
    [scissorsNumericValue]: scissorsTextValue
}

const gameRules = {
    [rockTextValue]: {
        [rockTextValue]: draw,
        [paperTextValue]: lose,
        [scissorsTextValue]: win
    },
    [paperTextValue]: {
        [rockTextValue]: win,
        [paperTextValue]: draw,
        [scissorsTextValue]: lose

    },
    [scissorsTextValue]: {
        [rockTextValue]: lose,
        [paperTextValue]: win,
        [scissorsTextValue]: draw
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
            console.log(`Player wins ${playerChoice} beats ${computerChoice}`);
            break;
        default:
            console.log('draw');
        }
}

function playGame() {
    for (let rounds = 0; rounds < 5; rounds++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }

    let winner = "draw";
    if (playerScore > computerScore)
        winner = "player";
    if (computerScore > playerScore)
        winner = "computer";

    console.log(`winner is: ${winner}`);
}