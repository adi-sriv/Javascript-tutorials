// // nn ss bb u
// let a = 10
// let b = null
// let c = "Hello"
// let d = Symbol("id 1 ")
// let e = BigInt("122311")
// let f = undefined

// console.log(typeof a) // number
// console.log(typeof b) // object
// console.log(typeof c) // string
// console.log(typeof d) // symbol
// console.log(typeof e) // bigint
// console.log(typeof f) // undefined

// console.log(a,b,c,d,e,f)

//Objects
let person = {
    name: "Aditya",
    age: 25,
    isStudent: true,
    hobbies: ["Reading", "Traveling", "Coding"],
    address: {
        city: "New York",
        country: "USA"
    },
    "hello": function() {
        return ("Hello, World!");
    }
}

console.log(person.name) // Aditya
console.log(person.age) // 25
console.log(person.isStudent) // true
console.log(person.hobbies) // ["Reading", "Traveling", "Coding"]
console.log(person.address.city) // New York
console.log(person.address.country) // USA
console.log(person["hello"]()) // Hello, World!