Day 13 – Scope & Hoisting

Global, function, block scope

Hoisting, TDZ (Temporal Dead Zone)

Scope in JavaScript
Scope determines where variables can be accessed in your code.

1. Global Scope
Variables declared outside any function or block.

Accessible everywhere in the code.


let globalVar = "I'm global";

function showVar() {
  console.log(globalVar); // Accessible here
}

2. Function Scope
Variables declared with var, let, or const inside a function are only accessible inside that function.


function example() {
  let localVar = "I'm local";
  console.log(localVar); // OK
}
console.log(localVar); // ❌ Error: not defined

3. Block Scope
Variables declared with let or const inside {} (like in if, for, while, or {} block) are only accessible inside that block.


if (true) {
  let blockVar = "I'm block scoped";
}
console.log(blockVar); // ❌ Error

Hoisting
JavaScript "hoists" (lifts) declarations to the top of the scope.

1. Variable Hoisting

console.log(a); // undefined
var a = 5;

2. Function Hoisting

greet(); // ✅ Works

function greet() {
  console.log("Hello!");
}

unction expressions are not:


greet(); // ❌ TypeError: greet is not a function

var greet = function() {
  console.log("Hi");
};