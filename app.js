const rock = 0;
const paper = 1;
const scissors = 2;

const choicesNumericValues = {
    "rock": rock,
    "paper": paper,
    "scissors": scissors
}

const choicesTextValues = {
    [rock]: "rock",
    [paper]: "paper",
    [scissors]: "scissors"
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    return choicesTextValues[randomNumber];
}

function getPlayerChoice() {
    const playerInput = prompt();
    const playerInputConvertedToNumericValue = choicesNumericValues[playerInput];

    return choicesTextValues[playerInputConvertedToNumericValue];
}