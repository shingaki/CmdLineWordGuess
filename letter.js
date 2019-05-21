//constructor Letter
function Letter(theLetter) {
    this.letter = theLetter;
    this.guessed = false;



this.buildString = function () {
    if (this.letter == " ") {
        this.guessed = true;
        return " ";
    } else if (this.guessed == false) {
        return "_";
    } else {
        return this.letter
    }
};


// function return to determine if the letter guessed matches one or
// more of the letters in the word, and set guessed accordingly

    this.guess = function (theGuess) {
        if (theGuess === this.letter) {
            console.log("AAA " + theGuess + " again " + this.letter);
            this.guessed = true;
        }
    }
}



module.exports = Letter;
