console.log("hello");

let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

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

// pseudocode step 3: create a function so the game can be played
// create a function that takes the results of the other two functions
// write the logic on who wins and who loses depending on the chosen inputs
// write a message via console log for either win or los
// increase either human or computer score depending on who won

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log(`It's a Draw! Both Players chose the same Option.`);
  } else {
    console.log(`You lose! ${computerChoice} beats your ${humanChoice}!`);
    computerScore++;
  }
}

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();
