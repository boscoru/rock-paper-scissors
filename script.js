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

function playGame() {

//plays game that continues until one player has won 5 rounds    

    let humanScore = 0;
    let computerScore = 0;

    const humanDisplay = document.querySelector("#player");
    const computerDisplay = document.querySelector("#computer");
    const finalResult = document.querySelector(".winner");

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
        humanDisplay.textContent = humanScore;
        computerDisplay.textContent = computerScore;
    }

    function choice(e) {
        let target = e.target;

        switch(target.id) {
            case 'rock':
                playRound('rock', getComputerChoice());
                break;
            case 'paper':
                playRound('paper', getComputerChoice());
                break;
            case 'scissors':
                playRound('scissors', getComputerChoice());
                break;
        }
        if (humanScore === 5 || computerScore === 5) {
            buttons.removeEventListener('click', choice);
            if (humanScore > computerScore) {
                finalResult.textContent = "GAME OVER! HUMAN WINS, " + humanScore + " TO "
                    + computerScore + "!";
            } else { finalResult.textContent = "GAME OVER! COMPUTER WINS, " + computerScore + " TO "
                + humanScore + "!" }
        }   
    }
    let buttons = document.querySelector('#buttons');
    buttons.addEventListener('click', choice);

    //announces result of game
    

}

playGame();