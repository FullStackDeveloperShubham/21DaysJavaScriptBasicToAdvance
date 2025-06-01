Day 5 – Loops

for, while, do...while, for...of, for...in

Loop control: break, continue

1. for Loop

Used when the number of iterations is known.


for (let i = 0; i < 5; i++) {
  console.log(i);
}

2. while Loop

Executes code as long as the condition is true.


let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

3. do...while Loop
Always runs at least once, then continues if the condition is true.


let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

4. for...of Loop
Used to iterate over iterable objects (arrays, strings, etc.)


const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

5. for...in Loop
Used to iterate over enumerable properties (keys) of an object.


const person = { name: "Alice", age: 25 };
for (const key in person) {
  console.log(key, person[key]);
}

Loop Control Statements
1. break
Exits the loop early.


for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2
}

2. continue
Skips the current iteration.


for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}