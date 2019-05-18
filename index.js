var inquirer = require("inquirer");

var WordGuess = require("./word.js");

var myWord = "Apples"
var wordToGuess = new WordGuess(myWord);

var toDisplay = wordToGuess.convertToString(myWord);

console.log("to display " + toDisplay);







// inquirer.prompt([
//     {
//         name: "letterChoice",
//         message: "Choose Your Letter?"
//     }
//
// ]).then(function (letterChoice) {
//     new WordGuess(letterCoice)
// })