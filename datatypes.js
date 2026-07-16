var c = 30;
var d = 40;
console.log(c+d);  // 70 - Number

var d=20.9;
console.log(d)
console.log(typeof d) // Number

var e="amar";
console.log(e)
console.log(typeof e)  //String

var f=true;
console.log(f)
console.log(typeof f) // Boolean

var g;
console.log(g)
console.log(typeof g) // Undefined - empty

var h=null;
console.log(h)
console.log(typeof h) //null - object

var i=202255947561056126464151206584166641n;
console.log(i)
console.log(typeof i) //  BigInt

let complex={
   real: 10,
   imaginary: 20
}

console.log(real + imaginary); // not a concept in js


let age = prompt("Enter age: ");
console.log(typeof age);  //25 - Not a Number, to convert string we use - Number(prompt())