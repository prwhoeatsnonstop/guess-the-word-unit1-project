# Guess The Word

Word-Guessing Game for category of songs

## Description

Game with logic for General Assembly SEI 21, project 1.

## How game works

- Press any letter to begin
- For each correctly guessed round, win counter increments by 1. Remaining lives will be reset back to 7 lives for each round
- In order to win, win counter = 16.
- For each losses, game will reset back to 0
- Click 'hint' button for audio hints (Currently is playlist of multiple tracks instead of individual track)
- Upon completing 16 rounds of games or each losses, the list of words will be reshuffled again from the original array of words

## Things to improve

- Layout using CSS/Flexbox (UI)
- Add audio hints INDIVDUALLY instead of playlist
- Add timer

## Source

- Audio from https://mp3paw.com/ (individual songs) + https://audio-joiner.com/ (joining multiple tracks)
- Guide on how to shuffle the original array of words https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php (found out this was more workable than Math.floor(Math.random) for arrays), additionally can shuffle multiple javascript arrays in the same way

## Lessons learned

- Have faith: Faith that things are going wrong for a logical and discoverable reason, faith that problems are fixable, faith that there is a way to accomplish the goal. The path from “not working” to “working” might not be obvious, but with patience you can usually find it.

- Variable to be declare first before using it in subsequent places otherwise it won't work(Not a verified fact, an assumption for now) 

//As of 1-1-2020
- Manage to reshuffle arrays
- Notice that guessed letter has minor bug, after first letter, 2 commas appear instead of 1 comma to separate it from next letter
- Added playlist as hints, yet to be able to play individual songs 