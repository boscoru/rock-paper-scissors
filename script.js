function getComputerChoice() {

//generates random choice for computer    

    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {

//prompts human to enter choice and returns it    

    return prompt("What's your choice?");
}

function playGame() {

//plays game that continues until one player has won 5 rounds    

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

    //executes one round of game

        humanChoice = humanChoice.toLowerCase();  //converts human choice to lowercase
        let winner;
        //determines winner of round
        if (humanChoice === "rock" && computerChoice === "scissors" || 
                humanChoice === "paper" && computerChoice === "rock" || 
                humanChoice === "scissors" && computerChoice === "paper") {
            winner = "human";
        } else if (humanChoice === "rock" && computerChoice === "paper" || 
                humanChoice === "paper" && computerChoice === "scissors" || 
                humanChoice === "scissors" && computerChoice === "rock") {
            winner = "computer";
        } else {
            winner = "tie";
        }
        //announces winner of round
        if (winner === "human") {
            humanScore += 1;
            console.log("You win! " + humanChoice.charAt(0).toUpperCase()
                + humanChoice.slice(1) + " beats " + computerChoice + "!");
        } else if (winner === "computer") {
            computerScore += 1;
            console.log("Computer wins! "
                + computerChoice.charAt(0).toUpperCase()
                + computerChoice.slice(1) + " beats " + humanChoice + "!");
        } else {
            console.log("This round ended in a tie!")
        }
    }

    //loops until there is a winner
    while (humanScore < 5 && computerScore < 5){
        playRound(getHumanChoice(), getComputerChoice()); //calls function to play one round
        if (humanScore > computerScore) {  //announces current score
            console.log("Human is winning, " + humanScore + " to "
                + computerScore + "!")
        } else if (computerScore > humanScore) {
            console.log("Computer is winning, " + computerScore + " to "
                + humanScore + "!")
        } else { console.log("Score is tied!")}
    }

    //announces result of game
    if (humanScore > computerScore) {
        console.log("GAME OVER! HUMAN WINS, " + humanScore + " TO "
            + computerScore + "!");
    } else { console.log("GAME OVER! COMPUTER WINS, " + computerScore + " TO "
        + humanScore + "!") }

}

playGame();