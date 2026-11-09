const prompt = require("prompt-sync")();

//P1
// let arr = [10,20,40,30,50]

// let input = prompt("Enter the numer to add in array : ")

// input = Number.parseInt(input)
// arr.push(input)

// console.log(arr)

//P2
// let arr2 = [2,3,4,5,6,7]

// let input
// do{
//   input = (prompt("Enter the numer to add in array : "))
//   input = Number.parseInt(input)
//   arr2.push(input)
//   console.log(arr2)
// }while(input != 0);

// console.log(arr2);

//P3
// let arr = [];
// console.log("Enter the elements in array: press / to stop");

// while (true) {
//   let input = prompt("Enter the element: ");
//   if (input !== "/") {
//     let num = Number.parseInt(input);

//     if (!isNaN(num)) arr.push(num);
//   } else break;
// }

// console.log("The array is :");
// for (let num of arr) {
//   console.log(num);
// }


// let newarr1 = arr.filter((value)=> {
//   return value > 10
// })

// console.log("The elements greater than 10 in arrays are :" , newarr1)

//P4
// let arr1=[10,20,30]

// let newarr1 = arr1.map( (value) => {
//   return value * value
// });

// console.log("the new array is: ",newarr1)

//P5
let arr=[]

let n = Number.parseInt(prompt("Enter the value of n: "))
let i = 1
while(n != 0)
{
  arr.push(i)
  i++
  n--
}

let fact = arr.reduce((val1,val2) => {
    return val1 * val2;
},1);

console.log("Factorial using reduce is : ",fact)