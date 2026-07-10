//ARRAYS & ARRAY METHODS
// Arrays in JavaScript are used to store multiple values in a single variable
// Instead of creating many variables, we store everything in one structured list

let fruits = ["apple", "banana", "mango"];

// Each item in an array has an index (position)
// Index starts from 0

// fruits[0] → "apple"
// fruits[1] → "banana"
// fruits[2] → "mango"

console.log(fruits[0]); 
// Output: apple

console.log(fruits[2]); 
// Output: mango


// MIXED DATA TYPES IN ARRAY

let data = ["Amar", 21, true];
console.log(data);
// Output: ["Amar", 21, true]
// Explanation: Arrays can store different data types (string, number, boolean)


// CHANGING VALUES

let nums = [10, 20, 30];
nums[1] = 99;
console.log(nums);
// Output: [10, 99, 30]
// Explanation: Arrays are mutable (values can be changed)


// ARRAY LENGTH

let arr = [10, 20, 30, 40];
console.log(arr.length);
// Output: 4
// Explanation: .length gives number of elements in array



// ARRAY METHODS

// push() → add element at end\

let a1 = [1, 2, 3];
a1.push(4);
console.log(a1);
// Output: [1, 2, 3, 4]
// Explanation: Adds element at the end


// pop() → remove last element

let a2 = [1, 2, 3];
a2.pop();
console.log(a2);
// Output: [1, 2]
// Explanation: Removes last element



// shift() → remove first element

let a3 = [1, 2, 3];
a3.shift();
console.log(a3);
// Output: [2, 3]
// Explanation: Removes first element



// unshift() → add at start

let a4 = [1, 2, 3];
a4.unshift(0);
console.log(a4);
// Output: [0, 1, 2, 3]
// Explanation: Adds element at beginning


// indexOf() → find index

let a5 = [10, 20, 30];
console.log(a5.indexOf(20));
// Output: 1
// Explanation: Returns index of element



// includes() → check existence

let a6 = [10, 20, 30];
console.log(a6.includes(20));
// Output: true

console.log(a6.includes(50));
// Output: false
// Explanation: Checks whether element exists or not


// slice() → COPY PART OF ARRAY (IMPORTANT)

// slice does NOT change original array
// It returns a new array

let a8 = [10, 20, 30, 40, 50];
let part1 = a8.slice(1, 4);
console.log(part1);
// Output: [20, 30, 40]
// Explanation: Starts from index 1, ends before index 4


// Example 2: from start to end
let part2 = a8.slice(2);
console.log(part2);
// Output: [30, 40, 50]
// Explanation: Takes elements from index 2 to end


// Example 3: copy full array
let copy = a8.slice();

console.log(copy);
// Output: [10, 20, 30, 40, 50]
// Explanation: No arguments → full array copy


// Example 4: negative index
let part3 = a8.slice(-3);
console.log(part3);
// Output: [30, 40, 50]
// Explanation: Starts from 3rd last element



// QUICK SUMMARY

// Arrays:
// - store multiple values
// - index starts from 0
// - mutable (can change)

// Methods:
// push() → add end
// pop() → remove end
// shift() → remove start
// unshift() → add start
// indexOf() → find index
// includes() → check value
// slice() → copy part of array (does NOT change original)

// ARRAY METHOD: splice()

// splice() is used to MODIFY the original array
// It can: remove, add, or replace elements

// Syntax:
// array.splice(startIndex, deleteCount, item1, item2, ...)


// 1. REMOVE ELEMENTS

let arr1 = [10, 20, 30, 40, 50];
arr1.splice(2, 2);
// console.log(arr1);

// Output: [10, 20, 50]
// Explanation:
// Start at index 2 (30)
// Remove 2 elements → 30, 40 removed


// 2. REMOVE ONE ELEMENT

let arr2 = [10, 20, 30, 40];
arr2.splice(1, 1);
// console.log(arr2);

// Output: [10, 30, 40]
// Explanation:
// Removes only 1 element at index 1 (20)


// 3. ADD ELEMENTS (NO REMOVAL)

let arr3 = [10, 20, 50];
arr3.splice(2, 0, 30, 40);
// console.log(arr3);

// Output: [10, 20, 30, 40, 50]
// Explanation:
// At index 2, remove 0 elements
// Insert 30 and 40



// 4. REPLACE ELEMENTS

let arr4 = [10, 20, 30, 40];
arr4.splice(1, 2, 99, 100);
// console.log(arr4);

