function avg(x, y) {
    return (x + y) / 2;
}

const sum = (x, y) => {
    return x + y;
};

const hello = () => {
    console.log("Hello, World!1");
    return "Hello World!2";
}

hello(); 
console.log(hello())

let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b: ",avg(a, b));
console.log("Average of b and c: ",avg(b, c));
console.log("Average of a and c: ",avg(a, c));

console.log("Sum of a and b is: ",sum(a, b));


