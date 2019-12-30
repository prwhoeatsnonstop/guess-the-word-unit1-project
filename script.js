console.log("hello script js");

// words list
var words = ["all we know",//audio1
             "apologize",//audio2
             "bad liar",//audio3
             "everything i need",//audio4
             "good life",//audio5
             "happier",//audio6
             "in my place",//audio7
             "move along",//audio8
             "numb",//audio9
             "outside",//audio10
             "pumped up kicks",//audio11
             "secrets",//audio12
             "solo dance",//audio13
             "someday",//audio14
             "superheroes",//audio15
             "the reason",//audio16
];

var wordsInUC = words.map(function(x){
    return x.toUpperCase();
}); //changes each element in the array to uppercase
var ranNum;//to generate random num later to be assigned for each round of words
var maxNumGuesses = 7; // max number of guesses
var guessedLetters = []; // store the guessed letters
var ansWordArr = []; // store the "_" & " " and to be used to replace the word answer
var numGuessesRemaining = 0; // number of guesses remaining
var numWins = 0; // number of wins
var numLosses = 0; // number of losses
var isFinished = false; // when true, game can start again
var ansWord; // the word that is being played currently
var gameLevel;//to increment game level till it reaches 16 then game ends

// function runs at the start of page and used to restart after game isFinished
function setup() {
    //picks random word from words list
    ranNum = Math.floor(Math.random() * wordsInUC.length);
    ansWord = wordsInUC[ranNum];
    // ansWord = wordsInUC[Math.floor(Math.random() * wordsInUC.length)];if use this then no ranNum, hence stored in ranNum 1st before using it

    ansWordArr = [];//if this line was removed, when guessing next song, there is some alphabets already shown at the end of the game, coz in global variable it does not know what value ansWord will be holding

    // adds "_" to ansWordArr
    for (var i = 0; i < ansWord.length; i++) {
        if (ansWord[i] === " ") {
            ansWordArr[i] = " ";
        } else {
            ansWordArr[i] = "_";
        }
    }

    // reset the variables
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

    //removes color from numGuesses
    document.getElementById("numGuesses").style.color = "";

    //show the selected elements on the screen
    updateScreen();
};

//updates the HTML from the functions
function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");//shows the lines
    document.getElementById("guessedLetters").innerText = guessedLetters;
    document.getElementById("levelUp").innerText = gameLevel;
};

//function to check the key that's pressed
function checkGuess(letter) {
    //if letter is not in guessedLetters array then push the letter to the array, -1 means no match found in array but at this point all letters memang not in guessed letter, possibility of pushing the correct letter tho, hence else comes on line 89 to check is letter correct onot
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesRemaining
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            //if numGuessesRemaining is 3 or less then change the color, text changes color
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#e12d2e";
            }
            //if letter is in answer then replace the positioned "_" with the letter
        } else {
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                }
            }
        }
    }

};

//function to check if the player is a winner for that particular round
function isWinner() {
    //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        // wordsInUC.splice(ranNum);
        isFinished = true;
    }
};

//function to help player move on to next level and stops once numWins = 16 (16 is max num of words d, can see it as 16 random levels of word) **Eg if won twice, then lose 1 round. the winning counter remains 2?
function moveToNextRoundTillComplete() {
    isWinner();
    if(numWins === 3) {
        isFinished = true;
        setup();
        numWins = 0;
        alert("You're a DJ!");
    }
}

//function to check if player is a loser for that particular round
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        //setting numLosses to another color
        document.getElementById("numLosses").style.color = "#e12d2e";
    }

};

//trying to create a function that stops game for each loosing round, and turning the numLosses back to zero, need to use isLoser
function stopsGameForEachLoosingRound() {
    isLoser();
    if(numLosses === 1) {
        isFinished = true;
        setup();
        numLosses = 0;
        numWins = 0;
    }
}


//event listener for key pressed, mainly checking if all letters has been correctly guessed or still have lives remaining, then continue to allow players to guess or press any letter. In else statement, if user key in letters between a-z, first is to transform whatever they have key in to uppercase alphabets, then display whatever is in updateScreen function, then call isWinner and isLoser for incrementing wins or losses but infinity games coz dun have a stopping condition.
document.onkeyup = function(event) {
    //if isFinished is true then restart the game to the initial setup
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key, http://gcctech.org/csc/javascript/javascript_keycodes.htm, a = 65, z = 90, so between 65-90
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase());
            updateScreen();
            // isWinner();
            moveToNextRoundTillComplete();
            // isLoser();
            //game did stop but still can play?
            stopsGameForEachLoosingRound();
        }
    }
};




setup();
updateScreen();
//for audio hints, position need to be below setup() updateScreen();
var hintAudio = [];
function audio () {
    for (var i = 1; i < 16; i++){
        audioName = 'songs/audio' + i + '.mp3';
        hintAudio.push(new Audio(audioName));
     }
 };

//Get Hint
hint1.onclick = function() {

     var music = hintAudio[ranNum];
     music.play();
};
audio();


//need smth like if numWins + numLosses = wordsinUC.length, the game stops (showing have finite questions)

console.log(ansWord);
// words list


///for audio hint onwards
// var hintAudio = [];
// function audio () {
//     for (var i = 1; i < 16; i++){
//         audioName = 'songs/audio' + i + '.mp3';
//         hintAudio.push(new Audio(audioName));
//     }
// };
// audio();

// //Get Hint
// hint1.onclick = function() {

