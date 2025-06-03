Day 9 – Array Methods

map, filter, reduce, forEach, find

Day 10 – DOM Manipulation (Browser Environment)

Selecting elements (getElementById, querySelector)

Changing content & styles, event listeners

Array Methods
1. map()
Use: Transform each element in an array and return a new array.

Example:


const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
2. filter()
Use: Return a new array with elements that pass a condition.

Example:


const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
3. reduce()
Use: Accumulate a single value from an array.

Example:


const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10
4. forEach()
Use: Execute a function for each array element (no return).

Example:


const fruits = ['apple', 'banana'];
fruits.forEach(fruit => console.log(fruit));
5. find()
Use: Return the first element that satisfies a condition.

Example:


const users = [{id: 1}, {id: 2}];
const user = users.find(u => u.id === 2); // {id: 2}

DOM Manipulation (Browser Environment)
1. Selecting Elements
getElementById()


const title = document.getElementById('main-title');
querySelector() / querySelectorAll()


const firstParagraph = document.querySelector('p');
const allButtons = document.querySelectorAll('.btn');
2. Changing Content & Styles
Change text or HTML:


element.textContent = "New Text";
element.innerHTML = "<strong>Bold Text</strong>";
Change styles:


element.style.color = "red";
element.style.backgroundColor = "#eee";
3. Event Listeners
Add click or input events:


button.addEventListener('click', () => {
  alert("Button clicked!");
});