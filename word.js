var Letter = require("./letter");

var theWord = "Apples";

function WordGuess(theWord) {

    this.letters = [];
    this.theWord = theWord;

    console.log(theWord);

    console.log(theWord.length);

    for (var i = 0; theWord.length > i; i++) {
        this.letters.push(new Letter(theWord[i], false));
    }


    this.convertToString = function () {
        var displayString = "";

        console.log(this.letters.length);
        for (var j = 0; this.letters.length > j; j++) {
            console.log(this.letters[j]);

            if (this.letters[j].guessed) {
                displayString = displayString + this.letters[j].charValue;
            } else {
                displayString = displayString + this.letters[j].charUnderScore;
            }

            console.log(displayString);
        }
        console.log(displayString);
        return(displayString);
    }
}


module.exports = WordGuess;





