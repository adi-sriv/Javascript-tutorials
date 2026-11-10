const prompt = require("prompt-sync")()
let num = Number.parseInt(Math.random() * 100)

let input = Number.parseInt(prompt("Enter your guess :"))

while(true){
  if(num == input){
    console.log("You have guessed the number")
    break;
  }
  else if(num > input){
    console.log("Please enter greater than number your guessed number is lesser")
    input = Number.parseInt(prompt("Enter your new guess :"))
  }
  else{
    console.log("Please enter lesser than number your guessed number is greater")
    input = Number.parseInt(prompt("Enter your new guess :"))
  }
}
