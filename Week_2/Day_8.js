Day 8 – Objects & Object Manipulation

Properties, methods, this keyword

Object destructuring (ES6)

1. Objects in JavaScript
An object is a collection of key-value pairs, where keys are strings (or Symbols), and values can be anything (functions, primitives, or other objects).


const person = {
  name: "Shubham",
  age: 24,
  greet: function() {
    console.log("Hello!");
  }
};

2. Properties & Methods
Properties: variables inside an object.

Methods: functions inside an object.


const car = {
  brand: "Toyota",     // Property
  start: function() {  // Method
    console.log("Engine started");
  }
};
car.brand;     // Accessing property → "Toyota"
car.start();   // Calling method → "Engine started"

3. The this Keyword
this refers to the object calling the method.


const user = {
  username: "shubham",
  showName: function() {
    console.log(this.username);
  }
};

user.showName();  // "shubham"

Arrow functions don’t bind their own this:


const user = {
  username: "shubham",
  showName: () => {
    console.log(this.username); //  undefined
  }
};

4. Object Destructuring (ES6)
Extract properties from objects into variables easily.


const user = {
  name: "Shubham",
  age: 25,
  country: "India"
};

const { name, age } = user;

console.log(name); // "Shubham"
console.log(age);  // 25

Rename during destructuring:

const { name: userName } = user;
console.log(userName); // "Shubham"

Nested Destructuring:

const person = {
  name: "Sam",
  address: {
    city: "Delhi",
    zip: 110001
  }
};

const { address: { city } } = person;
console.log(city); // "Delhi"