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

var hints = ["audio1",
             "audio2",
             "audio3",
             "audio4",
             "audio5",
             "audio6",
             "audio7",
             "audio8",
             "audio9",
             "audio10",
             "audio11",
             "audio12",
             "audio13",
             "audio14",
             "audio15",
             "audio16",
];

var wordsInUC = words.map(function(x){
    return x.toUpperCase();
}); //changes each element in the array to uppercase
var gameLevel = 0;//to increment game level till it reaches 16 then game ends
var ranNum;//to generate random num later to be assigned for each round of words
var maxNumGuesses = 7; // max number of guesses
var guessedLetters = []; // store the guessed letters
var ansWordArr = []; // store the "_" & " " and to be used to replace the word answer
var numGuessesRemaining = 0; // number of guesses remaining
var numWins = 0; // number of wins
var numLosses = 0; // number of losses
var isFinished = false; // when true, game can start again

function randomiseArrayOrder(array) {
    // Shuffle original array into new array
    // Using Fisher-Yates Algorithm from
    // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


// Use it to shuffle array
randomiseArrayOrder(wordsInUC);

 // the word that is being played currently
var ansWord = wordsInUC[gameLevel].split('');

// function runs at the start of page and used to restart after game isFinished
function setup() {
    //picks random word from words list
    // ansWord = words[Math.floor(Math.random() * words.length)];

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
    //if letter is not in guessedLetters array then push the letter to the array
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

// //function to check if the player is a winner
// function isWinner() {
//     //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
//     if (ansWordArr.indexOf("_") === -1) {
//         numWins++;
//         isFinished = true;
//     }
// };
//for game to move to next level
var resetGame = function() {
    ansWord = wordsInUC[gameLevel];
    maxNumGuesses = 7; // max number of guesses
    checkGuess();
}

//function isWinner or move to next level
function isWinner() {
        if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        gameLevel++;
        isFinished = true;
    } if (gameLevel === wordsInUC.length) {
        alert("You're the DJ!");
        setup();
        window.location.reload(true);// Reload the current page without the browser cache
    } else {
        resetGame();
    }
    }
//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
        // numLosses++;
        numWins = 0;
        setup();
        window.location.reload(true);// Reload the current page without the browser cache
        // isFinished = true;
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
// function randomiseArrayOrder(array) {
//     // Shuffle the cards
//     // Using Fisher-Yates Algorithm from
//     // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * i);
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }

// randomiseArrayOrder(ansWord);//created a shuffled array
// var ansWord = wordsInUC[gameLevel].split('');//the secret word will be splitted base on game level

// // Shuffle wordsInUC;
// // randomiseArrayOrder(wordsInUC);
// // for (i = 0; i < wordsInUC.length; i++) {
// //     console.log(wordsInUC[i]);
// //     ansWordArr = [];
// //     for (var i = 0; i < wordsInUC.length; i++) {
// //         if(wordsInUC[i] === " ") {
// //             ansWordArr[i] = " ";
// //         } else {
// //             ansWordArr[i] = "_";
// //         }
// //     }
// // }


// // function runs at the start of page and used to restart after game isFinished
// function setup() {
//     // //picks random word from words list
//     // ranNum = Math.floor(Math.random() * wordsInUC.length);
//     // ansWord = wordsInUC[ranNum];
//     // // ansWord = wordsInUC[Math.floor(Math.random() * wordsInUC.length)];if use this then no ranNum, hence stored in ranNum 1st before using it

//     // ansWordArr = [];//if this line was removed, when guessing next song, there is some alphabets already shown at the end of the game, coz in global variable it does not know what value ansWord will be holding

//     // // adds "_" to ansWordArr
//     // for (var i = 0; i < ansWord.length; i++) {
//     //     if (ansWord[i] === " ") {
//     //         ansWordArr[i] = " ";
//     //     } else {
//     //         ansWordArr[i] = "_";
//     //     }
//     // }

//         // var ansWord = wordsInUC[gameLevel].split('');
//         ansWordArr = [];
//             for (var i = 0; i < ansWord.length; i++) {
//                 if(ansWord[i] === " ") {
//                 ansWordArr[i] = " ";
//         }   else {
//                 ansWordArr[i] = "_";
//         }
//     }

//     // reset the variables
//     numGuessesRemaining = maxNumGuesses;
//     guessedLetters = [];

//     //removes color from numGuesses
//     document.getElementById("numGuesses").style.color = "";

//     //show the selected elements on the screen
//     updateScreen();

//     // //set both numWins and numLosses = 0;
//     // numWins = 0;
//     // numLosses = 0;
// };

// //updates the HTML from the functions
// function updateScreen() {
//     document.getElementById("numWins").innerText = numWins;
//     document.getElementById("numLosses").innerText = numLosses;
//     document.getElementById("numGuesses").innerText = numGuessesRemaining;
//     document.getElementById("answerWord").innerText = ansWordArr.join("");//shows the lines
//     document.getElementById("guessedLetters").innerText = guessedLetters;
// };

