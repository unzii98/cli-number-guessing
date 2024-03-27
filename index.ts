#!/usr/bin/env node


import inquirer from "inquirer";
// 1) Computer will generate a random number

// 2)User input for guessing number

//3) user input with computer generated and show result 
console.log("Welcome to Unzi-number-guessing Game");
const randomNumber=Math.floor(Math.random()* 6+1);


const answers=await inquirer.prompt([
    {
        name:"userGuesssNumber",
        type:"number",
        message:"Please guess a number between 1- 5: ",

    },
]);
if(answers.userGuesssNumber=== randomNumber){
 console.log("congratulation you guessed right number");
}
else{
    console.log("You guessed wrong number");

}
