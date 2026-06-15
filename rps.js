console.log("hello");

let computerChoice;
let humanChoice;

// pseudocode step 1: create a function that randomly returns either rock paper or scissors
// create a random number between 0 and 1
// if between 0 and .33 then set value as rock
// if between .034 and .66 then set value as paper
// otherwise set value as scissors
// return value

function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum <= 0.33) {
    computerChoice = "Rock";
  } else if (randomNum <= 0.66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

// pseudocode step2: create a function that lets the human player input the options
// prompt the human to input a choice
// make the user input case insensitive
// return error if user types invalid Option

function getHumanChoice() {
  let userInput = prompt("Please choose either Rock, Paper or Scissors.");
  let userInputLowerCase = userInput.toLowerCase();
  if (userInputLowerCase === "rock") {
    humanChoice = "Rock";
  } else if (userInputLowerCase === "paper") {
    humanChoice = "Paper";
  } else if (userInputLowerCase === "scissors") {
    humanChoice = "Scissors";
  } else {
    humanChoice = "You entered an invalid Option.";
  }
  return humanChoice;
}
