# Guess The Word

Word-Guessing Game for category of songs

## Description

Game with logic for General Assembly SEI 21, project 1.

## How game works

- Press any letter to begin
- For each correctly guessed round, win counter increments by 1. Remaining lives will be reset back to 7 lives for each round
- In order to win, win counter = 16.
- Max 3 round of losses, then it's game over.
- Click 'hint' button for audio hints (Currently is playlist of multiple tracks instead of individual track)
- Upon completing 16 rounds of games or each losses, the list of words will be reshuffled again from the original array of words

## Further list to work on

- Layout using CSS/Flexbox (UI)
- Make each round to be onkeypress for countdown timer to start ticking (currently it starts as soon as word has been correctly guessed)
- Try adding another category of words

## Source

- Audio from https://mp3paw.com/ (individual songs)
- Guide on how to shuffle the original array of words https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php (found out this was more workable than Math.floor(Math.random) for arrays), additionally can shuffle multiple arrays in the same way