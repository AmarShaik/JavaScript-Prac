// LOOPS

// Loops are used when we want to execute the same block of code multiple times.
// Types of loops:
// 1. for loop
// 2. while loop
// 3. do while loop

// FOR LOOP

// for loop is used when we know how many times the loop should run.
// Syntax:
// for(initialization; condition; increment/decrement) {
//     code
// }

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// Explanation:
// i starts with 1
// Condition checks i <= 5
// After every iteration i increases by 1

// Output:
// 1
// 2
// 3
// 4
// 5

// Print numbers from 10 to 1

for(let i = 10; i >= 1; i--) {
    console.log(i);
}

// Explanation:
// Loop starts from 10
// Runs until i becomes 1
// i-- decreases value by 1 each time

// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Print even numbers

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }

}

// Output:
// 2
// 4
// 6
// 8
// 10


// Multiplication Table using prompt()

let num = Number(prompt("Enter a number"));
for(let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// If user enters:
// 5

// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Sum of first N numbers

let n = Number(prompt("Enter a number"));
let sum = 0;
for(let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);

// Explanation:
// Adds numbers from 1 to N

// If user enters:
// 5

// Output:
// 15

// Because:
// 1 + 2 + 3 + 4 + 5 = 15



// WHILE LOOP

// while loop is used when we do not know
// how many times the loop should run.

// Syntax:

// while(condition) {
//     code
// }

let countNum = 1;
while(countNum <= 5) {
    console.log(countNum);
    countNum++;
}

// Explanation:
// Condition is checked first
// Loop runs only while condition is true

// Output:
// 1
// 2
// 3
// 4
// 5

// User controlled example

let password = "";
while(password !== "admin") {
    password = prompt("Enter Password");
}
console.log("Login Successful");

// Explanation:
// Loop keeps running until user enters "admin"

// Output:
// Login Successful



// DO WHILE LOOP

// do while loop executes at least once
// before checking the condition.

// Syntax:

// do {
//     code
// } while(condition);

let x = 1;
do {
    console.log(x);
    x++;
} while(x <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5

// Difference between while and do while

let y = 10;
while(y < 5) {
    console.log("While Loop");
}

// Output:
// No Output

do {
    console.log("Do While Loop");
} while(y < 5);

// Output:
// Do While Loop

// Explanation:
// while checks condition first
// do while executes first and checks later



// BREAK

// break immediately stops the loop.

for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

// Explanation:
// When i becomes 5,
// loop terminates completely.

// Output:
// 1
// 2
// 3
// 4

// CONTINUE

// continue skips current iteration
// and moves to the next iteration.

for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;
    }
    console.log(i);
}

// Explanation:
// Iteration containing 3 is skipped

// Output:
// 1
// 2
// 4
// 5

// NESTED LOOPS

// A loop inside another loop
// is called a nested loop.

for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
        console.log("i =", i, "j =", j);
    }
}

// Explanation:
// Outer loop runs 3 times
// Inner loop runs completely for each outer iteration

// Output:
// i = 1 j = 1
// i = 1 j = 2
// i = 1 j = 3
// i = 2 j = 1
// i = 2 j = 2
// i = 2 j = 3
// i = 3 j = 1
// i = 3 j = 2
// i = 3 j = 3

// ARMSTRONG NUMBER

let numInput = prompt("Enter a number");
let armstrongSum = 0;
let temp = Number(numInput);
while(temp > 0) {
    let rem = temp % 10;
    armstrongSum += rem ** 3;
    temp = parseInt(temp / 10);
}
if(armstrongSum === Number(numInput)) {
    alert(numInput + " is an Armstrong number");
}
else {
    alert(numInput + " is not an Armstrong number");
}

// Explanation:
// Extract each digit
// Cube the digit
// Add all cubes
// Compare final sum with original number

// Example:
// 153

// 1³ + 5³ + 3³
// 1 + 125 + 27
// 153

// Output:
// 153 is an Armstrong number

// Example:
// 123

// 1³ + 2³ + 3³
// 1 + 8 + 27
// 36

// Output:
// 123 is not an Armstrong number


// INFINITE LOOP

// while(true) {
//     console.log("Running");
// }

// Avoid infinite loops unless intentionally needed.



// for...in and for...of

// These are ES6 loops used for iterating objects and arrays



// for...in loop
// Used to loop through KEYS (indexes in arrays, properties in objects)

