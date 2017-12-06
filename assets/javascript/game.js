$(document).ready(function(va){
	
	  var maxNumGuesses = 9;
	  var numWins = 0;
	  var numLosses = 0;
	  var numGuesses = 0;
	  var winningChar = "";
	  var validChars =  'abcdefghijklmnopqrstuvwxyz0123456789';
	  var guessesSoFar = "";
	  var firstGuess = true;

	  function startGame(){
		  numGuesses = 0;
		  setWinningChar();
		  firstGuess = true;
		  guessesSoFar = "";
          displayScores();
	  }
	  
	  function setWinningChar(){
           winningChar = validChars[Math.floor(Math.random() * validChars.length)];		   
	  }

	  function displayScores() {
		  
		  var numGuessesRemaining = maxNumGuesses - numGuesses;
		  $("#wins").text("Wins: " + numWins);
		  $("#losses").text("Losses: " + numLosses);
		  $("#remainingGuesses").text("Remaining Guesses: " + numGuessesRemaining);
                  $("#guessessSoFar").text("Guesses So Far: " + guessesSoFar);
 
      }

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

                // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
                var userChar = String.fromCharCode(event.keyCode).toLowerCase();

		//if user chose the winning character increment the number of wins and start another game.
		if (userChar === winningChar){
			//alert("char was same as winning char");
			numWins++;
			startGame();
		}
		else{
			//alert("you pressed " + userChar + ".  The winning char is " + winningChar);
			numGuesses++;
			if (numGuesses === maxNumGuesses){
				numLosses++;
				startGame();
			}
			else{

			    if (firstGuess){
				      guessesSoFar = userChar;
				      firstGuess = false;
			    }
			    else{
			         guessesSoFar = guessesSoFar + ", " + userChar;
			    }
			}
		}
	   
	   displayScores();
		
	  }
	 //main process
	 startGame();
	 displayScores();
	
});