// OBJECTS + "this" KEYWORD 

// 1. BASIC OBJECT

let user = {
    name: "Steve",
    age: 25
};
console.log(user.name);

// Output: Steve
// Explanation:
// Objects store data in key-value pairs


// 2. OBJECT METHOD USING "this"

let user1 = {
    name: "Amar",
    greet: function() {
        console.log("Hello " + this.name);
    }
};
user1.greet();

// Output: Hello Amar
// Explanation:
// "this" refers to the object calling the function (user1)


// 3. WHY USE "this" INSTEAD OF DIRECT OBJECT NAME?

// 1. Reusability (MOST IMPORTANT REASON)

//  Without "this" (BAD APPROACH)

let user1 = {
    name: "Amar",
    greet: function() {
        console.log("Hello " + user1.name);
    }
};

let user2 = {
    name: "Steve",
    greet: function() {
        console.log("Hello " + user2.name);
    }
};

user1.greet();
user2.greet();

// Output:
// Hello Amar
// Hello Steve

//  Problem:
// - repeating same logic
// - hardcoding object names (user1, user2)
// - NOT reusable function



// With "this" (GOOD APPROACH)

let user3 = {
    name: "Amar",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

let user4 = {
    name: "Steve",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

user3.greet();
user4.greet();

// Output:
// Hello Amar
// Hello Steve

//  Why this is better:
// - same function works for all objects
// - no code change needed per object
// - "this" automatically refers to caller


// 4. SCALABILITY (REAL WORLD BENEFIT)

// Imagine 100 users:

//  Without "this":
// - you must write 100 different object-specific references inside functions
// - very hard to maintain

//  With "this":
// - one function works for all 100 objects
// - scalable and clean architecture


// 5. DYNAMIC BEHAVIOR (VERY IMPORTANT)

function showName() {
    console.log(this.name);
}

let a = { name: "Amar", show: showName };
let b = { name: "Steve", show: showName };

a.show(); // Amar
b.show(); // Steve

// Output:
// Amar
// Steve

// Explanation:
// Same function
// Different output based on WHO calls it
// "this" is dynamic


// 6. WHY NOT DIRECT OBJECT NAME?

// Problem 1: Hardcoded

let userA = {
    name: "Amar",
    greet: function() {
        console.log("Hello " + userA.name);
    }
};

// This works only for userA
// NOT reusable


// Problem 2: Tight coupling
// Function becomes tied to one object name
// If object name changes → function breaks


// Problem 3: Breaks DRY principle
// (Don’t Repeat Yourself)



// 7. NORMAL OBJECT EXAMPLE (GOOD PRACTICE)

let userB = {
    name: "Steve",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

let userC = {
    name: "Stark",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

userB.greet();
userC.greet();

// Output:
// Hello Steve
// Hello Stark


// 8. NORMAL FUNCTION "this" (GLOBAL CASE)

function testThis() {
    console.log(this);
}

testThis();

// Output:
// window (browser) OR undefined (strict mode)

// Explanation:
// No object is calling function
// so "this" refers to global context



// 9. ARROW FUNCTION INSIDE OBJECT

let userD = {
    name: "Amar",
    greet: () => {
        console.log(this.name);
    }
};

userD.greet();

// Output:
// undefined

// Explanation:
// Arrow function has NO own "this"
// it inherits from outer scope (global)


// 11. NESTED FUNCTION PROBLEM

let userE = {
    name: "Amar",
    show: function() {
        function inner() {
            console.log(this.name);
        }
        inner();
    }
};

userE.show();

// Output:
// undefined

// Explanation:
// inner() is normal function
// but NOT called by object


// 12. FIX USING ARROW FUNCTION

let userF = {
    name: "Amar",
    show: function() {
        let inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
userF.show();

// Output:
// Amar

// Explanation:
// Arrow function inherits "this" from show()
// show() → userF → so this = userF


// 13. FINAL SUMMARY

// WHY USE "this"?

// ✔ Reusability → same function for multiple objects
// ✔ Scalability → works for large systems
// ✔ Dynamic behavior → changes based on caller
// ✔ Clean code → avoids repetition
// ✔ Better design → avoids hardcoding object names

// KEY IDEA:
// "this = who is calling the function"