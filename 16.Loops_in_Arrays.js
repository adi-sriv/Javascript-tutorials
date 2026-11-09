let num = [10,20,30,40,50,60,70];
//classical for loop
// for(let i=0; i<num.length; i++){
//     console.log("element at "+ i + " is " + num[i])
// }

//foreach loop it iterates over each element of the array and executes the provided function for each element.
//foreach loop is a higher-order function that takes a callback function as an argument and applies it to each element of the array. 
// It does not return a new array, but instead performs the specified operation on each element of the original array.

// num.forEach(function(element){
//     console.log("square of " + element + " is " + element*element)
// })  



//for html collections firstly we need to convert it into an array using Array.from() method and then we can use forEach loop on it.
//Arrays.from is used to create a new array from an array-like or iterable object. 
// It takes an array-like or iterable object as an argument and returns a new array containing the elements of the original object.


// let htmlCollection = document.getElementsByTagName("p");
// let arr = Array.from(htmlCollection);

// arr.forEach(function(element){
//     console.log(element.innerText)
// })

// let names = "Harry"
// let arr = Array.from(names)
// console.log(arr)


//for...of loop is used to iterate over the elements of an iterable object, such as an array, string, or set.
// It provides a simpler syntax for iterating over the elements of an iterable object compared to the classical for loop or forEach loop. 
// The for...of loop automatically handles the iteration and provides direct access to each element of the iterable object.

// for(let element of num){
//     console.log("square of " + element + " is " + element*element)
// }

//for..in loop is used to iterate over the properties of an object.
// It provides a way to access the keys (property names) of an object and perform operations on them. 
// In arrays, for...in loop iterates over the indices (keys) of the array, allowing you to access the elements using those indices.

// for(let index in num){
//     console.log("indexes of arrays are : " + index )
// }

