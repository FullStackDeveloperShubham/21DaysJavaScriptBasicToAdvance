🚀 Week 3: Advanced JavaScript (Days 15–21)
Day 15 – Higher-Order Functions & Callbacks

Functions as arguments & return values

Practical use cases


Day 15 – Higher-Order Functions & Callbacks
🔹 What Are Higher-Order Functions?
A Higher-Order Function (HOF) is a function that:

Takes another function as an argument OR

Returns another function.


function greet(name) {
  return `Hello, ${name}`;
}

function processUserInput(callback) {
  const name = "Shubham";
  console.log(callback(name));
}

processUserInput(greet); // Output: Hello, Shubham

Callbacks
A callback is a function passed as an argument to another function, to be called later.


function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded!");
  }, 1000);
}

fetchData((message) => {
  console.log(message); // Output after 1s: Data loaded!
});

Practical Use Cases of HOFs & Callbacks
✅ Array methods:

map, filter, reduce, forEach, etc., all use callbacks.


const nums = [1, 2, 3];
const squared = nums.map(num => num * num); // [1, 4, 9]
✅ Event Handling:


document.getElementById("btn").addEventListener("click", () => {
  console.log("Button clicked!");
});
✅ Asynchronous Code:


setTimeout(() => {
  console.log("Async operation done.");
}, 1000);
✅ Custom HOF Example:


function calculator(operation) {
  return function (a, b) {
    return operation(a, b);
  };
}

const add = calculator((x, y) => x + y);
console.log(add(5, 3)); // 8