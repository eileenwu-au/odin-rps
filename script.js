/*
    PLAN
    1. Initiate game
        - onClick 'Let's Play!' button will run the function to start the game
        - Store game number as variable roundCount
        - Set roundCount = 1
    2. Generate computer choice
        - Use math.random to generate a number
        - Multiply number by 100 and round off to the nearest integer
        - Use the number to assign rock, paper or scissors
            * IF > 0 and <= 33 THEN rock
            * IF > 33 and <= 66, THEN paper
            * ELSE scissors
            * Store as variable 'computerChoice'
    3. Get user's choice
        - Opent prompt to allow user input
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
        - Check IF roundCount < 5, start another round AND roundCount +1
        - ELSE declare the winner
*/
