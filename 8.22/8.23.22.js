// Instructions
// Output
// Past Solutions
// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

// Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

function rpsls(pl1, pl2) {
    const choices = {
        scissors: {
            lose: ['spock', 'rock'],
            win: ['paper', 'lizard']
        },
        paper: {
            lose: ['scissors', 'lizard'],
            win: ['rock', 'spock']
        },
        rock: {
            lose: ['paper', 'spock'],
            win: ['lizard', 'scissors']
        },
        spock: {
            lose: ['lizard', 'paper'],
            win: ['scissors', 'rock']
        },
        lizard: {
            lose: ['scissors', 'rock'],
            win: ['spock', 'paper']
        }
    }
    if (pl1 === pl2) {
        return "Draw!"
    } else if (choices[pl1].win.includes(pl2)) {
        return "Player 1 Won!"
    } else if (choices[pl1].lose.includes(pl2)) {
        return "Player 2 Won!"
    }
}


