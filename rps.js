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
    return "Rock";
  } else if (randomNum <= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// pseudocode step2: create a function that lets the human player input the options
// prompt the human to input a choice
// make the user input case insensitive
// return error if user types invalid Option

function getHumanChoice() {
  let userInput = prompt("Please choose either Rock, Paper or Scissors.");
  let InputLower = userInput.toLowerCase();
  if (InputLower === "rock") {
    return "Rock";
  } else if (InputLower === "paper") {
    return "Paper";
  } else if (InputLower === "scissors") {
    return "Scissors";
  } else {
    return "You entered an invalid Option.";
  }
}

// pseudocode step 3: create a function so the game can be played
// create a function that takes the results of the other two functions and compares them
// write the logic on who wins and who loses
// write a message via console log for either win or loss
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
    console.log(`It's a Draw! Both Players chose ${humanChoice}.`);
  } else {
    console.log(`You lose! ${computerChoice} beats your ${humanChoice}!`);
    computerScore++;
  }
}

// pseudocode step 4: create a loop so you can play multiple rounds in a row
// create a loop and let it loop until 5 rounds have been played
// log every time it loops with a message
// call the function playRound with every loop
// track and compare the final result and give out win or lose message

function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    console.log("Round " + i);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame(5);
let result;
if (humanScore > computerScore) {
  result = "You are the Winner!";
} else if (humanScore < computerScore) {
  result = "Aww you lost to the Computer!";
} else {
  result = "It's a Tie!";
}

console.log(
  `You won ${humanScore} time(s) and the Computer won ${computerScore} time(s). ${result}`,
);
