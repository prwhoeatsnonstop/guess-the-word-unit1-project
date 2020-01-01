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
var gameLevel = 0;//to increment game level till it reaches 16 then game ends
var ranNum;//to generate random num later to be assigned for each round of words
var maxNumGuesses = 7; // max number of guesses
var guessedLetters = []; // store the guessed letters
var ansWordArr = []; // store the "_" & " " and to be used to replace the word answer
var numGuessesRemaining = 0; // number of guesses remaining
var numWins = 0; // number of wins
var numLosses = 0; // number of losses
var isFinished = false; // when true, game can start again
var hintAudio = [];


//The shuffle function, what it does is that it starts at the end of the array and swaps the last element with somewhere random inside the array, and keeps doing that for each element of the array until the beginning.
//Add an extra argument to the Fisher-Yates shuffle. (assumes that your arrays are equal length)
//credits to Stuart for telling me the original Fisher-Yates-shuffle. Went on to find Shuffle multiple javascript arrays in the same way
//https://stackoverflow.com/questions/18194745/shuffle-multiple-javascript-arrays-in-the-same-way
function shuffle(obj1, obj2) {
  var index = obj1.length;
  var rnd, tmp1, tmp2;

  while (index) {
    rnd = Math.floor(Math.random() * index);
    index -= 1;
    tmp1 = obj1[index];
    tmp2 = obj2[index];
    obj1[index] = obj1[rnd];
    obj2[index] = obj2[rnd];
    obj1[rnd] = tmp1;
    obj2[rnd] = tmp2;
  }
}

shuffle(wordsInUC, hintAudio);

console.log(wordsInUC, hintAudio);

 // the word that is being played currently
var ansWord = wordsInUC[gameLevel].split('');



// function runs at the start of page and used to restart after game isFinished
function setup() {

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

// //TODO: Implement individual audio as hints
// function audio () {
//     for (var i = 1; i < 17; i++){
//         audioName = 'songs/audio' + i + '.mp3';
//         hintAudio.push(new Audio(audioName));
//     }
// };
// audio();
// //it's playing the same song as index 0 (shuffled array of hintAudio and wordsInUC), how to ensure next round also same song?
// hint1.onclick = function() {

//     var music = hintAudio[0];
//     music.play();
// };

// //TODO: Testing timeout function
// var timeoutHandle;
//     function countdown(minutes, seconds) {
//         function tick() {
//             var counter = document.getElementById("timer");
//             counter.innerHTML =
//                 minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
//             seconds--;
//             if (seconds >= 0) {
//                 timeoutHandle = setTimeout(tick, 1000);
//             } else {
//                 if (minutes >= 1) {
//                     // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
//                     setTimeout(function () {
//                         countdown(minutes - 1, 59);
//                     }, 1000);
//                 }
//             }
//         }
//         tick();
//     }

//     countdown(2, 30);

// window.onload = function(){
//  setTimeout(function(){
//    alert("Game Over!");
//     window.location.reload(true);// Reload the current page without the browser cache
//  }, 150000);
// };