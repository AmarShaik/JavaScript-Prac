// Conditional statements are used to make decisions in a program.

//conditional statements

//eligible to vote or not

var age = prompt("Enter your age")
if(age>=18){
   alert("You are eligible to vote")
}
else if(age>0 && age<18){
   alert("You are not eligible to vote")
}
else{
   alert("Enter proper age")
}

// leap year or not

var year = prompt("Enter a year")
if((year%4==0 && year%100!=0) || (year%400==0)){
   alert(year + " is a leap year")
}
else{
   alert(year + " is not a leap year")
}

// student pass or not

var marks = prompt("Enter your marks")
if(marks>=90 && marks<=100){
   alert("A - Grade")
}
else if(marks>=80 && marks<90){
   alert("B - Grade")
}
else if(marks>=70 && marks<80){
   alert("C - Grade")
}
else if(marks>=60 && marks<70){
   alert("D - Grade")
}
else if(marks>=50 && marks<60){
   alert("E - Grade")
}
else if(marks>=0 && marks<50){
   alert("Fail")
}
else{
   alert("Enter proper marks")
}


//TERNARY OPERATOR

// Short form of if else

// Syntax:
// condition ? value_if_true : value_if_false;



// Example 1

let age3 = 20;
let result = age3 >= 18
    ? "Adult"
    : "Minor";
console.log(result);

// Output:
// Adult

// Same example using if else

if (age3 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}



// Example 2

let number = 7;
let output = number % 2 === 0
    ? "Even": "Odd";
console.log(output);

// Output:
// Odd



// Example 3

let isLoggedIn = true;
let message = isLoggedIn
    ? "Welcome User"
    : "Please Login";
console.log(message);



// Ternary Operator inside console.log()

let age4 = 25;
console.log(
    age4 >= 18
    ? "Eligible"
    : "Not Eligible"
);



// NESTED TERNARY OPERATOR

// One ternary inside another ternary

let marks2 = 95;
let grade =
    marks2 >= 90 ? "A+" :
    marks2 >= 75 ? "A" :
    marks2 >= 60 ? "B" :
    "Fail";
console.log(grade);

// Output:
// A+



// Another example

let num2 = 0;
let result2 =
    num2 > 0 ? "Positive" :
    num2 < 0 ? "Negative" :
    "Zero";
console.log(result2);

// Output:
// Zero

// SWITCH STATEMENT

// Used when checking multiple values of same variable

// Syntax

/*
switch(variable) {

    case value1:
        code;
        break;

    case value2:
        code;
        break;

    default:
        code;
}
*/

// Example 1

let dayNumber = 1;
switch(dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}

// Output:
// Monday


// Example 2

let color = "red";
switch(color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Unknown Color");
}

// Output:
// Stop

// switch vs if else

// Use switch when checking one variable
// against many fixed values.

// Use if else when checking ranges, comparisons, or multiple conditions.