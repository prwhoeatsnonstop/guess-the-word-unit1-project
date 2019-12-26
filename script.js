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
var guessesLeft = 9; //there's another html id with same name so that easier to reference
var underScores = [];
var userGuesses = [];
var initflipTable = "(╯ರ~ರ）╯︵┻━┻";
var flipTable = initflipTable.split("");
var lives = ["🎹", "🎹", "🎹", "🎹", "🎹", "🎹"] //split the characters of flipTable
var outputToPlayer = "";
var gameOver = false;
var loserFlipTable = []; // to store characters of losing flipTable
var winCounter = 0;

//Functions


var inputHappened = function(currentInput){
  console.log( currentInput );
  return currentInput;
};