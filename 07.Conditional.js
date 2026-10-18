//Taking input from user
// let a = prompt("What is your age?")
// console.log(typeof a, "your age is", a)

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Enter your name: ", (name) => {
//     console.log("Hello", name);
//     rl.close();
// });

// rl.question("Enter your age: ", (age) => {

    
//     //Type Conversion
//     age = Number.parseInt(age) // age =  Number(age) (Converting string to number)
//     console.log(typeof age, age)

//     if (age < 0 )
//         console.log("Age is invalid")
//     else if(age < 9)
//         console.log("You can not think of driving")
//     else if(age > 9 && age < 18)
//         console.log("You are not eligible for driving license")
//     else
//         console.log("You are eligible for driving license")

//     rl.close();
// });

let age = 15
console.log("You can", age>=18 ? "drive" : "not drive") // You can drive