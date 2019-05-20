var Word = require("./word.js");
var inquirer = require("inquirer");

//letterArray
var letterArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

var citiesInTexas = ["Dallas",
    "Plano",
    "Frisco",
    "McKinney",
    "San Angelo",
    "Houston",
    "Austin",
    "Tyler",
    "Lubbock",
    "Round Rock",
    "Canton",
    "Keller Springs",
    "DeSoto",
    "Duncanville",
    "Prosper",
    "Little Elm",
    "Melissa",
    "Celina",
    "Midlothian",
    "Waco",
    "Grand Prairie",
    "Arlington"
]


function getNewWord() {
    var ranIndex = Math.floor(Math.random() * citiesInTexas.length);
    var cityToGuess = citiesInTexas[ranIndex];
    var theWord = new Word(cityToGuess);
    var needNewWord = false;
    return theWord;
}



var wrongGuesses = [];
var correctGuesses = [];
var guessesLeft = 10;
var needNewWord = false;

//the logic to play the Game


function playTheGame() {
    if (needNewWord) {
        theWord = getNewWord();
    }

    // wordComplete
    var wordGuessed = [];

    if (wordGuessed.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Please select a letter",
                name: "letterSelected"
            }
        ]).then(function (input) {
            if (!letterArray.includes(input.letterSelected) || input.letterSelected.length > 1) {
                console.log("\nPlease try again!\n");
                playTheGame();
            } else if (wrongGuesses.includes(input.letterSelected) || correctGuesses.includes(input.letterSelected)) {
                console.log("\nYou have already guessed that letter you selected\n");
                playTheGame();
            } else if (input.letterSelected === "") {
                console.log("\nYou did not make a letter selection.\n")
                playTheGame();
            } else {
                var checkWordArray = [];

                theWord.playerGuess(input.letterSelected);

                theWord.letters.forEach(checkWord);

                if (checkWordArray.join("") === wordGuessed.join("")) {
                    console.log("\nIncorrect\n");

                    wrongGuesses.push(input.letterSelected);
                    guessesLeft = guessesLeft - 1;
                } else {
                    console.log("\nCorrect\n");
                    correctGuesses.push(input.letterSelected);
                }

                theWord();

                console.log("Guesses Left: " + guessesLeft + "\n");

                console.log("Letters Guessed: " + wrongGuesses.join("") + "\n")

                if (guessesLeft > 0) {
                    playTheGame();
                } else {
                    console.log("You lost the game!\n");
                    restartTheGame();
                }

                function wordCheck(ltr) {
                    checkWordArray.push(ltr.guess);
                }
            }
        });
    } else {
        console.log("YOU WIN!\n");
        restartTheGame();
    }

    function checkWord(ltr) {
        wordGuessed.push(ltr.guess);
    }

    function restartTheGame() {
        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to:",
                choices: ["Play Again", "Exit"],
                name: "playAgain"
            }
        ]).then(function (input) {
            if (input.restart === "Play Again") {
                needNewWord = true;
                wrongGuesses = [];
                correctGuesses = [];
                guessesLeft = 10;
                playTheGame();
            } else {
                return;
            }
        });
    }
}
    getNewWord();
    playTheGame();








