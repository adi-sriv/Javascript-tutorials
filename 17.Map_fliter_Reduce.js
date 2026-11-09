//map() it creates a new array by performing a function on each array element
// let num = [10,20,30,40,50,60,70];
// let newArr = num.map(function(element){
//     return element + 2
// })
// console.log(newArr) // [12, 22, 32, 42, 52, 62, 72]
// console.log(num) // [10, 20, 30, 40, 50, 60, 70]

// map and foreach

// map and foreach are similar in that they both iterate over each element of an array and perform a specified operation on them.
// map is used to create a new array by applying a function to each element of the original array, 
// while forEach is used to perform an operation on each element of the original array without creating a new array.

// let num1 = [10,20,30,40,50,60,70];
// num1.forEach(function(element){
//     console.log(element + 2)
// })

// console.log(num1) // [10, 20, 30, 40, 50, 60, 70]

// let num2 = [10,20,30,40,50,60,70];
// let newArr1 = num2.map( (value,index,array) => {

//    console.log(index,array) 
    // index and array will be printed for each element in the array,index is the index of the current element 
    // being processed in the array, and array is the original array that map was called on which is unchanged.
//    return value + 2
// })

// console.log(newArr1) // [12, 22, 32, 42, 52, 62, 72]


// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// let arr = [10,20,30,40,50,60,70];
// let arr2 = arr.filter( (value) => {
//     return value > 30
// })

// console.log(arr2) 
// [40, 50, 60, 70] here filter() method is used to create a new array arr2 that contains only the 
// elements of the original array arr that are greater than 30.


// reduce() method applies a function against an accumulator and each element in the array 
// (from left to right) to reduce it to a single value.

// let arr = [10,20,30,40,50,60,70];
// let sum = arr.reduce( (accumulator,currentValue) => {
//      return accumulator + currentValue
// },0)

// returns 280 here reduce() method is used to calculate the sum of all elements in the array arr.

//console.log(sum) // 280

// this function takes two arguments, accumulator and currentValue. 
// The accumulator is the accumulated value returned by the previous iteration,
// and the currentValue is the current element being processed in the array. 
// The function adds the currentValue to the accumulator and returns the result, 
// which becomes the new value of the accumulator for the next iteration. 
// The second argument to reduce() is the initial value of the accumulator, which is set to 0 in this case.


// Note map,reduce,filter are higher order functions because they take a function as an argument and return a new array or value based on the original array.
// these three functions can also be used as a variable in javascript explained in below example
let num1 = [1,2,3,4,5];

const func_reduce = (accumulator,currentValue) => {
    return accumulator * currentValue
}
let fact = num1.reduce(func_reduce)

console.log(fact) // 120