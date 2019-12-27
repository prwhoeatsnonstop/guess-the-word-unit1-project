console.log("hello js");

// var regexLetter = /^[a-zA-Z]+$/; // regular expressions always contained between 2 forward slash []means range from a-z lowercase and A-Z uppercase, + is unlimited, ^ is beginning of string, $ is end of string

var songs = ["n", "u", "m", "b"]; //secretWord
// var songs =     ["all we know",//audio1
//                  "apologize",//audio2
//                  "bad liar",//audio3
//                  "everything i need",//audio4
//                  "good life",//audio5
//                  "happier",//audio6
//                  "in my place",//audio7
//                  "move along",//audio8
//                  "numb",//audio9
//                  "outside",//audio10
//                  "pumped up kicks",//audio11
//                  "secrets",//audio12
//                  "solo dance",//audio13
//                  "someday",//audio14
//                  "superheroes",//audio15
//                  "the reason",//audio16
// ];
// using Math.random and Math.floor to pick a random word from the words array
var randWord;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var loss = 0;
var wrongGuesses = []; //stores array of wrong letters// var incorrectGuesses
// var guessesLeft = 9; //there's another html id with same name so that easier to reference
var underScores = []; //for future display of lines
var correctGuesses = [];//stores array of correct letters //var correctGuesses
var initflipTable = "(╯ರ~ರ）╯︵┻━┻";
var flipTable = initflipTable.split(""); //split the characters of flipTable//tableFlip
// var lives = ["🎹", "🎹", "🎹", "🎹", "🎹", "🎹"];
var totalLives = 11;
var outputToPlayer = "";
var gameOver = false;
var loserFlipTable = []; // to store characters of losing flipTable//tableFlipResult
var counter = 0;

//Functions
//1st func that just check if length of correct Guesses same as length of song
var checkWin = function() {
    if (correctGuesses.length === songs.length) {
        outputToPlayer += "You won!"  +"\n" + "The answer is " + songs.join('') + ".";
        console.log("You won!");
        gameOver = true;
    }
}

//2nd func that that just check the ultimate losing condition
var checkLose = function() {
    if (flipTable.length === 0) {
        outputToPlayer += "You lose! Game over";
        console.log("You lose!");
        gameOver = true;
    }
}

//3rd func that checks whether input is a letter or not
var validateGuess = function(guessedLetter) {
    if (isNan(guessedLetter)){
        console.log("Letter " + guessedLetter + " is a valid guess!")
        return true;
    }
        return false;
}

//4th func that starts storing the correctLetter into the array named correctGuesses and also calling 1st-func checkWinState();
var correctLetter = function(guessedLetter) {
    correctGuesses.push(guessedLetter);
    console.log("Current correct guesses: " + guessedLetter + "\n" + "You currently have: " + correctGuesses.join(''));
    outputToPlayer += "letter " + guessedLetter + " found!" + "\n" + "Current correct letters: " + correctGuesses + "\n";

    checkWin();//once the length in correctGuesses same as songs.length then win, refer back to 1st func
}

//5th func that starts storing flipTable's icon into a new array, and also starts storing wrong inputs into wrong Guesses array, and display what they have keyed in so far + showing the flip table icon and also calling 2nd-func checkLoseState();
var wrongLetter = function(guessedLetter) {
    loserFlipTable.push(flipTable.shift());
    wrongGuesses.push(guessedLetter);
    console.log("Letter " + guessedLetter + " is a wrong guess." + "\n" + "You have guessed: " + wrongGuesses + "\n" + loserFlipTable.join() + "\n");
    outputToPlayer += "Letter " + guessedLetter + " is a wrong guess." + "\n" + "You have guessed: " + wrongGuesses + "\n" + loserFlipTable.join() + "\n";
    checkLose(); //once the length of flipTable === 0 then lose, refer back to 2nd func
}

//6th func to check if the letter is in either correct Guesses or in wrong Guesses, then return true
var isGuessedAlready = function(letterToCheck) {
    for (var i = 0; i < correctGuesses.length; i++) {
        if (letterToCheck === correctGuesses[i]) {
            console.log(letterToCheck + " has been input! Key in another letter please.");
            outputToPlayer += letterToCheck + " has been input! Key in another letter please."
            return true;
        }
    }
    for (var j = 0; j < wrongGuesses.length; i++) {
        if(letterToCheck === wrongGuesses.length) {
            console.log(letterToCheck + " has been input! Key in another letter please.");
            outputToPlayer += letterToCheck + " has been input! Key in another letter please."
            return true;
        }
    }
            return false;
}

//7th-func that checks is the guessed letter in the secret word? Return a success if true.
var checkGuess = function(letterToCheck) {
//setting a variable that in the beginning which stores letterFound as a false value
    var letterFound = false;
//looping through the letters in songs and then check if it matches the correct letter, so before that need to set a condition for letterFound to be true, then only use it as a condition for to check through correctLetter and wrongLetter
        for (var i = 0; i < songs.length; i++) {
            if(letterToCheck === songs[i]){
                letterFound = true;
            }
        }
        if (letterFound) {
            correctLetter(letterToCheck);
        } else {
            wrongLetter(letterToCheck);
        }
}

//a function that takes in whatever u input and return smth that u set for users to see
var inputHappened = function(currentInput){
  console.log( currentInput );
    if (gameOver) {
        return "Game over, please reload."
    }
    outputToPlayer += "";
    currentInput = currentInput.toLowerCase();
    document.querySelector("#input").value = "";//resets input box to empty
    console.log("Input character is " + currentInput);
    checkGuess(currentInput);
    return outputToPlayer;
};