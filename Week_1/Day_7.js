Day 7 – Arrays Basics

Creating arrays, accessing elements

Common methods: push, pop, shift, unshift, splice, slice


Creating Arrays

const fruits = ['apple', 'banana', 'cherry'];  
const numbers = new Array(1, 2, 3); 

Accessing Elements

console.log(fruits[0]);    
console.log(fruits[2]);    

Common Array Methods
➤ push()
Adds item(s) to the end.


fruits.push('date');
➤ pop()
Removes item from the end.


fruits.pop();
➤ unshift()
Adds item(s) to the beginning.


fruits.unshift('mango');
➤ shift()
Removes item from the beginning.


fruits.shift();

splice(start, deleteCount, item1, item2, …)
Removes or replaces elements, or adds new ones in place.


fruits.splice(1, 1);              
fruits.splice(1, 0, 'kiwi');      
fruits.splice(2, 1, 'pear');     

slice(start, end)
Returns a shallow copy of a portion of the array (end not included).

const someFruits = fruits.slice(0, 2);  