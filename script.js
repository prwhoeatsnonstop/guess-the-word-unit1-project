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
});

var maxNumGuesses = 8; // max number of guesses
var guessedLetters = []; // store the guessed letters
var ansWordArr = []; // store the "_" and to be used to replace the word answer
var numGuessesRemaining = 0; // number of guesses remaining
var numWins = 0; // number of wins
var numLosses = 0; // number of losses
var isFinished = false; // when true, game can start again
var ansWord; // the word that is being played

// function runs at the start of page and used to restart after game isFinished
function setup() {
    //picks random word from words list
    ansWord = wordsInUC[Math.floor(Math.random() * wordsInUC.length)];

    ansWordArr = [];

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

    //clears giphy-embed to now show any gifs
    document.getElementById("giphy-embed").src = "";
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
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

//function to check the key that's pressed
function checkGuess(letter) {
    //if letter is not in guessedLetters array then push the letter to the array, -1 means no match found in array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesRemaining
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            //if numGuessesRemaining is 3 or less then change the color
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

//function to check if the player is a winner
function isWinner() {
    //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
        //if the answer is guessed then play assigned gif
        if(ansWord === "DOUG") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/w7iOaLoi84N6E";
        } else if (ansWord === "RUGRATS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/3x5V8j8T341lS";
        } else if (ansWord === "SPONGEBOB") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/TdfyKrN7HGTIY";
        } else if (ansWord === "POKEMON") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xuXzcHMkuwvf2";
        } else if (ansWord === "ANIMANIACS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/Vpu0dyuOVbrBC";
        } else if (ansWord === "RECESS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/ENjchsyk8aSoE";
        } else if (ansWord === "CATDOG") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/VqWjJR7vOwmSk";
        } else if (ansWord === "SIMPSONS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/tkYpAbKdWj4TS";
        }

    }
};
//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        //play the loser gif
        document.getElementById("giphy-embed").src = "https://giphy.com/embed/3oFzmko6SiknmpR2NO";
        document.getElementById("numLosses").style.color = "#e12d2e";
    }

};


//event listener for key pressed
document.onkeyup = function(event) {
    //if isFinished is true then restart the game to the initial setup
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase());
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};


setup();
updateScreen();

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