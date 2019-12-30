# Guess The Word

Word-Guessing Game for category of songs

# Description

A typing game for General Assembly SEI 21, project 1.

# How game works

- Press any letter to begin
- For each correctly guessed round, win counter increments by 1. Remaining lives will be reset back to 7 lives for each round
- In order to win, win counter = 16.
- For each losses, game will reset back to 0
- Click 'hint' button for audio hints

# Things to improve

- Remove randomly chosen word from original array

# Source

- Audio from https://mp3paw.com/
- Guide on how to shuffle the original array of words https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php (found out this was more workable than Math.floor(Math.random) for arrays)