// Output: [10, 99, 100, 40]
// Explanation:
// Remove 20 and 30
// Replace them with 99 and 100



// 5. NEGATIVE INDEX (FROM END)

let arr5 = [10, 20, 30, 40];
arr5.splice(-2, 2);
// console.log(arr5);

// Output: [10, 20]
// Explanation:
// -2 means second last element (30)
// Removes last 2 elements → 30, 40


// KEY POINTS

// - splice() modifies original array
// - used for add/remove/replace
// - very powerful but changes data directly


// ARRAY METHOD: map()

// map() is used to TRANSFORM each element of an array
// It creates a NEW array and does NOT change the original array

// Think of it as:
// "Take each element → apply logic → return new array"



// 1. BASIC EXAMPLE (DOUBLES NUMBERS)

let nums1 = [1, 2, 3, 4];
let doubled = nums1.map(function(n) {
    return n * 2;
});
console.log(doubled);

// Output: [2, 4, 6, 8]
// Explanation: Each element is multiplied by 2



// 2. SAME USING ARROW FUNCTION

let nums2 = [1, 2, 3, 4];
let doubledArrow = nums2.map(n => n * 2);
console.log(doubledArrow);

// Output: [2, 4, 6, 8]
// Explanation: Arrow function makes code shorter and cleaner


// 3. CONVERT NUMBERS TO STRINGS

let nums3 = [10, 20, 30];
let stringArray = nums3.map(n => "Number: " + n);
console.log(stringArray);

// Output: ["Number: 10", "Number: 20", "Number: 30"]
// Explanation: Each number is converted into a string


// 4. SQUARE OF NUMBERS

let nums4 = [2, 3, 4, 5];
let squares = nums4.map(n => n * n);
console.log(squares);

// Output: [4, 9, 16, 25]
// Explanation: Each element is squared


// 5. ADD INDEX TO VALUE

let nums5 = [10, 20, 30];
let result = nums5.map((value, index) => {
    return value + index;
});
console.log(result);

// Output: [10, 21, 32]
// Explanation:
// 10 + 0 = 10
// 20 + 1 = 21
// 30 + 2 = 32


// 6. ORIGINAL ARRAY REMAINS SAME

let nums6 = [1, 2, 3];
let newArr = nums6.map(n => n * 10);
console.log(newArr);
// Output: [10, 20, 30]

console.log(nums6);
// Output: [1, 2, 3]

// Explanation: map() does NOT modify original array



// KEY POINTS
// - map() transforms each element
// - returns a NEW array
// - does NOT change original array 
// - uses function (normal or arrow)
// - best for converting or modifying data


// ARRAY METHOD: filter()

// filter() is used to SELECT elements from an array based on a condition
// It returns a NEW array
// It does NOT change the original array

// Think of it like:
// "Check each element → if true keep it → if false remove it"


// 1. BASIC EXAMPLE (GREATER THAN 10)

let nums1 = [5, 10, 15, 20, 25];
let result1 = nums1.filter(function(n) {
    return n > 10;
});
console.log(result1);

// Output: [15, 20, 25]
// Explanation: Only numbers greater than 10 are kept



// 2. ARROW FUNCTION VERSION

let nums2 = [5, 10, 15, 20, 25];
let result2 = nums2.filter(n => n > 10);
console.log(result2);

// Output: [15, 20, 25]
// Explanation: Same logic, cleaner syntax using arrow function



// 3. EVEN NUMBERS

let nums3 = [1, 2, 3, 4, 5, 6];
let even = nums3.filter(n => n % 2 === 0);
console.log(even);

// Output: [2, 4, 6]
// Explanation: Only numbers divisible by 2 are kept



// 4. ODD NUMBERS

let nums4 = [1, 2, 3, 4, 5, 6];
let odd = nums4.filter(n => n % 2 !== 0);
console.log(odd);

// Output: [1, 3, 5]
// Explanation: Only numbers not divisible by 2 are kept



// 5. FILTER STRINGS (REMOVE EMPTY VALUES)

let names = ["Amar", "", "Tony", "", "Stark"];
let cleanNames = names.filter(name => name !== "");
console.log(cleanNames);

// Output: ["Amar", "Tony", "Stark"]
// Explanation: Empty strings are removed



// 6. FILTER WITH LENGTH CONDITION

let words = ["hi", "hello", "world", "a", "javascript"];
let longWords = words.filter(word => word.length > 3);
console.log(longWords);

