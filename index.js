#!/usr/bin/env ts-node
import inquirer from "inquirer";
var answers = await inquirer.prompt([{
        name: "guessedNumber",
        type: "number",
        message: "please enter number from 1-10"
    }]);
var randomNunber = Math.floor(Math.random() * 10 + 1);
if (answers.guessedNumber === randomNunber) {
    console.log("you have Guessed the right number");
}
else {
    console.log(`you are wrong and the correctnumber is ${randomNunber}`);
}
