
/*
1. FUNCTIONS

A function is a reusable block of code.

Syntax:
*/

function sayHello() {
  console.log("Hello");
}

sayHello();

/*
Output:
Hello
*/


/*
2. FUNCTION EXPRESSIONS

A function can be stored inside a variable.
*/

const greet = function () {
  console.log("Hi");
};

greet();

/*
Output:
Hi
*/


/*
3. ARROW FUNCTIONS

Shorter syntax for writing functions.
*/

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

// Short arrow function
const addShort = (a, b) => a + b;

console.log(addShort(2, 3));

/*
Output:
5
*/


/*
4. PARAMETERS & ARGUMENTS

Parameters:
Variables defined in the function declaration.

Arguments:
Values passed when calling the function.
*/

function greetUser(name) {
  console.log("Hello " + name);
}

greetUser("John");

/*
Parameter: name
Argument: "John"

Output:
Hello John
*/


/*
5. RETURN VALUES

return sends a value back from the function.
*/

function multiply(a, b) {
  return a * b;
}

const result = multiply(4, 5);

console.log(result);

/*
Output:
20
*/


/*

6. CALLBACK FUNCTIONS

A callback is a function passed as an argument
to another function.
*/

function sayHi() {
  console.log("Hi");
}

function execute(callback) {
  callback();
}

execute(sayHi);

/*
Output:
Hi
*/


/*
Callback example with setTimeout
*/

function showMessage() {
  console.log("Message after 2 seconds");
}

setTimeout(showMessage, 2000);

/*
Output after 2 seconds:
Message after 2 seconds
*/


/*
SUMMARY

Function:
Reusable block of code.

Function Expression:
Function stored in a variable.

Arrow Function:
Short syntax for functions.

Parameter:
Variable inside function definition.

Argument:
Actual value passed to function.

Return:
Sends value back from function.

Callback:
Function passed into another function.
*/