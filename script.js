const gameOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    index = Math.floor(Math.random() * 3);
    return  gameOptions[index];
}

function playRound (playerSelection, computerSelection) {
        playerSelection = prompt("Type rock, paper or scissors").toLowerCase();
        computerSelection = computerPlay();

        
        
        while (playerSelection === "") {
            console.log("Empty prompt. Please select again.");
            alert("Empty prompt. Please select again.");
            playerSelection = prompt("Type rock, paper or scissors");
        }

        let results = "Player: " + playerSelection + "." + " " + "Computer: "+ computerSelection + ".";   
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
            return results + " " + "You Lose! Paper beats Rock."
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1;
            return results + " " + "You Win! Rock beats Scissors."
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            return results + " " + "You Win! Paper beats Rock."
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore += 1;
            return results + " " + "You Lose! Scissors beats Paper."
        } else   if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1;
            return results + " " + "You Lose! Rock beats Scissors."
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
            return results + " " + "You Win! Scissors beats Paper."
        }else if (playerSelection === computerSelection) {
            return results + " " + "Game over! Draw."
        } else {
            console.log("Not correct. Try again");
            alert("Not correct. Try again");
            playerSelection = playRound();
            return playerSelection;
        };
        
    };



function game () {
    for (let i = 0; i < 5; i++) {
     
        let round = i + 1;
        console.log("Round: " + round);
        console.log(playRound());
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        
    }

};

game ();