//     var music = hintAudio[ranNum];
//     music.play();
// };
/////// end of audio hint
// // var regexLetter = /^[a-zA-Z]+$/; // regular expressions always contained between 2 forward slash []means range from a-z lowercase and A-Z uppercase, + is unlimited, ^ is beginning of string, $ is end of string
// // // var songs =     ["all we know",//audio1
// // //                  "apologize",//audio2
// // //                  "bad liar",//audio3
// // //                  "everything i need",//audio4
// // //                  "good life",//audio5
// // //                  "happier",//audio6
// // //                  "in my place",//audio7
// // //                  "move along",//audio8
// // //                  "numb",//audio9
// // //                  "outside",//audio10
// // //                  "pumped up kicks",//audio11
// // //                  "secrets",//audio12
// // //                  "solo dance",//audio13
// // //                  "someday",//audio14
// // //                  "superheroes",//audio15
// // //                  "the reason",//audio16
// // // ];
// // // using Math.random and Math.floor to pick a random word from the words array
// // var randWord;
// // var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// // var wins = 0;//for future when more words/to level up
// // var loss = 0;//for future when more words/to level up
// // var underScores = []; //for future display of lines
// // // var lives = ["🎹", "🎹", "🎹", "🎹", "🎹", "🎹"];//for future lives stored as icons?
// // var counter = 0;//for more words maybe?


// ///////////////////////////////first level uses global variables from here onwards
// var songs = ["n", "u", "m", "b"];
// var wrongLetter = []; //stores array of wrong letters
// var correctLetter = [];//stores array of correct letters
// var initflipTable = "(╯ರ~ರ）╯︵┻━┻";
// var flipTable = initflipTable.split(""); //split the characters of flipTable
// var totalLives = 11;
// var messageToPlayer = ""; //to be display at output
// var gameOver = false;
// var loserFlipTable = []; // to store characters of losing flipTable


// //Functions that the games need in order to work, treat it like lego building blocks

// //1st level: Player guessing 1 word correctly and it reloads/resets once the word has been guessed within time frame of 2 minutes

// //1st function, checks whether the input is it a letter?
// var validateInput = function(inputFromPlayer) {
//    if(isNaN(inputFromPlayer)) {
//      console.log(inputFromPlayer + " is a valid letter!");
//      messageToPlayer += inputFromPlayer + " is a valid letter!"
//      checkLetter();
//       return true;
//      }
//      console.log(inputFromPlayer + " is invalid. Please key in a letter!");
//      messageToPlayer += inputFromPlayer + " is invalid. Please key in a letter!"
//      return false;
//     };

// //2nd function, after validating the input, check if the letter matches the individual string in the array?

// var checkLetter = function(inputFromPlayer) {
//     for (var i = 0; i < songs.length; i++) {
//         console.log(songs[i]);
//         if(inputFromPlayer === songs[i]){
//             console.log(inputFromPlayer + " is a correct guess!");
//             return true;
//         }   console.log(inputFromPlayer + " is a wrong guess!")
//             return false;
//     }
// }

// //3rd function, if letter is correct, store in a new array and start displaying correct letters
// var correctLetter = function(correctInput) {
//     if(checkLetter(correctInput)) {
//     correctLetter.push(correctInput);
//     console.log("You have " + correctInput + "\n");
//     messageToPlayer += "You have " + correctInput + "\n";
//     }
// }

// //4th function, if letter is incorrect, store in another wrongly guessed array and also need to start showing flipTable characters
// var wrongLetter = function(wrongInput) {
//     if(wrongInput !== correctLetter())//what to fill in here?) {
//         wrongLetter.push(wrongInput);
//         loserFlipTable.push(flipTable.shift());
//         console.log(wrongInput + " is a wrong guess." + "\n" + "Wrong letters guessed: " + wrongLetter + "\n" + loserFlipTable.join(''));
//         messageToPlayer += wrongInput + " is a wrong guess." + "\n" + "Wrong letters guessed: " + wrongLetter + "\n" + loserFlipTable.join('')
//     }

// //5th function, final winning condition is correct letter.length === songs.length
// var checkWin = function() {
//     if (correctLetter.length === songs.length) {
//         console.log("You're the winner!");
//         messageToPlayer += "You're the winner!";
//     }
// }
// //6th function, final losing condition is flipTable.length === 0
// var checkLose = function() {
//     if (flipTable.length === 0) {
//         console.log("Sorry, you lose. Please try again.");
//         messageToPlayer += "Sorry, you lose. Please try again.";
//     }
// }

// //7th function, game reloads depending on win first or lose first, this probably need to code in the last function?
// var gameReload = function(currentInput){
//         if (checkWin(currentInput) || checkLose(currentInput)) {
//         document.querySelector("#input").innerHTML = "";
//         messageToPlayer += "Game ends. Please reload";
//         //put var twoMinutesTimeOut here?
//     }
// }

// //8th function that stops the game once 2 minutes has passed
// var announceGameOver = function() {
//     messageToPlayer += "The game ends! Please try again!";
//     console.log("The game ends! Please try again!");
// }

// var twoMinutesTimeOut = setTimeout(announceGameOver, 120000);//messageToPlayer does appear in console.log ( i tested with 2000 miliseconds instead), how do i tie it/link it with the reload part?

// //a function (the ultimate) that takes in whatever u input and return smth that u set for users to see
// var inputHappened = function(currentInput) {
//       console.log( currentInput );
//       validateInput(currentInput);//takes in currentInput to validate
//       checkLetter(currentInput);//takes in currentInput to check
//       correctLetter(currentInput);//takes in currentInput to see if it a correct letter
//       wrongLetter(currentInput);//takes in currentInput to see is it a wrong letter
//       checkWin(currentInput);//takes in currentInput to validate win? how to erm combine checkWin with correctLetter so that it becomes a new combo?
//       checkLose(currentInput);//takes in currentInput to validate lose? how to erm combine checkLose with wrongLetter so that it becomes a new combo?

//         return "smth here?";//how to set this as returning different things each time player keys in smth? to combine the above function into one big function and return here?
// };