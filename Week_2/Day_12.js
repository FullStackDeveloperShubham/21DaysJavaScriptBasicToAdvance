Day 12 – ES6+ Features

Template literals, spread/rest, default parameters

Destructuring, shorthand syntax

Template Literals


const name = "Shubham";
console.log(`Hello, ${name}!`);

Spread & Rest Operators


const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // Spread

function sum(...nums) {       // Rest
  return nums.reduce((a, b) => a + b, 0);
}

Default Parameters


function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

Destructuring


const user = { name: "Shubham", age: 22 };
const { name, age } = user;

Shorthand Syntax


const name = "Shubham";
const user = { name }; // Instead of { name: name }