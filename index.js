var Word = require("./word.js");
var inquirer = require("inquirer");

//letterArray
var letterArray = "abcdefghijklmnopqrstuvwxyz";

var citiesInTexas = ["dallas",
    "plano",
    "frisco",
    "mckinney",
    "san angelo",
    "houston",
    "austin",
    "tyler",
    "lubbock",
    "round rock",
    "canton",
    "keller springs",
    "desoto",
    "duncanville",
    "prosper",
    "little elm",
    "melissa",
    "celina",
    "midlothian",
    "waco",
    "grand prairie",
    "arlington"
];


var ranIndex = Math.floor(Math.random() * citiesInTexas.length);
var cityToGuess = citiesInTexas[ranIndex];

var theWord = new Word(cityToGuess);

var needNewWord = false;
var wrongGuesses = [];
var correctGuesses = [];
var guessesLeft = 10;

//the logic to play the Game


function playTheGame() {


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

    if (wordGuessed.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter a lowercase letter between a-z.",
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
                    checkWordArray.push(ltr.guessed);
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








