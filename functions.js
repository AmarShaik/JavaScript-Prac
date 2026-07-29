// ARROW FUNCTIONS vs NORMAL FUNCTIONS 

/*Syntax:

// Normal Function
function functionName(parameters) {
    // code
    return value;
}

// Arrow Function
let functionName = (parameters) => {
    // code
};
*/
// 1. BASIC ADDITION

function add(a, b) {
    return a + b;
}

let addArrow = (a, b) => a + b;

// console.log(add(10, 20));
// console.log(addArrow(10, 20));

// Output: 30
// Explanation: Both functions do same work, arrow function is shorter


// 2. SUBTRACTION

function subtract(a, b) {
    return a - b;
}

let subtractArrow = (a, b) => a - b;

// console.log(subtract(20, 5));
// console.log(subtractArrow(20, 5));

// Output: 15
// Explanation: Arrow function removes function keyword and return


// 6. NO PARAMETER FUNCTION

function greet() {
    return "Hello User!";
}

let greet = () => "Hello User!";

// console.log(greet());
// console.log(greet());

// Output: Hello User!
// Explanation: Arrow function directly returns value without return keyword



// 7. MULTI-LINE FUNCTION

function calculate(a, b) {
    let sum = a + b;
    let product = a * b;
    return sum + product;
}

let calculateArrow = (a, b) => {
    let sum = a + b;
    let product = a * b;
    return sum + product;
};

// console.log(calculate(3, 4));
// console.log(calculateArrow(3, 4));

// Output: 19
// Explanation: Arrow function needs braces and return for multiple lines



// 8. DEFAULT PARAMETER

function greetUser(name) {
    if (!name) {
        name = "Guest";
    }
    return "Hello " + name;
}

let greetUserArrow = (name = "Guest") => "Hello " + name;

// console.log(greetUser());
// console.log(greetUserArrow());

// Output: Hello Guest
// Explanation: Arrow function supports default parameters more cleanly



// 9. FUNCTION EXPRESSION vs ARROW

let normalFunction = function(a, b) {
    return a + b;
};

let arrowFunction = (a, b) => a + b;

// console.log(normalFunction(10, 10));
// console.log(arrowFunction(10, 10));

// Output: 20
// Explanation: Arrow function is modern replacement of function expressions



// - Arrow functions = shorter syntax
// - Normal functions = traditional way
// - Both behave same for basic logic
// - Arrow functions are best for simple one-line logic

