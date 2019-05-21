var Letter = require("./letter.js");


function Word(theWord) {
    this.letters = [];
    this.theWord = theWord;


    for (var i = 0; theWord.length > i; i++) {
        var letter = new Letter(theWord[i]);
        this.letters.push(letter);
        // this.letters.push(new Letter(theWord[i]));
    }


    this.displayTheWord = function () {
        var displayString = "";

        for (var j = 0; this.letters.length > j; j++) {
                displayString = displayString + this.letters[j].letter + " ";
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





