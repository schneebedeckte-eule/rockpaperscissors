// trying to recreate the whole game without tips or hints, one day after first guided attempt

let humanScore = 0;
let comScore = 0;

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
  let humanInput = prompt("Rock, Paper or Scissors?");
  let humanLower = humanInput.toLowerCase();
  if (humanLower === "rock") {
    return "Rock";
  } else if (humanLower === "paper") {
    return "Paper";
  } else if (humanLower === "scissors") {
    return "Scissors";
  } else {
    return "You entered an invalid Choice.";
  }
}
