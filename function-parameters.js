//REST PARAMETERS

// Rest parameter collects multiple values into a single array.

Syntax:

function name(...parameter) {}

// Example 1


function showNumbers(...numbers) {
    console.log(numbers);
}
showNumbers(1, 2, 3, 4);


// Output: [1,2,3,4]



// Example 2


function addAll(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    console.log(sum);
}
addAll(10, 20, 30);

/*
Output:

60
*/

// Example 3

function showStudents(...students) {
    console.log(students);
}
showStudents(
    "Amar",
    "John",
    "David"
);

/*
Output:

["Amar","John","David"]



// 3. HIGHER ORDER FUNCTIONS

Definition:

A function that:

1. Accepts another function
OR
2. Returns another function

*/

// Example 1: Function as argument


function greetUser() {
    console.log("Hello User");
}
function execute(fn) {
    fn();
}
execute(greetUser);

/*
Output:

Hello User
*/

// Example 2 Another callback example

function sayHi() {
    console.log("Hi");
}
function runTask(task) {
    task();
}

runTask(sayHi);

/*
Output:

Hi
*/

//Example 3 Returning a function

function outerFunction() {
    return function () {
        console.log("Returned Function");
    };
}
let returned = outerFunction();
returned();


// Output: Returned Function


// Real-world example


setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);

/*
Output after 2 seconds:
Executed after 2 seconds
*/



// 4. RECURSION
/* Definition: A function calling itself.

Important:
Every recursive function must have a base condition.

*/

// Example 1 Countdown

function countdown(num) {
    if (num === 0) {
        return;
    }
    console.log(num);
    countdown(num - 1);
}
countdown(5);

/*
Output:
5
4
3
2
1
*/


// Example 2 Factorial 5! = 5×4×3×2×1 = 120


function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

/*
Output: 120

// Example 3 Sum of numbers


function sum(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum(n - 1);
}
console.log(sum(5));

/*
Output:
15

5+4+3+2+1
*/


// 5. CLOSURES

/*
Definition: A closure allows a function to remember variables from its outer function even
after the outer function finishes execution.
*/

// Example 1 Basic Closure

function outer() {
    let name = "Amar";
    function inner() {
        console.log(name);
    }
    return inner;
}
let result = outer();
result();

// Output: Amar 

// Example 2 Counter

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
let increment = counter();
increment();
increment();
increment();

/*
Output:

1
2
3
*/

// Example 3 Bank Account

function bankAccount() {
    let balance = 1000;
    return function () {
        console.log(balance);
    };
}
let checkBalance = bankAccount();
checkBalance();


// Output: 1000

// forEach()

/*Definition:

forEach() is an array method that executes a
function once for every element in the array.

Think of it as:

"Go through every item one by one and do something."

Syntax:

array.forEach(function(item) {
    // code
});

OR

array.forEach((item) => {
    // code
});

*/

// EXAMPLE 1
// Print Every Element

let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

/*
Output:
Apple
Banana
Mango
*/


//EXAMPLE 2
//Using Arrow Function

let colors = ["Red", "Green", "Blue"];
colors.forEach((color) => {
    console.log(color);
});

/*
Output:

Red
Green
Blue
*/


// EXAMPLE 3
// Accessing Index

let animals = ["Dog", "Cat", "Tiger"];
animals.forEach((animal, index) => {
    console.log(index, animal);
});

/*
Output:

0 Dog
1 Cat
2 Tiger
*/


// EXAMPLE 4
// Multiply Numbers

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log(num * 2);
});


/*
Output:
2
4
6
8
10
*/


// EXAMPLE 5
// Calculate Sum

let marks = [80, 90, 70];
let totalMarks = 0;
marks.forEach((mark) => {
    totalMarks += mark;
});

console.log("Total Marks:", totalMarks);

/*
Output:

Total Marks: 240
*/

// EXAMPLE 6
// Array of Objects


let students = [
    { name: "Amar", age: 22 },
    { name: "John", age: 20 },
    { name: "David", age: 21 }
];
students.forEach((student) => {
    console.log(student.name);
});

/*
Output:

Amar
John
David
*/


// EXAMPLE 7
// Greeting Users


let users = ["Amar", "John", "David"];
users.forEach((user) => {
    console.log(`Welcome ${user}`);
});

/*
Output:

Welcome Amar
Welcome John
Welcome David
*/

/*
IMPORTANT NOTE
forEach() DOES NOT return a new array.

Example:
*/

let nums = [1, 2, 3];
let result = nums.forEach((num) => {
    return num * 2;
});
console.log(result);

/*
Output: undefined

Reason:

forEach() is meant for executing actions,
not creating new arrays.

For creating new arrays use map().
*/

/*
forEach() vs for Loop
*/

// Original for loop

let fruitsList = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruitsList.length; i++) {
    console.log(fruitsList[i]);
}

// Same using forEach

fruitsList.forEach((fruit) => {
    console.log(fruit);
});

/*
Output:

Apple
Banana
Mango

*/ 