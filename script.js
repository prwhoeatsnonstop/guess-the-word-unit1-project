console.log("Hi");
//sharon suggest do winning condition first
//list of variables needed
var pauseGame = false; // duno for what yet
var guessedLetters = []; //after splice/slice to store here id is blankText "_""_"_"_
var wrongLetters = []; //to show user what they have keyed in and this one max only can have 7 alphabets per round at most, cannot have more than 7 words in this array
var numOfCorrectGuesses = []; // make a counter to store how many rounds have they won, once it hits 16 rounds, prompt or make message appear, you're champion. but each round when win, may or may not prompt u win before proceeding to next turn, this one to store after every space in blankText has been filled with correct letters
const maxGuess = 7; // see if can use together with var wrongLetters or dun need
var ranNum; // to generate different songs for each round
// var alphabetToBeTypeIn = "abcdefghijklmnopqrstuvwxyz".split("");// maybe need this to create a-z keyboard button or dun need if use input then enter
var blankText = "<ul>"; //this creates a ul to store li later or think of a way to make like if totalSong[i] = "", blankText appear as "", if got letter, appear as "_". after that need to hide the "_" and make letters appear or vice versa
var songList = ["all we know", //audio1
                "apologize", //audio2
                "bad liar", //audio3
                "everything i need", //audio4
                "good life", //audio5
                "happier", //audio6
                "in my place", //audio7
                "move along", //audio8
                "numb", //audio9
                "outside", //audio10
                "pumped up kicks", //audio11
                "secrets", //audio12
                "solo dance", //audio13
                "someday", //audio14
                "superheroes", //audio15
                "the reason", //audio16
                ];
// var totalSong = songList.length;

// individualSongs();

// var letterInIndividualSongs = function() {
//     for (var i = 0; i < individualSongs.length; i++) {
//         individualSongs[i].split("");
//         console.log(individualSongs);
//     };
// };

var arrayLength = songList.length;

//to split each song list into individual letters
function toSplitLetters() {for (var i = 0; i < arrayLength; i++) {
    console.log(songList[i]);
    var individualAns = songList[i].split("");
    console.log(individualAns);
};
};



// to get individual songs to be split later


var resetBtn;
// id is "#reset" button for user to click and this button will have event listener 'click' which has a function that will run if user wana play again

var hint1Btn;
// id is "hint1" button for user to click and will have event listener 'click' with a function that shows 1st hint

var hint2Btn;
//id is "hint 2" button for user to click and will have event listener 'click' with a function that shows 2nd hint
// for (i = 0, i < songList.i, i++) {
// songList[i].split("");} // will return ["b", "a", "d", "", "l","i","a","r"]
// // document.getElementById("example").innerHTML = "Hello world!"; probably need this to check content of input/output

// for (i = 0; i < totalSong.length; i++) {
//     blankText += "<li>" + songList[i].split("") + "<li>";
// }

// blankText += "<ul>";
// document.getElementById("blankText").innerHTML = blankText;

//       var display = function( data ){
//         var output = document.querySelector('.blankText');
//         output.innerText = data;}
// var a;
// a = 5;
// document.getElementById("blankText").innerHTML = a * 8;

// var wrongLetters = document.getElementByClass("wrong").innerHTML = "";
// if keyinletter !== answer {
// check again if class wrong has been is in the desired html element
// }


// document.getElementById("display").innerHTML = "" or document.getElementById("display").innerHTML = "_" (some code for the --- to apear and --- ---)for this part, tbc
// var correctlyguessedWord = songList(0,0);
// if correctlyguessedWord.length === 15, u win.

// function playAudio() {
//   x.play();
// }
// x.addEventListener('click', playAudio);
//then in winning conditon can do smth like songList[0],split(""), it'll come out

//randomly chooses a word from wordList
// var song = songList[Math.floor(Math.random() * songList.length)]; //can splice it later once a song has been guessed
// var numOfCorrectGuesses = []; // this will store the right answer
// var totalNumOfAns = [];

// var guessingLines;
// guessing lines in a way should be the same as correct answer? and this button will have event listener is smth load or smth appear with a function where letters appear when it matches the correct answer. but first version should be as letters being click, guessing lines should appear same letter.

// var typedLetters;
// can only key in 1 letter at a time, find a way to stop them from keying in more than a letter

// var guessBtn;
//this button has the function to erase/remove current letter in the typedLetter button, and also to check if letter key in same as correct answer at answerLines, at the same time to check if letter key in is wrong, store at somewhere as a way to increase counter of losing and maybe display out the wrongly guessed letter if want to assist user, and also need to decrease lives to show how many lives user left/ and need to take the value that is in guessBtn to pass it to answerLines first, then check and see if the letter matches the answer