// //function to check the key that's pressed
// function checkGuess(letter) {
//     //if letter is not in guessedLetters array then push the letter to the array, -1 means no match found in array but at this point all letters memang not in guessed letter, possibility of pushing the correct letter tho, hence else comes on line 89 to check is letter correct onot
//     if (guessedLetters.indexOf(letter) === -1) {
//         guessedLetters.push(letter);
//         //if the letter isn't in the answer word then -1 the numGuessesRemaining
//         if (ansWord.indexOf(letter) === -1) {
//             numGuessesRemaining--;
//             //if numGuessesRemaining is 3 or less then change the color, text changes color
//             if (numGuessesRemaining <=3) {
//                 document.getElementById("numGuesses").style.color = "#e12d2e";
//             }
//             //if letter is in answer then replace the positioned "_" with the letter
//         } else {
//             for (var i = 0; i < ansWord.length; i++) {
//                 if (letter === ansWord[i]) {
//                     ansWordArr[i] = letter;
//                 }
//             }
//         }
//     }

// };

// //function to check if the player is a winner for that particular round
// function isWinner() {
//     //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
//     if (ansWordArr.indexOf("_") === -1) {
//         numWins++;
//         gameLevel++;
//         isFinished = true;
//     }
// };

// var moveToNextLevel = function() {
//     ansWord = wordsInUC[gameLevel];
//     isFinished = false;
// }

// var checkWin = function() {
//     /*
//     if letters found = secret Word length you win the game
//     if not, carry on. */
//     if (ansWordArr.indexOf("_") === -1){
//         numWins++;
//         gameLevel++;
//         isFinished = true;
//             if (numWins === wordsInUC.length) {
//                 isFinished = true;
//                 setup();
//                 window.location.reload(true);// Reload the current page without the browser cache
//         } else {
//             //need a function that moves on to next game
//             moveToNextLevel();
//         }
//     }
// }

// //function to help player move on to next level and stops once numWins = 16 (16 is max num of words d, can see it as 16 random levels of word) **Eg if won twice, then lose 1 round. the winning counter remains 2?
// function moveToNextRoundTillComplete() {
//     isWinner();
//     if(numWins === 3) {
//         isFinished = true;
//         alert("You're a DJ!");
//         setup();
//         window.location.reload(true);// Reload the current page without the browser cache
//     }
// }

// //function to check if player is a loser for that particular round
// function isLoser() {
//     // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
//     if(numGuessesRemaining <= 0) {
//         numLosses++;
//         isFinished = true;
//         //setting numLosses to another color
//         document.getElementById("numLosses").style.color = "#e12d2e";
//     }

// };

// //trying to create a function that stops game for each loosing round, and turning the numLosses back to zero, need to use isLoser
// function stopsGameForEachLoosingRound() {
//     isLoser();
//     if(numLosses === 1) {
//         isFinished = true;
//         setup();
//         window.location.reload(true);// Reload the current page without the browser cache
//     }
// }

// //both numWins = 0 and numLosses = 0 in stopsGame function and the numWins = 0 in moveTonextroundtill complete doesn't really reset game, it just reset back counter = 0. Maybe can do a function that reset games whenever it detects that both numWins = 0 && numLosses = 0

// //event listener for key pressed, mainly checking if all letters has been correctly guessed or still have lives remaining, then continue to allow players to guess or press any letter. In else statement, if user key in letters between a-z, first is to transform whatever they have key in to uppercase alphabets, then display whatever is in updateScreen function, then call isWinner and isLoser for incrementing wins or losses but infinity games coz dun have a stopping condition.
// document.onkeyup = function(event) {
//     //if isFinished is true then restart the game to the initial setup
//     //and switch isFinished back to false
//     if (isFinished) {
//         setup();
//         isFinished = false;
//     } else {
//         //check to see if only letters A-Z are pressed
//         //functions are executed when user presses A-Z key, http://gcctech.org/csc/javascript/javascript_keycodes.htm, a = 65, z = 90, so between 65-90
//         if(event.keyCode >= 65 && event.keyCode <= 90) {
//             checkGuess(event.key.toUpperCase());
//             updateScreen();
//             // isWinner();
//             moveToNextRoundTillComplete();
//             // isLoser();
//             //game did stop but still can play?
//             stopsGameForEachLoosingRound();
//         }
//     }
// };




// setup();
// updateScreen();
// //for audio hints, position need to be below setup() updateScreen();
// var hintAudio = [];
// function audio () {
//     for (var i = 1; i < 17; i++){
//         audioName = 'songs/audio' + i + '.mp3';
//         hintAudio.push(new Audio(audioName));
//      }
//  };

// //Get Hint
// hint1.onclick = function() {

//      var music = hintAudio[ranNum];
//      music.play();
// };
// audio();


// //need smth like if numWins + numLosses = wordsinUC.length, the game stops (showing have finite questions)

// console.log(ansWord);



// function shuffle(arra1) {
//     var counter = arra1.length, temp, index;

// // While there are elements in the array
//     while (counter > 0) {
// // Pick a random index
//         index = Math.floor(Math.random() * counter);
// // Decrease ctr by 1
//         counter--;
// // And swap the last element with it
//         temp = arra1[counter];
//         arra1[counter] = arra1[index];
//         arra1[index] = temp;
//     }
//     return arra1;
// }
// // console.log(shuffle(wordsInUC));
//     var newArray = shuffle(wordsInUC);