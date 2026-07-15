// String -> Number

let num1 = "100";
console.log(typeof num1);
let convertedNum = Number(num1);
console.log(convertedNum);
console.log(typeof convertedNum);


// String -> Integer using parseInt()

let value1 = "150";
let result1 = parseInt(value1);
console.log(result1);
console.log(typeof result1);

// parseInt removes decimal part
console.log(parseInt("99.99")); // 99
console.log(parseInt("100px")); // 100
console.log(parseInt("abc")); // NaN


// String -> Decimal using parseFloat()

let value2 = "99.99";
let result2 = parseFloat(value2);
console.log(result2);
console.log(typeof result2);



// Number -> String

let marks = 95;
let marksString = String(marks);
console.log(marksString);
console.log(typeof marksString);



// JSON.stringify()

// Converts object into JSON string

let student = {
    name: "Amar",
    age: 22
};
let jsonData = JSON.stringify(student);
console.log(jsonData);
console.log(typeof jsonData);

// Output:
// {"name":"Amar","age":22}



// JSON.parse()

// Converts JSON string back into object

let objectData = JSON.parse(jsonData);
console.log(objectData);
console.log(typeof objectData);  // object

// PROMPT()

// prompt() is used to take input from user

let username = prompt("Enter your name");
console.log(username);  //String


// Everything from prompt() comes as STRING

let ageInput = prompt("Enter age");
console.log(ageInput);
console.log(typeof ageInput);

// Even if user enters:
// 25

// Output:
// string



// Convert Prompt Input to Number

let age2 = Number(prompt("Enter age"));
console.log(age2);
console.log(typeof age2);  // number

// Number("25")      // 25
// Number("25.5")    // 25.5
// Number("25abc")   // NaN
// Number("abc25")   // NaN
// Number("")        // 0

// Using parseInt()

let age3 = parseInt(prompt("Enter age"));
console.log(age3);
console.log(typeof age3);  // Integer conversion

// parseInt("25")      // 25
// parseInt("25.5")    // 25
// parseInt("25abc")   // 25
// parseInt("abc25")   // NaN
// parseInt("")        // NaN

// Using parseFloat()

let salary = parseFloat(prompt("Enter salary"));
console.log(salary);
console.log(typeof salary);  // Decimal conversion

// parseFloat("25.5")      // 25.5
// parseFloat("25.5abc")   // 25.5
// parseFloat("25")        // 25
// parseFloat("abc25.5")   // NaN
// parseFloat("")          // NaN

// Invalid Input Example

let test = Number(prompt("Enter number"));
console.log(test);
// If user enters:
// abc

// Output:
// NaN

// NaN = Not a Number


// confirm()
// Returns true or false

let answer = confirm("Are you sure?");
console.log(answer);
console.log(typeof answer);  // boolean


// alert()
// Displays popup message
alert("Welcome to JavaScript");

console.log(1 + 2);  // 3 - Number
console.log("1" + "2");  // 12 - String 
console.log("1" + 2);  // 12 - String 
console.log(1 + "2");  // 12 - String 
console.log("1" + 2 + 3);  // 123 - String
console.log(1 + 2 + "3");  // 33 - String 

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);