var Letter = require("./letter");

var theWord = "Apples";

function Word(theWord) {

    this.letters = [];
    this.theWord = theWord;

    for (var i = 0; theWord.length > i; i++) {
        this.letters.push(new Letter(theWord[i], false));
    }


    this.displayTheWord = function () {
        var displayString = "";

        for (var j = 0; this.letters.length > j; j++) {
                displayString = displayString + this.letters[j].charValue + " ";
            }
        console.log(displayString);
        }

    this.playerGuess = function(guessedLetter) {
        for (var x = 0; this.letters.length > x; x++) {
            this.letters[i].guess(guessedLetter);
        }
    }
}


module.exports = Word;





