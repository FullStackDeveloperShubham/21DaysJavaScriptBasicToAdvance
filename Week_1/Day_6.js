Day 6 – Functions

Function declarations & expressions

Parameters, return values

Arrow functions (ES6)

Function Declarations
These are the traditional way to define functions.


function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Shubham")); // Hello, Shubham!

Function Expressions
You assign a function to a variable.


const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Shubham")); // Hello, Shubham!

Parameters & Return Values
Parameters:
Values a function expects.


function add(a, b) {
  return a + b;
}

Return values:
What the function gives back.


let result = add(2, 3);
console.log(result); // 5

Arrow Functions (ES6)
A shorter syntax for writing functions.


const greet = (name) => {
  return `Hi, ${name}!`;
};
Shorthand (if only one expression):

const greet = name => `Hi, ${name}!`;
console.log(greet("Shubham")); // Hi, Shubham!