//list of functions to make things happen

function makeLinesAppearSameAsCorrectAnswer() {};
// at game start to already display the number of lines, in a way like giving showing hint to user that they can see how many letters to be guessed

function wheneverUserClicksOnTheClickedLetterTheSameLetterShouldAppearOnTheLine() {};
//to test if user clicked on the alphabet, assuming same letter should appear on line, no winning logic yet

function checkifClickedLetterSameAsTheLinesWhereUserCanGuessed() {};
//to countercheck that the letter that user keys in is same as correct answer. Lines should in a way represent correct letters

function if1stlettercorrectlyguessedAllowusertocontinueguessinguntillose() {};
//if 1st letter has been guessed correctly, allow user to continue guessing the next letter,otherwise, if next round finishes the lives, game over

function if1stletteriswronglyguessedstillallowusertocontinueguessing() {};
//if 1st letter is wrongly guessed, allow user to continue playing while still have lives, otherwise, game over

function tocheckifnumofwronglyguessedlettersequalto5timeswhereuserhasclick() {};
// if numOfWronglyGuessedTime.length === gameover.length, alert user loses;

function checkifClickedLetterSameAsTheLinesWhereUserCanGuessed() {};
function checkifClickedLetterSameAsTheLinesWhereUserCanGuessed() {};
function checkifClickedLetterSameAsTheLinesWhereUserCanGuessed() {};
function checkifClickedLetterSameAsTheLinesWhereUserCanGuessed() {};
function checkifClickedLetterSameAsTheLinesWhereUserCanGuessed() {};
function checkifClickedLetterSameAsTheLinesWhereUserCanGuessed() {};

// let item = document.querySelector('#item');
// var button = document.querySelector('#button');

// var doSomething = function() {
//   item.classList = "hide"
// }
// button.addEventListener('click', doSomething);

//can try setTimeout(call the function, 10000);



    // Wait for key press
    // document.onkeypress = function(event) {
    //     // Make sure key pressed is an alpha character
    //     if (isAlpha(event.key) && !pauseGame) {
    //         checkForLetter(event.key.toUpperCase())
    //     }
    // }

    // // Game Functions
    // // Check if letter is in word & process
    // function checkForLetter(letter) {
    //     var foundLetter = false
    //     var correctSound = document.createElement("audio")
    //     var incorrectSound = document.createElement("audio")
    //     correctSound.setAttribute("src", "assets/sounds/stairs.mp3")
    //     incorrectSound.setAttribute("src","assets/sounds/croak.mp3")

        // // Search string for letter
        // for (var i=0, j= wordToMatch.length; i<j; i++) {
        //     if (letter === wordToMatch[i]) {
        //         guessingWord[i] = letter
        //         foundLetter = true
        //         correctSound.play()
        //         // If guessing word matches random word
        //         if (guessingWord.join("") === wordToMatch) {
        //             // Increment # of wins
        //             wins++
        //             pauseGame = true
        //             updateDisplay()
        //             setTimeout(resetGame,5000)
        //         }
        //     }
        // }

        // if (!foundLetter) {
        //     incorrectSound.play()
        //     // Check if inccorrect guess is already on the list
        //     if (!guessedLetters.includes(letter)) {
        //         // Add incorrect letter to guessed letter list
        //         guessedLetters.push(letter)
        //         // Decrement the number of remaining guesses
        //         numGuess--
        //     }
    //         if (numGuess === 0) {
    //             // Display word before reseting game
    //             guessingWord = wordToMatch.split()
    //             pauseGame = true
    //             setTimeout(resetGame, 5000)
    //         }
    //     }

    //     updateDisplay()

    // }
    // // Check in keypressed is between A-Z or a-z
    // function isAlpha (ch){
    //     return /^[A-Z]$/i.test(ch);
    // }

    // function resetGame() {
    //     numGuess = maxGuess
    //     pauseGame = false

    //     // Get a new word
    //     wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase()
    //     console.log(wordToMatch)

    //     // Reset word arrays
    //     guessedLetters = []
    //     guessingWord = []

//         // Reset the guessed word
//         for (var i=0, j=wordToMatch.length; i < j; i++){
//             // Put a space instead of an underscore between multi word "words"
//             if (wordToMatch[i] === " ") {
//                 guessingWord.push(" ")
//             } else {
//                 guessingWord.push("_")
//             }
//         }

//         // Update the Display
//         updateDisplay()
//     }

//     function updateDisplay () {
//         document.getElementById("totalWins").innerText = wins
//         document.getElementById("currentWord").innerText = guessingWord.join("")
//         document.getElementById("remainingGuesses").innerText = numGuess
//         document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ")
//     }
// })