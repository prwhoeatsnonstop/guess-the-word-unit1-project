# Guess The Word

Word-Guessing Game for category of songs

## Description

Game with logic for General Assembly SEI 21, project 1.

## How game works

- Press any letter to begin
- For each correctly guessed round, win counter increments by 1. Remaining lives will be reset back to 7 lives for each round
- In order to win, win counter = 16.
- For each losses, game will auto reset.
- Click 'hint' button for audio hints (Currently is playlist of multiple tracks instead of individual track)
- Upon completing 16 rounds of games or each losses, the list of words will be reshuffled again from the original array of words

## Further list to work on

- Layout using CSS/Flexbox (UI)
- Decrement of lives seems buggy, sometimes it is not decrementing (guessedLetters and remaining lives not tally, guessedLetters can be more than remaining lives at times)
- Add audio hints INDIVDUALLY instead of playlist
- Add timer

## Source

- Audio from https://mp3paw.com/ (individual songs) + https://audio-joiner.com/ (joining multiple tracks)
- Guide on how to shuffle the original array of words https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php (found out this was more workable than Math.floor(Math.random) for arrays), additionally can shuffle multiple javascript arrays in the same way