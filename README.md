# guess-the-word-unit1-project

# Motivation
- this game will help me understand setInterval and setTimeOut
- this game will help me review and shore up my javascript basics
- try to get the bare minimum out

#Build a guess-the-word game
- Build and test the game by running it in the smallest possible parts, step by step 
- starting from the beginning.

#Instructions

Press any alphabet key (A-Z, a-z) to start game. Non-alphabet keys are ignored. The theme of the game is 'Songs'. The game will randomly select a song from its internal list. It will then display a blank word using underscores to represent the letters in the word. It is possible to have a multi-word song.

If a correct letter is guessed, the game will reveal the letter in its correct location. If an incorrect letter is selected, then it will add the letter to a list of incorrectly guessed letters and decrement the remaining guesses count.

If the user guesses the correct song name before remaining guesses equal zero, then the game increments the number of wins and restarts the game by selecting a new random song title and reseting the game parameters.

If the user does not guess the correct song name within the allocated number of guesses, then the game resets.

#Build the CSS for your game as you go along.

#Setup
- create an index.html.
- create a script.js file.
- create a style.css file
- create a working game

#Part 1
 - Have a body that contains element needed, wrap it in container. Basic set up

#Part 2
- Make a button that allows player to type in ONLY ONE LETTER (alphabet, so can .lowercase the answer and inputs so that even if player still type capital, it doesn't affect input)to guess

-Answer display can be in capital letter (styled using CSS)

- Make a guess button
- Use CSS animation to animate filling the board.
- Generate the lines
- Don't be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you're trying to figure out how to change some text when the game is over but you haven't solved the win/lose game logic, you can create a button to simulate that until then.
Use pseudo code write out notes to yourself about what needs to happen next in your program
Write comments comments are notes to yourself about what your code does. this will help you if you forget later (remember that explaining your code is a requirement of the project)
Document your functions use the exercise of defining your function data as an opprtunity to think about what your program needs to do

#Part 3
- Aim: Make the horizontal line appear same length as the word that player is suppose to guess for each round

- As player types any letter, 
- First is ensure that the typed letter do appear on the lines above first. Maybe first is set few lines, then dun check whether answer correct onot, just check if it takes in input from what player types. 
- Start with horizontal lines appear, as a letter is being key in, the horizontal line disappear and is replace with the letter that player types.maybe like hide 'B' behind horizontal line, visibility hidden or display none, then when player type smth, the line disappears and B reappears (https://wdi-sg.github.io/gitbook-2019/02-js/browser-js/dynamic-style.html)

-After type in a letter, make sure that player click guess first. otherwise game won't go on

-After clicking guess button, remove all letters in the button element so that it appears empty and player can type in another letter

- If this works, move on to setting the number of lines (numOfLines) to appear same with (correcAnsweredSong)

- After this, can start setting winning condition.

- Check if (typedLetter) is same as any of the lines on the guessedLetter. If yes, the correct letter will appear. After the guessedLetter appear, need to make sure that if player geh siao click again the same alphabet, ntg happens.

- If (typedLetter) isn't in any of the lines of guessedLetter, deduct a live. Max 7 lives.

- After 7 lives has been deducted, alert, you lose

- Allow the game to continue if player guessed an alphabet correctly or wrongly, as long as they did not use up their 7 lives

- For winning, once all the lines on (guessedLetter) has been filled up with the (correctAnswer), alert, you win.

- Remember to deduct a word from the list of (correctAnswer) each time players correctly fill up the guessedLetter, ie after completing each round of correctly guessed word!

- Keep track of typedLetter !=== guessedLetter in a js variable, it serves as a counter to keep track of losing condition

- Keep track of total wins, once all 15 rounds are clear, alert another "You're the champion//You're a radio DJ" keep track  of each round when player wins in a js variable, to get the total 15 round of wins, maybe can set correctlyGuessedWord.length === correctlyGuessedAnswer as winning condition

- With every win, store in a variable like correctlyGuessedWord? // can add counter to show how many words has player guessed correctly

- An array matching an arrays?

#One way to represent the state of the board as data in javascript could be:

var board = [
  [ null, null, "O" ],
  [ null, null, "O" ],
  [ null, "O", null ]
];
Or:

var board = {
  top: [null,"X",null],
  middle: [null,null,null],
  bottom: ["O","X","O"]

};
Use and modify this data structure as the players play.

Use this data structure to see if one player or the other has the correct values in the correct squares for a "win".

#Part 4
Move to the 2nd word and repeat part 3, proceed to next turn if 1st turn player wins. If halfway lose, restart the game

#Part 5 - further
- Add 1-2 hints for every turn
- Hint 1: Try incorporate audio as hint (if this not doable then just stick to hint 2)
- Hint 2: Some clues as hint

#Part 6 - further
- Get player's name and display that back to them as they play and win

#Part 7 - further
- Add timer: 	When the player goes above the time limit, alert they lose. Something like the whole game has a duration of 3 minutes only, then depend whether they win or lose in between
             For every correctly guessedLetter === one of the letters in correctAnswer, add 3 seconds
             For every wrongly guessedLetter !=== one of the letters in correctAnswer, deduct 3 seconds

#Part 8 - further
- Have a start game button that disappears when the game is started
- Have the button reappear when the game has ended
- Otherwise just create a button with reset function


#Part 9 - further
When one player wins, show them a congratulations screen / animation. Randomize this for every win.

#Part 10 further - a new category
Refactor your code so that players can choose to play another category that they likes. Re-use the code that keeps track of players, and keeps track of win state. Ask if they would like to try another category