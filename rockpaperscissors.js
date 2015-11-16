////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
if ((playerMove === "rock" && comptuerMove === "scissors") || (playerMove === "scissors" && computerMove === "paper")||
(playerMove === "paper" && computerMove === "rock"))  {
	winner = "player wins";
} else if ((computerMove === "rock" && playerMove === "scissors") || (computerMove === "scissors" && playerMove === "paper") ||
(computerMove === "paper" && playerMove === "rock")) {
	winner = "computer wins";
} else if (( computerMove === "rock && playerMove === "rock") || (computerMove === "scissors" && playerMove === "scissors") || 
( computerMove === "paper" && playerMove === "paper")) {
	winner = "tie!";
}	else {
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
while (playerWins < 5 && computerWins < 5) {
	var playerMove = getPlayerMove();
	var computerMove = getComputerMove();
	if (winner === 'player wins') {
	playerWins +=1;
} else if (winner === 'computer wins') {
	computerWins +=1;
}
	console.log("player chose "+ playerMove + "while the computer chose " + computerMove + ".");
	console.log("round won by " + winner + ".");
	console.log("player won " playerWins + " " + "and the computer won " + computerWins + ".");
}
    return [playerWins, computerWins];
}

