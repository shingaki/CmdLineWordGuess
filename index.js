var Word = require("./word.js");
var inquirer = require("inquirer");

//letterArray
var letterArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
];


var ranIndex = Math.floor(Math.random() * citiesInTexas.length);
var cityToGuess = citiesInTexas[ranIndex];

var theWord = new Word(cityToGuess);
console.log("THE WORD -- " + theWord);

var needNewWord = false;
var wrongGuesses = [];
var correctGuesses = [];
var guessesLeft = 10;

//the logic to play the Game


function playTheGame() {

    console.log("playTheGame");

    if (needNewWord) {
        console.log("New Word Needed");
        var ranIndex = Math.floor(Math.random() * citiesInTexas.length);
        var cityToGuess = citiesInTexas[ranIndex];

        // console.log("cityToGuess " + cityToGuess);

        theWord = new Word(cityToGuess);
        console.log("New Word Again " + theWord);

        // console.log("the Word " + theWord);

        needNewWord = false;
    }

    // holds the word that is complete
    var wordGuessed = [];

    theWord.letters.forEach(checkWordComplete);

    console.log("TEXT " + wordGuessed);

    if (wordGuessed.includes(false)) {
        console.log("inside of wordGuessed");
        inquirer.prompt([
            {
                type: "input",
                message: "Please select a letter",
                name: "letterSelected"
            }
        ]).then(function (input) {
            console.log("Letter Entered " + input.letterSelected);
            if (!letterArray.includes(input.letterSelected) ||
                input.letterSelected.length > 1) {
                console.log("\nPlease try again!\n");
                playTheGame();
            } else if (wrongGuesses.includes(input.letterSelected) ||
                correctGuesses.includes(input.letterSelected)) {
                console.log("\nYou have already guessed that letter you selected\n");
                playTheGame();
            } else if (input.letterSelected === "") {
                console.log("\nYou did not make a letter selection.\n")
                playTheGame();
            } else {
                var checkWordArray = [];

                console.log("In the last else statement");

                theWord.playerGuess(input.letterSelected);

                console.log("Is it true or false " + theWord.playerGuess.guessed);

                theWord.letters.forEach(wordCheck);

                console.log("checkWordArray.join " + checkWordArray.join(""));
                console.log("wordGuessed.join " + wordGuessed.join(""));

                if (checkWordArray.join("") === wordGuessed.join("")) {
                    console.log("\nIncorrect\n");

                    wrongGuesses.push(input.letterSelected);
                    guessesLeft = guessesLeft - 1;

                } else {
                    console.log("\nCorrect\n");
                    correctGuesses.push(input.letterSelected);
                }

                theWord.displayTheWord();

                console.log("Guesses Left: " + guessesLeft + "\n");

                console.log("Letters Guessed: " + wrongGuesses.join("") + "\n")

                if (guessesLeft > 0) {
                    playTheGame();
                } else {
                    console.log("You lost the game!\n");
                    restartTheGame();
                }

                function wordCheck(ltr) {
                    console.log("in the wordCheck function");
                    checkWordArray.push(ltr.guessed);
                    // console.log("wordCheck  " + ltr.guess);
                    console.log("checkWordArray " + checkWordArray);
                }
            }
        });
    } else {
        console.log("YOU WIN!\n");
        restartTheGame();
    }

    function checkWordComplete(ltr) {
        wordGuessed.push(ltr.guessed);
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

playTheGame();








