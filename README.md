## Command Line Word Guess

The category of the word guess game include cities located in Texas. 
You must enter lowercase alphabets only. 
The game does not accept numbers or upper case letters.
You can restart the game with a new word when you have provided 10 wrong answers or guessed the city name.



### Approach

First, I developed both the letter.js and word.js. I hard-coded the word to test whether the constructors were working as I expected.

Once I was satisfied with the letter.js and word.js files, I created the index.js file.
This file holds the logic to:

1. Randomly select a city
2. Requests for th eplayer to enter a letter
3. Accepts the letter and determines if the letter is in the name of the city.
4. If th eletter is in the name then it prompts the player for another letter if all letters have not yet been provied. 
5. If the city name is complete then the game will let the player know that they won the game and ask if they want to play aother game> 
6. If the letter is not in the name of the city, the game will check if the player has run out of guesses. 
If the player has not run out of guesses, then the game will decrement the guess count by 1 and ask for another letter.
If the player has run out of guesses< then the game will let the player know that they lost, and that they can choose to play another game.

### Challenges

I had challenges in managing the objects when trying to display them. 
I also had a challenge in building the logic to determine if the player has won or not.



