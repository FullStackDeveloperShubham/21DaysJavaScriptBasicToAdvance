21 Prototypes and InheritanceWhat is a Prototype?

In JavaScript, every object has a hidden internal property called [[Prototype]], which refers to another object. This is used for inheritance.

You can access it via Object.getPrototypeOf(obj) or obj.__proto__

This forms a prototype chain


const obj = {};
console.log(obj.__proto__); // Points to Object.prototype

Why Use Prototypes?
JavaScript is not class-based (like Java or C++) at its core. Instead, it uses prototypal inheritance:

"If an object doesn’t have a property, JS looks up the prototype chain."

Example:


const animal = {
  eats: true
};

const rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

console.log(rabbit.eats);  // true (inherited)
console.log(rabbit.jumps); // true (own property)

The Prototype Chain
The lookup follows this chain:


rabbit → animal → Object.prototype → null
When you access rabbit.eats:

JS looks in rabbit

Not found? Looks in rabbit.__proto__ (i.e., animal)

If not in animal, goes to animal.__proto__, and so on...



Creating Inheritance with Object.create()
This is the cleanest way to set up inheritance:


const animal = {
  eats: true
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true

Function Constructors and Prototypes

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const user = new Person("Shubham");
user.sayHello(); // Hi, I'm Shubham
🧠 Internally:

user.__proto__ === Person.prototype

Person.prototype.constructor === Person

ES6 Classes (syntactic sugar)
Behind the scenes, ES6 classes still use prototypes.


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound
🧠 Internally:

Animal.prototype.speak is shared

dog.__proto__ === Animal.prototype

Inheriting Classes (extends keyword)

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const pet = new Dog();
pet.speak(); // Animal speaks
pet.bark();  // Woof!
🧠 Prototype chain:


pet → Dog.prototype → Animal.prototype → Object.prototype

Key Takeaways
JS uses prototypal inheritance, not classical.

Every object has a [[Prototype]], accessible as __proto__.

Functions have a prototype property that determines the prototype of instances created via new.

ES6 classes make prototypal inheritance easier to use and read.
