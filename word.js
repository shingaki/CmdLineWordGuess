var Letter = require("./letter.js");


function Word(theWord) {
    this.letters = [];

    console.log("What is the word "+ theWord);
    console.log("What is the length " + theWord.length);
    console.log("What is the first position " + theWord[0]);

    for (var i = 0; theWord.length > i; i++) {
        var letter = new Letter(theWord[i]);
        this.letters.push(letter);
        // this.letters.push(new Letter(theWord[i]));
    }


    this.displayTheWord = function () {
        var displayString = "";

        for (var j = 0; this.letters.length > j; j++) {
                displayString += this.letters[j] + " ";
            }
        console.log(displayString + "\n--------------------------------\n");
        }

    this.playerGuess = function(guessedLetter) {
        for (var x = 0; this.letters.length > x; x++) {
            this.letters[x].guess(guessedLetter);
        }
    }
}


module.exports = Word;





