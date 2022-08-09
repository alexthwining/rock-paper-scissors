// globals
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let pScore = 0; // keeps tracks of player score
let cScore = 0; // track computer score

// custom divs
const btns = document.querySelector("#btns");
const score = document.createElement("div");
score.setAttribute("id", "score");
const res = document.createElement("div");
res.setAttribute("id", "res");

btns.appendChild(score);
btns.appendChild(res);


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
    if(!document.getElementById("res")){
        btns.appendChild(score);
        btns.appendChild(res);
    }
    if(cond.includes("win")) {
        pScore++;
        res.textContent = "Player wins!";
    }
    if(cond.includes("lose")) {
        cScore++;
        res.textContent = "Computer win!";
    }
    if(cond.includes("Draw")) {
        res.textContent = "There was a draw!";
    }
    
    score.textContent = `Player: ${pScore} - Computer ${cScore}`;

    if(pScore == 5 || cScore == 5) {
        winMessage(btns);
        // disable all 3 buttons
        document.querySelector("#rbtn").disabled = true;
        document.querySelector("#pbtn").disabled = true;
        document.querySelector("#sbtn").disabled = true;
    }
}

// displays the win message and asks if player wants to play again
function winMessage(btns) {
    const winner = document.createElement("div");
    winner.setAttribute("id", "winner");
    btns.appendChild(winner);
    if(pScore == 5) {
        winner.textContent = "Congratulations Player, you won the best of 5!";
    }

    if(cScore == 5) {
        winner.textContent = "Boo hoo, you suck. The computer is just better than you.";
    }

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
        
        btns.removeChild(score);
        btns.removeChild(res);
        btns.removeChild(winner);
        btns.removeChild(ask);
        btns.removeChild(again);
    });
}

// run the button input game
click_game();