// Output: ["hello", "world", "javascript"]
// Explanation: Only words with length greater than 3 are kept



// 7. FILTER WITH INDEX (ADVANCED)

let nums5 = [10, 20, 30, 40, 50];
let evenIndex = nums5.filter((value, index) => index % 2 === 0);
console.log(evenIndex);

// Output: [10, 30, 50]
// Explanation: Keeps elements at even indexes



// 8. ORIGINAL ARRAY REMAINS SAME

let nums6 = [1, 2, 3, 4];
let filtered = nums6.filter(n => n > 2);
console.log(filtered);
// Output: [3, 4]

console.log(nums6);
// Output: [1, 2, 3, 4]

// Explanation: filter() does NOT modify original array


// KEY POINTS

// - filter() selects elements based on condition
// - returns NEW array
// - does NOT change original array
// - uses true/false logic inside function
// - used for searching, filtering, cleaning data


// ARRAY METHOD: reduce()

// reduce() is used to convert an array into a SINGLE VALUE
// That single value can be: number, string, object, etc.

// Think of it like:
// "Combine all elements step by step into one result"

// SYNTAX

// array.reduce(function(accumulator, currentValue, index, array) {
//     return result;
// }, initialValue);


// accumulator → stores result so far
// currentValue → current element
// initialValue → starting value


// 1. SUM OF NUMBERS

let nums1 = [1, 2, 3, 4];
let sum = nums1.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(sum);

// Output: 10
// Explanation:
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10


// 2. ARROW FUNCTION VERSION

let nums2 = [1, 2, 3, 4];
let sumArrow = nums2.reduce((acc, curr) => acc + curr, 0);
console.log(sumArrow);

// Output: 10
// Explanation: same logic, shorter syntax


// 3. PRODUCT OF NUMBERS

let nums3 = [1, 2, 3, 4];
let product = nums3.reduce((acc, curr) => acc * curr, 1);
console.log(product);

// Output: 24
// Explanation: multiplies all numbers together


// 4. FIND MAX VALUE

let nums4 = [10, 5, 20, 8];
let max = nums4.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, nums4[0]);
console.log(max);

// Output: 20
// Explanation: keeps updating highest value


// 5. COUNT OCCURRENCES (OBJECT RESULT)

let fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];
let count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(count);

// Output: { apple: 3, banana: 2, mango: 1 }
// Explanation: builds an object with frequency count


// 6. SUM OF EVEN NUMBERS ONLY

let nums5 = [1, 2, 3, 4, 5, 6];
let evenSum = nums5.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        return acc + curr;
    }
    return acc;
}, 0);
console.log(evenSum);

// Output: 12
// Explanation: 2 + 4 + 6 = 12

// 7. ORIGINAL ARRAY REMAINS SAME

let nums6 = [1, 2, 3];
let total = nums6.reduce((acc, curr) => acc + curr, 0);
console.log(total);
// Output: 6
console.log(nums6);
// Output: [1, 2, 3]
// Explanation: reduce() does NOT modify original array

// 8. SUM WITHOUT initialValue (IMPORTANT CASE)
let nums1 = [1, 2, 3, 4];
let sum1 = nums1.reduce((acc, curr) => acc + curr);
console.log(sum1);

// Output: 10
// Explanation:
// No initial value given
// acc starts from first element (1)

// 9. FLATTEN ARRAY (2D → 1D)

let arr1 = [[1, 2], [3, 4], [5, 6]];
let flat = arr1.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);
console.log(flat);

// Output: [1, 2, 3, 4, 5, 6]
// Explanation:
// Combines all sub-arrays into single array

// 10. FIND MINIMUM VALUE

let nums2 = [10, 5, 20, 3, 8];
let min = nums2.reduce((acc, curr) => {
    return curr < acc ? curr : acc;
});
console.log(min);

// Output: 3
// Explanation:
// Keeps updating smallest value

// 11. REVERSE STRING USING REDUCE

let str = "hello";
let reversed = str.split("").reduce((acc, curr) => {
    return curr + acc;
}, "");
console.log(reversed);

// Output: "olleh"
// Explanation:
// Each character is added before accumulator


// COMPARISON: map vs filter vs reduce

// map():
// - transforms each element
// - returns same length array

// filter():
// - selects elements based on condition
// - returns smaller/equal array

// reduce():
// - combines all elements into one value
// - returns single result