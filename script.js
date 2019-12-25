console.log("hello script js");

var regexLetter = /^[a-zA-Z]+$/; // regular expressions always contained between 2 forward slash []means range from a-z lowercase and A-Z uppercase, + is unlimited, ^ is beginning of string, $ is end of string
var songs =     ["all we know",//audio1
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
// using Math.random and Math.floor to pick a random word from the words array
var randWord;
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var initflipTable = "(╯ರ~ರ）╯︵┻━┻";
var flipTable = initflipTable.split("");
var lives = ["🎹", "🎹", "🎹", "🎹", "🎹", "🎹"] //split the characters of flipTable
var outputToPlayer = "";
var gameOver = false;
var loserFlipTable = []; // to store characters of losing flipTable

//Functions

function startGame () {
    //picks random word
    randWord = songs[Math.floor(Math.random() * songs.length)];
    console.log(randWord); //check if random songs do appear
    console.log(randWord.length); //check if length of random word is same

    for (var i = 0; i < randWord.length; i++) {
        underScores.push("_");
        console.log(underScores);
    }
    document.getElementById("word-blanks");
}

//Main
startGame();


// if length of correctGuesses === length of secretWord, player wins!
// var checkWin = function() {
//     if (currentInput === secretWord.lengt) {
//         outputToPlayer += "You win!";
//         // The addition assignment operator (+=) adds a value to a variable, like concatenates to what was initially there at the variable
//         gameOver = true;
//     }
// }

// //if flipTable.length === 0 (means no more characters left), player loses!
// var checkLose = function() {
//     if (flipTable.length === 0) {
//         outputToPlayer += "You lose!";
//         gameOver = true;
//     }
// }

// var checkFirstLetter = function() {
//     if (currentInput.toLowerCase() === secretWord[0] && counter === 0) {
//         console.log("You got the first letter right! Keep going");
//     } else if (currentInput.toLowerCase() !== secretWord[0] && counter === 0) {
//         console.log("Please try another letter");
//     }
//     }

// var checkSecondLetter = function() {
//     if ((currentInput.toLowerCase() === secretWord[0] && counter === 0) && (currentInput.toLowerCase() === secretWord[1] && counter === 1)) {
//         console.log("You got the 2nd letter! Keep going!");
//     }
// }

// var checkThirdLetter = function() {
//     if ((currentInput.toLowerCase() === secretWord[0] && counter === 0) && (currentInput.toLowerCase() === secretWord[1] && counter === 1) && (currentInput.toLowerCase() === secretWord[2] && counter === 2)) {
//         console.log("You got the 3rd letter! Keep going!");
//     }
// }

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   return "🎹";
// };Akira's starter code