/*
    PLAN
    1. Initiate game
        - On page load run the function to start the game
        - Store game number as variable roundCount
        - Set roundCount = 1
        - Create variables for computer and user
    2. Generate computer choice
        - Use math.random to generate a number
        - Multiply number by 100 and round off to the nearest integer
        - Use the number to assign rock, paper or scissors
            * IF > 0 and <= 33 THEN rock
            * IF > 33 and <= 66, THEN paper
            * ELSE scissors
            * Store as variable 'computerChoice'
    3. Get user's choice
        - Open prompt to allow user input
        - Standardise the input by making all lowercase
        - Store as 'humanChoice'
    4. Compare the choices to determine the winner
        - Declare 2 seprate variables 'humanScore' and 'computerScore'
            * Both variables should = 0 to start
        - Compare computerChoice and humanChoice
            * IF computer = rock & human = scissors OR computer = scissors & human = paper OR computer = paper & human = rock THEN computerScore +1
            * IF computer = scissors & human = rock OR computer = rock & human = paper OR computer = paper & human = scissors THEN humanScore +1
            * ELSE both computerScore and humanScore score +1
    5. Show the score
        - console.log() score and round
        - Check IF roundCount < 5, start another round AND roundCount +1
        - ELSE declare the winner (computer or user)
*/

function getComputerChoice() {
    //Generate a random number between 0-100
    let computerChoice = Math.floor(Math.random() * 100);

    //Assign rock, paper or scissors based on randomly generated integer value
    if (computerChoice > 0 && computerChoice <= 33) {
        computerChoice = "rock";
    }
    else if (computerChoice > 33 && computerChoice <= 66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    //Save the value into the variable for later use
    return computerChoice;
}

function getHumanChoice() {
    //Get the user's choice
    let humanChoice = prompt("Rock, paper or scissors?").toLowerCase();

    //Save the value into the variable for later use
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Use a loop to repeat the rounds 5 times
    for (let roundCount = 1; roundCount <= 5; roundCount++) {
        
        // Get new choices every single round
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        // Play the round
        playRound(computerSelection, humanSelection);
    }

    // Final score check after the loop finishes
    if (computerScore > humanScore) {
        console.log("Computer wins! Game over.");
    }
    else if (humanScore > computerScore) {
        console.log("User wins! Game over.");
    }
    else {
        console.log("It's a draw! Game over.");
    }    
    
    function playRound(computerChoice, humanChoice) {
        //Display the computer and user choices
        console.log("Computer chose " + computerChoice);
        console.log("User chose " + humanChoice);

        //Determine the winner
        if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "rock")) {
            console.log("Computer wins!");
            computerScore++;
        }
        else if ((computerChoice === "scissors" && humanChoice === "rock") || (computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors")) {
            console.log("User wins!");
            humanScore++;
        }
        else { // in the event of computer and human choices are the same
            console.log("It's a draw!");
        }
        
        //Display the score
        console.log("Computer score: " + computerScore);
        console.log("User score: " + humanScore);
    } 
}

playGame();