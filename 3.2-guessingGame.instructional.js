// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS



// Change these two variables to alter the entire game. 
let maxAttempts = 3;
let betweenOneAnd = 10;



let chosenNumber = Math.floor((Math.random() * betweenOneAnd) +1);
console.log('the chosen number is ' + chosenNumber);


let attemptNumber = [];
let gameWon = false;
let guessLog = document.getElementById('guessLog');
let newLog = document.createElement('p');
let playAgain = document.getElementById('playAgain');
let submitButton = document.getElementById('submitButton');
let range = document.getElementById('range');
range.innerText = `It is between 1 and ${betweenOneAnd}. You have ${maxAttempts} tries.`;

let validRange = [];
for (i=1; i<= betweenOneAnd; i++){
    validRange.push(i);
}

let lossCheck = () =>{
    if((attemptNumber.length == maxAttempts) && (gameWon == false)){
        newLog.innerText = `Sorry, but that's all ${maxAttempts} tries. The number was ${chosenNumber}.`;
        guessLog.appendChild(newLog);
        playAgain.style = 'display: block';
        submitButton.style = 'display: none';
    }
}
    
    function guessNumber(){
        
        let userGuess = Number(document.getElementById('userGuess').value); 
        console.log(userGuess);

        if(validRange.includes(userGuess) == false){
            alert('Clever, but No.\nNumber must be an integer between 1 and 10');
        }else if(attemptNumber.includes(userGuess)){
            alert(`You already guessed ${userGuess}.\n(I'll let it slide.)`)
        } else if(userGuess == chosenNumber){
            attemptNumber.push(userGuess);
            newLog.innerText = `${(attemptNumber.length)}) Thats the number! You win!`;
            guessLog.appendChild(newLog);
            gameWon = true;
            playAgain.style = 'display: block';
            submitButton.style = 'display: none';
        }else if(userGuess < chosenNumber){
            attemptNumber.push(userGuess);
            newLog.innerText = `${(attemptNumber.length)}) ${userGuess} is too low. Guess higher`;
            guessLog.appendChild(newLog);
        }else if(userGuess > chosenNumber){
            attemptNumber.push(userGuess);
            newLog.innerText = `${(attemptNumber.length)}) ${userGuess} is too high. Guess lower`;
            guessLog.appendChild(newLog);
        }
        
        console.log(attemptNumber);
        
        lossCheck();
        
    }
   