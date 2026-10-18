// Q1 Create a string and try to add no to it
let a = "Hello"
let b = 5
console.log(a + b) // Hello5
console.log(typeof (a + b)) // string
console.log(a - b) // NaN
console.log(typeof (a - b)) // number
console.log(a * b) // NaN
console.log(typeof (a * b)) // number
console.log(a / b) // NaN
console.log(typeof (a / b)) // number

// Q2 create a constant object and try to change a property on it
const person1 = {
    name: "John",
    age: 30
}

person1.age = 31 // This is allowed, we can change properties of a constant object
console.log(person1.age) // 31

// person1 = { name: "Jane", age: 25 } // This will throw an error, we cannot reassign a constant object
person1.name = "Jane" // This is allowed, we can change properties of a constant object
console.log(person1.name) // Jane

person1.address = "New York" // This is allowed, we can add new properties to a constant object
console.log(person1.address) // New York
console.log(person1) // { name: 'Jane', age: 31, address: 'New York' }


//Q3 create a 5 dictionary object and access a value by key
let dictionary = {
    "apple": "A fruit that is typically red, green, or yellow.",
    "banana": "A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
    "cat": "A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.",
    "dog": "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice.",
    "elephant": "A large herbivorous mammal with a trunk, long curved ivory tusks, and large ears."
}

console.log(dictionary.apple) // A fruit that is typically red, green, or yellow.
console.log(dictionary["banana"]) // A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.
console.log(dictionary["cat"]) // A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.
console.log(dictionary.dog) // A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice.
console.log(dictionary["elephant"]) // A large herbivorous mammal with a trunk, long curved ivory tusks, and large ears.