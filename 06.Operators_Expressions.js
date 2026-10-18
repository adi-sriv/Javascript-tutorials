// //Arithmetic Operators
// console.log("Arithmetic Operators") // 9
// let a = 10,b=20
// console.log(a+b) // 30
// console.log(a-b) // -10
// console.log(a*b) // 200
// console.log(a/b , b/a) // 0.5 2.0
// console.log(a%b , b%a) // 10 0
// console.log(a**2 , b**2) // 100 400
// console.log(--a , b++) // 9 20

// // Assignment Operators"
// console.log("Assignment Operators") // 9
// let x = 5
// x += 10 // x = x + 10
// console.log(x) // 15

// x -= 5 // x = x - 5
// console.log(x) // 10

// x *= 2 // x = x * 2
// console.log(x) // 20

// x /= 4 // x = x / 4
// console.log(x) // 5

// x %= 3 // x = x % 3
// console.log(x) // 2

// x &&= 1 // x = x && 1
// console.log(x) // 1

// x ||= 0 // x = x || 0
// console.log(x) // 1

// x ??= 5 // x = x ?? 5
// console.log(x) // 1

//Comparison Operators
// console.log("Comparison Operators") // 9
// let a = 10,b=20
// console.log(a==b) // false
// console.log(a!=b) // true
// console.log(a>b) // false
// console.log(a<b) // true
// console.log(a>=b) // false
// console.log(a<=b) // true

// let c = "10",d = 10
// console.log(c==d) // true
// console.log(c===d) // false
// console.log(c!=d) // false
// console.log(c!==d) // true

// //Logical Operators
// console.log("Logical Operators") // 9
// let x = true,y = false

// console.log(x && y) // false
// console.log(x || y) // true
// console.log(!x) // false
// console.log(!y) // true

//Modern JavaScript Operators
console.log("Modern JavaScript Operators")
let age = 15
console.log(age >= 18 ? "Adult" : "Minor") // Minor

// Nullish Coalescing Operator
let name = null
console.log(name ?? "Default Name") // Default Name 
// Optional Chaining Operator
let person = {
    name: "John",
    address: {
        city: "New York"
    }
}
console.log(person?.address?.city) // New York
console.log(person?.address?.zip) // undefined

// Spread Operator
let arr1 = [1, 2, 3]
let arr2 = [...arr1, 4, 5]
console.log(arr2) // [1, 2, 3, 4, 5]
