console.log("hello script js");

var regexLetter = /^[a-zA-Z]+$/; // regular expressions always contained between 2 forward slash []means range from a-z lowercase and A-Z uppercase, + is unlimited, ^ is beginning of string, $ is end of string

var songs = ["n", "u", "m", "b"];
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
var wins = 0;
var loss = 0;
var wrongLetter = []; //stores array of wrong letters
var guessesLeft = 9; //there's another html id with same name so that easier to reference
var underScores = []; //for future display of lines
var userGuesses = [];
var initflipTable = "(╯ರ~ರ）╯︵┻━┻";
var flipTable = initflipTable.split(""); //split the characters of flipTable
var lives = ["🎹", "🎹", "🎹", "🎹", "🎹", "🎹"];
var outputToPlayer = "";
var gameOver = false;
var loserFlipTable = []; // to store characters of losing flipTable
var winCounter = 0;

//Functions


// var checkLetter = function(currentInput) {
//     for (var i = 0; i < songs.length; i++) {
//         console.log(songs[i]);
//     }
// }
//a function that takes in whatever u input and return smth that u set for u to see
var inputHappened = function(currentInput){
  console.log( currentInput );
  if (currentInput === "n" || currentInput === "u" || currentInput === "m" || currentInput === "b"){
    console.log("Yes it's one of the letters!");
    return("Yes")
  } else {
    console.log("Wrong!");
    return("Wronglah!")
  }
  //prints whatever that u input
  // return "wow"; //this part is returning what you want to see in the output //later remember to uncomment wow
};