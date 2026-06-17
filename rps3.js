// third attempt yet again a day later, this time without mistakes or double-checking

humanScore = 0;
comScore = 0;

function getComChoice() {
  let randomNum = Math.random();
  if (randomNum <= 0.33) {
    return "Rock";
  } else if (randomNum <= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper or Scissors?");
  let userLower = userInput.toLowerCase();
  if (userLower === "rock") {
    return "Rock";
  } else if ((userLower = "paper")) {
    return "Paper";
  } else if (userLower === "scissors") {
    return "Scissors";
  } else {
    return "Invalid Input.";
  }
}
