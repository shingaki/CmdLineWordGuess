// dependency for inquirer npm package

//constructor Letter
var Letter = function(theLetter, guessed) {
    this.charValue = theLetter;
    this.charUnderScore = " _ ";
    this.guessed = guessed;



// function to display underscore or letter if it has been guessed
// called by word constructor

this.displayChar = function () {
    if (this.guessed) {
        console.log(this.charValue)
    } else {
        console.log(this.charUnderScore)
    }
}


// function return underlying character if letter has been guessed
// or placeholder (like an underscore) if the letter has not been guessed
// called by word constructor

    // this.guess = function (theLetter) {
    //     if (letterChoice === this.charValue) {
    //         this.guessed = true;
    //     }
    // }
}



module.exports = Letter;
