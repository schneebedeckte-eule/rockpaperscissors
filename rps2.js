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

function playRound(humanChoice, comChoice) {
  if (
    (humanChoice === "Rock" && comChoice === "Scissors") ||
    (humanChoice === "Paper" && comChoice === "Rock") ||
    (humanChoice === "Scissors" && comChoice === "Paper")
  ) {
    console.log(`You won! ${humanChoice} beats ${comChoice}'`);
    humanScore++;
  } else if (humanChoice === comChoice) {
    console.log(`Oh it's a Draw! You both chose ${humanChoice}'`);
  } else {
    console.log(`Aww you lose! ${comChoice} beats ${humanChoice}.`);
    comScore++;
  }
}

function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    console.log("Round " + i);
    const humanSelection = getHumanChoice();
    const comSelection = getComChoice();

    playRound(humanSelection, comSelection);
  }
}

playGame(5);
let result;
if (humanScore > comScore) {
  result = `You won! You scored ${humanScore} time(s) while the Computer only scored ${comScore} time(s).`;
} else if (humanScore < comScore) {
  result = `Oh no! You lost! You only scored ${humanScore} time(s) while the Computer scored ${comScore} time(s).`;
} else {
  result = `It's a Tie! You both scored ${humanScore} time(s)`;
}

console.log(result);
