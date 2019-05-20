// dependency for inquirer npm package

//constructor Letter
var Letter = function(theLetter, guessed) {
    this.charValue = theLetter;
    this.guessed = guessed;



// function to display underscore or letter

this.buildString = function () {
    if (theLetter == " ") {
        guessed = true;
        return " "
    }
    else if (guessed = false) {
        return "_"
    } else return theLetter
}


// function return to determine if the letter guessed matches one or
// more of the letters in the word, and set guessed accordingly

    this.guess = function (theGuess) {
        if (theGuess === this.theLetter) {
            this.guessed = true;
        }
    }
}



module.exports = Letter;
