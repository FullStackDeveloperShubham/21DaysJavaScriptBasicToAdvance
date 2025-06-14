Day 20 – Modules (ES6)

import / export

Using modules in projects (with bundlers or native support)

What I Learned Today:
🔹 1. What are ES6 Modules?
Modules in ES6 allow you to split your code into reusable pieces. This improves code organization, maintainability, and reusability.

2. export – Making Values Available
You can export variables, functions, or classes from one file to use in another.


// file: mathUtils.js
export const add = (a, b) => a + b;
export const PI = 3.14159;
You can also export all at once:


// file: mathUtils.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
export { add, subtract };
Or use a default export:


// file: logger.js
export default function log(message) {
  console.log(message);
}

3. import – Using Values from Other Modules

// file: main.js
import { add, PI } from './mathUtils.js';
import log from './logger.js';

console.log(add(2, 3)); // 5
log(PI); // 3.14159
🧠 Note:
When importing default exports, you can name them anything.

Always use the .js extension in browser-native ES modules.


4. Using Modules in Real Projects
🧪 1. Browser (Native Support)
Modern browsers support ES modules natively with type="module":


<script type="module" src="main.js"></script>
You can now use import and export directly in your JS files.
