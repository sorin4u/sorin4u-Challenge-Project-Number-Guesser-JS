let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate a random target number between 0 and 9
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Function to compare the guesses of the human and computer to the target number
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    let humanDifference = Math.abs(targetNumber - humanGuess);
    let computerDifference = Math.abs(targetNumber - computerGuess);

    // Return true if the human guess is closer or equal to the computer guess, otherwise return false
    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}

// Function to update the score of the winner
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

// Function to advance to the next round
function advanceRound() {
    currentRoundNumber++;
}

// Function to get the absolute distance between two numbers
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
};