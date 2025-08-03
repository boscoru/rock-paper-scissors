const lastRound = document.createElement("div");
lastRound.id = "lastround";
const roundTitle = document.createElement("div");
roundTitle.textContent = "LAST ROUND - PLAYER WON";
roundTitle.classList.add("roundtitle");
const playerChoice = document.createElement("div");
const computerChoice = document.createElement("div");
const playerName = document.createElement("div");
playerName.classList.add("choice");
playerName.textContent = "Player chose:";
const computerName = document.createElement("div");
computerName.classList.add("choice");
computerName.textContent = "Computer chose:";
const playerImage = document.createElement("img");
const computerImage = document.createElement("img");
const gameOver = document.createElement("div");
gameOver.classList.add("gameover");
gameOver.textContent = "GAME OVER";
const winner = document.createElement("div");
winner.classList.add("gameover");

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

    function playRound(humanChoice, computerChoice) {

    //executes one round of game

        humanChoice = humanChoice.toLowerCase();  //converts human choice to lowercase
        let winner;
        //determines winner of round
        if (humanChoice === "rock" && computerChoice === "scissors" || 
                humanChoice === "paper" && computerChoice === "rock" || 
                humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            roundTitle.textContent = "LAST ROUND - PLAYER WON";

        } else if (humanChoice === "rock" && computerChoice === "paper" || 
                humanChoice === "paper" && computerChoice === "scissors" || 
                humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            roundTitle.textContent = "LAST ROUND - COMPUTER WON";

        } else {
            winner = "tie";
            roundTitle.textContent = "LAST ROUND - TIE";
        }

        humanDisplay.textContent = humanScore;
        computerDisplay.textContent = computerScore;
        playerImage.src = "images/" + humanChoice + ".png";
        computerImage.src = "images/" + computerChoice + ".png";
    }


    function choice(e) {
        let target = e.target;

        if (humanScore === 0 && computerScore === 0) {
            playerChoice.appendChild(playerName);
            playerChoice.appendChild(playerImage);
            computerChoice.appendChild(computerName);
            computerChoice.appendChild(computerImage);
            document.body.appendChild(roundTitle);
            lastRound.appendChild(playerChoice);
            lastRound.appendChild(computerChoice);
            document.body.appendChild(lastRound);
        }

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
            document.body.appendChild(gameOver);
            let round = document.querySelector(".round")
            let roundTitle = document.querySelector(".roundtitle");
            round.removeChild(roundTitle);
            round.removeChild(buttons);
            round.appendChild(winner);
            if (humanScore > computerScore) winner.textContent = "YOU WIN!";
            else winner.textContent = "YOU LOSE!";
        }   
    }
    let buttons = document.querySelector('#buttons');
    buttons.addEventListener('click', choice);

    //announces result of game"
    

}

playGame();