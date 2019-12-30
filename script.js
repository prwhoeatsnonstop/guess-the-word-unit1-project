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
    ranNum = Math.floor(Math.random() * wordsInUC.length + 1);
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
    for (var i = 1; i < 17; i++){
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

// // words list
// var words = ["all we know",//audio1
//              "apologize",//audio2
//              "bad liar",//audio3
//              "everything i need",//audio4
//              "good life",//audio5
//              "happier",//audio6
//              "in my place",//audio7
//              "move along",//audio8
//              "numb",//audio9
//              "outside",//audio10
//              "pumped up kicks",//audio11
//              "secrets",//audio12
//              "solo dance",//audio13
//              "someday",//audio14
//              "superheroes",//audio15
//              "the reason",//audio16
// ];

// var wordsInUC = words.map(function(x){
//     return x.toUpperCase();
// }); //changes each element in the array to uppercase. Possible to remove specific element from here since it is actually arrays that store same songs but have been change to upperCase
// var ranNum;//to generate random num later to be assigned for each round of words
// var maxNumGuesses = 7; // max number of guesses
// var guessedLetters = []; // store the letters that have been guessed for each round
// var ansWordArr = []; // store the "_" & " " and to be used to replace the word answer
// var numGuessesRemaining = 0; // number of guesses remaining
// var numWins = 0; // number of wins
// var numLosses = 0; // number of losses
// var isFinished = false; // when true, game can start again
// var ansWord; // the word that is being played currently
// var gameLevel;//to increment game level till it reaches 16 then game ends, maybe dun need
// var correctlyGuessedWords = [];
// var correctlyGuessedLetters = [];
// var counter = 0;
// var arrWithRandomWords = [];


// // function to generate random words from words list and create dashes
// // function createRanWordsAndDashes() {
// //     for(let i = wordsInUC.length — 1; i > 0; i--){
// //   const j = Math.floor(Math.random() * i)
// //   const temp = array[i]
// //   array[i] = array[j]
// //   array[j] = temp
// // }
// //         //picks random word from words list
// //     // ranNum = Math.floor(Math.random() * wordsInUC.length) + 1;
// //     // ansWord = wordsInUC[ranNum];
// //     // wordsInUC.splice(ranNum,1);
// //     // console.log(wordsInUC.length);
// //     // if (wordsInUC.length !== 0)//how to make sure even tho ran num may repeat but we don't allow it to repeat){
// //     //     arrWithRandomWords.push(ansWord);
// //     // // ansWord = wordsInUC[Math.floor(Math.random() * wordsInUC.length)];if use this then no ranNum, hence stored making ranNum as var 1st before using it

// //     ansWordArr = [];//if this line was removed, when guessing next song, there is some alphabets already shown at the end of the game, coz in global variable it does not know what value ansWord will be holding

// //     // adds "_" to ansWordArr
// //     for (var i = 0; i < ansWord.length; i++) {
// //         if (ansWord[i] === " ") {
// //             ansWordArr[i] = " ";
// //         } else {
// //             ansWordArr[i] = "_";
// //         }
// //     }
// // }

// // function runs at the start of page and used to restart after game isFinished
// function setup() {
//     // createRanWordsAndDashes();
//     //picks random word from words list
//     for(let i = 0; i > words.length; i++){
//         console.log(i);
//     // const j = Math.floor(Math.random() * i)
//     // const temp = array[i]
//     // array[i] = array[j]
//     // array[j] = temp
// }
//     // ranNum = Math.floor(Math.random() * wordsInUC.length);
//     // ansWord = wordsInUC[ranNum];
//     // ansWord = wordsInUC[Math.floor(Math.random() * wordsInUC.length)];if use this then no ranNum, hence stored in ranNum 1st before using it

//     ansWordArr = [];//if this line was removed, when guessing next song, there is some alphabets already shown at the end of the game, coz in global variable it does not know what value ansWord will be holding

//     // adds "_" to ansWordArr
//     // for (var i = 0; i < ansWord.length; i++) {
//     //     if (ansWord[i] === " ") {
//     //         ansWordArr[i] = " ";
//     //     } else {
//     //         ansWordArr[i] = "_";
//     //     }
//     // }

//     // reset the variables
//     numGuessesRemaining = maxNumGuesses;
//     guessedLetters = [];

//     //removes color from numGuesses
//     document.getElementById("numGuesses").style.color = "";

//     //show the selected elements on the screen
//     updateScreen();
// };

// //updates the HTML from the functions
// function updateScreen() {
//     document.getElementById("numWins").innerText = numWins;
//     document.getElementById("numLosses").innerText = numLosses;
//     document.getElementById("numGuesses").innerText = numGuessesRemaining;
//     document.getElementById("answerWord").innerText = ansWordArr.join("");//shows the lines
//     document.getElementById("guessedLetters").innerText = guessedLetters;
// };

// //function to check the key that's pressed and turning dashes into words
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
//         isFinished = true;
//     }
// };

// //another function where after win, pop that word from wordsInUC and push into a new array for correctly guessed words? so that words don't repeat themselves?
// //how to grab that random word from wordsInUC and delete it from the selected position in wordsInUC array, and at the same time wordsInUC array will have lesser words so that the math.random has lesser number of words to choose from?

// function keepRemoveThatRandomlyChosenWord() {
//     //maybe put isWinner() here coz before move to next round, gotta at the same time remove that randomly chosen word right?
//     isWinner();
//     //this if statements means check if the random chosen song matches any of the song in wordsInUC, if is a match (means if true), delete that particular word but not able to delete for now
//     for (var i = 0; i < wordsInUC.length; i++) {
//         console.log(wordsInUC[i]);
//         if (wordsInUC[ranNum] === wordsInUC[i]) {
//             wordsInUC.remove(wordsInUC[ranNum]);
//         }
//     }
// }

// //function to help player move on to next level and stops once numWins = 16 (16 is max num of words d, can see it as 16 random levels of word)
// function moveToNextRoundTillComplete() {
//     isWinner();
//     // keepRemoveThatRandomlyChosenWord();
//     if(numWins === 3) {
//         isFinished = true;
//         setup();
//         numWins = 0;
//         alert("You're a DJ!");
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

// //function that stops game for each loosing round, and turning both the numLosses and numWins back to zero, and need to use isLoser()
// function stopsGameForEachLoosingRound() {
//     isLoser();
//     if(numLosses === 1) {
//         isFinished = true;
//         setup();
//         numLosses = 0;
//         numWins = 0;
//     }
// }


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
//             checkGuess(event.key.toLowerCase());
//             updateScreen();
//             // isWinner();
//             // storeCorrectlyGuessedWords();
//             moveToNextRoundTillComplete();
//             // isLoser();
//             stopsGameForEachLoosingRound();
// //probably here do a popout function that alerts user if they win or loss? instead of using alert box
//         }
//     }
// };




// setup();
// updateScreen();
// //for audio hints, position need to be below setup() updateScreen();
// var hintAudio = [];
// function audio () {
//     for (var i = 1; i < 16; i++){
//         audioName = 'songs/audio' + i + '.mp3';
//         hintAudio.push(new Audio(audioName));
//      }
//  };

// //Get Hint (how it still able to detect ranNum from here?)
// hint1.onclick = function() {

//      var music = hintAudio[ranNum];
//      music.play();
// };
// audio();


// //need smth like if numWins + numLosses = wordsinUC.length, the game stops (showing have finite questions)

// console.log(ansWord);
// // words list