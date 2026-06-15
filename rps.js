console.log("hello");

let computerChoice;

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
