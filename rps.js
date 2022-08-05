// globals
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let pScore = 0; // keeps tracks of player score
let cScore = 0; // track computer score

function computerPlay() {
    let rps = Math.floor(Math.random() * 3);
    switch (rps) {
        case 0:
            return("rock");
        case 1:
            return("paper");
        case 2:
            return("scissors");
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if(computerSelection == "rock") {
                return("Draw! You both chose Rock");
            }
            else if(computerSelection == "paper") {
                return("You lose! Rock loses to Paper");
            }
            else {
                return("You win! Rock beats Scissors");
            }
        case "paper":
            if(computerSelection == "rock") {
                return("You win! Paper beats Rock");
            }
            else if(computerSelection == "paper") {
                return("Draw! You both chose Paper");
            }
            else {
                return("You Lose! Paper loses to Scissors");
            }
        case "scissors":
            if(computerSelection == "rock") {
                return("You lose! Scissors loses to Rock");
            }
            else if(computerSelection == "paper") {
                return("You win! Scissors beats Paper");
            }
            else {
                return("Draw! You both chose Scissors");
            } 
    }    
}

// lets the player play by typing out the selection, will continually
// prompt the player until they enter a valid input
function orig_game() {
    let playerSelection = prompt("Pick rock, paper, or scissors!");

    // checking for correct player input. prompt again if not valid
    while(true) {
        // make playerSelection all lowercase to allow for easier validity
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            break;
        }
        else {
            prompt("Enter a valid string: rock, paper, or scissors.");
        }
    }

    let pScore = 0, cScore = 0;
    for(let i=0; i<5; i++) {
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        console.log(round); 
        if(round.includes("win")) {
            pScore++;
        }
        if (round.includes("lose")) {
            cScore++;
        }
    }

    if(pScore > cScore) {
        let final = `You won the best of 5. ${pScore}-${cScore}!`;
        console.log(final);
        alert(final);
    }
    else if(pScore == cScore) {
        let final = `You somehow tied! ${pScore}-${cScore}`;
        console.log(final);
        alert(final);
    }
    else {
        let final = `You lost the best of 5. ${pScore}-${cScore}!`;
        console.log(final);
        alert(final);
    }

}

// player plays by clicking buttons as their selection
function click_game() {
    // button logic for rock button
    const rbtn = document.querySelector("#rbtn");
    rbtn.addEventListener('click', () =>  {
        let round = playRound(ROCK, computerPlay());
        console.log(round); 
        displayScore(round);
    });
    // button logic for button 4
    const pbtn = document.querySelector("#pbtn");
    pbtn.addEventListener('click', () => {
        let round = playRound(PAPER, computerPlay());
        console.log(round); 
        displayScore(round);
    });
    // button logic for button 4
    const sbtn = document.querySelector("#sbtn");
    sbtn.addEventListener('click', () => {
        let round = playRound(SCISSORS, computerPlay());
        console.log(round);
        displayScore(round);
    });
}

// adds divs to display the score
function displayScore(cond) {
    const btns = document.querySelector("#btns");
    const score = document.createElement("div");
    score.setAttribute("id", "score");

    if(cond.includes("win")) {
        pScore++;
        const pwin = document.createElement("div");
        pwin.setAttribute("id", "pwin");
        pwin.textContent = "Player wins!";
        btns.appendChild(pwin);
    }
    if(cond.includes("lose")) {
        cScore++;
        const cwin = document.createElement("div");
        cwin.setAttribute("id", "cwin");
        cwin.textContent = "Computer win!";
        btns.appendChild(cwin);
    }
    if(cond.includes("Draw")) {
        const draw = document.createElement("div");
        draw.setAttribute("id", "draw");
        draw.textContent = "There was a draw!";
        btns.appendChild(draw);
    }
    
    score.textContent = `Player: ${pScore} - Computer ${cScore}`;
    btns.appendChild(score);

    if(pScore == 5 || cScore == 5) {
        winMessage(btns);
        // disable the 3 buttons so player can't play anymore
        // const buttons = document.querySelectorAll('button');
        // buttons.forEach((button) => {
        //     button.disabled = true;
        // });
        document.querySelector("#rbtn").disabled = true;
        document.querySelector("#pbtn").disabled = true;
        document.querySelector("#sbtn").disabled = true;
    }
}

// displays the win message and asks if player wants to play again
function winMessage(btns) {
    const winner = document.createElement("div");
    winner.setAttribute("id", "winner");
    if(pScore == 5) {
        winner.textContent = "Congratulations Player, you won the best of 5!";
    }

    if(cScore == 5) {
        winner.textContent = "Boo hoo, you suck. The computer is just better than you.";
    }
    btns.appendChild(winner);

    const ask = document.createElement("div");
    ask.setAttribute("id", "ask");
    ask.textContent = "Would you like to play again? (close tab to exit the game)"
    btns.appendChild(ask);
    
    const again = document.createElement("button");
    again.setAttribute("id", "again");
    again.innerText = "Yes I'd like to play again!"
    btns.appendChild(again);

    reset(btns);
}

// resets the game upon again button clicked
function reset() {
    const again = document.querySelector("#again");
    again.addEventListener('click', () =>  {
        document.querySelector("#rbtn").disabled = false;
        document.querySelector("#pbtn").disabled = false;
        document.querySelector("#sbtn").disabled = false;
        pScore = 0;
        cScore = 0;
        
        while(!null) {
            btns.removeChild(pwin);
            btns.removeChild(cwin);
            btns.removeChild(score);
            btns.removeChild(winner);
            btns.removeChild(ask);
            btns.removeChild(again);
        }
    });
}

// run the button input game
click_game();

// run the original game (type out selection);
//orig_game();

