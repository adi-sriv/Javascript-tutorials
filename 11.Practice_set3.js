// let obj = { harry : 98, shubham : 70, shivam : 90, mohit : 99, rahul : 95 };


// // normal for loop
// let a = Object.keys(obj);
// // a store the keys of the object in an array
// console.log(a)

// // for (let i = 0; i < a.length; i++) {
// //     console.log("Marks of " + a[i] + " are " + obj[a[i]]);
// // }


// //for in loop
// for (let a in obj) {
//     console.log("Marks of " + a + " are " + obj[a]);
// }

// for in loop is used to iterate over the properties of an object. In this case, 
// it iterates over each key in the `obj` object and prints out the corresponding value (marks)
// for each key (student name).

//Problem 2
// let cn = 47;
// let i;
// while (i != cn) {
//   console.log("Try again");
//   i = prompt("Enter a number : ");
// }

// console.log("Congratulations your number matches");

//Problem 3
const mean = (a,b,c,d) => {
  return (a+b+c+d)/4
};

console.log("Mean of four numbers",mean(13,11,16,18))