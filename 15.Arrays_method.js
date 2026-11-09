// let arr = ["tina", "john", "peter", "james", "mike"];
// arr[1] = "johnny";
// console.log(arr) //tina,john,peter,james,mike
// console.log(typeof arr) //object

// arr = arr.toString();

// console.log(typeof arr) //string
// arr[1] = "john";// no effect because arr is now a string, not an array
// console.log(arr) //tina,john,peter,james,mike

// let arr1 = [10,20,30]
// let arr2 = [40,50,60]

// // join() method is used to join the elements of an array into a string, separated by the specified separator (in this case, "_").

// arr1 = arr1.join("_")

// let var1 = arr2.join("_") 
// // join() method is used to join the elements of an array into a string, separated by the specified separator (in this case, "_").

// console.log(arr1) // [10,20,30]  
// // join() does not modify the original array, 
// // it returns a new string  

// console.log(var1)

// console.log(typeof arr1) //string

// let num1 = [10, 20, 30];
// let r = num1.pop()

// console.log(r) // 30
// console.log(num1) // [10, 20]

// let ele = ["tina", "john", "peter", "james", "mike"];
// console.log(ele.push("jona"))
// console.log(ele) // ["tina", "john", "peter", "james", "mike", "jona"]

// let num = [10, 20, 30, 40, 50,60,70];
// let r = num.shift() // removes the first element from the array and returns it
// console.log(r) // 10
// console.log(num) // [20, 30, 40, 50,60,70]

// let r1 = num.unshift(5) // adds a new element to the beginning of the array and returns the new length of the array
// console.log(r1) // 7
// console.log(num) // [5, 20, 30, 40, 50,60,70]

// let num2 = [10,20,30,40,50,60,70];

// delete num2[2]; // deletes the element at index 2 (30) from the array

// console.log(num2) // [10, 20, empty, 40, 50, 60, 70]

// let arr1 = [10, 20, 30, 40, 50, 60, 70];
// let arr2 = [80, 90, 100];
// let arr3 = [110,120,130];

// // concat() method is used to merge two or more arrays into a new array. 
// // It does not modify the original arrays, but instead returns a new array that contains the elements of the original arrays.
// console.log(arr1.concat(arr2,arr3))

// console.log(arr1) // [10, 20, 30, 40, 50, 60, 70]
// console.log(arr2) // [80, 90, 100]

// let num1 = [80,342, 23, 45, 67, 89, 90, 100];
// // sort() method is used to sort the elements of an array in place and returns the sorted array. 
// // The default sort order is ascending alphabetically by considering them as string, but you can also specify a custom 
// // sort order by providing a compare function as an argument to the sort() method.
// console.log(num1.sort()) // [100, 23, 342, 45, 67, 80, 89, 90]

// console.log(num1) // [100, 23, 342, 45, 67, 80, 89, 90]

// const compareNumbers = (a, b) => a - b; // compare function to sort numbers in ascending order
// const compareNumbers2 = (a,b) => b - a; // compare function to sort numbers in descending order
// console.log(num1.sort(compareNumbers)) // [23, 45, 67, 80, 89, 90, 100, 342]
// console.log(num1.sort(compareNumbers2)) // [342, 100, 90, 89, 80, 67, 45, 23]

// let num1 = [80,342, 23, 45, 67, 89, 90, 100];
// // reverse() method is used to reverse the order of the elements in an array in place and returns the reversed array. 
// // It modifies the original array.
// console.log(num1.reverse()) // [100, 90, 89, 67, 45, 23, 342, 80]
// console.log(num1) // [100, 90, 89, 67, 45, 23, 342, 80]


//splice() method is used to add or remove elements from an array at a specific index.
//its syntax is array.splice(start, deleteCount, item1, item2, ...)
// let ele = [10,20,30,40,50,60,70,80,90,100];
// let deleteval = ele.splice(2, 3,1001,1002,1003); // removes 3 elements starting from index 2 (30, 40, 50) and adds 1001, 1002, 10034 at index 2
// console.log(deleteval) // [30, 40, 50]
// console.log(ele) // [10, 20,1001,1002,1003 ,60, 70, 80, 90, 100]

//slice() method is used to extract a portion of an array and returns a new array.
//it does not modify the original array.
//its syntax is array.slice(start, end)
// let ele = [10,20,30,40,50,60,70,80,90,100];
// let newarr = ele.slice(2, 5); // extracts elements from index 2 to index 4 (30, 40, 50)
// console.log(newarr) // [30, 40, 50]
// console.log(ele) // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]