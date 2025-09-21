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

function playRound(playerChoice, computerChoice) {
    const gameResult = gameRules[playerChoice][computerChoice];

    switch(gameResult) {
        case lose:
            computerScore++;
            const computerScoreArea = document.getElementById('computerScore');
            computerScoreArea.innerText = computerScore;
            printOutput(`Computer wins ${computerChoice} beats ${playerChoice}`);
            break;
        case win:
            playerScore++;
            const playerScoreArea = document.getElementById('playerScore');
            playerScoreArea.innerText = playerScore
            printOutput(`Player wins ${playerChoice} beats ${computerChoice}`);
            break;
        default:
            printOutput('draw');
        }
}

function printOutput(message) {
    const outputArea = document.querySelector('.output');

    outputArea.innerText = message;
}

function playGame(playerInput) {
    const playerChoice = choicesTextValues[playerInput];
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);

    if (playerScore !== 5 && computerScore !== 5)
        return;

    winner = playerScore === 5 ? 'player' : 'computer';

    printOutput(`Winner is: ${winner}`);
}
