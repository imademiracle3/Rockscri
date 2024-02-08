// Function to generate Israel's choice
function israelChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(paulChoice, israelChoice) {
    if (paulChoice === israelChoice) {
        return "It's a tie!";
    } else if (
        (paulChoice === 'rock' && israelChoice === 'scissors') ||
        (paulChoice === 'paper' && israelChoice === 'rock') ||
        (paulChoice === 'scissors' && israelChoice === 'paper')
    ) {
        return "Israel win!";
    } else {
        return "Paul wins!";
    }
}

// Function to play the game
function playGame(paulChoice) {
    const israel = israelChoice();
    console.log(`Paul chose: ${paulChoice}`);
    console.log(`Israel chose: ${israel}`);
    console.log(determineWinner(paulChoice, israel));
}

// Example usage
const paulChoice = 'rock'; // Change this to 'paper' or 'scissors' to test different choices
playGame(paulChoice);
