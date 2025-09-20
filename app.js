const rock = 0;
const paper = 1;
const scissors = 2;

const choices = {
    [rock]: "rock",
    [paper]: "paper",
    [scissors]: "scissors"
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}