let person = {
    name: "Amar",
    age: 22,
    city: "Hyderabad"
};

for(let key in person) {
    console.log(key);
}

// Output:
// name
// age
// city

// Explanation:
// Gives object property names (keys)



// Accessing values using for...in

for(let key in person) {
    console.log(key, person[key]);
}

// Output:
// name Amar
// age 22
// city Hyderabad

// Explanation:
// key = property name
// person[key] = value



// for...in with array (not recommended but possible)

let arr = [10, 20, 30];

for(let index in arr) {
    console.log(index, arr[index]);
}

// Output:
// 0 10
// 1 20
// 2 30

// Explanation:
// Gives index as string, not ideal for arrays



// for...of loop
// Used to loop through VALUES directly (arrays, strings, etc.)

let numbers = [10, 20, 30];

for(let value of numbers) {
    console.log(value);
}

// Output:
// 10
// 20
// 30

// Explanation:
// Directly gives values, cleaner than for loop



// for...of with string

let name = "Amar";

for(let char of name) {
    console.log(char);
}

// Output:
// A
// m
// a
// r

// Explanation:
// Iterates each character in string

// DIFFERENCE

// for...in → gives KEYS (object keys or array indexes)
// for...of → gives VALUES (array elements, string characters)

// SIMPLE RULE

// for...in  → think "INDEX / KEY"
// for...of  → think "VALUE"


// ARRAY METHOD: forEach()

// forEach() is an ARRAY METHOD used to iterate over elements
// It runs a function on each element of an array

// IMPORTANT:
// - It does NOT return a new array
// - It is used ONLY for looping/iteration
// - It behaves like a loop internally but is NOT a loop keyword

// BASIC EXAMPLE

let nums1 = [1, 2, 3, 4];
nums1.forEach(function(n) {
    console.log(n);
});

// Output:
// 1
// 2
// 3
// 4

// Explanation:
// forEach runs the function for each element in the array


// ARROW FUNCTION VERSION

let nums2 = [10, 20, 30];
nums2.forEach(n => {
    console.log(n);
});

// Output:
// 10
// 20
// 30

// Explanation:
// Arrow function makes syntax shorter and cleaner


// USING INDEX (SECOND PARAMETER)

let nums3 = [5, 10, 15];
nums3.forEach((value, index) => {
    console.log(index + " -> " + value);
});

// Output:
// 0 -> 5
// 1 -> 10
// 2 -> 15

// Explanation:
// forEach provides value, index, and array


// ORIGINAL ARRAY IS NOT CHANGED
let nums4 = [1, 2, 3];
nums4.forEach(n => {
    console.log(n * 2);
});

// Output:
// 2
// 4
// 6

console.log(nums4);

// Output:
// [1, 2, 3]

// Explanation:
// forEach does NOT modify or return a new array


// forEach vs MAP (IMPORTANT DIFFERENCE)

let arr = [1, 2, 3];

// forEach (NO RETURN VALUE)
let result1 = arr.forEach(n => n * 2);
console.log(result1);

// Output:
// undefined

// Explanation:
// forEach does NOT return anything



// map (RETURNS NEW ARRAY)
let result2 = arr.map(n => n * 2);
console.log(result2);

// Output:
// [2, 4, 6]

// Explanation:
// map transforms and returns a new array


// REAL USE CASE (PRINTING DATA)

let users = ["Amar", "Tony", "Steve"];
users.forEach(name => {
    console.log("Hello " + name);
});

// Output:
// Hello Amar
// Hello Tony
// Hello Steve

// Explanation:
// Used when you ONLY want to perform an action


// IMPORTANT LIMITATION

let nums5 = [1, 2, 3, 4];

nums5.forEach(n => {
    if (n === 3) {
        // break; ❌ NOT ALLOWED
        // continue; ❌ NOT ALLOWED
    }
});

// Explanation:
// forEach cannot stop or skip execution manually



// INTERNAL IDEA (HOW IT WORKS)

// It behaves like:

// for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
// }

// Explanation:
// forEach is basically a cleaner version of a for loop

// KEY POINTS

// ✔ forEach is an ARRAY METHOD (not a loop keyword)
// ✔ used for iteration only
// ✔ does NOT return anything (undefined)
// ✔ cannot use break or continue
// ✔ good for simple looping tasks
// ✔ map is better when transformation is needed