// global consts
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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
    rbtn.addEventListener('click', () => {
        let round = playRound(ROCK, computerPlay());
        console.log(round); 
        if(round.includes("win")) {
            pScore++;
        }
        if (round.includes("lose")) {
            cScore++;
        }
    });
    // button logic for button 4
    const pbtn = document.querySelector("#pbtn");
    pbtn.addEventListener('click', () => {
        playRound(PAPER, computerPlay());
    });
    // button logic for button 4
    const sbtn = document.querySelector("#sbtn");
    sbtn.addEventListener('click', () => {
        playRound(SCISSORS, computerPlay());
    });
}

// run the actual game
click_game();
// run the original game (type out selection);
//orig_game();

