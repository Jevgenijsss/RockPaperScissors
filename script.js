const gameOptions = ["rock", "paper", "scissors"];

function computerPlay() {
    index = Math.floor(Math.random() * 3);
    return  gameOptions[index];
}

function playRound (playerSelection, computerSelection) 
    {
        playerSelection = prompt("Type rock, paper or scissors").toLowerCase();
        computerSelection = computerPlay();
        let results = "Player: " + playerSelection + "." + " " + "Computer: "+ computerSelection + ".";   
        

        if (playerSelection === "rock" && computerSelection === "paper") {
            return results + " " + "You Lose! Paper beats Rock."
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return results + " " + "You Win! Rock beats Scissors."
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return results + " " + "You Win! Paper beats Rock."
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return results + " " + "You Lose! Scissors beats Paper."
        } else   if (playerSelection === "scissors" && computerSelection === "rock") {
            return results + " " + "You Lose! Rock beats Scissors."
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return results + " " + "You Win! Scissors beats Paper."
        }else if (playerSelection === computerSelection) {
            return results + " " + "Game over! Draw."
        };
    };



function game () {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
};

game ();